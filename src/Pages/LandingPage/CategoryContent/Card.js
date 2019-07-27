import React from 'react'
import { FontIcon, Avatar } from 'react-md'

const CardWrapper = (props) =>{
  return(
    <div className='card-container'>
      <div className='card-media'>
        <img src='https://picsum.photos/200' alt="Nature from lorempixel" />
        <div className='card-details'>
          <span className='name'>West 35 Eco Mountain Resort</span>
          <span className='location'>Balamban, Cebu</span>
        </div>
      </div>
      <div className='card-info'>
        <div className='card-rating'>
          <Avatar className='rate-rank'>25</Avatar>
          <div>
            <i className="fas fa-star rate-fill"></i>
            <i className="fas fa-star rate-fill"></i>
            <i className="fas fa-star rate-fill"></i>
            <i className="fas fa-star rate-fill"></i>
            <i className="fas fa-star "></i>
          </div>
        </div>
        {/* <div className='top-rater'>
          <img className='rater-pic' src='https://picsum.photos/200' alt="Nature from lorempixel" />
          <span>Juan De La Cruz</span>
        </div> */}
        <div className='card-text'>
          Maecenas lacinia enim ut risus pellentesque euismod. Vestibulum gravida, risus non
          condimentum volutpat, orci elit laoreet elit, in auctor eros orci non quam. Proin ut
          tellus et est dignissim efficitur. Aliquam erat volutpat. Proin pellentesque metus
          sit amet libero auctor aliquet. Donec scelerisque erat in magna sagittis hendrerit.
          Sed pulvinar enim mattis mauris sodales semper. Mauris eu urna at arcu dapibus
          pretium et in ligula. Sed vel vestibulum nunc.
        </div>
      </div>
    </div>
  )
}

export default CardWrapper
