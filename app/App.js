import React, { useEffect, useState } from "react"
import { ScrollView, StatusBar, StyleSheet, View } from "react-native"
import Header from "./component/Header"
import PrayerScheduleCard from "./component/PrayerScheduleCard"

const App = () => {
  const [shalatSchedule, setShalatSchedule] = useState(undefined)

  useEffect(() => {
    fetchJadwalSholat()
  }, [])

  const fetchJadwalSholat = async () => {
    try {
      const apiName =
        "http://api.aladhan.com/v1/hijriCalendarByCity?city=Jakarta&country=Indonesia"
      let response = await fetch(apiName)
      let responseJson = await response.json()
      if (responseJson) {
        var timings = []
        Object.entries(responseJson.data[0].timings).forEach(([key, value]) => {
          timings.push({
            title: key,
            time: value,
          })
        })
        setShalatSchedule(timings)
        console.log("sholat timings ->", timings)
      }
    } catch (error) {
      console.log("error ->", error)
    }
  }
  return (
    <ScrollView style={styles.mainContainer}>
      <StatusBar backgroundColor={"rgb(239,81,83)"} />
      <Header title={"Hello Rino!"} time={"15:31"} />
      <View style={styles.prayerCardContainer}>
        <PrayerScheduleCard location={"Bandung"} prayers={shalatSchedule} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "rgb(255,248,222)",
    flexGrow: 1,
  },
  prayerCardContainer: {
    top: -48,
  },
})
export default App
