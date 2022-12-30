/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from "react";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";

const clientId = "276668573212-m1i25rgep0dbc3b8vj3gd89ulk08pjal.apps.googleusercontent.com";
function Login(props) {
  const navigate = useNavigate();
  const onSuccess = (res) => {
    console.log(res.profileObj);
    navigate("/home");
    props.tor(res.profileObj);
    return res.profileObj;
  };
  const onFailure = (res) => res;
  return (
    <div style={{ margin: "20% auto", width: "20%" }}>
      <div id="signInButton" style={{ width: "100%" }}>
        <GoogleLogin
          sx={{ width: "100%" }}
          clientId={clientId}
          buttonText="login"
          onSuccess={onSuccess}
          onFailure={onFailure}
        />
      </div>

    </div>

  );
}
export default Login;
