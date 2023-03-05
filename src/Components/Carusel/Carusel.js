import React from "react";
import { Container, Grid } from "@mui/material";
import "./Carusel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jac from "../../assets/jec.png";

function Carusel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="Carusel">
      <Container maxWidth="xl">
        <Slider {...settings}>
          <div className="text">
            <h2 className="title">What Say Our Regular Customer</h2>
            <p className="text">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered <br /> alteration in some form, by
              injected humour
            </p>
            <span>
              There are many variations of passages of Lorem Ipsum available,
              but the <br /> majority have suffered alteration in some form, by
              injected humour, or <br /> randomised words which don't look even
              slightly believable.
            </span>
            <div className="colomun">
              <img src={jac} alt="" />
            </div>
            <h4>Wade Warren</h4>
          </div>
          <div className="text">
            <h2 className="title">What Say Our Regular Customer</h2>
            <p className="text">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered <br /> alteration in some form, by
              injected humour
            </p>
            <span>
              There are many variations of passages of Lorem Ipsum available,
              but the <br /> majority have suffered alteration in some form, by
              injected humour, or <br /> randomised words which don't look even
              slightly believable.
            </span>
            <div className="colomun">
              <img src={jac} alt="" />
            </div>
            <h4>Wade Warren</h4>
          </div>
          <div className="text">
            <h2 className="title">What Say Our Regular Customer</h2>
            <p className="text">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered <br /> alteration in some form, by
              injected humour
            </p>
            <span>
              There are many variations of passages of Lorem Ipsum available,
              but the <br /> majority have suffered alteration in some form, by
              injected humour, or <br /> randomised words which don't look even
              slightly believable.
            </span>
            <div className="colomun">
              <img src={jac} alt="" />
            </div>
            <h4>Wade Warren</h4>
          </div>
        </Slider>
      </Container>
    </div>
  );
}

export default Carusel;
