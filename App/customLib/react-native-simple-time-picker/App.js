import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Picker} from '@react-native-community/picker';
import {
  View,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  picker: {
    flex: 1,
  },
});

const MAX_HOURS = 12;
const MAX_MINUTES = 60;
const MAX_AA = 2;

export default class TimePicker extends Component {
  static propTypes = {
    selectedHours: PropTypes.any,
    selectedMinutes: PropTypes.any,
    selectedaa: PropTypes.string,

    onChange: PropTypes.func,
    hoursUnit: PropTypes.string,
    minutesUnit: PropTypes.string,
    aaUnit: PropTypes.string,
  }

  static defaultProps = {
    selectedHours: 0,
    selectedMinutes: 0,
    selectedaa: 0
,
    onChange: null,
    hoursUnit: '',
    minutesUnit: '',
    aaUnit: '',

  }

  constructor(props) {
    super(props);
    const { selectedHours, selectedMinutes,selectedaa } = props;
    this.state = {
      selectedHours,
      selectedMinutes,
      selectedaa,
    };
    console.log("selectedaa"+selectedaa)

  }

  getHoursItems = () => {
    const items = [];
    const { hoursUnit } = this.props;
    for (let i = 0; i <= 9; i++) {
      items.push(
        <Picker.Item key={"0" +i} value={"0" +i} label={`0${i.toString()}${hoursUnit}`} />,
      );
    }
    for (let i = 10; i <= MAX_HOURS; i++) {
      items.push(
        <Picker.Item key={i} value={i} label={`${i.toString()}${hoursUnit}`} />,
      );
    }
    return items;
  }

  getMinutesImtes = () => {
    const items = [];
    const { minutesUnit } = this.props;
    for (let i = 0; i <= 9; i++) {
      items.push(
        <Picker.Item key={"0"+i} value={"0"+i} label={`0${i.toString()}${minutesUnit}`} />,
      );
    }
    for (let i = 10; i <= MAX_MINUTES; i++) {
      items.push(
        <Picker.Item key={""+i} value={""+i} label={`${i.toString()}${minutesUnit}`} />,
      );
    }
    return items;
  }

  getaa = () => {
    const items = [];
    const { aaUnit } = this.props;

      items.push(
        <Picker.Item key={0} value={"AM"} label="AM" />,
      );
      items.push(
        <Picker.Item key={1} value={"PM"} label="PM" />,
      );

    return items;
  }

  handleChangeHours = (itemValue) => {
    const { onChange } = this.props;
    this.setState({
      selectedHours: itemValue,
    }, () => {
      const { selectedHours, selectedMinutes ,selectedaa} = this.state;
      onChange(selectedHours, selectedMinutes,selectedaa);
    });
  }

  handleChangeMinutes = (itemValue) => {
    const { onChange } = this.props;
    this.setState({
      selectedMinutes: itemValue,
    }, () => {
      const { selectedHours, selectedMinutes ,selectedaa} = this.state;
      onChange(selectedHours, selectedMinutes,selectedaa);
    });
  }
  handleChangeaa = (itemValue) => {
    const { onChange } = this.props;
    this.setState({
      selectedaa: itemValue,
    }, () => {
      const { selectedHours, selectedMinutes ,selectedaa} = this.state;
      onChange(selectedHours, selectedMinutes,selectedaa);
    });
  }

  render() {
    const { selectedHours, selectedMinutes,selectedaa } = this.state;
    return (
      <View style={styles.container}>
        <Picker
          style={styles.picker}
          selectedValue={selectedHours}
          onValueChange={(itemValue) => this.handleChangeHours(itemValue)}
        >
          {this.getHoursItems()}
        </Picker>
        <Picker
          style={styles.picker}
          selectedValue={selectedMinutes}
          onValueChange={(itemValue) => this.handleChangeMinutes(itemValue)}
        >
          {this.getMinutesImtes()}
        </Picker>
        <Picker
          style={styles.picker}
          selectedValue={selectedaa}
          onValueChange={(itemValue) => this.handleChangeaa(itemValue)}
        >
          {this.getaa()}
        </Picker>
      </View>
    );
  }
}
