import React, { Component } from 'react';
import styled from 'styled-components';
import Expanse from './Expanse';
import Incones from './Incones';

const Nav = styled.div`
	width: 100%;
	text-align: center;
	margin-top: 20px;
`;

const LineStateNav = styled.span`
	margin: 5px;
	cursor: ${({selected}) => selected ? 'default' : 'pointer'};
	border-bottom: ${({selected}) => selected ? '1px solid green' : 'none'};
	font-weight: ${({selected}) => selected ? 'bold' : 'normal'};
	color: ${({selected}) => selected ? 'green' : 'black'};
`;

export class Main extends Component {
	state = {
		navSelected: 'expanse'
	};

	handleNavClick = event => {
		this.setState({navSelected: event.target.getAttribute('name')});
	};

	render() {
		const {navSelected} = this.state;
    return (
    	<div>
	    	<Nav>
	    		<LineStateNav name="expanse" onClick={this.handleNavClick} selected={navSelected==="expanse"}>
	    			Расходы
	    		</LineStateNav>
	    		<LineStateNav>
	    			|
	    		</LineStateNav>
	    		<LineStateNav name="incones" onClick={this.handleNavClick} selected={navSelected==="incones"}>
	    			Доходы
	    		</LineStateNav>
	    	</Nav>
	    	{navSelected === 'expanse' ? <Expanse onSubmit={this.props.onSubmit}/> : <Incones onSubmit={this.props.onSubmit}/>}
    	</div>
    );
  }
}

export default Main;