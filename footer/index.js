
import React, {Component} from 'react';
import Flex from '../flex/index';
import Textarea from './textarea/index';
import Calc from "./TestComponents/index";
import FetchReq from "./reqFetch/index";
import "./style.css";

class Footer extends React.Component {
	
	constructor (props){
		super(props)
		
		this.state = {num : 500	 }
				
	}
	
	render(){
		
		return(
			
			<div className = 'footer' property = '4ty'>
			
			{this.state.num}
			
			<Flex/>
			<Textarea />
			<Calc/>
			<FetchReq/>
			</div>
		
			
		)
		
	} 
	
}

export default Footer 