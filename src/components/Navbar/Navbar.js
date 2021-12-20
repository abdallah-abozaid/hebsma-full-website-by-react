import React, { useState, useContext } from "react";
import "./navbar.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../../img/home/logo.png";
import bigBack from "../../img/home/back1.png";
import { NavLink } from "react-router-dom";
import { ImHome } from "react-icons/im";
import {
  MdMiscellaneousServices,
  MdOutlineContactSupport,
} from "react-icons/md";
import { BiUserPin } from "react-icons/bi";
import { BsImages } from "react-icons/bs";
import { CgNotes, CgMenuLeft, CgPlayListRemove } from "react-icons/cg";
import Mycontext from "../../store/context";

const NavBar = () => {
  const ctx = useContext(Mycontext);
  const [toggle, settoggle] = useState(true);
  return (
    <Navbar expand="lg" className={`navbar ${ctx.back ? "" : "background"}`}>
      {ctx.back && <img src={bigBack} className="bigBack" />}
      <Container>
        <Navbar.Brand className="logo">
          <NavLink
            onClick={() => {
              ctx.setback(true);
            }}
            to="/"
          >
            <img src={logo} />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          onClick={() => {
            settoggle((prev) => !prev);
          }}
        >
          {toggle ? (
            <CgMenuLeft color="white" />
          ) : (
            <CgPlayListRemove color="white" />
          )}
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <NavLink
              className="nav-link"
              onClick={() => {
                ctx.setback(true);
              }}
              to="/"
            >
              <ImHome className="mb-1" /> Home
            </NavLink>
            <NavLink
              className="nav-link"
              onClick={() => {
                ctx.setback(false);
              }}
              to="/about"
            >
              <BiUserPin className="mb-1" /> About
            </NavLink>
            <NavLink
              className="nav-link"
              onClick={() => {
                ctx.setback(false);
              }}
              to="/service"
            >
              <MdMiscellaneousServices className="mb-1" /> Service
            </NavLink>
            <NavLink
              className="nav-link"
              onClick={() => {
                ctx.setback(false);
              }}
              to="/notes"
            >
              <CgNotes className="mb-1" /> Notes
            </NavLink>
            <NavLink
              className="nav-link"
              onClick={() => {
                ctx.setback(false);
              }}
              to="/portfolio"
            >
              <BsImages className="mb-1" /> Portfolio
            </NavLink>
            <NavLink
              className="nav-link"
              onClick={() => {
                ctx.setback(false);
              }}
              to="/contact"
            >
              <MdOutlineContactSupport className="mb-1" /> Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
