import React, {component} from 'react';



//ниже идущие компоненты реализуют логику поднятия/передачи состояни я к родителю
class Input extends React.Component{ //это потомок
	
	constructor(props){
		super (props)
		this.onChange = this.onChange.bind(this);
		
		
	} 
	
	onChange(e){
				
		this.props.fooParent( e.target.value ) 	
	}
		
	
	render(){
		return (
			<form >
						
			<label for = {this.props.name} >Поле ввода 1</label>
			<input onChange = {this.onChange}  id = {this.props.name} value = {this.props.numer} type = 'text'/>
	
			</form>
		)
	}
	
}


class Calc extends React.Component{ //это родитель
	
	constructor(props){
		super(props)
		
		this.state = { number : '' };
		this.onChangeParent = this.onChangeParent.bind(this);
		
	}
	
	onChangeParent(num){ 
		
		this.setState({number : num})
		
	}
	
	
	render(){
		return(
			<div>
			<Input name = 'lab1' fooParent = {this.onChangeParent} numer = {this.state.number} />
			<Input name = 'lab2' fooParent = {this.onChangeParent} numer = {this.state.number} />
			<Input name = 'lab3' fooParent = {this.onChangeParent} numer = {this.state.number} />
			</div>
		)
	}
	
}
			
export default Calc			