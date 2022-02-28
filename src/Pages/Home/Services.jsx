import React from 'react'
import { ServicesCard } from '../../Components/Homepage/ServicesList'


const Services = ({services}) => {
    return (
        <ServicesCard service={services} />
    )
}

export default Services
