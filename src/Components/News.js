import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Loading from './Loading';

export class News extends Component {
  static defaultProps = {
    country: "us",
    category: "general",
    pageSize: 12
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false,
      totalResults: 0
    };
  }

  async updateNews(page) {
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e80f488a07c54ffc88ac8a0d4c3e53ea&page=${page}&pageSize=${this.props.pageSize}`;
    
    try {
      const data = await fetch(url);
      const parsedData = await data.json();

      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
        page
      });
    } catch (error) {
      console.error("Failed to fetch news:", error);
      this.setState({ loading: false });
    }
  }

  async componentDidMount() {
    this.updateNews(this.state.page);
  }

  fetchMoreData = async () => {
    const newPage = this.state.page + 1;
    this.setState({ loading: true });

    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e80f488a07c54ffc88ac8a0d4c3e53ea&page=${newPage}&pageSize=${this.props.pageSize}`;
    
    try {
      const data = await fetch(url);
      const parsedData = await data.json();

      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
        page: newPage,
        loading: false
      });
    } catch (error) {
      console.error("Failed to fetch more news:", error);
      this.setState({ loading: false });
    }
  };

  handlePrevClick = () => {
    const prevPage = this.state.page - 1;
    if (prevPage >= 1) {
      this.updateNews(prevPage);
    }
  };

  handleNextClick = () => {
    const nextPage = this.state.page + 1;
    if (nextPage <= Math.ceil(this.state.totalResults / this.props.pageSize)) {
      this.updateNews(nextPage);
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Headlines</h1>

        {this.state.loading && <Loading />}

        <div className="row">
          {this.state.articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItems
                title={element.title ? element.title.slice(0, 50) : "No Title Available"}
                description={element.description ? element.description.slice(0, 90) : "No Description Available"}
                imgUrl={element.urlToImage}
                NewsUrl={element.url}
              />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-between my-4">
          <button
            type="button"
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
            className="btn btn-dark"
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)}
            onClick={this.handleNextClick}
            className="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
