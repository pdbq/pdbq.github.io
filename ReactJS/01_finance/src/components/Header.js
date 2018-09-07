import React, { Component } from 'react';
import styled from 'styled-components';
//import moment from 'moment';

const Head = styled.div`
	
	text-align: center;
`;
const Button = styled.button`
	width: 24px;
	height: 24px;
	border: 1px solid #00f;
	border-radius: 50%;
	color: #00f;
	font-size: 19px;
	margin: 1px;
	&:hover {
		color: #f00;
		border: 1px solid #f00;
	}
`;

export class Header extends Component {
	state = {
		date: this.props.D.date
	};
	handleClickDeletedDay = () => {
		this.setState({date: this.state.date.subtract(1, 'day'),});
		this.props.newDays(this.state.date.daysInMonth() - this.state.date.get('date'));
	};

	handleClickAddDay = () => {
		this.setState({date: this.state.date.add(1, 'day')});
		this.props.newDays(this.state.date.daysInMonth() - this.state.date.get('date'));
		//console.log(format('DD.MM.YYYY'));
	};
	


	render() {
		const {date} = this.state;
    return (
    	<div>
      	<Head>
      		<h1>Бюджет на сегодня</h1>
      		<p>{date.format('DD.MM.YYYY')}</p>
      		<Button onClick={this.handleClickDeletedDay}>-</Button>
      		<Button onClick={this.handleClickAddDay}>+</Button>
      	</Head>
    	</div>
    );
  }
}

export default Header;