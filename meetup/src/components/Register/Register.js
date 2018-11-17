import React from 'react';

class Register extends React.Component {
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
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Confirm Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}
//  render() {
//     return (
// <div class="bg-blue h-100">

//   <div class="pv4 mid-gray sans-serif">
//     <div class="w-90 w-80-m w-50-l center cf cover bg-top bg-center shadow-1 bg-light-gray" style="background-image: url(https://source.unsplash.com/MTJxRri1UiI/800x600)">

//       <div class="w-80 w-70-m w-60-l fr bg-white">
//         <header class="pa3 bb b--light-gray relative">
//           <h1 class="b ma0 f3">Sign Up</h1>
//         </header>
//         <form id="register-form" action="" class="ph3 pt3 pb4 f7">
//           <div class="mb3">
//             <label for="" class="db ttu b lh-copy">Username</label>
//             <input name="username" type="text" class="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
//           </div>
//           <div class="mb3">
//             <label for="" class="db ttu b lh-copy">Email</label>
//             <input name="email" type="email" class="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
//           </div>
//           <div class="mb4">
//             <label for="" class="db ttu b lh-copy">Password</label>
//             <input name="password" type="password" class="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
//           </div>
//           <div class="mb3 tc f6">
//             Do you have an account? <a href="#" class="blue ph1">Log In Now!</a>
//           </div>
//           <div class="tc">
//             <input type="submit" value="Sign Up" class="ttu bn pv3 ph4 f6 bg-blue white b br-pill pointer grow" />
//           </div>
//         </form>
//       </div>
//     </div>
//     <div class="tc white mt4 f6">
//       Based on <a target="_blank" href="https://dribbble.com/shots/3150554-Sign-Up" class="lightest-blue">this shot</a>.
//     </div>
//   </div>

// </div>
//   );
//   }
// }
export default Register;