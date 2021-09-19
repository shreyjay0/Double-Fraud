import React, { Component } from 'react'
import { NavLink as Link } from 'react-router-dom';

export class Login extends Component {

    state = {mail: "", pass: "" };


  onformSubmit = async()=>{
      const formData = {mail:this.state.mail,pass:this.state.pass};
      const options = {
        method:"POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      }
      let res = await fetch('./login',options);
      let json = await res.json();
      if(res.status === 200){
        alert("User Logged in successfully");
      }else{
        alert("Wrong Username or password");
      }
      this.setState({ mail: "", pass: "" })
  }

    render() {
        return (
            <div className="report">
        <h1 className="report-head">Login</h1>
        <div className="report-desc">Howdy! Welcome back, Nice to see you</div>
        <form action="" className="report-form">
          <div className="form-field">
            <label htmlFor="mail">Email:</label>
            <input
              type="email"
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
              Login
            </button>
          </div>
        </form>
        <span className="report-msg">
        New Here?{" "}
          <Link to="/register" className="help-link">
            Create Account
          </Link>
        </span>
      </div>
        )
    }
}

export default Login
