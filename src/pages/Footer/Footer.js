import React from "react";
import { Container, Grid } from "@mui/material";
import logo from "../../assets/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import pay from "../../assets/pay.png"
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <Container maxWidth="xl">
        <Grid container alignItems={"center"}>
          <Grid items md={3} sm={6} xs={12}>
            <div className="left">
              <img src={logo} alt="" />
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do
                eiusmod tempor <br /> incididunt ut labore.
              </p>
              <div className="icon">
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
                <TelegramIcon />
              </div>
              <p className="text">Check our shop in Google Map</p>
            </div>
          </Grid>
          <Grid items md={3} sm={6} xs={12}>
            <ul>
              <h4>Support Links</h4>
              <li>
                <a href="#">Product Guides</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Delivery Policy</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Feedback</a>
              </li>
            </ul>
          </Grid>
          <Grid items md={3} sm={6} xs={12}>
            <ul>
              <h4>Quick Links</h4>
              <li>
                <a href="#">Product Guides</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Delivery Policy</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Feedback</a>
              </li>
            </ul>
          </Grid>
          <Grid items md={3} sm={6} xs={12}>
            <ul>
              <h4>Company</h4>
              <li>
                <a href="#">Product Guides</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Delivery Policy</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Feedback</a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
      <div className="box">
        <div className="text">
          <p className="text">Copyright @2021 ebRaw. All Rights Reserved By Graphic Raz</p>
        </div>
        <div className="img">
          <img src={pay} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
