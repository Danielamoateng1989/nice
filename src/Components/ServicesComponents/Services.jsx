import { Box } from '@chakra-ui/react'
import services from '../../services'
import ServicesCard from './ServiceCard'
import ServicesGrid from './ServiceGrid'
import axios from 'axios'
import {useState, useEffect} from 'react'



const Services = () => {
  
    
  
  
  
    return (
        <Box
            maxW="7xl"
            mx="auto"
            px={{
                base: '4',
                md: '8',
                lg: '12',
            }}
            py={{
                base: '6',
                md: '8',
                lg: '12',
            }}
        >


            <ServicesGrid>

                {services.map((service) => (
                    <ServicesCard key={service.id} service={service}/>
                ))}

            </ServicesGrid>

        </Box>

        
    )
}

export default Services
