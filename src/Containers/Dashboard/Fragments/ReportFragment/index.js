import React from 'react'

import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { AtomindButton, AtomindText, BackButton, SearchBox } from '@/Components'
import { useState } from 'react'

import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

import { getCollection } from '@/Firebase/Firestore'
import { useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import ProfitIcon from "@/Assets/SVG/ProfitIcon"
import Profit2Icon from "@/Assets/SVG/Profit2Icon"


const BuySummary = ({ totalProfitMade = "-", profitMadeThisWeek = "-", }) => {
  return (
    <View style={{
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 10,
      alignContent: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 25,
      marginVertical: 10

    }}>
      <View
        style={{

          flexDirection: 'row',
          // justifyContent: 'space-between',
        }}
      >
        <View style={{
          borderWidth: 1,
          borderColor: "black", borderRadius: 10,
          padding: 5,
          marginRight: 10,
          alignContent: "center",
          alignItems: "center",
          alignSelf: "center"
        }}>
          <ProfitIcon />
        </View>


        <View >
          <View>
            <AtomindText style={{ color: '#000', fontWeight: '700', fontSize: 16 }}>
              Total Profit Made
            </AtomindText>
            <AtomindText style={{ color: '#717171' }}>{totalProfitMade} USD</AtomindText>

          </View>
          <View>
            <AtomindText style={{ color: '#000', fontWeight: '700', fontSize: 16 }}>
              Profit Made This Week
            </AtomindText>
            <AtomindText style={{ color: '#717171' }}>{profitMadeThisWeek} USD</AtomindText>

          </View>
        </View>




      </View>

    </View>
  )
}
const ReportFragment = ({ route, navigation }) => {

  const [isLoading, setLoading] = useState(false)

  const [stats, setStats] = useState({

    profitMadeThisWeek: "-",
    totalProfitMade: "-"
  })
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData()
  }, [])


  const loadData = async () => {
    setLoading(true)

    const rawReports = [];
    const finalReports = []
    const reports = await firestore()
      .collection('report').get();




    reports.forEach(report => {
      rawReports.push({
        ...report.data(),
        id: report.id
      })
    });

    for (let report of rawReports) {
      finalReports.push([report.opentime, report.symbol, report.direction, report.closetime, report.profit])
    }

    setData(finalReports)



    const _stats = (await firestore()
      .collection("stats")
      .doc("stats")
      .get()).data()

    const finalStats = {
      profitMadeThisWeek: _stats.profitMadeThisWeek,
      totalProfitMade: _stats.totalProfitMade
    }

    setStats(finalStats)
    console.log({ stats })

    setLoading(false)

  }
  const [heads, setHeads] = useState(["Open Time", "Symbol"
    , "Direction", "Close Time", "Profit/Loss"])


  const renderElement = (data, index) => {

    let color = "black"
    let prefix = ""

    if (index === 4) {
      if (Number(data) > 0) {
        color = "green"

      } else {
        color = "red"

      }
      prefix = "$"
    }
    return <AtomindText style={{
      color: color,
      backgroundColor: index % 2 === 0 ? "#f1f8ff" : "#cfd9e3", paddingVertical: 5
      , textAlign: "center", fontWeight: "400"
    }}>{prefix}{data.toUpperCase()}</AtomindText>

  };

  return (
    <View
      style={{
        // backgroundColor: '#F5F5Fd5',
        flex: 1,
      }}
    >
      <View
        style={{
          // padding: 15,
          // paddingHorizontal: 25,
          backgroundColor: "#f1f8ff",
          flex: 1,
          paddingTop: 20,
        }}
      >
        <AtomindText
          style={{
            textAlign: 'center',
            fontSize: 18,
            fontWeight: '500',
            // flex: 1,
            justifyContent: "center",
            alignSelf: 'center',
            padding: 15,
            // flex:1
          }}
          category="h5"
        >
          Trading Report
        </AtomindText>


        <View style={{ paddingHorizontal: 10 }}>

          <BuySummary profitMadeThisWeek={stats.profitMadeThisWeek}

            totalProfitMade={stats.totalProfitMade} />
          <Table borderStyle={{ borderColor: 'transparent', }}>
            <Row data={heads} style={styles.head} textStyle={styles.text} />
            {
              data.map((rowData, index) => (
                <TableWrapper key={index} style={styles.row}>
                  {
                    rowData.map((cellData, cellIndex) => (
                      <Cell key={cellIndex} data={renderElement(cellData, cellIndex)} textStyle={styles.text} />
                    ))
                  }
                </TableWrapper>
              ))
            }
          </Table>
        </View>

      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 60, backgroundColor: '#d2e6fa' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#f1f8ff' },
  btnText: { textAlign: 'center', color: '#fff' }
});
export default ReportFragment
