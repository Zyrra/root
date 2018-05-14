import React, {components} from 'react';


    // function Img(props){
    //      let img = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg' ];

    //      const items = img.map((i) =>
        
    //       <div class='img' style = {{backgroundImage : 'url(img/'+i+')'}}>{i}</div>);
   
    //      return items;
    // } 


    function Img(){

           let img = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg' ];

           let items = [];

           for(let i = 0; i < img.length; i++ ){
              items.push(
              <div class='img' style = {{backgroundImage : 'url(img/img'+ i +'.jpg)'}}>{i}</div>);
           }
           
           return items;
    }   



class Slider extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            marginLeft : 0,
                
        }
        this.num = 0
    }


    clickLeft =()=>{
        
        if ( this.state.marginLeft == -1200 )  return 
        this.setState({
              marginLeft : this.state.marginLeft - 300
        }) 
        console.log(this.num)
        this.num++
    }

    clickRigth = ()=>{
        
        if ( this.state.marginLeft > -300 ) return;
        this.setState({
              marginLeft : this.state.marginLeft + 300
        }) 
        console.log(this.num)
        this.num--
      }

    // <div class="wrapper"  id="wrapper" style = {{marginLeft: this.state.marginLeft +'px'}} >
    //                     <div class="img" style = {{backgroundImage : 'url(img/img1.jpg)'}}>111</div>
    //                     <div class="img" style = {{backgroundImage : 'url(img/img2.jpg)'}}>222</div>
    //                     <div class="img" style = {{backgroundImage : 'url(img/img3.jpg)'}}>333</div>
    //                     <div class="img" style = {{backgroundImage : 'url(img/img4.jpg)'}}>444</div>
    //                     <div class="img" style = {{backgroundImage : 'url(img/img5.jpg)'}}>555</div>
    // </div>

  

    render(){
        return(
            <div>
                <div class="container">{this.num}
                    <div class="wrapper"  id="wrapper" style = {{marginLeft: this.state.marginLeft +'px'}} >
                        <Img/>
                    </div>                                       
	            </div>
                <div class="button-cont">
                    <div class="button-left" id="buttonLeft" onClick = {this.clickLeft}>лево</div>
                    <div class="button-right" id="buttonRight" onClick = {this.clickRigth}>право</div>
                </div>
            </div>
        )
    }

};

export default Slider;