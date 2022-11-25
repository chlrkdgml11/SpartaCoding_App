import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const buttonAlert = () => {
    Alert.alert('버튼입니다.')
  }

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar style='dark'></StatusBar>

      <Text style={styles.title}>나만의 꿀팁</Text>

      <Image
        source={{ uri: 'https://storage.googleapis.com/sparta-image.appspot.com/lecture/main.png' }}
        // 사용설명서에 나와 있는 resizeMode 속성 값을 그대로 넣어 적용합니다
        style={styles.image1}
      />
      <View style={styles.scroll}>
        <ScrollView horizontal={true}>
          <TouchableOpacity style={styles.button1_1} onPress={buttonAlert}>
            <Text style={styles.button1_2}>생활</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button2_1} onPress={buttonAlert}>
            <Text style={styles.button2_2}>재테크</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button3_1} onPress={buttonAlert}>
            <Text style={styles.button3_2}>반려견</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button4_1} onPress={buttonAlert}>
            <Text style={styles.button4_2}>꿀팁 찜</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.bottom}>
        <Image
        source={{uri: 'https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fpizza.png?alt=media&token=1a099927-d818-45d4-b48a-7906fd0d2ad3'}}
        style={styles.image2}
        />

        <View style={styles.imageFont}>
          <Text style={styles.imageTitle}>먹다 남은 피자를 촉촉하게!</Text>
          <Text numberOfLines={3} style={styles.imageContent}>먹다 남은 피자는 수분이 날라가기 때문에 처음부터 맛있게 먹을 수 없는데요. 이럴 경우 그릇에 물을 받아 전자렌지에 돌리면 맛있게 먹을 수 있습니다.</Text>
        </View>
        
        
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    color: "black",
    fontSize: "20",
    fontWeight: "800",
    paddingTop: 10,
    paddingLeft: 10
  },
  image1: {
    width: "90%",
    height: 200,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 20
  },
  scroll: {
    fontSize: "20",
    margin: 10,
    height: 80
  },
  button1_1: {
    width: 100,
    alignItems: "center",
    backgroundColor: "orange",
    borderRadius: 20,
    margin: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  button1_2: {
    color: "white",
    fontSize: 20,
    margin: 10,
  },
  button2_1: {
    width: 100,
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 20,
    margin: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  button2_2: {
    color: "white",
    fontSize: 20,
    margin: 10
  },
  button3_1: {
    width: 100,
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 20,
    margin: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  button3_2: {
    color: "white",
    fontSize: 20,
    margin: 10
  },
  button4_1: {
    width: 100,
    alignItems: "center",
    backgroundColor: "pink",
    borderRadius: 20,
    margin: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  button4_2: {
    color: "white",
    fontSize: 20,
    margin: 10
  },
  image2: {
    width: 150,
    height: 120,
    margin: 10,
    borderRadius: 20
  },
  imageFont: {
    width: 200,
  },
  bottom: {
    flexDirection: "row",
  },
  imageTitle: {
    fontSize: 19,
    fontWeight: "bold",
    marginTop: 10
  },
  imageContent: {
    fontSize: 15,
    numberOfLines: 3,
    marginTop: 3
  }
});