import React from "react";
import styled from "styled-components";
import { NavLink, Route } from "react-router-dom";
import {
  RiBodyScanLine,
  RiShieldCrossLine,
  RiDashboardLine,
  RiInformationLine,
} from "react-icons/ri";

import covid from "./covid19.png";
import HomePage from "../pages/HomePage";
import Symptoms from "../pages/Symptoms";

const Navbar = () => {
  return (
    <NavbarContainer>
      <nav class="navbar navbar-expand-lg navbar-light">
        <img src={covid} alt="COVID_19" width="170px" height="70px" />

        <ul className="navbar-nav ml-auto pr-5 mt-lg-0">
          <li className="nav-item active p-2 ml-3">
            <NavLink
              className="nav-link"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Dashboard"
              to="/"
              exact
              activeStyle={{
                backgroundColor: "#66fcf1",
                color: "#1f2833",
                borderRadius: "5px",
                padding: "2vh",
              }}
            >
              <RiDashboardLine size="3.5vh" />
            </NavLink>
          </li>

          <li className="nav-item p-2 ml-3">
            <NavLink
              className="nav-link"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Symptom Checker"
              to="/symptoms"
              replace
              activeStyle={{
                backgroundColor: "#66fcf1",
                color: "#1f2833",
                borderRadius: "5px",
                padding: "2vh",
              }}
            >
              <RiShieldCrossLine size="3.5vh" />
            </NavLink>
          </li>

          <li className="nav-item p-2 mx-3">
            <NavLink
              className="nav-link"
              data-toggle="tooltip"
              data-placement="bottom"
              title="X-Ray Scanner"
              to="/scan"
              replace
              activeStyle={{
                backgroundColor: "#66fcf1",
                color: "#1f2833",
                borderRadius: "5px",
                padding: "2vh",
              }}
            >
              <RiBodyScanLine size="3.5vh" />
            </NavLink>
          </li>

          <li className="nav-item p-2 ml-3">
            <NavLink
              className="nav-link"
              data-toggle="tooltip"
              data-placement="bottom"
              title="About"
              to="/about"
              replace
              activeStyle={{
                backgroundColor: "#66fcf1",
                color: "#1f2833",
                borderRadius: "5px",
                padding: "2vh",
              }}
            >
              <RiInformationLine size="3.5vh" />
            </NavLink>
          </li>
        </ul>
      </nav>
      <Route path="/" component={HomePage} exact />
      <Route path="/symptoms" component={Symptoms} />
    </NavbarContainer>
  );
};

export default Navbar;

// STYLES COMPONENT STYLES
const NavbarContainer = styled.div`
  .nav-link {
    color: white !important;
    &:hover {
      background: var(--neon-blue) !important;
      color: var(--black-blue) !important;
      border-radius: 5px;
    }
  }

  nav {
    border: 1.5vh ridge white;
    padding: 1.5%;
  }
`;
