import React, { Component } from 'react'
import defaultImage from './profile.jpg';

export class NewsItem extends Component {
  render() {
    let {title , description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
          <img src={(imageUrl === null)?defaultImage:imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body" style={{ backgroundColor: '#EDCD82' }}>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={newsUrl} className="btn btn-sm btn-dark">Go somewhere</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
