import Vasern from 'vasern';
import TransactionModel from "./Modals/Transaction"
export const VasernDB = new Vasern({
    schemas: [TransactionModel],
    version: 2
})