import React, {componet} from 'react';

class FetchReq extends React.Component{

	num = 0

	constructor(props){
		super(props)
		
		this.state = { date: 0 }
		
	}

	onClick = ()=>{
		//ФЕТЧ КАСТОМНЫЙ

		let date = { name: 'boris', surname : 'jangl'};

		let myHeaders = new Headers ({ "Content-Type": "application/json; charset=utf-8"})

		let myInit = {
			method : 'POST',
			headers : myHeaders,
			credentials: 'include',
			mode : 'cors',
			cache : 'default',
			data : JSON.stringify(date)
		};
		
		fetch( "http://www.mocky.io/v2/5ae9da643000004a005db24f", myInit )
		.then( (res)=>{
			return res.json();
		} )
		.then((date)=>{
			console.log(date);
		})

		//вариант фетч
		// fetch('http://www.mocky.io/v2/5ae9da643000004a005db24f')
		// .then((res)=>{
		// 	console.log (res.headers);
		// 	return res.json();	
			
		// 	//let prom =  Promise.reject(3333)
		// 	//return prom;
		// })
		// .then(
		// 	(data)=>{
		// 		console.log(data , '1 lvl')
		// 		return data;
		// 	}
		// )
		// .then((data)=>{
		// 	console.log(data , '2 lvl')
		// 	let str  = data.toString();
		// 	this.setState({ date : str })
		// })	
		// .catch((err)=>{console.log(err + '  это ошибка')})

	//вариант с xhr	

	// let url = "http://www.mocky.io/v2/5ae9da643000004a005db24f"	
	// let xhr = new XMLHttpRequest();
	
	// let date = { name: 'boris', surname : 'jangl'};

	// xhr.open ('POST', url, true )
	// xhr.send(JSON.stringify(date) );
	// // xhr.onreadystatechange = function(){
	// // 	if (xhr.readyState != 4) return;
	// // 	if (xhr.status != 200){
	// // 		console.log( xhr.status +' '+ xhr.responseText );
	// // 	}else{
	// // 		console.log(xhr.responseText);
	// // 	}

	// // }
	// xhr.onloadend = function(){
	// 	console.log(xhr.responseText)
	// 	console.log( xhr.status );
	// }
		
	}


	render(){

		return(
			<div className = 'ajaxDiv'  onClick = {this.onClick} >{this.state.date}</div>
		)
	}
}

export default FetchReq