import React from 'react'
import './content.css'
import { FontIcon } from 'react-md'
import CategoryList from '../CategoryList'
import CategoryContent from '../CategoryContent'

class Content extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { hasSearched } = this.props
    return (
      <div className={`content-wrapper ${hasSearched ? 'has-searched': ''}`}>
        <CategoryList />
        <div className='horizontal-divider'></div>
        <CategoryContent />
      </div>
    )
  }
}

export default Content
