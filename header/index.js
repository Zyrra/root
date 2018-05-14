
import React, {Component} from 'react';
import Form from '../form/index.js'
import "./style.css"

class Header extends React.Component {
	
	constructor (props){
		super(props)
		
		this.state = {num : 12}
				
	}
	
	render(){
		
		return(
			
			<div className = 'header'>
			<Form/>
			</div>
		
			
		)
		
	} 
	
}

export default Header