import React from "react";
import { TextField, Button } from "@mui/material";
import "./index.css";

const Login = ({ onSuccess = () => {} }) => {
  return (
    <div className="container-login">
      <span className="logo-login">{"{SNIPPET}"}</span>
      <TextField placeholder="Login Id" title="Login Id"></TextField>
      <TextField placeholder="Password" type="password"></TextField>
      <Button
        style={{ marginTop: 5 }}
        variant="contained"
        onClick={() => onSuccess(true)}
      >
        Login
      </Button>
    </div>
  );
};
export default Login;
