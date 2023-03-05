import React from "react";
import { Container, Grid } from "@mui/material";
import car3 from "../../assets/card 3.png"
import car4 from "../../assets/card 4.png"
import car5 from "../../assets/card 5.png"
import "./Best.css";

function Best() {
  return (
    <div className="Best">
      <Container maxWidth="xl">
        <div className="text">
        <h2 className="title">Best Selling Products</h2>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        </div>
        <Grid container alignItems={"center"}>
            <Grid items md={4} sm={12} xs={12}>
                <div className="box">
                    <img src={car3} alt="" />
                    <p className="text">Man Sweet Hoodie</p>
                    <span>$250.00</span>
                </div>
            </Grid>
            <Grid items md={4} sm={12} xs={12}>
                <div className="box">
                    <img src={car4} alt="" />
                    <p className="text">Man Sweet Hoodie</p>
                    <span>$200.00</span>
                </div>
            </Grid>
            <Grid items md={4} sm={12} xs={12}>
                <div className="box">
                    <img src={car5} alt="" />
                    <p className="text">Man Sweet Hoodie</p>
                    <span>$150.00</span>
                </div>
            </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Best;
