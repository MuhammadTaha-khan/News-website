import React, { Component, } from 'react'
import NewsItem from './NewsItem';
// import Spinner from './spinner'
import propsType from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 6
  }
  static PropsTypes = {
    country: propsType.string,
    pageSize: propsType.number
  }

  
  constructor() {
    super();
    // console.log("new contructor");
    this.state = {
      articles: [],
      // articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=dbfc948108034b3dbc76d98900921c8b&page=1&pageSize=${this.props.pageSize}&category=${this.props.category}`;
    let data = await fetch(url);
    let persedData = await data.json();
    console.log(persedData);
    this.setState({ articles: persedData.articles, totalResults: persedData.totalResults })
  }
  handleprevclic = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=dbfc948108034b3dbc76d98900921c8b&page=${this.state.page - 1}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
    let data = await fetch(url);
    let persedData = await data.json();
    console.log(persedData);
    this.setState({
      page: this.state.page - 1,
      articles: persedData.articles
    })
  }
  handlenextclic = async () => {
    console.log("next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=dbfc948108034b3dbc76d98900921c8b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}&category=${this.props.category}`;
      let data = await fetch(url);
      let persedData = await data.json();
      console.log(persedData);
      this.setState({
        page: this.state.page + 1,
        articles: persedData.articles
      })
    }
  }
  render() {
    return (

      // <div className='container my-3'>
      <div className='' style={{ backgroundColor: '#E8BF5E' }}>
        <div className='container my-3' style={{ backgroundColor: '#E8BF5E' }}>
          {/* <Spinner />       */}
          <h1 className='text-center'>NewsMonkey Top Headlines</h1>
          <div className='row'>
            {this.state.articles.map((element) => {
              return <div className='col-md-4' key={element.url}>
                <NewsItem 
                title={element.title} 
                description={element.description} 
                imageUrl={element.urlToImage} 
                newsUrl={element.url} />
              </div>
            })}
          </div>
          <div className='d-flex justify-content-between'>
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleprevclic}>&larr; Previous Page</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenextclic}>Next Page &rarr;</button>
          </div>
        </div>
      </div>

    )
  }
}

export default News
