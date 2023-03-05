import React from "react";
import { Container, Grid } from "@mui/material";
import vec from "../../assets/vector.png" 
import "./Shoping.css"  

function Shoping() {
  return (
    <div className="Shoping">
      <Container maxWidth="xl">
        <Grid container alignItems={"center"}>
          <Grid items md={3} sm={12} xs={12}>
            <div className="card">
              <img src={vec} alt="" />
              <h4>Free Shipping</h4>
              <p className="text">Orders over $200</p>
            </div>
          </Grid>
          <Grid items md={3} sm={12} xs={12}>
            <div className="card">
              <img src={vec} alt="" />
              <h4>Secure Payment</h4>
              <p className="text">Orders over $200</p>
            </div>
          </Grid>
          <Grid items md={3} sm={12} xs={12}>
            <div className="card">
              <img src={vec} alt="" />
              <h4>Gift Certificae</h4>
              <p className="text">Orders over $200</p>
            </div>
          </Grid>
          <Grid items md={3} sm={12} xs={12}>
            <div className="card">
              <img src={vec} alt="" />
              <h4>24/7 Support</h4>
              <p className="text">Orders over $200</p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Shoping;
