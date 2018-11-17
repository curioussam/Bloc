import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import Post from './components/Post/Post';
import MesgItem from './components/MesgItem/MesgItem';
import Home from './components/Home/Home';

import './App.css';
import 'tachyons';
import DateTimePicker from 'react-datetime-picker';
import Particles from 'react-particles-js';
import flatpickr from "flatpickr";

const  ParticlesParams={
  "particles": {
    "number": {
      "value": 30,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 4,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

// <Signin />
class App extends Component {
	constructor(){
		super();
		this.state={
			route:'Signin'
		}
	}

  // componentDidMount(){
  // 	return (
  // 	fetch('http://localhost:3001/')
  // 	.then(response=>response.toString())
  // 	.then(data=>console.log(data))
  // 	)
  // }

	onRouteChange=(route)=>{this.setState({route: route})};

  render() {
    return (
      <div className="App">
      <Particles className='particles'
      params={ParticlesParams}/>
      {this.state.route==='Signin' 
       ?  <Signin onRouteChange={this.onRouteChange}/>
       :  <div>
	        <Home onRouteChange={this.state.route}/>
					<Navigation />
					</div>
      }
      </div>
    );
  }
}
// <Signin />
//<Register />
// <Post />
// <DateTimePicker
//     onChange={this.onChange}
//     value={this.state.date}
// />
// class App extends Component {
// 	constructor(){
// 		super();
// 		this.state={
// 			date: new Date(),
// 			route:'Signin'
// 		}
// 	}
// 	onChange = date => this.setState({ date })

//   render() {
//     return (
//       <div className="App">
//       <Particles className='particles'
//       params={ParticlesParams}/>
//       <MesgItem/>
//       </div>
//     );
//   }
// }

export default App;
