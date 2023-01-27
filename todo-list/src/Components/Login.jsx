import { makeStyles } from "@mui/styles";
import React from "react";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";

const clientId = "276668573212-m1i25rgep0dbc3b8vj3gd89ulk08pjal.apps.googleusercontent.com";
const useStyle = makeStyles({
  rev: {
    width: "100%",
    "& button": {
      width: "100%",
    },
  },
  div: {
    margin: "20% auto", width: "20%",

  },
});
function Login(props) {
  const navigate = useNavigate();
  const onSuccess = (res) => {
    props.tor(res.profileObj);
    navigate("/home");
    return res.profileObj;
  };
  const onFailure = (res) => res;
  const classes = useStyle();
  return (
    <div className={classes.div}>
      <div id="signInButton" className={classes.rev}>
        <GoogleLogin
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
