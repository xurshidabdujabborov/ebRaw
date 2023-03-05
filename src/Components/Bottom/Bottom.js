import React from 'react'
import { Container , Grid } from '@mui/material'
import "./Bottom.css"

function Bottom() {
  return (
    <div className='Bottom'>
        <Container maxWidth="xl">
            <div className="text">
                <h2 className="title">Sign Up Now & Get 10% Off</h2>
                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</p>
                <form action="#">
                    <input type="text" placeholder='Enter your email address' />
                    <button>Subscribe Now</button>
                </form>
            </div>
        </Container>
    </div>
  )
}

export default Bottom