import { NavLink as Link } from "react-router-dom";
import { useRef } from "react";
import "../css/style.css";
import { useHistory } from "react-router";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const history = useHistory();

  const onformSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: username.current.value,
      email: email.current.value,
      pass: password.current.value,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    try {
      let res = await fetch("http://localhost:3030/api/auth/register", options);
      console.log(res.body);
      history.push("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="report">
      <h1 className="report-head">Register</h1>
      <div className="report-desc">We are happy to have you! </div>
      <form action="" className="report-form">
        <div className="form-field">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            name="username"
            id="name"
            ref={username}
          />
        </div>
        <div className="form-field">
          <label htmlFor="mail">Email:</label>
          <input
            type="email"
            name="mail"
            id="mail"
            ref={email}
          />
        </div>
        <div className="form-field">
          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            name="pass"
            id="pass"
            ref={password}
          />
        </div>
        <div className="report-btn">
          <button
            style={{ "border-radius": "20px" }}
            onClick={onformSubmit}
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
