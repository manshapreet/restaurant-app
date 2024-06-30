import './App.css';
import axios from 'axios';
import Layout from './Layout';
import RequireAuth from './RequireAuth';
import RequireloginAuth from './RequireloginAuth';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LoginCustomer from './components/LoginCustomer/LoginCustomer';
import HomeCustomer from './components/HomeCustomer/HomeCustomer';
import SignupCustomer from './components/SignupCustomer/SignupCustomer';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import StaffLogin from './components/StaffLogin/StaffLogin';


function App() {

  axios.defaults.withCredentials = true;

  return (
    <ShoppingCartProvider>
      <Routes >
        
          <Route  path="/" element={<Layout/>}>
                <Route index element={<SignupCustomer />} /> 
      
                {/* <Route element={<RequireloginAuth/>}>
                  <Route path="login" element={<Login UserName={UserName} setUserName={setUserName} />}/>
                </Route> */}

                {/* <Route path="signup" element={<SignUp />}/> */}
                <Route path="loginstaff" element={<StaffLogin />}/>
                

                <Route element={<RequireAuth  />}>

                    <Route path='customerhome/:id' element={<HomeCustomer/>}/>
                </Route>

                  {/* <Route path ='' */}
                    
                
                    {/* <Route path='actor/:query' element={<Actors/>}/> */}
          </Route>
          
        </Routes> 
      </ShoppingCartProvider>
  );
}

export default App;
