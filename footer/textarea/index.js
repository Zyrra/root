import React, {component} from 'react';

class Textarea extends React.Component{
	constructor(props){
		super(props)
		
		this.state = { message : 'текст сообщения',
					   prop1 : this.props.property	
					 };

	}
	
	onSubmit =()=>{
		console.log(this.state.message);
		
	}
	
	onInput= (e)=>{
		this.setState( {message : e.target.value} )
				
	}
	
	onClick=(e)=>{
		if ( e.target.tagName != 'DIV' ) return;
		e.target.classList.toggle('div-color');
	}
	
	render(){
		return(
			<div>
			<form onSubmit = {this.onSubmit} action = 'index.html' method = 'GET'  >
			
			<div onClick = { this.onClick }>
			<label for='textarea'>Кнопка</label>
			</div>
			<textarea onInput = {this.onInput} value = {this.state.message} id = 'textarea' name='textarea' placeholder = 'wewe'></textarea>
			<br/>
			<input type = 'submit' value = 'Кнопка' />
			
			</form>	
			
						
			</div>

		)
	}
	
	
}

export default Textarea;