/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

'use strict';

var React = require('react-native');
var Button = require('react-native-button');
var {Component, AppRegistry, StyleSheet, Text, View, TextInput,} = React;

class MonthlyCarLoan extends Component {
  constructor() {
    super();

    this.state = {
      CarPrice: 0,
      DownPayment: 0,
      LoanYear:0,
      LoanMonth:0,
      InterestRate:0,
    };
  }

  containerTouched(e) {
    this.refs.CarPrice.blur();
    this.refs.DownPayment.blur();
    this.refs.LoanYear.blur();
    this.refs.InterestRate.blur();
    return false;
  }

  calcMLP(e) {
    var { CarPrice, DownPayment, LoanYear, LoanMonth, InterestRate } = this.state;
    LoanMonth=LoanYear*12;

    var MLP = ((InterestRate/12*DownPayment)/(1-(Math.pow((12/(InterestRate+12)),LoanMonth))
    ).toFixed(2);
    var result = `Your Loan Monthly Payment is = ${MLP}`;
    this.setState({result});
  }

  render() {
    return (
      <View
        style={styles.rootContainer}
        onStartShouldSetResponder={this.containerTouched.bind(this)}
      >
        <Text style={styles.title}>
          Monthly Car Loan
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.textLabel}>
            Car Price:
          </Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={(CarPrice) => this.setState({CarPrice})}
            value={this.state.CarPrice}
            ref="CarPrice"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.textLabel}>
            Down Payment:
          </Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={(DownPayment) => this.setState({DownPayment})}
            value={this.state.DownPayment}
            ref="DownPayment"
          />
        </View>
        <View style={styles.inputContainer}>
        <Text style={styles.textLabel}>
          Loan Period (years):
        </Text>
        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          onChangeText={(LoanYear) => this.setState({LoanYear})}
          value={this.state.LoanYear}
          ref="LoanYear"
        />
      </View>
      <View style={styles.inputContainer}>
          <Text style={styles.textLabel}>
            InterestRate
          </Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={(InterestRate) => this.setState({InterestRate})}
            value={this.state.InterestRate}
            ref="InterestRate"
          />
        </View>
        <Button
          style={styles.calcButton}
          onPress={this.calcMLP.bind(this)}
        >
          Press me to calculate your Monthly Car Loan Payment
        </Button>
        <Text style={styles.textResult}>
          {this.state.result}
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 30,
    padding: 10,
    textAlign: 'center',
  },
  textLabel: {
    fontSize: 20,
  },
  textResult: {
    paddingTop: 20,
    fontSize: 20,
  },
  calcButton: {
    marginTop: 20,
  },
  textInput: {
    marginLeft: 10,
    padding: 5,
    height: 30,
    width: 180,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
});

AppRegistry.registerComponent('MonthlyCarLoan', () => MonthlyCarLoan);


