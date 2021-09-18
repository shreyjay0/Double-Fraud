import React, { Component, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    border: "1px solid #000000",
    boxSizing: "border-box",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  img: {
    width: "100%",
  },
  cardbody: {
    padding: 12,
    paddingBottom: "0px !important",
  },
  button: { textAlign: "center" },
});
const NewsBox = (props) => {
  const classes = useStyles();
  const onClickMore = (e, id) => {
    props.history.push({
      pathname: "full-news",
      search: `?id=${id}`,
    });
  };
  return (
    <div
      className="one-third column"
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className={classes.card}>
        <div>
          <img
            src={props.newsInfo.image}
            alt={props.newsInfo.title}
            className={classes.img}
          ></img>
        </div>
        <div className={classes.cardbody}>
          <div>
            <h5>{props.newsInfo.title}</h5>
            <p style={{ fontWeight: "normal" }}>{props.newsInfo.content}</p>
          </div>
          <div className={classes.button}>
            <input
              type="submit"
              value="read more"
              onClick={(e) => onClickMore(e, props.newsInfo.id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NewsBox);
