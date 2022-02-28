
import {
    Box,
    Flex,
    Image,
    Skeleton,
    Stack,
    HStack,
    Text,
   
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import services from '../../services'
import styled from 'styled-components'
import Rating from '../../Components/ServicesComponents/Rating'


const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  color: white;
  border-radius: 5px;
  background-color: #2A73E8;
  font-weight: bolder;
  height: 40px;
  width: 160px;
  &:hover {
    background-color: #709ee8;
  }

`


const ServicesDetail = () => {
    return (


      

        
     <React.Fragment>
         <h1>
            <ul>
                {services.map(service => {
                   
                    return (
                        <div key={service.id}>
                            <li>
                                <h1>{service.price}</h1>
                            </li>
                        </div>
                    )
                })}
            </ul>
         </h1>
     </React.Fragment>
    )
}

export default ServicesDetail
