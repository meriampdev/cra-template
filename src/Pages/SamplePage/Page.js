import React from 'react'
import { connect } from 'react-redux'
import { onSampleAction } from '../../Store/actions/sampleAction.js'
import './SamplePage.css'

class Page extends React.Component {
  componentDidMount() {
    this.props.onSampleAction()
  }
  render() {
    console.log('sampleRedux', this.props)
    return(
      <div className='PageContainer'>
        <span>TOPH IS THE GREATEST EARTH BENDER!!</span>
      </div>
    )
  }
}

export default connect(state => ({
  sampleRedux: state.sampleRedux
}), { onSampleAction })(Page)
