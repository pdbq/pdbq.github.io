import React, { Component } from 'react';
import styled from 'styled-components';

const Block = styled.div`
	text-align: center;
	margin-top: 30px
`;

const Span = styled.span`
	display: inline-block;
	width: 150px;
	text-align: left;
`;

const Pr = styled.p`
	color: red;
`;

const Pg = styled.p`
	color: green;
`;

export class TableTransaction extends Component {
	render() {
		const arr = this.props.transaction.map((item, index) => {
			if(item.sum < 0)
				return <Pr key={index}><Span>{item.date}</Span><Span>{item.sum} $</Span><Span>{item.category}</Span></Pr>;
			return <Pg key={index}><Span>{item.date}</Span><Span>{item.sum} $</Span><Span>{item.category}</Span></Pg>;
		});
    return (
  		<Block>
    		{arr}
  		</Block>
    );
  }
}

export default TableTransaction;