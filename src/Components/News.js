import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Loading from './Loading';
// import InfiniteScroll from "react-infinite-scroll-component";
// import PropTypes from 'prop-types';

export class News extends Component {


  static defaultProps = {
    country: "us",
    category: "general"
  }

  // static propTypes={.0

  //   country:PropTypes.string,
  //   category:PropTypes.string
  // }

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false,
      totalResult:0
    }
  }

  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=e80f488a07c54ffc88ac8a0d4c3e53ea&page=${this.state.page}&pageSize=12`;
    const data = await fetch(url);
    const parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResult: parsedData.totalResult
    });   
    this.props.setProgress(100);

  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData=async ()=>{
    this.setState({page:this.state.page+1});
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=e80f488a07c54ffc88ac8a0d4c3e53ea&page=${this.state.page+1}&pageSize=12`;
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      articles:this.state.articles.concat(parsedData.articles),
      totalResult: parsedData.totalResult
    });
  }

  //handling next and prev buttons
  handlePrevClick = async () => {
   this.updateNews();
   this.setState({page:this.state.page-1});
  }

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResult / 12)) {

    } else {
      this.updateNews();
      this.setState({page:this.state.page+1});
    }
  }

  render() {
    return (
      <div>
        <div className="container my-3">
          <h1 id='h1'>HeadLines</h1>
          {this.state.loading && <Loading />}
          {/* <InfiniteScroll
            // dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length!==this.state.totalResult}
            loader={<Loading/>}
          > */}
          <div className='container'>
          <div className="row">
            { 
              this.state.articles.map((element) => {
                return (
                  <div className="col-12 col-sm-6 col-md-4" key={element.url}> {/* Add a unique key */}
                    <NewsItems
                      title={element.title ? element.title.slice(0, 50) : "No Title Available"}
                      description={element.description ? element.description.slice(0, 90) : "No Description Available"}
                      imgUrl={element.urlToImage}
                      NewsUrl={element.url}
                    />
                  </div>
                );
              })

            }
          </div>
          </div>
          {/* </InfiniteScroll> */}

          {/* //pagination */}
          <div className="d-flex justify-content-between">
            <button type="button" disabled={this.state.page <= 1} onClick={this.handlePrevClick} className="btn btn-dark">&larr; Previous</button>
            <button type="button" disabled={!(Array.isArray(this.state.articles) && this.state.articles.length > 0)} onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
          </div>
        </div>
      </div>
    );

  }
}

export default News
