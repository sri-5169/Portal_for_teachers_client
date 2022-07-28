import { Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../../banner/Banner.js";
import { LoginContext } from "../../context/ContextProvider.js";
import { API } from "../../service/api.js";
import {  saveUserDetails } from "../../utils/common-utils.js";
import MyTable from "./MyTable.js";
const DetailView = () => {
  const [info, setInfo] = useState({});
  const {account, setAccount} = useContext(LoginContext);
  const { UANNumber } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      let response = await API.getInfo({UANNumber : UANNumber , account : JSON.parse(sessionStorage.getItem('user'))});
      if(response.isSuccess){
        setInfo(response.data);
        console.log(info);
      }else {
        console.log(response);
      }
    };
    setTimeout(1000,fetchData());
  }, []);
  useEffect(() => {
    account ? 
    saveUserDetails(account) : console.log("NO account");
    console.log(account);
  }, [])
  return (
    <div>
      <Banner />
      <div className="detail__container">
      <Grid xs={12} sm={12} md={6} style={{ margin: "20px auto"}}>
        <MyTable info={info} />
      </Grid>
      </div>
    </div>
  );
};

export default DetailView;
