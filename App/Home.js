import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-elements';

//redux
import {useSelector, useDispatch} from 'react-redux';
import {getDataAction} from './actions';

export default function Home({navigation}) {
  const dispatch = useDispatch();

  const [userDate, setUserDate] = useState([]);
  const [userTime, setUserTime] = useState(['']);
  
  const uid = useSelector((state) => state.auth.uid);
  const userdatastoredate = useSelector(
    (state) => state.getDatastore.getdatadate,
  );
  const userdatastoretime = useSelector(
    (state) => state.getDatastore.getdatatime,
  );

  useEffect(() => {
    setUserDate(userdatastoredate);
    setUserTime(userdatastoretime);
  }, [userdatastoredate, userdatastoretime]);

  useEffect(() => {
    dispatch(getDataAction(uid));
  }, [dispatch]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 50,
        }}>
        <View style={styles.subContainerButt}>
          <Button
            color="#fff"
            title="Date"
            buttonStyle={styles.btnActive}
            onPress={() => {
              navigation.navigate('Date');
            }}
          />
        </View>
        <View style={styles.subContainerButt}>
          <Button
            color="#fff"
            buttonStyle={styles.btnActive}
            title="Time"
            onPress={() => {
              navigation.navigate('Time');
            }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 0.4,
          alignItems: 'center',
          borderColor: '#000',
          borderWidth: 5,
          margin: 20,
          backgroundColor: '#fff',
        }}>
        <Text
          style={{
            fontSize: 28,
            height: 50,
          }}>
          
          date Select
        </Text>
        {userDate?.length === 1 && <Text
          style={{
            fontSize: 20,
            height: 50,
          }}>
          
          { userDate[0]}
        </Text>}
        {userDate?.length > 1 && <Text numberOfLines={3}
          style={{
            fontSize: 20,
            height: 100,
            textAlign:"center"
          }}>
          
          { userDate[0] }{'\n'}to{'\n'} {userDate[1]}
        </Text>}
      </View>
      <View
        style={{
          flex: 0.4,
          alignItems: 'center',
          borderColor: '#000',
          borderWidth: 5,
          margin: 20,
          backgroundColor: '#fff',
        }}>
        <Text
          style={{
            fontSize: 28,
            height: 50,
          }}>
          
          time Select
        </Text>
        {userTime?.length === 1 && <Text
          style={{
            fontSize: 20,
            height: 50,
            textAlign:"center"

          }}>
          
          { userTime[0]}
        </Text>}
        {userTime?.length > 1 && <Text
          style={{
            fontSize: 20,
            height: 100,
            textAlign:"center"
          }}>
          
          { userTime[0]} {'\n'} to {'\n'}{userTime[1]}
        </Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    height: 400,
    padding: 5,
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
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 18,
    margin: 5,
    width: 300,
  },
  subContainerButt: {
    backgroundColor: '#000',
    margin: 20,
    padding: 10,
  },
  btnActive: {
    alignItems: 'center',
    backgroundColor: '#000',
    borderColor: '#fff',
    borderRadius: 10,
    padding: 5,
    margin: 10,
  },
});
