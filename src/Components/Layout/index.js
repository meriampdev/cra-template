import React from 'react'
import './layout.css'
import Header from '../Header'

class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='layout-container'>
        <Header {...this.props} />
      </div>
    )
  }
}

export default Layout
