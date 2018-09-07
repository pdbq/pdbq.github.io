import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
//import styled from 'styled-components';

import Header from './components/Header';
import Money from './components/Money';
import Main from './components/Main';
import TableTransaction from './components/TableTransaction';

class App extends Component {
  state = {
    date: moment(),
    arr: [],
    balans: 0,
    showBalans: 0,
    days: moment().daysInMonth()-moment().get('date')
  };

  handleSubmitTransaction = (sum, category) => {
    const {date, arr} = this.state;

    const newTransaction = {
      date: date.format('DD.MM.YYYY'),
      sum: sum,
      category: category 
    }

    

    const newTransactions = [...arr];
    newTransactions.push(newTransaction);
    newTransactions.sort(function (a, b) {
      if (a.date > b.date) {
        return 1;
      }
      if (a.date < b.date) {
        return -1;
      }
      // a должно быть равным b
      return 0;
    });

    let newBalans = this.state.balans + sum; 
    let newDays = date.daysInMonth() - date.get('date');

    //console.log(newShowBalans);

    this.setState({
      arr: newTransactions,
      balans: newBalans,
      
      days: newDays
    });
  };

  handleNewDays = days => {
    this.setState({days: days+1});
  };

  render() {
    return (
      <div>
        <Header D = {this.state} newDays = {this.handleNewDays}/>
        <Money balans = {this.state} />
        <Main onSubmit = {this.handleSubmitTransaction} />
        <TableTransaction  transaction={this.state.arr} />
      </div>
    );
  }
}

export default App;
