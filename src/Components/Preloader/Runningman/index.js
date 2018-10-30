import React from 'react'
import './Savvy.css'

class SavvyLoader extends React.Component {
  render() {
    return(
      <div className='sl-loader-root'>
      <div className='sl-container'>
        <div className='savvy-loader'></div>
        {/* <div className='as-if-container'></div> */}
        {this.props.children}
      </div>
    </div>
    )
  }
}

export default SavvyLoader
