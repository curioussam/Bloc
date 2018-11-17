import React, { Component } from 'react';
import img from './img.jpg';
import './MesgItem.css'

class MesgItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  render() {
  	const {id,issue_time, meet_time, destination, messages }=this.props;
	    return (
	    <div className="tc bg-white dib br2 pa1 pv0 ma2 w-50 grow bw2 shadow-5">
					<main className="mw6 center">
					  <article>
					    <a className="link dt w-100 bb b--black-10 pb1 mt2 dim" href="#0">
					            <div className="dtc w3">
          <img style={{height:'50px',width:'50px'}} alt='logo' src={img}/>
        </div>

					      		

			    <div className="dt w-100 mt1">
			      <div className="dtc">
			        <h1 className="f7 f4-ns mv0">{id}</h1>
			      </div>
			      <div className="dtc tr">
			        <h3 className="f7 mv0">{issue_time}</h3>
			      </div>
			    </div>



					    </a>

      <section className="pt1 pb1">
        <p className="times lh-copy measure f5 mt0" >
           {messages} 

        </p>
      </section>

      <h2 className="f6 mt0 mb0 black-60" >{destination}</h2>
					  </article>
					  <div className="join">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Join"
              />
            </div>
					</main>
			</div>
	    )
    }
}

export default MesgItem;

