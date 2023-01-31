import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize:9,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  //by using handleUpdate function
  handleUpdate=async(change)=>{
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?${this.props.q===''?'':`q=${this.props.q}&`}country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+change}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData.articles);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.handleUpdate(0)
  }

  handlePrevClick = async () => {
    this.handleUpdate(-1)
    this.setState({page:this.state.page-1})
  }

  handleNextClick = async () => {
    this.handleUpdate(1)
    this.setState({page:this.state.page+1})
  }
  // not by using handleUpdate fundtion
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   // console.log(parsedData.articles);
  //   this.setState({
  //     articles: parsedData.articles,
  //     totalResults: parsedData.totalResults,
  //     loading: false,
  //   });
  // }
  // handlePrevClick = async () => {
  //   this.setState({ loading: true });
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     this.props.country
  //   }&category=${
  //     this.props.category
  //   }&apiKey=${this.props.apiKey}&page=${
  //     this.state.page - 1
  //   }&pageSize=${this.props.pageSize}`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   // console.log(parsedData.articles);
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parsedData.articles,
  //     loading: false,
  //   });
  // };
  // handleNextClick = async () => {
  //   this.setState({ loading: true });
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     this.props.country
  //   }&category=${
  //     this.props.category
  //   }&apiKey=${this.props.apiKey}&page=${
  //     this.state.page + 1
  //   }&pageSize=${this.props.pageSize}`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   // console.log(parsedData.articles);
  //   this.setState({
  //     page: this.state.page + 1,
  //     articles: parsedData.articles,
  //     loading: false,
  //   });
  // };
  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="text-center">
            News Monk - Top{" "}
            {`${
              this.props.category.charAt(0).toUpperCase() +
              this.props.category.slice(1)
            }`}{" "}
            Headlines
          </h1>
          {this.state.loading && <Spinner />}

          <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    urlToImage={element.urlToImage}
                    url={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePrevClick}
            // onClick={this.handleUpdate(-1)}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              Math.ceil(this.state.totalResults / this.props.pageSize) <=
              this.state.page
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
            // onClick={this.handleUpdate(1)}
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default News;
