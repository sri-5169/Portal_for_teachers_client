import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Complain from "../complain/Complain";
import Notice from "../notice/Notice";
const Home = () => {
  useEffect(() => {
    console.log("data");
  }, []);

  return (
    <div>
        <img height="150" width="100%" src="images/ban.jpg" alt="img" />
      <div>
      <Link to="/details/101612758411">
        <Button variant="contained">Contained</Button>
      </Link>
        <Complain/>
    </div>
      <Notice/>
    </div>
  );
};

export default Home;
