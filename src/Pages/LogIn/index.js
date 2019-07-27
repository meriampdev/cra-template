import React from 'react'
import { TextField } from 'react-md'

class LogIn extends React.Component {
  constructor(props) {
    super(props)

    this.toSignUp = this.toSignUp.bind(this)
  }

  toSignUp() {
    this.props.history.push('/signup')
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

            </div>
          </div>
          <div className='right-content'>
            <div className='create-account'>
              <span>Log In</span>
            </div>
            <div className='form-container md-grid'>
              <TextField
                id="floating-center-title"
                label="Username"
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
            <div className='save-signup-btn'><span>Log In</span></div>
            <div className='link-to-login' onClick={this.toSignUp}>
              <span>Dont Have an Account? Click here to Sign Up.</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LogIn
