import React from "react";
import { Container, Grid } from "@mui/material";
import blog from "../../assets/blog.png";
import blog1 from "../../assets/blog 1.png";
import blog2 from "../../assets/blog 2.png";
import "./Blog.css";

function Blog() {
  return (
    <div className="Blog" id="blog">
      <Container maxWidth="xl">
        <div className="text"><h2 className="title">From the blog</h2></div>
        <p className="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered <br /> alteration in some form, by injected humour</p>
        <Grid container alignItems={"cenetr"}>
          <Grid items md={6} sm={12} xs={12}>
            <div className="box">
              <img src={blog} alt="" />
              <span className="uno">DESIGN JULY 11, 2021</span>
              <h3>2021’S Biggest Sneaker Is Getting Us So <br /> Pumped For Summer</h3>
              <p className="text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't.
              </p>
              <button>Read More</button>
            </div>
          </Grid>
          <Grid items md={6} sm={12} xs={12}>
            <div className="colomun">
              <div className="card">
                <img src={blog1} alt="" />
                <span className="uno">DESIGN JULY 11, 2021</span>
                <div className="flex">
                    <p className="text">2021’S Biggest Sneaker Is Getting Us So Pumped For Summer</p>
                    <button>Read More</button>
                </div>
              </div>
              <div className="card">
                <img src={blog2} alt="" />
                <span className="uno">DESIGN JULY 11, 2021</span>
                <div className="flex">
                    <p className="text">2021’S Biggest Sneaker Is Getting Us So Pumped For Summer</p>
                    <button>Read More</button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Blog;
