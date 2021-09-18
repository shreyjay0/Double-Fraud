import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    border: "1px solid #000000",
    boxSizing: "border-box",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    maxWidth: 350,
  },
  img: {
    width: "100%",
    minHeight: "200px !important",
    maxHeight: "200px !important",
  },
  imghead: {
    minHeight: "200px !important",
    maxHeight: "200px !important",
  },
  cardbody: {
    padding: 12,
    paddingBottom: "0px !important",
  },
  button: {
    textAlign: "center",
    fontFamily: "Montserrat",
    fontStyle: "normal",
  },
});
const NewsBox = (props) => {
  const classes = useStyles();
  let id = props.id;
  let news = props.newsInfo;
  const onClickMore = (e, full) => {
    props.history.push({
      pathname: "full-news",
      search: `?id=${full.id}`,
      state: { id, news },
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
        <div className={classes.imghead}>
          <img
            src={props.newsInfo.urlToImage}
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
              style={{ width: 120 }}
              onClick={(e) => onClickMore(e, props)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NewsBox);
