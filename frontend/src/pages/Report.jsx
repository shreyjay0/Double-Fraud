import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";

export class Report extends Component {
  state = { website: "", fraudType: "", description: "" , chkbox : false};
  render() {
    return (
      <div className="report">
        <h1 className="report-head">Report Fraud</h1>
        <div className="report-desc">
          Just experienced an online fraud? Report it so that other people stay
          alert{" "}
        </div>
        <form action="" className="report-form">
          <div className="form-field">
            <label htmlFor="website">Fraudlent Website:</label>
            <input
              type="text"
              name="website"
              id="website"
              value={this.state.website}
              onChange={(e) => {
                this.setState({ website: e.target.value });
              }}
            />
          </div>
          <div className="form-field">
            <label htmlFor="fraudtype">Type Of Fraud:</label>
            <select
              name="fraudtype"
              id="fraudtype"
              value={this.state.fraudtype}
              onChange={(e) => {
                this.setState({ fraudtype: e.target.value });
              }}
            >
              <option value="abc">abc</option>
              <option value="123">123</option>
              <option value="qwe">qwe</option>
              <option value="xzc">xzc</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="description">Description:</label>
            <textarea
              type="text"
              name="description"
              id="description"
              value={this.state.description}
              onChange={(e) => {
                this.setState({ description: e.target.value });
              }}
            />
          </div>
          <div className="form-field">
            <span className="checkbox">
              <input
                className="chkbox-input"
                type="checkbox"
                defaultChecked={this.state.chkbox}
                onChange={(e) => {
                  this.setState({ chkbox: e.target.value });
                }}
              />
              <span className="checkbox-msg">
                I hereby confirm this report’s authenticity to the best of my
                knowledge
              </span>
            </span>
          </div>
          <div className="report-btn">
            <button style={{"border-radius": "20px"}}>Report</button>
          </div>
        </form>
        <span className="report-msg">
          If not already, we suggest you to take{" "}
          <Link to="/help" className="help-link">
            Nearby Help
          </Link>
        </span>
      </div>
    );
  }
}

export default Report;
