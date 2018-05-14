
import React, {Component} from 'react';
import "./style.css"

class Flex extends React.Component {
	
	constructor (props){
		super(props)
				
	}
	
	render(){
		
		return(
			
			<div className = 'flex-conteiner'>
				<div className = 'flex-elem'>1</div>
				<div className = 'flex-elem' >2</div>
				<div className = 'flex-elem' >3</div>
				<div className = 'flex-elem' >4</div>
				<div className = 'flex-elem' >5</div>
				<div className = 'flex-elem' >6</div>
			</div>
		
			
		)
		
	} 
	
}

export default Flex