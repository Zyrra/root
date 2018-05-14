
import React, {Component} from 'react';
import "./style.css"
import Menu from "./menu/index.js"
import Flex from '../flex/index.js'
import Slider from './slider/index.js'



class Main extends React.Component {
	
	constructor (props){
		super(props)
				
	}
	
	render(){
		
		return(
			
			<div className = 'main clear-fix'>
				<div className = 'column1'>
				<Menu/>
				</div>
				<div className = 'column2'>
				<Slider/>
				</div> 
			</div>
		
			
		)
		
	} 
	
}

export default Main