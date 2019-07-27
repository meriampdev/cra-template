import React from 'react'
import './catcontent.css'
import Card from './Card'

class CategoryContent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='category-content-wrapper'>
        <Card />
        <Card />
        <Card />
      </div>
    )
  }
}

export default CategoryContent
