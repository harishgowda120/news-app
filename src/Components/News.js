import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Loading from "./Loading";

export class News extends Component {
  static defaultProps = {
    country: "us",
    category: "general",
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false,
      totalResults: 0,
    };
  }

  async updateNews() {
    try {
      this.props.setProgress(10);
      this.setState({ loading: true });

      // Use environment variable for API key
      const API_KEY = "940d1438a9c7418cbce23e208dea12de";
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${API_KEY}&page=${this.state.page}&pageSize=12`;

      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const parsedData = await response.json();
      this.props.setProgress(70);

      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
      });

      this.props.setProgress(100);
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
  }

  async componentDidMount() {
    await this.updateNews();
  }

  fetchMoreData = async () => {
    try {
      this.setState({ page: this.state.page + 1 });

      const API_KEY = "940d1438a9c7418cbce23e208dea12de";
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${API_KEY}&page=${this.state.page + 1}&pageSize=12`;

      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const parsedData = await response.json();
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
      });
    } catch (error) {
      console.error("Error fetching more news:", error);
    }
  };

  handlePrevClick = async () => {
    if (this.state.page > 1) {
      this.setState({ page: this.state.page - 1 }, () => this.updateNews());
    }
  };

  handleNextClick = async () => {
    if (this.state.page < Math.ceil(this.state.totalResults / 12)) {
      this.setState({ page: this.state.page + 1 }, () => this.updateNews());
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 id="h1">Headlines</h1>

        {this.state.loading && <Loading />}

        <div className="container">
          <div className="row">
            {this.state.articles &&
              this.state.articles.map((element, index) => (
                <div className="col-12 col-sm-6 col-md-4" key={element.url || index}>
                  <NewsItems
                    title={element.title ? element.title.slice(0, 50) : "No Title Available"}
                    description={element.description ? element.description.slice(0, 90) : "No Description Available"}
                    imgUrl={element.urlToImage || "https://via.placeholder.com/150"}
                    NewsUrl={element.url || "#"}
                  />
                </div>
              ))}
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="d-flex justify-content-between my-3">
          <button type="button" disabled={this.state.page <= 1} onClick={this.handlePrevClick} className="btn btn-dark">
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={!(Array.isArray(this.state.articles) && this.state.articles.length > 0)}
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
