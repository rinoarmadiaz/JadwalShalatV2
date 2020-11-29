import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const PrayerScheduleCard = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.locationContainer}>
          <Image
            source={require("../../images/marker.png")}
            style={styles.locationImage}
          />
          <Text style={styles.locationText}>{props.location}</Text>
        </View>
        {props.prayers?.map((item, index) => {
          return (
            <View key={index} style={styles.prayItem}>
              <Text style={styles.titleItem}>{item.title}</Text>
              <Text style={styles.timeItem}>{item.time}</Text>
              <View style={styles.horizontalSeparator} />
              <TouchableOpacity>
                <Image
                  source={require("../../images/bell.png")}
                  style={styles.locationImage}
                />
              </TouchableOpacity>
            </View>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 16,
    backgroundColor: "rgb(255,248,222)",
    elevation: 6,
  },
  cardContainer: {},
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  locationImage: {
    height: 16,
    width: 16,
  },
  locationText: {
    fontWeight: "bold",
    marginLeft: 8,
    color: "rgb(239,81,83)",
  },
  prayItem: {
    flexDirection: "row",
    marginTop: 24,
    marginHorizontal: 8,
    alignItems: "center",
  },
  titleItem: {
    fontSize: 18,
    flex: 1,
  },
  timeItem: {
    fontSize: 18,
  },
  horizontalSeparator: {
    marginHorizontal: 8,
  },
})

export default PrayerScheduleCard
