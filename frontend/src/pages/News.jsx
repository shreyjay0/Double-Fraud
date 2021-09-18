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
    };
  }

  getNews = async () => {
    const apiKey = "f16c3d97b601422fb18a4ae1944b0b0e";
    const url = `https://newsapi.org/v2/top-headlines?language=en&category=business&from=2021-09-18&apiKey=${apiKey}`;

    await axios
      .get(url)
      .then(
        function (response) {
          const fulldata = response.data.articles;
          const data = fulldata.slice(0, 15);
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

  render() {
    const n = {
      id: 1333,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqeQpIBJIX4wSVfRKW-sM_eJEJFGqxwVjnCw&usqp=CAU",
      title: "Donald trump in space",
      content: "Donald trump is going to rule space",
    };

    let chunk = [];
    let spl = [];
    while (this.state.news.length) {
      spl.push(this.state.news.splice(0, 3));
    }
    console.log(spl);
    console.log("Reer");
    spl.forEach((element, id) => {
      chunk.push(
        <div>
          <div className="row">
            <NewsBox newsInfo={element[0]} id={id * 3} />
            <NewsBox newsInfo={element[1]} id={id * 3 + 1} />
            <NewsBox newsInfo={element[2]} id={id * 3 + 2} />
          </div>
          <div style={{ padding: 20 }}></div>
        </div>
      );
    });
    return (
      <div className="news-main">
        <div className="row news-head">
          <h3>News</h3>
          <p>Latest personalized financial news to keep you updated. </p>
        </div>

        <div className="main">{chunk}</div>
      </div>
    );
  }
}
