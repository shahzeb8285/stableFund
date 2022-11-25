import CONFIG from "./config";

import { JsonRpcProvider, StaticJsonRpcProvider } from "@ethersproject/providers"
import { getRPC } from "@/Utils/Crypto/Transactions";
import { Contract, Provider as MCProvider } from 'ethers-multicall';
import CoinStakingABI from "./CoinStakingABI.json"
import TokenStakingABI from "./TokenStakingABI.json"
import IERC20ABI from "./IERC20.json"



const getInvestmentById = async (invId, contract, provider, userAddress) => {

    const depositInfoCall = contract.deposits(userAddress, invId);
    const pendingRewardCall = contract.pendingReward(userAddress, invId);
    let [depositInfo, pendingReward,] = await provider.all([
        depositInfoCall
        , pendingRewardCall,

    ]);


    const investment = {
        id: invId,
        amount: depositInfo.toString(),
        timestamp: depositInfo.timestamp.toString(),
        rewardWithdrawn: depositInfo.rewardWithdrawn.toString(),
        isFinished: depositInfo.isFinished,
        nextRewardWithdrawTime: depositInfo.nextRewardWithdrawTime.toString(),
        pendingRewards: pendingReward.toString()

    }

    return investment;
}

const getStakingCoinBalanceAndAllowance = async (info, userWallet, ethcallProvider) => {
    const isCoin = info.stakingToken.address === "0x0000000000000000000000000000000000000000"
    let balance = 0;
    let allowance = 0;

    if (isCoin) {

        const balanceCall = ethcallProvider.getEthBalance(userWallet)
        let [_balance] = await ethcallProvider.all([balanceCall])
        balance = _balance.toString()
        // [balance] = await ethcallProvider.all([balanceCall]);

    } else {
        const contract = new Contract(info.stakingToken.address, IERC20ABI);
        const balanceCall = contract.balanceOf(userWallet)
        const allowanceCall = ethcallProvider.allowance(userWallet, info.contract)
        let [_balance, _allowance] = await ethcallProvider.all([balanceCall, allowanceCall]);
        balance = _balance.toString()
        allowance = _allowance.toString()
    }

    return {
        balance:Number(balance/10**info.stakingToken.decimals),
        allowance
    }
}
const loadSingleData = async (info, userWallet) => {

    const provider = new JsonRpcProvider(getRPC(info.chainID));

    const ethcallProvider = new MCProvider(provider, info.chainID);

    const ABI = info.isCoin ? CoinStakingABI : TokenStakingABI;

    const contract = new Contract(info.contract, ABI);

    const totalDepositedCall = contract.totalDeposited();
    const isPausedCall = contract.paused();
    const referrersCountsCall = contract.referralsCount(userWallet);
    const joiningComissionCall = contract.joiningComission(userWallet);
    const totalInvestmentCountsCall = contract.depositLength(userWallet)
    let [tvl, isPaused, totalReferrers, totalJoiningComissionEarnt, totalInvestmentCounts] = await ethcallProvider.all([totalDepositedCall
        , isPausedCall,
        referrersCountsCall,
        joiningComissionCall,
        totalInvestmentCountsCall
    ]);

    tvl = tvl.toString();
    totalReferrers = totalReferrers.toString()
    totalJoiningComissionEarnt = totalJoiningComissionEarnt.toString()
    totalInvestmentCounts = totalInvestmentCounts.toString()


    const investments = []

    for (let i = 0; i < totalInvestmentCounts; i++) {
        const investment = await getInvestmentById(i, contract, ethcallProvider, userWallet)
        investments.push(investment)
    }



    const { balance, allowance } = await getStakingCoinBalanceAndAllowance(info, userWallet, ethcallProvider)

    const response = {
        ...info,
        isPaused,
        tvl,
        userData: {
            investments,
            totalReferrers,
            totalJoiningComissionEarnt,

        },
        stakingToken: { ...info.stakingToken, balance, allowance }
    }


    return response

}




const loadStakingData = async (userWallet) => {

    const finalData = []
    for (let item of CONFIG) {
        try {
            const data = await loadSingleData(item, userWallet)
            finalData.push(data)
        } catch (error) {
            console.error("c", error)
            finalData.push(item)
        }
    }

    return finalData;
}



export default loadStakingData