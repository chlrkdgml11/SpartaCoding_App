import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Platform } from 'react-native';
import LikeCard from '../components/LikeCard';
import { firebase_db } from '../firebaseConfig';
import * as Application from 'expo-application';
import Loading from '../components/Loading';

const isIOS = Platform.OS === 'ios';

export default function LikePage({ navigation, route }) {

    const [tip, setTip] = useState([])

    const [ready, setReady] = useState(true)
    
    useEffect(() => {
        navigation.setOptions({
          title: "꿀팁 찜",
          headerStyle: {
            backgroundColor: "gray",
            borderBottomColor: "gray",
            shadowColor: "gray",
            height: 50
          }
        })
        getLike();
      }, [])

    const getLike = async () => {
        let userUniqueId;
        if (isIOS) {
            let iosId = await Application.getIosIdForVendorAsync();
            userUniqueId = iosId
        } else {
            userUniqueId = await Application.androidId
        }

        firebase_db.ref('/like/' + userUniqueId).once('value').then((snapshot) => {
            console.log('파이어 베이스에서 찜한 데이터를 가져왔습니다.')
            let result = snapshot.val();
            let tip = []
            for (let key in result) {
                tip.push(result[key])
            }

            if(tip && tip.length > 0) {
                setTip(tip)
                setReady(false)
            }
        })
    }

    return (
        <ScrollView style={styles.container}>
            {
                tip.map((content, i) => {
                    return (<LikeCard content={content} key={i} navigation={navigation} tip={tip} setTip={setTip}/>)
                })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff"
    }
})