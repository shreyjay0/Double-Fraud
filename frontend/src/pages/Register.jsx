import React, { Component } from "react";
import { NavLink as Link } from 'react-router-dom';

export class Register extends Component {
  state = { name: "", mail: "", pass: "" };


  onformSubmit = async()=>{
      const formData = {name:this.state.name,mail:this.state.mail,pass:this.state.pass};
      const options = {
        method:"POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }
      let res = await fetch('./register',options);
      let json = await res.json();
      if(res.status === 200){
        alert("User Registered successfully");
      }else{
        alert("User not Registered successfully");
      }
      this.setState({ name: "", mail: "", pass: "" })
  }

  render() {
    return (
      <div className="report">
        <h1 className="report-head">Register</h1>
        <div className="report-desc">We are happy to have you! </div>
        <form action="" className="report-form">
          <div className="form-field">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>
          <div className="form-field">
            <label htmlFor="mail">Email:</label>
            <input
              type="text"
              name="mail"
              id="mail"
              value={this.state.mail}
              onChange={(e) => {
                this.setState({ mail: e.target.value });
              }}
            />
          </div>
          <div className="form-field">
            <label htmlFor="pass">Password:</label>
            <input
              type="password"
              name="pass"
              id="pass"
              value={this.state.pass}
              onChange={(e) => {
                this.setState({ pass: e.target.value });
              }}
            />
          </div>
          <div className="report-btn">
            <button
              style={{ "border-radius": "20px" }}
              onClick={this.onformSubmit}
            >
              Register
            </button>
          </div>
        </form>
        <span className="report-msg">
        Already registered?{" "}
          <Link to="/login" className="help-link">
            Login
          </Link>
        </span>
      </div>
    );
  }
}

export default Register;
