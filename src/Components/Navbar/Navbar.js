import React from "react";
import { Container, Grid } from "@mui/material";
import logo from "../../assets/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <Container maxWidth="xl">
        <Grid container alignItems={"center"}>
          <Grid items md={4} sm={4} xs={12}>
            <ul>
              <li>
                <a href="#home">Home </a>
              </li>
              <li>
                <a href="#shop">Shop</a>
              </li>
              <li>
                <a href="#product">Product</a>
              </li>
              <li>
                <a href="#page">Page</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </Grid>
          <Grid items md={4} sm={4} xs={12}>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </Grid>
          <Grid items md={4} sm={4} xs={12}>
            <div className="right">
              <ShoppingCartIcon />
              <FavoriteIcon />
              <PersonIcon />
            </div>
          </Grid>
        </Grid>
      </Container>
    </nav>
  );
}

export default Navbar;
