import React, { useState,useEffect } from 'react';
import { DatePickerIOS,StyleSheet, ActivityIndicator, View, Text, Alert ,SafeAreaView ,Platform,ToggleButtonGroup} from 'react-native';
import { Button, Input, Icon } from 'react-native-elements';
import moment from "moment";

import DatePicker from 'react-native-date-picker'
import TimePicker from './customLib/react-native-simple-time-picker/App';

//redux



export default function Time({ navigation }) {

  const [date, setDate] = useState(new Date())


    return (
      <SafeAreaView style={styles.container}>
      <View style={styles.container}>

      <DatePicker
      mode="time"

          date={date}
          onDateChange={setDate}
        />
</View>
        </SafeAreaView>
    );
}

Time.navigationOptions = ({ navigation }) => ({
    title: 'Time',
    headerShown: true,
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        height: 400,
        padding: 20
    },
    subContainer: {
        marginBottom: 20,
        padding: 5,
    },
    subContainerButt: {
backgroundColor:"#000",
        marginBottom: 20,
    },
    activity: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInput: {
        fontSize: 18,
        margin: 5,
        width: 200
    }, btn: {
    alignItems: 'center',
    backgroundColor: '#bfbbbb',
    borderColor: '#dc00ff',
    borderRadius: 10,
    borderWidth: 0,
    padding: 10,
    margin:10
  },
  btnActive: {
    alignItems: 'center',
    backgroundColor: '#000',
    borderColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin:10

  }
}
)
