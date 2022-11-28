import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const main = 'https://storage.googleapis.com/sparta-image.appspot.com/lecture/about.png'

export default function AboutPage() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.statusBarBackground}></SafeAreaView>
      <StatusBar style='auto'></StatusBar>

      <Text style={styles.title}>HI! 스파르타코딩 앱개발 반에 오신것을 환영합니다</Text>

      <View style={styles.bottom}>
        <Image
        source={{uri:main}}
        style={styles.image}
        resizeMode={"cover"}
        />

        <Text style={styles.bottomContent1}>많은 내용을 간결하게 담아내려 노력했습니다!</Text>

        <Text style={styles.bottomContent2}>꼭 완주 하셔서 꼭 여러분것으로 만들어가시길 바랍니다</Text>

        <TouchableOpacity style={styles.bottomButton}>
          <Text style={styles.bottomButtonText}>여러분의 인스타계정</Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',
    alignItems: 'center'
  },
  statusBarBackground: {
    backgroundColor: '#191970'
  },
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: "700",
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20
  },
  bottom: {
    width: 320,
    height: 450,
    backgroundColor: 'white',
    marginTop: 40,
    borderRadius: 30,
    alignSelf: 'center'
  },
  image: {
    height: 150,
    width: 150,
    marginTop: 40,
    borderRadius: 30,
    alignSelf: 'center'
  },
  bottomContent1: {
    color: 'black',
    fontSize: 21,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    fontWeight: "800",
    textAlign:"center"
  },
  bottomContent2: {
    color: 'black',
    fontSize: 17,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    fontWeight: "600",
    textAlign:"center"
  },
  bottomButton: {
    backgroundColor: 'orange',
    marginTop: 30,
    width: 170,
    height: 50,
    alignSelf: 'center',
    borderRadius: 15,
    padding: 15
  },
  bottomButtonText: {
    color: 'white',
    fontSize: 17, 
    fontWeight: "700",
    alignSelf: 'center',
  }
});