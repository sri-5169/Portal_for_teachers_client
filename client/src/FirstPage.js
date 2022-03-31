import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  btn1: {
    backgroundColor: "#FF9933",
    width: "200px",
    height: "50px",
    fontWeight: "bold",
    color: "#138808",
    marginTop: "20px",
    marginBottom: "10px",
  },
  btn2: {
    backgroundColor: "#138808",
    width: "200px",
    height: "50px",
    color: "#FF9933",
    marginTop: "10px",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  container: {
    marginTop: "250px",
    marginLeft: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyitems: "space-around",
    // backgroundColor: "wheat"
  },
  link: {
    textDecoration: "none",
    color: "unset",
  },
  or: {
    backgroundColor: "#000080",
    fontWeight: "bold",
    color: "white",
    padding: "4px",
    borderRadius: "50%",
  },
  page: {
    //  display: "flex",
    backgroundColor: "red",
    width: "100%",
    height: "100%",
  },
});
const FirstPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div>
        <Link to="/login" className={classes.link}>
          <Button variant="contained" className={classes.btn1}>
            Login
          </Button>
        </Link>
      </div>
      <Typography className={classes.or}>OR</Typography>
      <div>
        <Link to="/signup" className={classes.link}>
          <Button className={classes.btn2} variant="contained">
            SignUp
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FirstPage;
