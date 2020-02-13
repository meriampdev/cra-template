import React from 'react'
import { connect } from 'react-redux'
import { onSampleAction } from '../../Store/actions/sampleAction.js'
import Container from '../../Components/Container'

class Page extends React.Component {
  render() {
    return(
      <Container>
        <div style={{margin: "0 auto", color: "#000"}}>
        	<h1>Build Triggered by Drone!</h1>
        </div>
      </Container>
    )
  }
}

export default connect(state => ({
  sampleRedux: state.sampleRedux
}), { onSampleAction })(Page)
