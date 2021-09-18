import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  img: {
    width: "100%",
    minHeight: "200px !important",
    maxHeight: "200px !important",
    maxWidth: 350,
    borderRadius: 12,
  },
  imghead: {
    textAlign: "center",
    minHeight: "200px !important",
    maxHeight: "200px !important",
  },
  body: {
    paddingBottom: "0px !important",
    padding: "30%",
    textAlign: "center",
    paddingTop: "5% !important",
  },
  home: {
    textAlign: "center",
    fontFamily: "Montserrat",
    fontStyle: "normal",
  },
  button: {
    marginTop: 30,
  },
  content: {
    textAlign: "left",
    marginBottom: 20,
  
  },
});
const FullNews = (props) => {
  const classes = useStyles();
  const [source, setSource] = useState("");
  const [newsInfo, newsInfoUpdate] = useState([]);
  const inf = props.history.location.state.news;
  console.log(inf);
  useEffect(() => {
    newsInfoUpdate(inf);
    setSource(inf.source.name);
  }, []);

  const history = useHistory();

  return (
    <div
      className="row"
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        padding: "5%",
      }}
    >
      <div className={classes.card}>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <h4>{newsInfo.title}</h4>
          <div style={{ textAlign: "right" }}>
            <a style={{ color: "grey" }}>by {newsInfo.author}</a>
          </div>
        </div>
        <div className={classes.imghead}>
          <img
            src={newsInfo.urlToImage}
            alt={newsInfo.title}
            className={classes.img}
          ></img>
          <div>
            <a style={{ color: "grey" }}>Source: {source}</a>
          </div>
        </div>
        <div className={classes.body}>
          <div className={classes.content}>{newsInfo.content}</div>
          <a rel="noopener noreferrer" href={newsInfo.url} target="_blank">
            Read full article
          </a>
          <div className={classes.button}>
            <input
              type="submit"
              style={{ width: 120 }}
              value="Go back"
              onClick={() => {
                history.goBack();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(FullNews);
