import React from 'react'
import './header.css'
import { FontIcon, Badge } from 'react-md'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.onClickBrand = this.onClickBrand.bind(this)
    this.onClickLogIn = this.onClickLogIn.bind(this)
    this.onClickSignUp = this.onClickSignUp.bind(this)
  }

  onClickBrand() {
    this.props.history.push('/')
  }

  onClickSignUp() {
    this.props.history.push('/signup')
  }

  onClickLogIn() {
    this.props.history.push('/login')
  }

  render() {
    return(
      <div className='header-container'>
        <div className='brand-section' onClick={this.onClickBrand}>
          <img className='logo' src={require('../../../Assets/images/CEBU/logo9v2.png')} alt='logo' />
        </div>
        <div className='layout-search-bar'>
          {/* <input className='landingpage-search' type='text' placeholder='Pangitaa imo forever diri.. sulayi lang gud, basin pa di-ay' /> */}
        </div>
        <div className='account-section'>
          {/* <div className='account-section-item notifications'>
            <Badge badgeContent={80} secondary badgeId="notifications-2">
              <FontIcon className='account-icon'>notifications</FontIcon>
            </Badge>
          </div> */}
          <div className='login-btn' onClick={this.onClickLogIn}>Login</div>
          <div className='sign-up-btn' onClick={this.onClickSignUp}>Create Account</div>
        </div>
      </div>
    )
  }
}

export default Header
