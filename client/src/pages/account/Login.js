import React, { useContext } from "react";
import pic from "./poster/caa.png";
import {
  Avatar,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {
  Autorenew,
  LockOutlined,
  Visibility,
  VisibilityOff,
} from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import zIndex from "@material-ui/core/styles/zIndex";
import { loginUser } from "../../service/api";
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
    backgroundColor: "#138808",
    borderRadius: "20px",
    "& : hover": {
      backgroundColor: "#34975a",
    },
  },
  poster: {
    width: "100vw",
    height: "30vh",
    objectFit: "cover",
    marginBottom: "-100px",
    zIndex: "-1",
  },
  forgot: {
    color: "red",
  },
  lastline: {
    marginTop: "8px",
  },
});
const Login = (props) => {
  //   const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    UANNumber: "",
    Password: "",
  });
  const classes = useStyles();

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user);
  };
  const handleLogin = async () => {
    try {
      const data = await loginUser(user);
      // setUser(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Grid align="center" className={classes.container} zIndex={100}>
        <Paper elevation={10} className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <h2>POT</h2>
          <h3 style={{ fontFamily: "sans-serif" }}>Portal for teachers</h3>
          <TextField
            className={classes.inputs}
            label="UANNumber"
            placeholder="Enter your UANNumber"
            onChange={(e) => handleChange(e)}
            name="UANNumber"
            fullWidth
            required
          />
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            onChange={(e) => handleChange(e)}
            name="Password"
            fullWidth
            required
            InputProps={{
              endAdornment: (
                <InputAdornment poisiton="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            className={classes.btn}
            // type="Submit"
            variant="contained"
            color="primary"
            onClick={() => handleLogin()}
            fullWidth
          >
            Login
          </Button>
          <Link
            className={classes.forgot}
            to="/forgotpassword"
            underline="always"
          >
            Forgot Password ?
          </Link>
          <Typography className={classes.lastline}>
            Don't have and account? <Link to="/signup">Sign up</Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  );
};

export default Login;
