import React, { Component } from "react";
import "../css/webscan.css";

export class Webscan extends Component {
  state = { website: "", score: -1, feedback: "Authentic Website" };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.website);
    //do a post request here and send the website state to backend
    setTimeout(()=>{
      this.setState({score:-0.38})
    },4000)
    this.setState({ website: "" });
  };

  result = () => {
    if (this.state.score > 0) {
      return (
        <div>
          <div className="score">
            <div className="scoretext">Score</div>
            <div className="scoreno">{this.state.score}</div>
          </div>
          <div className="feedback">
            <div className="feedbacktext">Feedback</div>
            <div className="feedbackval">{this.state.feedback}</div>
          </div>
          <div className="res">You can use the Website!!</div>
        </div>
      );
    }else{
      return null
    }
  };

  render() {
    return (
      <div className="webscan">
        <h1 className="webscan-head">Website Scan</h1>
        <div className="webscan-desc">
          If they are trying to fraud you, We will fraud them!{" "}
        </div>
        <br />
        <form onSubmit={this.handleSubmit} className="webscan-form">
          <input
            className="webscan-field"
            placeholder="Enter the Website URL here"
            type="text"
            name="website"
            id="website"
            value={this.state.website}
            onChange={(e) => {
              this.setState({ website: e.target.value });
            }}
          />
          <br />
          <br />
          <input type="submit" value="submit" className="submit-Btn" />
        </form>
        {this.result()}
      </div>
    );
  }
}

export default Webscan;
