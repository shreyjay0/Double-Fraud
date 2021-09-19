import React, { Component } from "react";
import NewsBox from "../components/news/NewsBox";
import "../skeleton/skeleton.css";
import "../css/news.css";
import axios from "axios";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      quant: 15,
      page: 1,
    };
    this.goToNextPage = this.goToNextPage.bind(this);
  }

  getNews = async () => {
    const apiKey = "f16c3d97b601422fb18a4ae1944b0b0e";
    const url = `https://newsapi.org/v2/everything?language=en&q=finance%20OR%20financial%20AND%20business&sortBy=publishedAt&page=${this.state.page}&apiKey=${apiKey}`;

    await axios
      .get(url)
      .then(
        function (response) {
          const fulldata = response.data.articles;
          const data = fulldata.slice(0, this.state.quant);
          console.log(fulldata.length);
          this.setState({
            news: data,
          });
          console.log(data);
        }.bind(this)
      )
      .catch(function (error) {
        console.log(error);
      });
  };

  componentDidMount = () => {
    this.getNews();
  };
  goToNextPage = () => {
    console.log(this.state.page);
    console.log(this.state.page);
  };
  render() {
    let chunk = [];
    let spl = [];
    while (this.state.news.length) {
      spl.push(this.state.news.splice(0, 3));
    }
    spl.forEach((element, id) => {
      chunk.push(
        <div>
          <div className="row news-line">
            <NewsBox newsInfo={element[0]} id={id * 3} />
            <NewsBox newsInfo={element[1]} id={id * 3 + 1} />
            <NewsBox newsInfo={element[2]} id={id * 3 + 2} />
          </div>
          <div style={{ padding: 20 }}></div>
        </div>
      );
    });
    if (spl.length > 0) {
      return (
        <div className="news-main">
          <div className="row news-head">
            <h3>News</h3>
            <p>Latest personalized financial news to keep you updated. </p>
          </div>
          <div className="main">{chunk}</div>
          <div style={{ textAlign: "center" }}>
            {this.state.page > 1 ? (
              <button
                style={{ marginRight: 10 }}
                onClick={() => {
                  console.log(this.state.page);
                  const num = this.state.page - 1;
                  this.setState({ page: num }, () => this.getNews());
                }}
              >
                Last Page
              </button>
            ) : (
              <div></div>
            )}
            {this.state.page < 5 ? (
              <button
                style={{ marginLeft: 10 }}
                onClick={() => {
                  console.log(this.state.page);
                  const num = this.state.page + 1;
                  this.setState({ page: num }, () => this.getNews());
                }}
              >
                Next Page
              </button>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div className="news-main">
          <div className="row news-head">
            <h3>News</h3>
            <p>Latest personalized financial news to keep you updated. </p>
          </div>
          <div style={{ textAlign: "center" }}>Loading...</div>
        </div>
      );
    }
  }
}
