import React, {Component} from 'react'
import Article from './article/Article.js'
import "./style.css"

 class ArticleList extends Component {
	
	constructor(props){
		super(props)

		this.state = {
			openArticleId : null
			//AJAXarr: this.props.AJAXarr - не копирует!
		}
	}

	// componentWillReceiveProps(nextProps){
	// 	this.setState({
	// 		AJAXarr : nextProps.AJAXarr[0]
	// 	})
	// 	console.log(nextProps.AJAXarr)
	// }

	handleClick = ( openArticleId )=>{
		
		this.setState({
			openArticleId : this.state.openArticleId === openArticleId ? null : openArticleId
		})
	}

	render(){ //

	
		//формируем список
		
		// let newArr = this.props.arr.map( (article, index ) => { 
		// 	return <Article  key = {article.id} defaultOpen = {index == 0 }  article = {article} />
		// });

		let newArr = this.props.arr.map( (article, index ) => { 
			
		return (
			<Article
			onBattonClick = {this.handleClick.bind(this, article.id)}  
			key = {article.id} 
			isOpen = {this.state.openArticleId == article.id }  
			article = {article}
			MyArr = {this.props.MyArr[index]} 
			/>
		)
		})


		return (
			<div className = 'my-container'>
				{newArr}
			</div>
		)
	}



 }



export default ArticleList