import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
	margin-top: 15px;
`;

const Block = styled.div`
	text-align: center;
	margin: 5px;
`;

const Input = styled.input`
	width: 150px;
	height: 20px;
	border-radius: 5px;
	border-color: #66CDAA;
	padding-left: 5px;
	color: #191970;
`;

const Button = styled.button`
	width: 100px;
	height: 30px;
	font-size: 16px;
	background-color: #006400;
	color: #FF4500;
	font-size: 24px;
	font-weight: bold;
	border: none;
	border-radius: 10px;
	&:hover {
		border: 1px solid #FF8C00;
		color: #FF8C00;
	}
	&:disabled {
		background-color: #8FBC8F;
		color: #FFA07A;
		&:hover {
			border: none;
		}
	}
`;

export class Expanse extends Component {
	state = {
		transaction: null,
		category: null,
		moneyIsEmpty: true,
		categoryIsEmpty: true
	};

	handleChangeInput = (fieldName ,event) => {

		if(event.target.value.trim().length > 0){
			this.setState({[''+fieldName]: false});
		} else {
			this.setState({[''+fieldName]: true});
		}
		if(event.target.name === 'transaction' && (isFinite(event.target.value.trim()))) {
			this.setState({[event.target.name]: event.target.value.trim()});
		} else if(event.target.name === 'category') {
			this.setState({[event.target.name]: event.target.value.trim()});
		}
	};

	handleEnter = () => {
		const {onSubmit} = this.props;
		const {transaction, category} = this.state;

    onSubmit(-1 * Math.abs(parseFloat(transaction)), category);
    this.setState({transaction: null, category: null, moneyIsEmpty: true, categoryIsEmpty: true});
	};

	render() {
		const {transaction, category, moneyIsEmpty, categoryIsEmpty} = this.state;
    return (
  		<Div>
  			<Block>
		    	<Input 
	  				name='transaction' 
	  				onChange={this.handleChangeInput.bind(this, 'moneyIsEmpty')}  
	  				value={transaction || ''}
	  				placeholder='Ведите расход'
	  			/>
	  		</Block>
	  		<Block>
		    	<Input 
						name='category' 
						onChange={this.handleChangeInput.bind(this, 'categoryIsEmpty')}  
						value={category || ''}
						placeholder='Ведите категорию'
					/>
				</Block>
				<Block>
					<Button onClick={this.handleEnter} disabled={moneyIsEmpty || categoryIsEmpty}>Внести</Button>
				</Block>
			</Div>
    );
  }
}

export default Expanse;