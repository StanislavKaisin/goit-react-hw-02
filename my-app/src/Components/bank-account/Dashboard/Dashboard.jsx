/* eslint-disable consistent-return */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import uuidv4 from 'uuid';
import Controls from '../Controls/Controls';
import Balance from '../Balance/Balance';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

import './Dashboard.css';

// console.log('uuidv4()= ', uuidv4());

// const INITIALSTATE = {
//   history: [],
//   balance: 0,
//   deposit: 0,
//   witdraw: 0,
//   inputValue: 0,
//   isDepositEnable: true,
//   isWithdrawEnable: true,
// };

export default class Dashboard extends Component {
  // static propTypes = {
  //   prop: PropTypes,
  // };

  state = {
    history: [],
    totalDeposit: 0,
    totalWithdraw: 0,
    balance: 0,
    inputValue: 0,
    isDepositEnable: true,
    isWithdrawEnable: true,
  };

  // create new operation function

  createNewOperation = typeOfOperation => {
    const dateOfOperation = new Date().toLocaleString();
    return {
      id: uuidv4(),
      type: typeOfOperation,
      amount: this.state.inputValue,
      date: dateOfOperation,
    };
  };

  // stopOperationOnZeroInput=()=>{
  //   if (this.state.inputValue===0) {
  //     alert('Введите сумму для проведения операции!');
  //     this.clearInput();
  //     return;
  //    }
  // }

  handleDeposit = () => {
    // console.log('Date.prototype.toLocaleString()= ', new Date().toLocaleString());

    // console.log('dateOfOperation= ', dateOfOperation);
    // console.log('this.state.inputValue= ', this.state.inputValue);
    /*
    const operation = {
      id:  uuidv4(),
      type: 'Deposit',
      amount: this.state.inputValue,
      date: dateOfOperation,
    }
    */
    const { inputValue } = this.state;
    if (inputValue === 0) {
      alert('Введите сумму для проведения операции!');
      this.clearInput();
      return;
    }
    const operation = this.createNewOperation('Deposit');
    // console.log('operation= ', operation);
    //
    this.setState(prevState => {
      // console.log('prevState= ', prevState);

      return {
        history: [operation, ...prevState.history],
        totalDeposit: prevState.totalDeposit + inputValue,
        balance: prevState.balance + inputValue,
      };
      // console.log('this.state= ', this.state);
      // console.log('this.state.history= ', this.state.history);
    });

    this.clearInput();
  };

  handleWithdraw = () => {
    if (this.state.inputValue === 0) {
      alert('Введите сумму для проведения операции!');
      this.clearInput();
      return;
    }
    const { inputValue, balance } = this.state;
    if (Math.abs(inputValue) > balance) {
      alert('На счету недостаточно средств для проведения операции!');
      this.clearInput();
      return;
    }
    // console.log('handleWithdraw= ');
    const operation = this.createNewOperation('Withdraw');

    this.setState(prevState => {
      return {
        history: [operation, ...prevState.history],
        totalWithdraw: prevState.totalWithdraw + inputValue,
        balance: prevState.balance + inputValue,
      };
      // console.log('this.state= ', this.state);
      // console.log('this.state.history= ', this.state.history);
    });
    this.clearInput();
  };

  handleInputChange = e => {
    const { value } = e.target;

    // console.log('value= ', value);
    // const { inputValue } = this.state;

    this.setState({
      inputValue: Number(value),
      isDepositEnable: !(Number(value) < 0),
      isWithdrawEnable: !(Number(value) > 0),
    });
  };

  clearInput = () => {
    this.setState({
      inputValue: 0,
      isDepositEnable: true,
      isWithdrawEnable: true,
    });
  };

  render() {
    // console.log('this= ', this);
    const {
      inputValue,
      totalDeposit,
      totalWithdraw,
      balance,
      isDepositEnable,
      isWithdrawEnable,
      history,
    } = this.state;
    // console.log('totalDeposit= ', typeof totalDeposit);
    // console.log('totalWithdraw= ', typeof totalWithdraw);
    // console.log('balance= ', balance);
    return (
      <div className="dashboard">
        <Controls
          onDeposit={this.handleDeposit}
          onWithdraw={this.handleWithdraw}
          onInputChange={this.handleInputChange}
          inputValue={inputValue}
          isDepositEnable={isDepositEnable}
          isWithdrawEnable={isWithdrawEnable}
        />
        <Balance
          balance={balance}
          deposit={totalDeposit}
          witdraw={totalWithdraw}
        />
        <TransactionHistory transactionHistory={history} />
      </div>
    );
  }
}
