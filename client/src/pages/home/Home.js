import React, { useContext, useEffect, useState } from "react";
import Banner from "../../banner/Banner";
import FeedArea from "./FeedArea";
import NavBar from "./Navbar";
import "./styles.css";
import MenuIcon from "@mui/icons-material/Menu";
import ReportIcon from "@mui/icons-material/Report";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { LoginContext } from "../../context/ContextProvider";
import { Link } from "react-router-dom";
import { getUserDetails, saveUserDetails } from "../../utils/common-utils";
const Home = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleMenu = () => {
    setOpenDrawer(true);
  };
  const { account, setAccount } = useContext(LoginContext);
    useEffect(() => {
     setAccount(getUserDetails());
    }, [])
  return (
    <div>
      <div className="banner" style={{ border: "1px solid black" }}>
        <Banner />
      </div>
      <div className="main__container">
        <NavBar open={openDrawer} setOpen={setOpenDrawer} />
        <div className="icons">
          <MenuIcon onClick={handleMenu} cursor="pointer" />
          <Link to={`/complaints/${account.UANNumber}`}>
          <ReportIcon style={{ color: "green" }} />
          </Link>
          <Link to={`/reports/${account.UANNumber}`}>
          <BorderColorIcon style={{ color: "green" }}/>
          </Link>
          <Link to={`/detail/${account.UANNumber}`}>
          <AccountCircleIcon style={{ color: "green" }}  />
          </Link>
          <span>
          {account.name}
          </span>
        </div>
        <FeedArea />
      </div>
    </div>
  );
};

export default Home;
