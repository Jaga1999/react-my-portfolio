import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material//LinkedIn";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to={"https://www.instagram.com/jagadeep__jd/"}>
        <InstagramIcon />
        </Link>
        <Link to={"https://www.facebook.com/profile.php?id=100007182318993"}>
        <FacebookIcon />
        </Link>
        <Link to={"https://www.linkedin.com/in/jagadeep-s-4a129518a/"}>
        <LinkedInIcon />
        </Link>
      </div>
      <p> &copy; 2022 Jagadeep S</p>
    </div>
  );
}

export default Footer;
