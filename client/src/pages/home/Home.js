import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    console.log("data");
  }, []);

  return (
    <div>
      Srinath
      <Link to="/details/101612758411">
        <Button variant="contained" color="primary">
          Details
        </Button>
      </Link>
    </div>
  );
};

export default Home;
