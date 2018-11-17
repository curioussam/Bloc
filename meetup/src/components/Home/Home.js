import React, { Component } from 'react';
import MesgItem from '../MesgItem/MesgItem';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mesgs:'012345678910',
    }
  }

	IsHome=(route) => {
	  if ((route === 'home')&&(this.state.mesgs === '012345678910')) {
	  	console.log('route');
	  	console.log(this.getData());
    } 
    console.log('route',route);
    console.log(this.state.mesgs);
	}

	getData=()=>{
  	return (
  	fetch('http://localhost:3001/home/1')
  	.then(response=>response.json())
  	//.then(data=>{console.log(data)})
  	.then(data=>{this.setState({mesgs: data})})
  	)
	}

  componentDidMount() {
  	const { onRouteChange } = this.props;
  	this.IsHome(onRouteChange);
    console.log('mount');
  }
  
  createElements(n){
    var elements = [];
    var i=0;
    for(i =0; i < n; i++){
        console.log(i);
        elements.push(
          <MesgItem 
         id={this.state.mesgs[i].id} 
         issue_time={this.state.mesgs[i].issue_time} 
         meet_time={this.state.mesgs[i].meet_time} 
         destination={this.state.mesgs[i].destination} 
         messages={this.state.mesgs[i].messages}
           />
          );
    }
    return elements;
  }

 
  render() {

 		return (
      <div>
      {this.componentDidMount()}
           <ul>
        {this.createElements(8)}
      </ul>
      </div>
 			);
	}
}

export default Home;
   // <MesgItem id={mesgs[0].id} issue_time={mesgs[0].issue_time} meet_time={mesgs[0].meet_time} destination={mesgs[0].destination} messages={mesgs[0].messages}/>
   // <div className="Home">
         
   //    </div>