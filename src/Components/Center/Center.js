import React from "react";
import { Container, Grid } from "@mui/material";
import "./Center.css";

function Center() {
  return (
    <div className="Center" id="page">
      <Container maxWidth="xl">
        <div className="box">
          <h2 className="title">SAVE UP 50% OFF</h2>
          <p className="text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered <br /> alteration in some form, by
            injected humour, or randomised words which don't look even <br />{" "}
            slightly believable
          </p>
          <button>SHOP NOW</button>
        </div>
      </Container>
    </div>
  );
}

export default Center;
