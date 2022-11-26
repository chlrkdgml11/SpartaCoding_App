import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity, Alert, TimePickerAndroid } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import data from '../data.json'

const main = 'https://storage.googleapis.com/sparta-image.appspot.com/lecture/about.png'

export default function AboutPage() {
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView style={styles.container}></SafeAreaView>
            <StatusBar style='dark'></StatusBar>

            <Text style={styles.title}>나만의 꿀팁</Text>

            <Image
                source={{ uri: main }}
                style={styles.image1}
            />
        </ScrollView>
    )
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
    }
  });