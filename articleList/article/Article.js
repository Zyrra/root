import React, {Component, PureComponent}  from 'react';
import "./style.css"
// жизненный цикл элемента с состоит из следующих этапов - инициализация потом->  

//обновление : изменение состояния( у родителя или самого элемента):

//если родитель изменяет потомка, то на потомке вызываентся метод 
// componentWillReceiveProps(nextProps) - этот метод передаст новые props с которыми стоится виртуальный dom. 

//Потом вызывается 
//shouldComponentUpdate(nextProps, nextState) - позволяет в ручном режиме управлять компонентом, перестраивая его или нет -> 
//далее вызывается 

//componentWillUpdate(nextProps, nextState) - который сообщает о том что сейчас будем перестраивать виртуальный dom, новые state и props готовы. -> 
//далее вызывается render()  - >

// componentDidUpdate(prevProps, prevState) - данный метод вызывается уже по отрисовке элемента. Обчно он требуется для того что бы получить данные с уже отрисованного элемента - размеры на экрани, координаты и т.п.

//последний этап Удаление - метод componentWillUnmount() - тут удаляем компонент.

class Article extends Component {

	constructor(props){
		super(props)

		this.state = {
			count : 0,
			gretting : null
			
		}

	} 


	increment = ()=>{
		this.setState({
			count: ++this.state.count
			
		})	

	}

	// shouldComponentUpdate(nextProps, nextState){ //должен возвращать true или false
	// //этим методом можно полностью запретить изменение элемента	
	// //существует для того что бы запрещать отрисовку не изменяемых элементов. Т.е. если от родителя детям идут props то эти props идут во всех детей, и значит перестраивается виртуальный dom для всех эоементов. Этого можно избежать. 

	// return this.state.isOpen !== nextState.isOpen;

	// }

	//componentWillMount(){
		//зачастую используется для отправки данных на сервер, например отправка запраса за нашей статьей
		//console.log('компонент будет смонтирован')		
	//}

	// componentWillReceiveProps(nextProps){ // тут проверяем props от родителя
	// 	//тут делаем так что бы только первая статья при реверсе была открыта
	// 	if(nextProps.defaultOpen !== this.props.defaultOpen  ){
	// 		this.setState({
	// 			isOpen : nextProps.defaultOpen
	// 		})
	// 	}
	// }



	render(){

		let time = new Date()
		let timeNow =  time.getFullYear()+'.'+time.getMonth()+'.'+time.getDate() 
		//тут отрисовка по условию элемента
		//let elemArticle = this.state.isOpen && <Article style = {style} article = { this.props.arr[0] } />
		//<h5>{this.props.article.text}</h5>
		
		return ( // render единственная задача - построить виртуальный dom нашего компонента

			<div className='my-card'>
				<button onClick={this.increment}>
				кнопка
				</button>
				{this.state.count}
				<button className = 'my-button' onClick = {this.props.onBattonClick} >
					{this.props.isOpen ? 'закрыть': 'открыть'}
				</button>
				<p>{this.props.article.id}</p>
				<p>{this.props.article.title}</p>
				<h5>{this.props.isOpen ? this.props.article.text: null }</h5>
				<p>{this.props.MyArr.hello}</p>
				<div>

				{timeNow}	
			</div>
			</div>
			
			)	
	}	
		//после построения виртуального dom он будет помещен в реальный dom (видимо через (render (<App/>, document.getElementById('root'))) из index.js ), после чего будет вызван метод 

	// componentDidMount(){ // реагируем на появление наешго компонента в реальном dom  и окончании фазы инициализации
	// 	//console.log('был смонтирован')
	// 			fetch('http://www.mocky.io/v2/5af837c23200004e0086aeac')
	// 			.then((res)=>{
	// 				return res.json();
				
	// 			}) 
	// 			.then((date)=>{
	// 				let AJAX = date; 
					

	// 				this.setState({
	// 					gretting : date.hello
	// 				})

	// 			})
	// 			.catch((err)=>{
	// 				console.log(err)
					
	// 			})
	// }
	

}
	




export default Article