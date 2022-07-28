import React, { useContext } from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  Autorenew,
  LockOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useState } from "react";
import { API } from "../../service/api";

const useStyles = makeStyles({
  container: {
    marginTop: "10px",
  },
  paper: {
    padding: 20,
    height: "60vh important",
    width: 300,
    margin: "20px auto",
  },
  avatar: {
    backgroundColor: "#9ddede",
  },
  inputs: {
    marginBottom: "25px",
    marginLeft: "5px",
    marginRight: "5px",
    display: "flex",
  },
  btn: {
    marginTop: "20px",
    marginBottom: "20px",
    backgroundColor: "#7cb2d2",
  },
});
const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    DateofBirth: "01-01-2000",
    UANNumber: "",
    AadhaarNo: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });
  const [values, setValues] = React.useState({
    date: "1993-11-01",
  });
  const handleDates = (event) => {
    let Date1 = event.target.value;
    let Date2 = reverseformat(Date1);
    setUser({ ...user, [event.target.name]: Date2 });
    setTimeout(4000);
    console.log(user);
  };
  const reverseformat = (s) => {
    let i = 0;
    let d = "",
      m = "",
      y = "";
    for (i = 0; i < s.length; i++) {
      if (s[i] === "-") {
        break;
      }
      d = d + s[i];
    }
    i++;
    for (; i < s.length; i++) {
      if (s[i] === "-") {
        break;
      }
      m = m + s[i];
    }
    i++;
    for (; i < s.length; i++) {
      if (s[i] === "-") {
        break;
      }
      y = y + s[i];
    }

    return y + "-" + m + "-" + d;
  };
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const saveUser = async () => {
    try {
      await API.userSignup(user);
    } catch (error) {
      console.log(error);
    }
  };
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Card
    elevation={10}
      style={{
        justifyItems: "center",
        maxWidth: "600px",
        margin: "20px auto",
        padding: "20 0",
      }}
    >
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <Button
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  width: "100%",
                  borderRadius: "2rem",
                }}
              >
                Fill the form to SignUp
              </Button>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label="Name"
                placeholder=" Enter Your Name"
                name="name"
                variant="outlined"
                onChange={(e) => handleChange(e)}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label="Date of Birth"
                type="date"
                name="DateofBirth"
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      className={classes.adornment}
                      position="start"
                    >
                      Add DOB
                    </InputAdornment>
                  ),
                }}
                className={classes.textField}
                variant="outlined"
                onChange={(e) => handleDates(e)}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label="UANNumber"
                placeholder=" Enter UANNumber"
                name="UANNumber"
                onChange={(e) => handleChange(e)}
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label="AadhaarNo"
                placeholder=" Enter AadhaarNo"
                name="AadhaarNo"
                onChange={(e) => handleChange(e)}
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label="Email"
                placeholder=" Enter Email"
                variant="outlined"
                name="Email"
                onChange={(e) => handleChange(e)}
                fullWidth
                required
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                name="Password"
                variant="outlined"
                onChange={(e) => handleChange(e)}
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
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label="ConfirmPassword"
                placeholder=" Enter ConfirmPassword"
                name="ConfirmPassword"
                onChange={(e) => handleChange(e)}
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Grid item>
            <Button
            type="button"
              onClick={() => saveUser()}
              style={{
                backgroundColor: "green",
                color: "white",
                margin: "20px auto",
                borderRadius: "2rem",
              }}
              variant="contained"
              fullWidth
            >
              Sign Up
            </Button>
          </Grid>
        </CardContent>
    </Card>
  );
};

export default Signup;
