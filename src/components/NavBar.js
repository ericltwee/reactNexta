import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap";
import { NavLink as Link } from "react-router-dom";
import AuthModal from "./Modal";

const NavBar = ({ signUpUser, loginUser, currentUser, logoutUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{ backgroundColor: "#020d1c" }} expand="md">
        <NavbarBrand href="/">Next@gram</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            style={{ border: "solid", padding: "5px" }}
            className="ml-auto"
            navbar
          >
            {currentUser ? (
              <NavItem>
                <NavbarText style={{ color: "#18d8bb" }}>
                  Logged in as {currentUser.username}
                </NavbarText>
              </NavItem>
            ) : (
              ""
            )}
            <NavItem>
              <NavLink tag={Link} to="/profile">
                Profile Page
              </NavLink>
            </NavItem>
            {currentUser ? (
              <NavItem style={{ backgroundColor: "#0b3b7f" }}>
                <NavLink onClick={logoutUser} style={{ cursor: "pointer" }}>
                  Logout
                </NavLink>
              </NavItem>
            ) : (
              <NavItem style={{ backgroundColor: "#0b3b7f" }}>
                <AuthModal
                  buttonLabel="Login"
                  signUpUser={signUpUser}
                  loginUser={loginUser}
                />
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
