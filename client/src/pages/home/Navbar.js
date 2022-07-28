import { Box, Button, Drawer, styled} from "@mui/material";
import React, { useContext  } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/ContextProvider";
const Navbar__list = styled(Box)`
  width : 256px;
  background-color : orange;
  height : 100%;
  margin : 0 1rem;
  padding : 1rem 1rem;
  `
  const Nav_link = styled(Button)`
  font-weight : bold;
  padding : 5px 1rem 5px 1rem;
  border-radius : 5px;
  width : 100%;
  margin  : 3rem 0;
  color : green;
  text-decoration : none;
  cursor : pointer;
  &:hover{
    background-color : rgb(245, 228, 197);
    text-decoration : none;
  }
  & > a{
    text-decoration : none;
    color : green;
  }
  &>span {
    color : green;
  }
  `
const Navbar = ({ open, setOpen }) => {
  const { account, setAccount } = useContext(LoginContext);
  const navigate  = useNavigate();
  const handleLogout = (event) => {
    event.preventDefault();
    setAccount({});
    sessionStorage.clear();
    navigate("/login");
  };
  return (
    <Drawer open={open} onClose={() => setOpen(Boolean(false))}>
      <Navbar__list>
        <Nav_link >
          <Link  to={`/detail/${account.UANNumber}`}>
            Profile
          </Link>
        </Nav_link>
        <Nav_link >
          <Link to={`/detail/${account.UANNumber}`}>
            Salary Statement
          </Link>
        </Nav_link>
        <Nav_link >
          <Link to={`/complaints/${account.UANNumber}`}>
            Complaints
          </Link>
        </Nav_link>
        <Nav_link >
          <Link to={`/reports/${account.UANNumber}`}>
            Reports
          </Link>
        </Nav_link>
        <Nav_link >
          <span onClick={(event) => handleLogout(event)}>
            Sign Out
          </span>
        </Nav_link>
      </Navbar__list>
    </Drawer>
  );
};

export default Navbar;
