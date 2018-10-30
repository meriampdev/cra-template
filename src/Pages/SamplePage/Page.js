import React from 'react'
import { connect } from 'react-redux'
import { onSampleAction } from '../../Store/actions/sampleAction.js'
import Container from '../../Components/Container'
import SavvyLoader from '../../Components/Preloader/Runningman'

class Page extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showLoader: true
    }
  }
  componentDidMount() {
    const self = this
    this.props.onSampleAction()
    setTimeout(function () {
      self.setState({ showLoader: false })
    }, 3000);
  }

  render() {
    const { sampleRedux } = this.props
    return(
      <Container>
        {
          this.state.showLoader ?
            <SavvyLoader />
          :
            <span>TOPH IS THE GREATEST EARTH BENDER!!</span>
        }
      </Container>
    )
  }
}

export default connect(state => ({
  sampleRedux: state.sampleRedux
}), { onSampleAction })(Page)
