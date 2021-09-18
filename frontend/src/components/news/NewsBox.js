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
    padding: 15,
  },
});
const NewsBox = (props) => {
  const classes = useStyles();
  const onClickMore = (e, id) => {
    props.history.push({
      pathname: "full",
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
            <h4>{props.newsInfo.title}</h4>
            <p>{props.newsInfo.content}</p>
          </div>
          <input
            type="submit"
            value="read more"
            style={{ position: "relative", left: "25%" }}
            onClick={(e) => onClickMore(e, props.newsInfo.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(NewsBox);
