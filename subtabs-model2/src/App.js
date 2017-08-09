import React, { Component } from 'react';
import {Button,Carousel} from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
          <Model/>   
    );
  }
}
class Model extends Component {
    constructor(props)
    {
      super(props);
          this.state={
                navelements:[{name:'Latest',id:1},
                             {name:'Shoes',id:2},
                             {name:'Clothing',id:3},
                             {name:'Brands',id:4},
                             {name:'Skateboarding',id:5},
                             {name:'Jouranel',id:6},
                             {name:'sale',id:7} 
                             ],     
                    tabid:'',
                    taboutid:'',
                    activeimg:'',
                    activeContent:'false',
                    activeContent2:'true',
                    left:'',
                    right:'',
                    activateslider:'false',
              productimages:[{name:'capimage2',id:1,image:'capimage2.jpg'},
                             {name:'capimage3',id:2,image:'capimage3.jpg'},
                             {name:'capimage4',id:3,image:'capimage4.jpg'},
                             {name:'capimage5',id:4,image:'capimage5.jpg'}
                            ]
                    }    
             this.tabData=this.tabData.bind(this);
             this.tabOut=this.tabOut.bind(this);
             this.Click=this.Click.bind(this);
             this.Click2=this.Click2.bind(this);
             this.handleClick=this.handleClick.bind(this);
          }
       componentDidMount()
       {
          this.handleClick(1);
       }
       tabData(id)
       { 
           this.setState({tabid:id,taboutid:id});
       }  
       tabOut(id)
       {
           this.setState({taboutid:id});
       }
       handleClick(id)
       {
           this.setState({activeimg:id});
       }
       Click()
       {
           this.setState({activeContent:!this.state.activeContent});
       }
       Click2()
       {
          this.setState({activeContent2:!this.state.activeContent2})
       }
render(){
         var style={letterSpacing:'1px'}
         var n=this.state.navelements.map(function(element,index){
           return(
              <li key={index} onMouseEnter={() => {this.tabData(element.id)}}><a className={this.state.tabid===element.id ? 'activetab':''}>
                {element.name}</a></li>
            )
         }.bind(this));
         var v=this.state.productimages.map(function(img,index){
            return(
               <li key={index} onClick={() => {this.handleClick(img.id)}}><img src={require('./assets/images/'+img.image)} alt={img.name} width="100" height="150"/></li>
              )
         }.bind(this));
   return(
      <div className="container-fluid">
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
             <div className="navbar-header">
               <ul type="none" id="navleft">
                  <li onClick={this.slideClick}><i className="glyphicon glyphicon-menu-hamburger"></i></li>
               </ul>
            </div>
            <ul className="nav navbar-nav nav-right">
              <li><a className="navbar-brand" >flatspot</a></li>
              {n}
            </ul>
            <ul type="none" id="navicons" className="">
               <li><i className="glyphicon glyphicon-shopping-cart "></i></li>
               <li><i className="glyphicon glyphicon-search"></i></li>
            </ul>
          </div>
        </nav> 
        <div className={this.state.tabid !== this.state.taboutid ? 'hide' :'active'} id="maindiv">
           <div className={this.state.tabid === 2 ? 'active' : 'hide'} id="Shoes" onMouseLeave={this.tabOut}>
              <p>MOST POPULAR</p>
                <hr/>
                 <div className="row" id="row"> 
                    <div className="col-lg-4"> 
                       <ul type="none">
                         <li>Adidas</li>
                         <li>Astforflex</li>
                         <li>Black Shoes</li>
                       </ul>
                    </div>
                     <div className="col-lg-4">
                       <ul type="none">
                         <li>Converse</li>
                         <li>Huf</li>
                         <li>New Balance</li>
                       </ul>
                     </div>
                     <div className="col-lg-4">
                       <ul type="none">
                         <li>Nike SB Stefan Janoski</li>
                         <li>Nike SB</li>
                         <li>Vans</li>
                       </ul>
                    </div>
                </div>
                 <hr/>
                 <p id="view">VIEW ALL SHOES</p>
             </div> 
             <div className={this.state.tabid === 3 ? 'active' : 'hide'} id="Clothing" onMouseLeave={this.tabOut}>
                <p>CATEGORIES:</p><hr/>
                 <div className='row' id="row">
                    <div className="col-lg-4">
                       <ul type="none">
                          <li>Accessories</li>
                          <li>Bags</li>
                          <li>Beanies</li>
                          <li>Caps</li>
                          <li>Hats</li>
                       </ul>
                    </div>
                    <div className="col-lg-4">
                      <ul type="none">
                         <li>Jackets</li>
                         <li>Jeans</li>
                         <li>Shirts</li>
                         <li>Shorts</li>
                         <li>Sweatshirts</li> 
                      </ul>
                    </div>
                    <div className="col-lg-4">
                       <ul type="none">
                         <li>Sweatpants</li>
                         <li>Socks</li>
                         <li>T-Shirts</li>
                         <li>Trousers</li>
                       </ul> 
                    </div>
                 </div>
                 <hr/>
                 <p id="view">VIEW ALL CLOTHING</p>
             </div>
             <div className={this.state.tabid === 4 ? 'active' : 'hide'} id="Brands"  onMouseLeave={this.tabOut}>
               <div><p>MOST POPULAR</p></div><hr/>
               <div className="row" id="row">
                  <div className="col-lg-4">
                      <ul type="none">
                        <li>Adidas</li>
                        <li>Alltimers</li>
                        <li>Armor Lux</li>
                        <li>Belief</li>
                        <li>Ben Davis</li>
                        <li>Brixton</li>
                        <li>Bronze 56k</li>
                        <li>Butter Goods</li>
                        <li>Carhartt WIP</li>
                        <li>Champion</li>
                        <li>Converse</li>
                        <li>Dickies</li>
                        <li>Finisterre</li>
                      </ul>
                  </div>
                  <div className="col-lg-4">
                     <ul type="none">
                        <li>Flatspot</li>
                        <li>Gramicci</li>
                        <li>Hélas</li>
                        <li>Hockey Skateboards</li>
                        <li>HUF</li>
                        <li>Isle</li>
                        <li>Levi's</li>
                        <li>New Balance Numeric</li>
                        <li>Nike SB</li>
                        <li>Stefan Janoski</li>
                        <li>Palace</li>
                        <li>Pass Port</li>
                        <li>Patagonia</li> 
                     </ul>
                  </div>
                  <div className="col-lg-4">
                      <ul type="none">
                         <li>Polar Skate Co.</li>
                         <li>Quasi Skateboards</li>
                         <li>Rip N Dip</li>
                         <li>Satta</li>
                         <li>Stan Ray</li>
                         <li>Stanton St. Sports</li>
                         <li>Skateboard Cafe</li>
                         <li>Stussy</li>
                         <li>The Quiet Life</li>
                         <li>Thrasher</li>
                         <li>Vans</li>
                         <li>Yardsale</li>
                         <li>Vetra</li>
                      </ul>
                  </div>
               </div><hr/>
               <div><p id="view">VIEW ALL BRANDS</p></div>
             </div>
             <div className={this.state.tabid===5 ?'active' :'hide'} id="Skateboards" onMouseLeave={this.tabOut}>
               <hr/>
                <div className="row " id="row">
                  <div className="col-lg-4">
                   <ul type="none">
                      <li>Decks</li>
                      <li>Hardware</li>
                   </ul>
                 </div>
                 <div className="col-lg-4">
                   <ul type="none">
                     <li>Truckes</li>
                   </ul>
                 </div>
                 <div className="col-lg-4">
                   <ul type="none">
                     <li>Wheels</li>
                   </ul>
                 </div> 
               </div> <hr/>
               <div><p id="view">VIEW ALL SKATEBOARDING</p></div>
             </div>
             <div className={this.state.tabid === 6 ? 'active' : 'hide'} id="Jouranel" onMouseLeave={this.tabOut}>
               <hr/>
               <div className="row"> 
                  <div className="col-lg-4">
                     <p>Features</p>
                  </div>
                  <div className="col-lg-4">
                     <p>Blog</p> 
                  </div>             
               </div>
               <hr/>
            </div>    
        </div>
        <div className="row" id="productdetail">
           <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
             <h1>Adidas x Helas 4 Panel</h1>
             <h1>Cap - White</h1>
             <h1>Rs‌2,176.00</h1> 
             <div id="button"> 
               <p>Add to basket<i className="glyphicon glyphicon-menu-right pull-right"></i></p>
             </div>
              <div className="panel" id="Details">
               <div  id="description" >
                 <hr/>
                   <p onClick={this.Click}>Description 
                     <span  className={this.state.activeContent ? 'active' : 'hide'}>    
                       <i className="glyphicon glyphicon-plus pull-right" id="plus"></i>
                     </span>
                     <span className={this.state.activeContent ? 'hide' : 'active'}>   
                       <i className="glyphicon glyphicon-minus pull-right" id="minus"></i>
                     </span>
                   </p> 
                   <div id="descontent" className={this.state.activeContent ? 'active' :'hide'}>
                    <ul type="none">
                       <li><h4>Adidas x Helas 4 Panel Cap</h4></li>
                       <li>Adidas x Heals plain knit polyester 4 panel in white with 3 stripes in<br/> contrast green</li><br/>
                       <li>Strapback adjustment, embroidered Adidas x Helas branding.</li><br/>
                       <li>Woven Adidas clamp label on the back.</li><br/>
                       <li>One size.</li><br/>
                       <li>View more Adidas at Flatspot</li>
                    </ul>
                 </div>
              </div>
               <hr/>
              <div id="product"> 
                   <p onClick={this.Click2}>Product Details
                     <span className={this.state.activeContent2 ? 'active' : 'hide'}>
                       <i className="glyphicon glyphicon-minus pull-right" id="plus"></i>
                     </span>
                     <span className={this.state.activeContent2 ? 'hide' :'active'}> 
                       <i className="glyphicon glyphicon-plus pull-right" id="minus"></i>
                     </span>  
                    </p>  
                    <div id="productcontent" className={this.state.activeContent2 ? 'hide' : 'active'}>
                     <ul>
                        <li>100% Polyester</li>
                        <li>Plain Knit Material</li>
                        <li>Contrast 3-Stripes</li>
                        <li>Strapback Adjustable</li>
                        <li>Embroidered Co-Branding</li>
                        <li>Woven Clamp Labels</li>
                        <li>One Size</li>
                     </ul>
                   </div>
              </div>
               <hr/> 
              <div id="mainwishlist"> 
                 <div id="wishlist">
                     <a>Add to wishlist</a>
                 </div>
                 <div id="buttons">  
                     <Button bsStyle="primary" bsSize="xsmall"><i className="glyphicon glyphicon-thumbs-up"></i>like 1</Button>&nbsp;&nbsp;
                     <Button bsStyle="primary" bsSize="xsmall">share</Button>&nbsp;&nbsp;&nbsp;
                     <Button bsStyle="primary" bsSize="xsmall">Tweet</Button> &nbsp;&nbsp;&nbsp;
                     <Button bsStyle="default" bsSize="xsmall">G+ share</Button>
                 </div>
                 <hr/>
              </div>
              <div>
                <p style={style}>RECENTLY VIEWED</p>
                 <img src={require('./assets/images/capimage1.jpg')} alt="capimage1" width="100" height="100"/>
              </div>
           </div>
        </div> 
         <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"> 
           <div>
              <div className={this.state.activeimg === 1 ? 'active' : 'hide'}>
                 <img width={500} height={500} alt="900x500" src={require('./assets/images/capimage2.jpg')}/>
              </div>
              <div className={this.state.activeimg === 2 ? 'active' : 'hide'}>
                 <img width={500} height={500} alt="900x500" src={require('./assets/images/capimage3.jpg')}/>
              </div>
              <div className={this.state.activeimg === 3 ? 'active' : 'hide'}>
                 <img width={500} height={500} alt="900x500" src={require('./assets/images/capimage4.jpg')}/>
              </div>
              <div className={this.state.activeimg === 4 ? 'active' : 'hide'}>
                 <img width={500} height={500} alt="900x500" src={require('./assets/images/capimage5.jpg')}/>
              </div>
          </div> 
          <div>
            <ul id="smallimages">
              {v}
            </ul>
          </div>  
        </div>
     </div>
   </div>  
  );
 }
}
export default App;
