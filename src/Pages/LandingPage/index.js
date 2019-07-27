import React from 'react'
import './landingpage.css'
import Header from './Header'
import Content from './Content'
import SearchBar from './SearchBar'

class LandingPagev2 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasSearched: false,
      searchString: ''
    }
  }

  onSearch(searchString) {
    this.setState({
      hasSearched: true,
      searchString
    })
  }

  render() {
    const { hasSearched } = this.state
    return(
      <div className='landingpage-wrapper'>
        <Header {...this.props} />
        <SearchBar hasSearched={hasSearched} onSearch={this.onSearch.bind(this)} />
        <Content hasSearched={hasSearched} {...this.props} />
      </div>
    )
  }
}

export default LandingPagev2
