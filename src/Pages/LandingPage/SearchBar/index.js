import React from 'react'
import './searchbar.css'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchString: '',
      hasSearched: false
    }
  }

  onChangeSearch(e) {
    let value = e.target.value
    this.setState({ searchString: value })
  }

  onKeyPress(e) {
    if(e.key === 'Enter') {
      this.props.onSearch(this.state.searchString)
    }
  }

  render() {
    return(
      <div className={`content ${this.props.hasSearched ? 'has-searched' : ''}`}>
        <div className='hero-text'>
          <p>It's a beautiful life</p>
          <p>Kung mu chill lang gud ta!</p>
        </div>
        {
          // <input placeholder='Search Bisan Unsa, Bisan pag imo Forever'
          //   type='text' className='search-bar'
          //   value = {this.state.searchString}
          //   onChange={this.onChangeSearch.bind(this)}
          //   onKeyPress={this.onKeyPress.bind(this)}
          // />
        }
      </div>
    )
  }
}

export default SearchBar
