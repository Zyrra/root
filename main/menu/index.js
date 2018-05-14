import React , {component} from 'react';

class Menu extends React.Component{

	constructor(props){
		super(props)
		
		
		
	}
	
	render(){
		return(
		    <ul class = 'menu'>
				<li><a href="./page1.html"> О компании</a>
					<ul>
						<li><a href = '../img/img1.jpg'>Разработка </a></li>
						<li><a href = './img/jpg1.jpg'>Продвижение </a> </li>
						<li><a href = '../img/jpg1.jpg'>Контекст </a></li>
					</ul>
				</li>
				<li> <a href = '../img/jpg1.jpg'>Услуги</a></li>
				<li><a href = '../img/jpg1.jpg'>Сотрудники</a></li>
				<li><a href = '../img/jpg1.jpg'>Контакты</a></li>
        	</ul>  
					
		)
	}
}

export default Menu