import { NavLink as Link } from "react-router-dom";
import { loginCall } from "../APIcall";

import { useContext, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="report">
      <h1 className="report-head">Login</h1>
      <div className="report-desc">Howdy! Welcome back, Nice to see you</div>
      <form onSubmit={handleClick} className="report-form">
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
          <button type="submit" style={{ "border-radius": "20px" }}>
            {isFetching ? (
              <CircularProgress color="white" size="20px" />
            ) : (
              "Login"
            )}
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
  );
}
