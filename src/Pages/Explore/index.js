import React from 'react'
import Layout from '../../Components/Layout'

class Explore extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    console.log('props', this.props)
  }

  render() {
    return(
      <Layout {...this.props}>

      </Layout>
    )
  }
}

export default Explore
