import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";

export class Report extends Component {
  state = {
    title: "",
    website: "",
    fraudType: "Phishing",
    description: "",
    chkbox: false,
  };

  onformSubmit = async (e) => {
    e.preventDefault();
    if (!this.state.chkbox) {
      alert("Check the box");
    } else {
      const formData = {
        title: this.state.title,
        website: this.state.website,
        fraudType: this.state.fraudType,
        description: this.state.description,
      };
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };
      let res = await fetch("http://localhost:3030/api/post", options);
      let json = await res.json();
      if (res.status === 200) {
        alert("Report submitted");
      } else {
        alert("Report not submitted");
      }
      this.setState({
        title: "",
        website: "",
        fraudType: "Phishing",
        description: "",
        chkbox: false,
      });
    }
  };

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
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              value={this.state.title}
              onChange={(e) => {
                this.setState({ title: e.target.value });
              }}
            />
          </div>
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
              <option value="Phishing">Phishing</option>
              <option value="Skimming">Skimming</option>
              <option value="Monetary Scam">Scam</option>
              <option value="Smishing">Smishing</option>
              <option value="Identity Fraud">Identity Fraud</option>
              <option value="Card Fraud">Card Fraud</option>
              <option value="shopping">Online Shopping Related Fraud</option>
              <option value="lottery">Lottery/Prize Fraud</option>
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
            <button
              style={{ borderRadius: "20px" }}
              onClick={this.onformSubmit}
            >
              Report
            </button>
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
