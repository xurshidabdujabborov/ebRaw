import React from "react";
import { Container, Grid } from "@mui/material";
import car from "../../assets/card.png";
import ca from "../../assets/car.png"
import ca1 from "../../assets/car1.png"
import "./Product.css";

function Product() {
  return (
    <div className="Product" id="product">
      <Container maxWidth="xl">
        <Grid container alignItems={"center"}>
          <Grid items md={6} sm={12} xs={12}>
            <div className="left">
              <div className="img">
                <img src={car} alt="" />
                <div className="text">
                  <span className="uno">Summer Sale</span>
                  <h4>New Man Collection</h4>
                  <button>Find Collection</button>
                </div>
              </div>
            </div>
          </Grid>
          <Grid items md={6} sm={12} xs={12}>
            <div className="colomun">
              <div className="img">
              <img src={ca} alt="" />
              </div>
              <div className="img1">
              <img src={ca1} alt="" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Product;
