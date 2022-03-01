import { Box } from '@chakra-ui/react'
import services from '../../services'
import ServicesCard from './ServiceCard'
import ServicesGrid from './ServiceGrid'
import axios from 'axios'
import {useState, useEffect} from 'react'



const Services = () => {
  

  const [services, setServices] = useState([])

 

  const fetchAllServices = () => {

    axios.get('http://localhost:5000/api/services')
    .then((response) => {
        const services = response.data
        setServices(services)
        console.log(services)
    })
  }




  useEffect(() => {
      fetchAllServices()
  }, [])
  
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

                {services.map((service, index) => (
                    <ServicesCard key={index} service={service}/>
                ))}

            </ServicesGrid>

        </Box>

        
    )
}

export default Services
