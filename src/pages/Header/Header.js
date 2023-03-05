import React from "react";
import { Container, Grid } from "@mui/material";
import "./Header.css";

function Header() {
  return (
    <header>
      <Container maxWidth="xl">
          <div className="box" id="home">
            <span className="uno">New Arrival!</span>
            <h2>MAN COLLECTION</h2>
            <p className="text">
              There are many variations of passages of Lorem Ipsum available
              majority <br /> have suffered alteration
            </p>
            <button>SHOP NOW</button>
          </div>
      </Container>
    </header>
  );
}

export default Header;
