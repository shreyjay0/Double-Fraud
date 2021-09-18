import React from "react";
import NewsBox from "../components/news/NewsBox";
import "../skeleton/skeleton.css";

const News = () => {
  const n = {
    id: 1333,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqeQpIBJIX4wSVfRKW-sM_eJEJFGqxwVjnCw&usqp=CAU",
    title: "Donald trump in space",
    content: "Donald trump is going to rule space",
  };
  return (
    <div>
      <div className="row" style={{ textAlign: "center", marginTop: "5%" }}>
        <h3>NEWS</h3>
        <p>Latest personalized financial news to keep you updated. </p>
      </div>

      <div className="row">
        <NewsBox newsInfo={n} />
      </div>
    </div>
  );
};

export default News;
