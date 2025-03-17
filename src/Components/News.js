import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Loading from './Loading';

export class News extends Component {
  static defaultProps = {
    country: "us",
    category: "general",
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: false,
      totalResults: 0,
    };
  }

  async updateNews(page = 1) {
    try {
      this.setState({ loading: true });

      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=940d1438a9c7418cbce23e208dea12de&page=${page}&pageSize=12`;

      const response = await fetch(url, {
        headers: {
          "Upgrade-Insecure-Requests": "1",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const parsedData = await response.json();

      this.setState({
        articles: parsedData.articles || [],
        totalResults: parsedData.totalResults || 0,
        page,
        loading: false,
      });

    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {
    const nextPage = this.state.page + 1;
    this.updateNews(nextPage);
  };

  handlePrevClick = async () => {
    if (this.state.page > 1) {
      this.updateNews(this.state.page - 1);
    }
  };

  handleNextClick = async () => {
    if (this.state.page < Math.ceil(this.state.totalResults / 12)) {
      this.updateNews(this.state.page + 1);
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 id="h1">Headlines</h1>
        {this.state.loading && <Loading />}

        <div className="row">
          {this.state.articles.length > 0 ? (
            this.state.articles.map((element, index) => (
              <div className="col-12 col-sm-6 col-md-4" key={element.url || index}>
                <NewsItems
                  title={element.title ? element.title.slice(0, 50) : "No Title Available"}
                  description={element.description ? element.description.slice(0, 90) : "No Description Available"}
                  imgUrl={element.urlToImage || "https://via.placeholder.com/150"}
                  NewsUrl={element.url || "#"}
                />
              </div>
            ))
          ) : (
            <p className="text-center">No articles found.</p>
          )}
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-between">
          <button type="button" disabled={this.state.page <= 1} onClick={this.handlePrevClick} className="btn btn-dark">
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={this.state.page >= Math.ceil(this.state.totalResults / 12)}
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
