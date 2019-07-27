import React from 'react'
import { FontIcon } from 'react-md'

class CategoryList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeCategory: 'Places'
    }

    this.categoryList = [
      { label: 'Places', icon: 'location_on' },
      { label: 'Hotel', icon: 'hotel' },
      { label: 'Ride', icon: 'directions_bus' },
      { label: 'People', icon: 'supervised_user_circle' },
      { label: 'Events', icon: 'public' },
    ]
  }

  onClickCategory(category) {
    this.setState({ activeCategory: category })
  }

  render() {
    const { activeCategory } = this.state

    return(
      <div className='category-container'>
        {
          this.categoryList.map((category)=>{
            let isActive = activeCategory === category.label
            return <div key={category.label}
              onClick={this.onClickCategory.bind(this, category.label)}
              className={`category-item ${isActive ? 'active' : ''}`}>
              <div className='category-icon'>
                <FontIcon>{category.icon}</FontIcon>
              </div>
              <div className='category-label'>
                {category.label}
              </div>
            </div>
          })
        }
      </div>
    )
  }
}

export default CategoryList
