import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import logo from '../../images/nice.png'
import styled from 'styled-components'
import { Link } from "react-router-dom"



const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  color: #709ee8;
  border-radius: 5px;
  font-weight: bold;
  height: 30px;
  width: 120px;
  background-color: #2a73e8;
  color: #fff;
  font-weight: bold;
`
const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)

 
    return (

        <nav>
            <div className="nav-center">
                <div className="nav-header">
                   
                        <img src={logo} alt="nicelogo" className="logo"></img>
             
                    <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
                        <FaBars />
                    </button>
                </div>

                <div className={`${showLinks ? 
                'links-container show-container'
                 : 'links-container'} `} />

                
           
                    <Button>Logout</Button>
           

            </div>
        </nav>

    )
}

export default Navbar