import React from 'react'
import { Container } from '@mui/material'
import insta from "../../assets/insta.png"
import vec from "../../assets/vec.png"
import vec1 from "../../assets/vec 1.png"
import vec2 from "../../assets/vec 2.png"
import vec3 from "../../assets/vec 3.png"
import "./Follow.css"

function Follow() {
  return (
    <div className='Follow' id='shop'>
        <Container maxWidth="xl">
            <div className="text">
                <img src={insta} alt="" />
                <h3>Follow us in instagram @graphic_raz</h3>
            </div>
        </Container>
        <div className="box">
            <img src={vec} alt="" />
            <img src={vec1} alt="" />
            <img src={vec2} alt="" />
            <img src={vec3} alt="" />
        </div>
    </div>
  )
}

export default Follow