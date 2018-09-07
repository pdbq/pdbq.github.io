import React, { Component } from 'react';
import styled from 'styled-components';

const Block = styled.div`
	margin-top: 20px;
	text-align: center;
`;

const P = styled.p`
	font-size: 40px;
	color: #2F4F4F;
	font-weight: bold;
`;

export class Money extends Component {
	render() {
		const fullBalans = this.props.balans.balans;
		const date = this.props.balans.date;
		const balans = this.props.balans.showBalans;
		//const days = this.props.balans.days;

		let newShowBalans = balans + date.get('date') * (fullBalans / date.daysInMonth());

    return (
    	<Block>
    		<P>{newShowBalans.toFixed(2)} $</P>
  		</Block>
    );
  }
}

export default Money;