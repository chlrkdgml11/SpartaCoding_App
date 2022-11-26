import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity, Alert, TimePickerAndroid } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import data from './data.json'

const main = 'https://storage.googleapis.com/sparta-image.appspot.com/lecture/main.png'
const contentImage1 = 'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fpizza.png?alt=media&token=1a099927-d818-45d4-b48a-7906fd0d2ad3'

export default function App() {
  const buttonAlert = () => {
    Alert.alert('버튼입니다.')
  }

  let tip = data.tip

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.container}></SafeAreaView>
      <StatusBar style='dark'></StatusBar>

      <Text style={styles.title}>나만의 꿀팁</Text>


      <Image
        source={{ uri: main }}
        style={styles.image1}
      />


      <ScrollView horizontal={true} style={styles.scroll}>
        <TouchableOpacity style={styles.button1_1} onPress={buttonAlert}>
          <Text style={styles.buttonText}>생활</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2_1} onPress={buttonAlert}>
          <Text style={styles.buttonText}>재테크</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button3_1} onPress={buttonAlert}>
          <Text style={styles.buttonText}>반려견</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button4_1} onPress={buttonAlert}>
          <Text style={styles.buttonText}>꿀팁 찜</Text>
        </TouchableOpacity>
      </ScrollView>


      <View style={styles.contentContainer}>
        {
          tip.map((content, i) => {
            return (
              <View style={styles.bottom} key={i}>
                <Image
                  source={{ uri: content.image }}
                  style={styles.image2}
                />
                <View style={styles.imageFont}>
                  <Text style={styles.imageTitle}>{i + 1}.{content.title}</Text>
                  <Text numberOfLines={3} style={styles.imageContent}>{content.desc}</Text>
                  <Text style={styles.contentDate}>{content.date}</Text>
                </View>
              </View>
            )
          })
        }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 10,
    marginLeft: 10
  },
  image1: {
    width: "95%",
    height: 200,
    marginTop: 10,
    borderRadius: 20,
    alignSelf: "center"
  },
  scroll: {
    marginLeft: 10,
    marginTop: 10,
    height: 60,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  button1_1: {
    width: 110,
    alignItems: "center",
    backgroundColor: "#fdc453",
    borderRadius: 20,
    justifyContent: "center",
  },
  button2_1: {
    width: 110,
    alignItems: "center",
    backgroundColor: "#fe8d6f",
    borderRadius: 20,
    marginLeft: 7,
    justifyContent: "center"
  },
  button3_1: {
    width: 110,
    alignItems: "center",
    backgroundColor: "#9adbc5",
    borderRadius: 20,
    marginLeft: 7,
    justifyContent: "center"
  },
  button4_1: {
    width: 110,
    alignItems: "center",
    backgroundColor: "#f886a8",
    borderRadius: 20,
    marginLeft: 7,
    justifyContent: "center"
  },
  image2: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  imageFont: {
    flex: 2,
    width: 200,
    flex: 2
  },
  contentContainer: {
    marginTop: 10,
    marginLeft: 10,
  },
  bottom: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    paddingBottom: 10,
    paddingTop: 10,
  },
  imageTitle: {
    fontSize: 19,
    fontWeight: "bold",
    marginLeft: 2
  },
  imageContent: {
    fontSize: 15,
    numberOfLines: 3,
    marginLeft: 3
  },
  contentDate: {
    color: 'gray',
    marginLeft: 3
  }
});