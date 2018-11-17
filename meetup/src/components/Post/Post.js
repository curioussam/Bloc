import React from 'react';
import './Post.css';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }

  render() {
    return (
      <article className="mw6 br3 ba b--black-10 mv4 w-100 w-50-m w-25l shadow-5 center">
        <main className="pa4 black-80">
       <form class="pa4 black-80">
        <div className="mt3">
          <label className="db fw6 lh-copy f6" htmlFor="Message">Message</label>
          <textarea 
            className="pa2 ba bg-transparent hover-bg-white mw6 w-100" 
            style={{height:'100px'}}
            id="Message" 
            name="Message" 
            placeholder="Write something.." >
          </textarea>
        </div>
        <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="des">Destination</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-white w-100"
                  type="text"
                  name="des"
                  id="des"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>

        </form>
                       <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Post"
              />
            </div>
        </main>
      </article>
    );
  }
}
export default Post;