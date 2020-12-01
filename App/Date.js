import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
  Alert,
  Button,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import SegmentedControlTab from 'react-native-segmented-control-tab';

import DateRangePicker from './customLib/react-native-daterange-picker/src/';
import moment from 'moment';
//redux
import {useSelector, useDispatch} from 'react-redux';

import {addDate} from './actions';

export default function Date({navigation}) {
  const [uid, setUid] = useState(useSelector((state) => state.auth.uid));
  const [user, setUser] = useState(useSelector((state) => state.auth.user));
  const dispatch = useDispatch();

  const [singleDate, setsingleDate] = useState(moment());

  const [startDate, setStartDate] = useState(null);
  const [endDate, setendDate] = useState(null);
  const [displayedDate, setdisplayedDate] = useState(moment());
  const [selectstartDate, setselectStartDate] = useState(null);
  const [selectendDate, setselectendDate] = useState(null);
  const [customStyleIndex, setCustomStyleIndex] = useState(0);

  const setDates = (dates) => {
    if (dates.startDate != null) setStartDate(dates.startDate);
    if (dates.endDate != null) setendDate(dates.endDate);
    if (dates.displayedDate) setdisplayedDate(dates.displayedDate);
  };
  const setsingleDates = (dates) => {
    setsingleDate(dates.date);
    if (dates.displayedDate) setdisplayedDate(dates.displayedDate);
    dispatch(addDate(uid, user, moment(singleDate).format('DD-MM-YYYY')));
  };
  useEffect(() => {
    setselectStartDate(moment(startDate).format('DD-MM-YYYY'));
    setselectendDate(moment(endDate).format('DD-MM-YYYY'));

    if (selectstartDate != 'Invalid date' && selectendDate != 'Invalid date') {
      dispatch(addDate(uid, user, selectstartDate, selectendDate));
    }
  }, [setDates]);
  const handleCustomIndexSelect = (index) => {
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
        {customStyleIndex === 0 && (
          <DateRangePicker
            onChange={setsingleDates}
            date={singleDate}
            displayedDate={displayedDate}></DateRangePicker>
        )}
        {customStyleIndex === 1 && (
          <DateRangePicker
            onChange={setDates}
            startDate={startDate}
            endDate={endDate}
            range
            displayedDate={displayedDate}></DateRangePicker>
        )}
      </View>
      {customStyleIndex === 0 ? (
        <Text> {moment(singleDate).format('DD-MM-YYYY')} </Text>
      ) : (
        <View>
          <Text> {selectstartDate} </Text>

          <Text> {selectendDate} </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

Date.navigationOptions = ({navigation}) => ({
  title: 'Date',
  headerShown: true,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  headerText: {
    padding: 8,
    fontSize: 14,
    color: '#444444',
    textAlign: 'center',
  },
  tabContent: {
    color: '#444444',
    fontSize: 18,
    margin: 24,
  },
  seperator: {
    marginHorizontal: -10,
    alignSelf: 'stretch',
    borderTopWidth: 1,
    borderTopColor: '#888888',
    marginTop: 24,
  },
  tabStyle: {
    borderColor: '#D52C43',
  },
  activeTabStyle: {
    backgroundColor: '#D52C43',
  },
});
