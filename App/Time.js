import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Platform,Dimensions
} from 'react-native';
import {Button, Input, Icon} from 'react-native-elements';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import moment from 'moment';

import DatePicker from 'react-native-date-picker';
import TimePicker from './customLib/react-native-simple-time-picker/App';

//redux
import {useSelector, useDispatch} from 'react-redux';

import {addTime} from './actions';

export default function Time({navigation}) {
  const uid= useSelector((state) => state.auth.uid);
  const user =useSelector((state) => state.auth.user);
  const [date, setDate] = useState(new Date());
  const isIos = Platform.OS === 'ios';

  const [selectedHours, setSelectedHours] = useState(
moment(new Date()).format('hh')
  );
  const [selectedMinutes, setSelectedMinutes] = useState(
  moment(new Date()).format('mm')
  );
  const [selectedaa, setSelectedaa] = useState(moment(new Date()).format('A'));
  const dispatch = useDispatch();
  const [selecteStartTime, setselecteStartTime] = useState(
    moment(new Date()).format('hh:mm A'),
  );
  const [selecteEndTime, setselecteEndTime] = useState(
    moment(new Date()).format('hh:mm A'),
  );
  const [selecteChange, setselecteChange] = useState(0);
  const windowWidth = Dimensions.get('window').width;

  useEffect(() => {
    const time = selectedHours + ':' + selectedMinutes + ' ' + selectedaa;
    const timeselect = selectedHours + ':' + selectedMinutes + ' ' + selectedaa;

    if (selecteChange === 0) {
      setselecteStartTime(timeselect);
    } else {
      setselecteEndTime(timeselect);
    }

    dispatch(addTime(uid, user, time));
  }, [selectedHours, selectedMinutes, selectedaa]);

  useEffect(() => {
    if (customStyleIndex == 1) {
    dispatch(addTime(uid, user, selecteStartTime, selecteEndTime));}

  }, [selecteStartTime, selecteEndTime]);
  const [customStyleIndex, setCustomStyleIndex] = useState(0);
  useEffect(() => {
    if (customStyleIndex == 0) {
      dispatch(addTime(uid, user, moment(date).format('hh:mm A')));
    } else {
      if (selecteChange === 0) {
        setselecteStartTime(moment(date).format('hh:mm A'));
      } else {
        setselecteEndTime(moment(date).format('hh:mm A'));
      }
    }
  }, [date]);

  const handleCustomIndexSelect = (index) => {
    // Tab selection for custom Tab Selection
    setCustomStyleIndex(index);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SegmentedControlTab
          values={['single date', 'range']}
          selectedIndex={customStyleIndex}
          onTabPress={handleCustomIndexSelect}
          borderRadius={0}
          tabsContainerStyle={{
            height: 50,
            backgroundColor: '#F2F2F2',
          }}
          tabStyle={{
            flex: 0.5,
            backgroundColor: '#F2F2F2',
            borderWidth: 0,
            borderColor: 'transparent',
          }}
          activeTabStyle={{
            backgroundColor: 'white',
            marginTop: 2,
            flex: 0.5,
          }}
          tabTextStyle={{
            color: '#444444',
            fontWeight: 'bold',
          }}
          activeTabTextStyle={{
            color: '#888888',
          }}
        />
        {customStyleIndex === 0 && isIos && (
          <TimePicker
            selectedHours={selectedHours}
            //initial Hourse value
            selectedMinutes={selectedMinutes}
            selectedaa={selectedaa}
            //initial Minutes value
            onChange={(hours, minutes, aa) => {
              setSelectedHours(hours);
              setSelectedMinutes(minutes);
              setSelectedaa(aa);
            }}
          />
        )}
        <Text></Text>
        {customStyleIndex === 0 && !isIos && (
          <DatePicker mode="time" date={date} onDateChange={setDate} />
        )}
        {customStyleIndex === 1 && isIos && (
          <View>
            <Button
              buttonStyle={selecteChange === 0 ? styles.btnActive : styles.btn}
              title={'start:' + selecteStartTime}
              onPress={() => {
                setselecteChange(0);
              }}
            />
            <Button
              color="#fff"
              buttonStyle={selecteChange === 1 ? styles.btnActive : styles.btn}
              title={'end :' + selecteEndTime}
              onPress={() => {
                setselecteChange(1);
              }}
            />
<View style={{width:windowWidth}}>
            <TimePicker
              selectedHours={selectedHours}
              //initial Hourse value
              selectedMinutes={selectedMinutes}
              selectedaa={selectedaa}
              onChange={(hours, minutes, aa) => {
                setSelectedHours(hours);
                setSelectedMinutes(minutes);
                setSelectedaa(aa);
              }}
            />
            </View>
          </View>
        )}
        {customStyleIndex === 1 && !isIos && (
          <View style={{alignItems:'center'}}>
            <Button
              buttonStyle={selecteChange === 0 ? styles.btnActive : styles.btn}
              title={'start:' + selecteStartTime}
              onPress={() => {
                setselecteChange(0);
              }}
            />
            <Button
              color="#fff"
              buttonStyle={selecteChange === 1 ? styles.btnActive : styles.btn}
              title={'end :' + selecteEndTime}
              onPress={() => {
                setselecteChange(1);
              }}
            />
            <DatePicker mode="time" date={date} onDateChange={setDate} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

Time.navigationOptions = ({navigation}) => ({
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
    padding: 20,
  },
  subContainer: {
    marginBottom: 20,
    padding: 5,
  },
  subContainerButt: {
    backgroundColor: '#000',
    marginBottom: 20,
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
    width: 200,
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#bfbbbb',
marginHorizontal:100,
    borderColor: '#dc00ff',
    borderRadius: 10,
    borderWidth: 0,
    padding: 10,
    margin: 10,
  },
  btnActive: {
    alignItems: 'center',
    backgroundColor: '#000',
    borderColor: '#fff',
    borderRadius: 10,
    borderWidth: 0,
    padding: 10,
    margin: 10,
    marginHorizontal:100,

  },
});
