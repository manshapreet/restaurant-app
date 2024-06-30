import React from 'react'
import './HomeCustomer.css'
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import Menu from '../Menu/Menu';


const HomeCustomer = () => {

    const { id } = useParams();

  return (
    <div>
        {/* <div>welcome {id}</div> */}

        <Menu/>
    </div>
  )
}

export default HomeCustomer