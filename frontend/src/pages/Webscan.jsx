import React, { Component } from "react";
import "../css/webscan.css";

export class Webscan extends Component {

    state = {website:""};

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state.website);
        //do a post request here and send the website state to backend
        this.setState({website:""});
    }
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
          <input type="submit" value="submit" className="submit-Btn"/>
        </form>
      </div>
    );
  }
}

export default Webscan;
