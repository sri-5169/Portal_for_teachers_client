import React, { useContext } from "react";
import {
  Avatar,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { useState } from "react";
const useStyles = makeStyles({
  container: {
    margin: "10px auto",
  },
  paper: {
    padding: 20,
    height: "50vh important",
    width: 300,
    margin: "20px auto",
  },
  avatar: {
    // backgroundColor: "#FFC72C",
    backgroundColor: "orange",
  },
  inputs: {
    marginBottom: "40px",
  },
  btn: {
    marginTop: "50px",
    marginBottom: "20px",
    backgroundColor: "#34975a",
    borderRadius: "20px",
    "& : hover": {
      backgroundColor: "#34975a",
    },
  },
 },
);
const ForgotPassword = (props) => {
 
  const classes = useStyles();



  return (
  
    <Grid align="center" className={classes.container}>
      <Paper elevation={10} className={classes.paper}>
        <h2>POT</h2>
        <h3 style={{ fontFamily: "sans-serif" }}>Reset Password</h3>
        <TextField
          className={classes.inputs}
          label="Email"
          type="email"
          placeholder="Enter your email"
          name="email"
          fullWidth
          required
        />
        <Button
          className={classes.btn}
          type="Submit"
          variant="contained"
          color="primary"
          //   onClick={() => handleLogin()}
          fullWidth
        >
         Submit
        </Button>
         
      </Paper>
    </Grid>
 
  );
  
};

export default ForgotPassword;
