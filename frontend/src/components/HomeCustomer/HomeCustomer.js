import React from 'react'
import './HomeCustomer.css'
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";


const HomeCustomer = () => {

    const { id } = useParams();

  return (
    <div>
        <div>welcome {id};</div>

        
    </div>
  )
}

export default HomeCustomer