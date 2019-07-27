import React from 'react'
import { TextField } from 'react-md'
import './signup.css'

class SignUp extends React.Component {
  constructor(props) {
    super(props)

    this.toLogin = this.toLogin.bind(this)
  }

  toLogin() {
    this.props.history.push('/login')
  }

  render() {
    return(
      <div className='signup-container'>
        <div className='signup-box'>
          <div className='lef-content'>
            <div>
              <img className='logo' src={require('../../Assets/images/CEBU/logo7v2.png')} alt='logo' />
              <p>Traveling made with ease.</p>
            </div>
            <div className='content-paragraph'>
              <span className='heading'>The spectacle before us was indeed sublime.</span>
              <div className='content-text'>
                Apparently we had reached a great height in the atmosphere, for the sky was a dead black,
                and the stars had ceased to twinkle.
                By the same illusion which lifts the horizon of the sea to the level of
                the spectator on a hillside, the sable cloud beneath was dished out,
                and the car seemed to float in the middle of an immense dark sphere,
                whose upper half was strewn with silver. Looking down into the dark gulf below,
                I could see a ruddy light streaming through a rift in the clouds.
              </div>
            </div>
          </div>
          <div className='right-content'>
            <div className='create-account'>
              <span>Create Account</span>
            </div>
            <div className='form-container md-grid'>
              <TextField
                id="floating-center-title"
                label="First Name"
                lineDirection="center"
                className="md-cell md-cell--6 md-cell--bottom custom-text-field"
              />
              <TextField
                id="floating-center-title"
                label="Last Name"
                lineDirection="center"
                className="md-cell md-cell--6 md-cell--bottom custom-text-field"
              />
              <TextField
                id="floating-center-title"
                label="User Name"
                lineDirection="center"
                fullWidth
                className="md-cell md-cell--12 md-cell--bottom custom-text-field"
              />
              <TextField
                id="floating-center-title"
                label="Email Address"
                lineDirection="center"
                fullWidth
                className="md-cell md-cell--12 md-cell--bottom custom-text-field"
              />
              <TextField
                id="floating-center-title"
                type='password'
                label="Password"
                lineDirection="center"
                fullWidth
                className="md-cell md-cell--12 md-cell--bottom custom-text-field"
              />
            </div>
            <div className='save-signup-btn'><span>Sign Up</span></div>
            <div className='link-to-login' onClick={this.toLogin}>
              <span>Already have an account? Click here to Log In.</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp
