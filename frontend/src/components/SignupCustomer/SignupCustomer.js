import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const SignupCustomer = () => {

    // axios.defaults.withCredentials = true;


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
        
      const {setAuth}=useAuth();

      const navigate = useNavigate();
      const [phone, setphone] = useState('');
      const [name, setname] = useState('');
      const [validPhone, setValidPhone] = useState(false);
      const [error, seterror] = useState(false)
      const [inputStyle, setinputStyle] = useState('');
    
      const PHONE_REGEX = /^[1-9]{1}[0-9]{9}$/
    
      useEffect(() => {
        const result = PHONE_REGEX.test(phone);
    
        setValidPhone(result);
    
    }, [phone])
    
      useEffect(() => {
        if (phone) {
          if (!validPhone) {
            setinputStyle('invalid');
          } else {
            setinputStyle('valid');
          }
        }
      }, [phone, validPhone]);
    
    
        useEffect(()=>{
    
            if(error){
                setinputStyle('invalid');
            }
            else{
                setinputStyle('');
            }
        
        }, [error])
    
        const [NameDiv, setNameDiv] = useState(false)
        const [showLoading, setShowLoading] = useState(false)
    
    
    const submitNewUser = async (e) => {
            e.preventDefault();
           
    
            if(phone && validPhone){
                try{
                  
                    setShowLoading(true);
                    //console.log('working')----------
                    const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/customersignup`, {phone})
            
                    const axiosdata = data.data
                    console.log('/a/a/a',axiosdata);
                    if(!axiosdata){
                      setShowLoading(false);
                      setNameDiv(a=>!a);
                      console.log('welcome!!!  One last thing, show input for name, then a button saying start ordering')
                    }

                    if(axiosdata){
                              
                        const user = axiosdata.Username;
                        setAuth({user});
                        navigate(`/customerhome/${user}`);
                        
                    }                
                    
                }      
                catch(err){console.log(err);}
            }
        }
    
       
      const submitName = async (e) => {
          e.preventDefault();
         
  
          
              try{
                
                  //setShowLoading(true);
                  //console.log('working')----------
                  const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/submitname`, {phone,name})

                  const axiosdata = data.data
                  console.log('/a/a/a',axiosdata);
                  

                  if(axiosdata){
                            
                      const user = axiosdata.Username;
                      setAuth({user});
                      navigate(`/customerhome/${user}`);
                      
                  }                
                  
              }      
              catch(err){console.log(err);}
          
      }
        
    
    
    
    
        return (
    
    <div className='LoginCustomer'>
    
          { !NameDiv ? <div className="LoginBox"  >
              <div className='loginHead'>Craving Something?</div> 
              <div className='loginSubHead'>Lets get you started</div>
              <div className='LoginPhoneDiv'>
    
                {/* <div>Enter Phone Number</div> */}
                <input className={`login_input ${inputStyle}`} type='Number'    
                  placeholder='Enter your Phone Number'
                  onChange={(e)=>setphone(e.target.value)}
                />
                { phone && !validPhone? (<p className='loginerror'>
                                add valid phone no.       
                                </p>): <></>}
              </div>
              
             
              
    
              <button type="submit" className='LoginSubmit' 
                onClick={(e)=> submitNewUser(e)}>
                  Next
              </button>

              {/* <div>Not your first time dining here? <Link to={'/logincustomer'}>Login</Link></div> */}
    
              {/* {error?<p className='invalidUserError'>Some error occured, couldnt sign up.</p>:<></>} */}
            </div>:
            <>
            </>}




         {NameDiv?   <div className="LoginBox"  >
              <div className='loginHead'>One last Thing</div> 
              {/* <div className='loginSubHead'>Lets get you started</div> */}
             
              
              <div className='LoginnameDiv'>
    
               
                <input className={`login_input`} type='text'
                  placeholder='Can we know your Name' 
                  onChange={(e)=>setname(e.target.value)}
                />
        
                {!name ? (<p className='loginerror'>
                            please complete all fields.        
                            </p>): <></>}
              </div>
              
    
              <button type="submit" className='LoginSubmit' 
                onClick={(e)=> submitName(e)}>
                  Start ordering
              </button>

              {/* <div>Not your first time dining here? <Link to={'/logincustomer'}>Login</Link></div> */}
    
              {/* {error?<p className='invalidUserError'>Some error occured, couldnt sign up.</p>:<></>} */}
            </div> : 
            <>
            </>   }

            {showLoading? 
              <div style={{display:'flex', justifyContent:'center'}}>
                <CircularProgress />
              </div>
            : <></>}

    </div>
  )
}

export default SignupCustomer