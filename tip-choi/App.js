import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const main = 'https://storage.googleapis.com/sparta-image.appspot.com/lecture/main.png'
const contentImage1 = 'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fpizza.png?alt=media&token=1a099927-d818-45d4-b48a-7906fd0d2ad3'

export default function App() {
  const buttonAlert = () => {
    Alert.alert('버튼입니다.')
  }

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


      <View style={styles.bottom}>
        <Image
          source={{ uri:contentImage1}}
          style={styles.image2}
        />

        <View style={styles.imageFont}>
          <Text style={styles.imageTitle}>먹다 남은 피자를 촉촉하게!</Text>
          <Text numberOfLines={3} style={styles.imageContent}>먹다 남은 피자는 수분이 날라가기 때문에 처음부터 맛있게 먹을 수 없는데요. 이럴 경우 그릇에 물을 받아 전자렌지에 돌리면 맛있게 먹을 수 있습니다.</Text>
          <Text style={styles.contentDate}>2022.11.26</Text>
        </View>
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
    backgroundColor: "orange",
    borderRadius: 20,
    justifyContent: "center",
  },
  button2_1: {
    width: 110,
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 20,
    marginLeft: 7,
    justifyContent: "center"
  },
  button3_1: {
    width: 110,
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 20,
    marginLeft: 7,
    justifyContent: "center"
  },
  button4_1: {
    width: 110,
    alignItems: "center",
    backgroundColor: "pink",
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
    width: 200,
    flex: 2
  },
  bottom: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
    borderBottomWidth: 0.5,
    borderBottomColor:'black',
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