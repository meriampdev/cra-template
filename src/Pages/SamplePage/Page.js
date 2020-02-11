import React from 'react'
import { connect } from 'react-redux'
import { onSampleAction } from '../../Store/actions/sampleAction.js'
import Container from '../../Components/Container'
import SavvyLoader from '../../Components/Preloader/Runningman'

class Page extends React.Component {
  render() {
    const { sampleRedux } = this.props
    return(
      <Container>
        <div style={{margin: "0 auto", color: "#000"}}><h1>Hello</h1></div>
      </Container>
    )
  }
}

export default connect(state => ({
  sampleRedux: state.sampleRedux
}), { onSampleAction })(Page)
