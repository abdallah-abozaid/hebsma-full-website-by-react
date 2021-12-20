import React, { useContext } from "react";
import "./footer.css";
import { FaSearchLocation, FaTwitter } from "react-icons/fa";
import {
  BsFillTelephoneForwardFill,
  BsFacebook,
  BsWhatsapp,
  BsImages,
} from "react-icons/bs";
import { BiMessageDetail, BiUserPin } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { ImHome } from "react-icons/im";
import { CgNotes } from "react-icons/cg";
import {
  MdMiscellaneousServices,
  MdOutlineContactSupport,
} from "react-icons/md";
import { Link } from "react-router-dom";
import Mycontext from "../../store/context";
import logo from "../../img/home/logo.png";

const Footer = () => {
  const ctx = useContext(Mycontext);
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <h5>Contact Information</h5>
            <p>
              <FaSearchLocation /> Gaza, Palestine
            </p>
            <p>
              <BsFillTelephoneForwardFill /> 0599197739
            </p>
            <p>
              <BiMessageDetail /> abood.osa.99.10@gmail.com
            </p>
            <p>
              <BsFacebook />
              <FaTwitter />
              <BsWhatsapp />
              <AiFillInstagram />
            </p>
          </div>
          <div className="col-12 col-md-4">
            <h5>Website links</h5>
            <ul>
              <li>
                <Link
                  onClick={() => {
                    ctx.setback(true);
                  }}
                  to="/"
                >
                  <ImHome className="mb-1" /> Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    ctx.setback(false);
                  }}
                  to="/about"
                >
                  <BiUserPin className="mb-1" /> About
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    ctx.setback(false);
                  }}
                  to="/service"
                >
                  <MdMiscellaneousServices className="mb-1" /> Service
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    ctx.setback(false);
                  }}
                  to="/notes"
                >
                  <CgNotes className="mb-1" /> Notes
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    ctx.setback(false);
                  }}
                  to="/portfolio"
                >
                  <BsImages className="mb-1" /> Portfolio
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    ctx.setback(false);
                  }}
                  to="/contact"
                >
                  <MdOutlineContactSupport className="mb-1" /> Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <img src={logo} alt="" />
            <p className="text">
              other text you want this text you can replace it with any other
              text you want this text you can replace it with any other text you
              want this text you can replace it with any other text you want
              this text you can replace
            </p>
          </div>
        </div>
      </div>
      <div className="last">All rights reserved to Mbsma 2021</div>
    </div>
  );
};

export default Footer;
