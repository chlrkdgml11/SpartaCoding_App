import React from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";

//비구조 할당 방식으로 넘긴 속성 데이터를 꺼내 사용함
export default function LikeCard({ content, navigation }) {

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "gray",
        borderBottomColor: "gray",
        shadowColor: "gray",
        height: 50
      }
    })


  })

  const likeCard = () => {

  }

  console.log(content)
  return (
    <TouchableOpacity style={styles.card} onPress={() => {
      navigation.navigate('DetailPage', content)
    }}>
      <Image style={styles.cardImage} source={{ uri: content.image }} />

      <View style={styles.cardText}>
        <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
        <Text style={styles.cardDesc} numberOfLines={3}>{content.desc}</Text>
        <Text style={styles.cardDate}>{content.date}</Text>

        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button}>
            <Text>asd</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text>asd</Text>
          </TouchableOpacity>
        </View>

      </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  card: {
    flex: 1,
    //컨텐츠들을 가로로 나열
    //세로로 나열은 column <- 디폴트 값임 
    flexDirection: "row",
    margin: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#eee",
    paddingBottom: 10,
  },
  cardImage: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardText: {
    flex: 2,
    flexDirection: "column",
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700"
  },
  cardDesc: {
    fontSize: 15
  },
  cardDate: {
    fontSize: 10,
    color: "#A6A6A6",
  },
  buttons: {
    flexDirection: "row",
    backgroundColor: 'red'
  },
  button: {

  }
})