import React, { useContext, useEffect, useRef } from "react";
import {
  Avatar,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { LoginContext } from "../../context/ContextProvider";
import { API} from "../../service/api";
import styled from "@emotion/styled";
import { saveUserDetails, setAccessToken, setRefreshToken } from "../../utils/common-utils";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Container = styled(Grid)`
  margin : 10px auto;
  max-width : 400px;
`
const PaperContainer = styled(Paper)`
  padding : 20;
  display : flex;
  flex-direction : column;
  align-items : center;
  width : 300;
  margin : 20px auto;
`
const Avatars = styled(Avatar)`
  background-color : orange;
`
const Inputs = styled(TextField)`
  margin-bottom : 2rem;
  width : 90%;
`
const Btn = styled(Button)`
margin-top : 30px;
margin-bottom : 20px;
width : 90%;
background-color : #138808;
border-radius : 20px;
&:hover {
  background-color : #34975a;
}
`
const ForgotLink = styled(Typography)`
color : red;
`
const LastLine = styled(Typography)`
margin-top : 8px;
` 
const Error = styled(Typography)`
  font-size : 10px;
  color : red;
  line-height : 0;
  margin : 1rem auto 2.5rem 1.5rem;
  font-weight : bold;
`
const Login = () => {
  //   const history = useHistory();
  const [user, setUser] = useState({
    UANNumber: "",
    Password: "",
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { setAuthentication} = useContext(LoginContext);
  const [error,setError]  = useState('');
  const [snack, setSnack] = useState(false);
  const horizontal = "left";
  const vertical = "top";
  const userRef= useRef();

  useEffect (() => {
    userRef.current.focus();
  },[]);
  
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(user);
  };
  const handleSnackClose = () => {
    setSnack(false);
  }
  const handleSnackOpen = () => {
    setSnack(true);
  }
  const handleLogin = async () => {
    try {
      let response = await API.userLogin(user);
      if(response.isSuccess){
        setError('');
        setAccessToken( response.data.accessToken);
        setRefreshToken( response.data.refreshToken);
        console.log("nayauser", response.data);
           saveUserDetails({ name: response.data.name, UANNumber: response.data.UANNumber, email : response.data.Email});
            setAuthentication(true);
        navigate("/home");
      }
      else {
        console.log(response.msg);
      }
    } catch (error) {
      console.log("error ocured", error);
      handleSnackOpen();
      setTimeout(1000,setError("Hey, Looks like you typed something wrong"));
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
     <Snackbar
        anchorOrigin={{vertical,horizontal}}
        open={snack}
        onClose={handleSnackClose}
        autoHideDuration = {2000}
        key={vertical + horizontal}
      >
         <Alert onClose={handleSnackClose} severity="error" sx={{ width: '100%' }}>
         Hey Looks Like Your Credentials are not Right
        </Alert>
      </Snackbar>
      <Container align="center" zIndex={100}>
        <PaperContainer elevation={10} >
          <Avatars >
            <LockOutlined />
          </Avatars>
          <h3 style={{marginBottom : "-1rem"}}>POT</h3>
          <h5 style={{ fontFamily: "sans-serif" }}>Portal For Teachers</h5>
          <Inputs
            label="UANNumber"
            placeholder="Enter your UANNumber"
            onChange={(e) => handleChange(e)}
            name="UANNumber"
            ref = {userRef}
            fullWidth
            required
          />
          <Inputs
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
          
          <Btn
            variant="contained"
            color="primary"
            onClick={() => handleLogin()}
            fullWidth
          >
            Login
          </Btn>
          <ForgotLink
            to="/forgotpassword"
            underline="always"
          >
            Forgot Password ?
          </ForgotLink>
          <LastLine >
            Don't have and account? <Link to="/signup">Sign up</Link>
          </LastLine>
        </PaperContainer>
      </Container>
    </>
  );
};
export default Login;
