import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredential),
    };
    const res = await fetch("http://localhost:3030/api/auth/login", options);
    dispatch({ type: "LOGIN_SUCCESS", payload: res });
    console.log(res)
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
    console.log(err)

  }
};