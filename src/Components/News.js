import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Loading from './Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
// import PropTypes from 'prop-types';

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    await this.fetchArticles();
  }

  fetchArticles = async () => {
    const { page } = this.state;
    const apiKey = 'e80f488a07c54ffc88ac8a0d4c3e53ea'; // Add your API key here
    const url = `https://newsapi.org/v2/top-headlines?country=us&page=${page}&apiKey=${apiKey}`;

    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: [...this.state.articles, ...parsedData.articles],
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  fetchMoreData = () => {
    this.setState(
      (prevState) => ({
        page: prevState.page + 1,
      }),
      this.fetchArticles
    );
  };

  render() {
    return (
      <div className="container my-3">
        <h2>Top Headlines</h2>

        {/* InfiniteScroll component */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loading />}
        >
          <div className="row">
            {this.state.articles.map((article) => (
              <div className="col-md-4" key={article.url}>
                <NewsItems
                  title={article.title ? article.title.slice(0, 45) : ""}
                  description={article.description ? article.description.slice(0, 88) : ""}
                  imageUrl={article.urlToImage}
                  newsUrl={article.url}
                />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
