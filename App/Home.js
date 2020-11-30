import React, { useState, useEffect } from 'react';
import { View, Text,StyleSheet ,Button,TouchableOpacity} from 'react-native';
import {Icon } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
//redux
import { useSelector,useDispatch } from 'react-redux';
import { addTask,getDataAction } from './actions';

export default function Home({ navigation }) {

    const [user, setUser] = useState( useSelector(state => state.auth.user));
    const [uid, setUid] = useState( useSelector(state => state.auth.uid));
    const [userDate, setUserDate] = useState(['']);
    const [userTime, setUserTime] = useState(['']);

    const dispatch = useDispatch();
    const [loading, setloading] = useState( false);

    const userdatastoredate=useSelector(state => state.getDatastore.getdatadate);
    const userdatastoretime=useSelector(state => state.getDatastore.getdatatime);

    useEffect(() => {
setUserDate(JSON.stringify(userdatastoredate));
setUserTime(JSON.stringify(userdatastoretime));

}, [userdatastoredate,userdatastoretime]);
    useEffect(() => {

      setloading(true);
       dispatch(getDataAction(uid));
      setloading(false);

    },[dispatch]);











    return (
        <View style={{ flex: 1, alignItems: 'center', }}>
        <View style={{flexDirection:"row" ,marginTop:50}}>
        <View style={styles.subContainerButt}>
            <Button   color="#fff"
title="Date"
                buttonStyle={{  margin: 20 }}
                onPress={() => {navigation.navigate('Date')}} />
                </View>
                <View style={styles.subContainerButt}>

                    <Button   color="#fff"

  buttonStyle={{ margin: 20 }}
title="Time"
                onPress={() => {navigation.navigate('Time')}} />
                </View>
                </View>
                <View style={{ flex: .2, alignItems: 'center',borderColor:"#000",borderWidth:5,margin:20,backgroundColor:"#fff"}}>
                    <Text style={{ fontSize: 28, height: 50  }}>date Select  </Text>
                    <Text style={{ fontSize: 20, height: 50  }}> {userDate}</Text>

                </View>
                <View style={{ flex: .2, alignItems: 'center',borderColor:"#000",borderWidth:5,margin:20,backgroundColor:"#fff"}}>
                    <Text style={{ fontSize: 28, height: 50  }}>time Select  </Text>
                    <Text style={{ fontSize: 20, height: 50  }}> {userTime}</Text>

                </View>
        </View>
    );
}
/*
Home.navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerRight: () => <Button
            buttonStyle={{ padding: 0, marginRight: 20, backgroundColor: 'transparent' }}


            onPress={() => {navigation.navigate('Auth')}} />,
});
*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        height: 400,
        padding: 5
    },
    subContainer: {
        marginBottom: 20,
        padding: 5,
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
        width: 300
    },
    subContainerButt: {
backgroundColor:"#000",
        margin: 20,
        padding:25
    },
})
