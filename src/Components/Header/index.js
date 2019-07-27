import React from 'react'
import './header.css'
import { FontIcon, Badge } from 'react-md'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.onClickBrand = this.onClickBrand.bind(this)
  }

  onClickBrand() {
    this.props.history.push('/')
  }

  render() {
    return(
      <div className='header-container'>
        <div className='brand-section' onClick={this.onClickBrand}>
          <img className='logo' src={require('../../Assets/images/CEBU/logo7v2.png')} alt='logo' />
        </div>
        <div className='layout-search-bar'>
          <input type='text' placeholder='Pangitaa imo forever diri.. sulayi lang gud, basin pa di-ay' />
        </div>
        <div className='account-section'>
          <div className='account-section-item notifications'>
            <Badge badgeContent={80} secondary badgeId="notifications-2">
              <FontIcon className='account-icon'>notifications</FontIcon>
            </Badge>
          </div>
          <div className='account-section-item messaging'>
            <Badge badgeContent={12} secondary badgeId="notifications-2">
              <FontIcon className='account-icon'>mail</FontIcon>
            </Badge>
          </div>
          <div className='account-section-item account'>
            <img className='user-image' src='https://picsum.photos/id/322/200/200' alt='user-image' />
            {/* <div className='user-name'>
              <span>Yam</span>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Header
