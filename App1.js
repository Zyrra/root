import React, {Component} from 'react'
import massiv from "./massiv"
import ArticleList from "./articleList/index.js"
import "./style.css"

let MyArr = [
	{id: "0", hello: "world0" },
	{id: "1", hello: "world1" },
	{id: "2", hello: "world2" },
	{id: "3", hello: "world3" },
	{id: "4", hello: "world4" },
	{id: "5", hello: "world5" }
]    

class App extends Component {
	
	constructor(props){
		super(props)
		
		this.state = {
			reverted : true,
			AJAXarr : null
		}

	}

	revert = ()=>{
		this.setState({
			reverted: !this.state.reverted
		})
		
	}

	render(){
		//никогда нельзя менять ничего из внешних переменных, из того что приходит в props и все изменеия проводим в скопированных данных.
		

		let arr = this.state.reverted  ? massiv : massiv.slice().reverse()
		//не могу вызвать тут элемент массива
		let newArr = this.state.AJAXarr
		
		//console.log(newArr[0]) ошибка!

		return (
			<div className='mycontainer'>
					<div className='jumbotron'>
					<h1 className = "display-3">Privet</h1>
					App name
					<button className='btn' onClick = {this.revert}> Кнопка </button>
					</div>
					<br/>
					<ArticleList MyArr = {MyArr} AJAXarr = {newArr} arr = {arr} />
				
			</div>
			   
		)
	}

	componentDidMount(){ // реагируем на появление наешго компонента в реальном dom  и окончании фазы инициализации
		//console.log('был смонтирован')
	
			fetch('http://www.mocky.io/v2/5af83f20320000680086aeb8')
				.then((res)=>{
					return res.json();
				
				}) 
				.then((date)=>{
									
					this.setState({
						AJAXarr : date
					})

				})
				.catch((err)=>{
					console.log(err)
					
				})
			
	}

};

export default App