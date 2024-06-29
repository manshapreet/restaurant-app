import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import axios from 'axios'

const SignupCustomer = () => {

    // axios.defaults.withCredentials = true;


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
        

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
    
    
    
        const submitNewUser = async (e) => {
            e.preventDefault();
           
    
            if(phone && validPhone && name){
                try{
                    console.log('working')
                    const data = await axios.post(`http://localhost:4700/customersignup`, {phone, name})
            
                    const axiosdata = data.data
                    console.log('/a/a/a',axiosdata);
            
                    if(axiosdata){
                              
                        const user = axiosdata.Username;
                        // setAuth({user});
                        navigate(`/customerhome/${user}`);
                        
                    }                
                    
                }      
                catch(err){console.log(err);}
            }
        }
    
       
  return (
    <div className='LoginCustomer'>
    
            <div className="LoginBox"  >
              <div className='loginHead'>Sign Up</div> 
          
              <div className='LoginPhoneDiv'>
    
                <div>Enter Phone Number</div>
                <input className={`login_input ${inputStyle}`} type='Number'    
                  placeholder='Phone Number'
                  onChange={(e)=>setphone(e.target.value)}
                />
                { phone && !validPhone? (<p className='loginerror'>
                                add valid phone no.       
                                </p>): <></>}
              </div>
              
              <div className='LoginnameDiv'>
    
                <div>Enter Name</div>
                <input className={`login_input`} type='text'
                  placeholder='Name' 
                  onChange={(e)=>setname(e.target.value)}
                />
        
                {!phone || !name ? (<p className='loginerror'>
                            please complete all fields.        
                            </p>): <></>}
              </div>
              
    
              <button type="submit" className='LoginSubmit' 
                onClick={(e)=> submitNewUser(e)}>
                  Sign Up
              </button>

              <div>Not your first time dining here? <Link to={'/logincustomer'}>Login</Link></div>
    
              {error?<p className='invalidUserError'>Some error occured, couldnt sign up.</p>:<></>}
            </div>
    </div>
  )
}

export default SignupCustomer