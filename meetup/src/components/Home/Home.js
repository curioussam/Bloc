import React, { Component } from 'react';
import MesgItem from '../MesgItem/MesgItem';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mesgs:'null',
    }
  }

	IsHome=(route) => {
	  if ((route === 'home')&&(this.state.mesgs==='null')) {
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

  render() {
 		return (
 			<div className="Home">
         <MesgItem 
         id={this.state.mesgs[0].id} 
         issue_time={this.state.mesgs[0].issue_time} 
         meet_time={this.state.mesgs[0].meet_time} 
         destination={this.state.mesgs[0].destination} 
         messages={this.state.mesgs[0].messages}/>
      </div>
 			);
	}
}

export default Home;
   // <MesgItem id={mesgs[0].id} issue_time={mesgs[0].issue_time} meet_time={mesgs[0].meet_time} destination={mesgs[0].destination} messages={mesgs[0].messages}/>