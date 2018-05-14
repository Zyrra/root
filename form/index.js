
import React, {Component} from 'react';
import "./style.css"

class Form extends React.Component {
	
	constructor(props){
		super(props);
		
		this.state = { login :'',
					  password: ''
					  
					 };
		
		// this.onLoginChange = this.onLoginChange.bind(this);
		
		// this.onPasswordChange = this.onPasswordChange.bind(this);
		
		// this.ondateOfArrivalChange = this.ondateOfArrivalChange.bind(this);
		
		// this.ondateOfDepartureChange = this.ondateOfDepartureChange.bind(this);
		
		// this.ontelNumberChange = this.ontelNumberChange.bind(this);
		
		//this.onSubmit = this.onSubmit.bind(this); - если метод в прототипе вызывается обернут в стрелку - то привязка bind  не нужна.
						
	}

	clicker = 5; // свойство в прототипе

	onSubmit = (e)=>{ 
				
	//let obj = JSON.stringify ({ login : this.state.login , password : this.state.password });
		
		let date = { name : this.state.login,
					password : this.state.password
						   		
				   };
	
		
		let myHeaders = new Headers ({ "Content-Type": "application/json; charset=utf-8"})
		
		let myInit = {
			method : 'GET',
			headers : myHeaders,
			credentials: 'include',
			mode : 'cors',
			cache : 'default',
			data : JSON.stringify(date)
		};
		
		const url = 'https://url/page1';
		
		fetch(url,myInit)
		.then ((res)=>{
			console.log(res.type)
			return res.json()
		})
		.then((data)=>{ console.log(data) })
		.catch ((err)=>{
			console.log(err)
		})
		
		
		console.log(date , 'сабмит формы')
		e.preventDefault();	 
	}
	
	
	
	onPasswordChange = (e)=>{
		this.setState({password: e.target.value});
	}
	
	onLoginChange = (e)=> {
      	this.setState({login: e.target.value});
    }
	

	render() {
      return (
 
        <form className = 'f1' onSubmit={this.onSubmit}> 
	      
		  <p><label> Логин: <input type="text" name="login" value={this.state.login}
                           onChange={this.onLoginChange}/></label></p>
		  
		  <p><label> Пароль: <input type="text" name="password" value={this.state.password}
                            onChange={this.onPasswordChange}/></label></p>
			          
		  <p><input type="submit" value="Submit" /></p>
        </form>
      )
    }
	
	
	
}
export default Form

