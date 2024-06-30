import React, {useEffect, useState} from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import axios from 'axios'
import './StaffLogin.css'

const StaffLogin = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    //   const {setAuth}= useAuth();
        
  
        
      const navigate = useNavigate();
      const [phone, setphone] = useState('');
      const [pwd, setPwd] = useState('');
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
    
    
    
        const submitUser = async (e) => {
            e.preventDefault();
           
    
            if(phone && validPhone && pwd){
                try{
                const data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/stafflogin`, {phone, pwd})
        
                const axiosdata = data.data
                // console.log('/a/a/a',axiosdata);
        
                    if(!axiosdata){
                    // console.log('wrong id');
                    seterror(true);
                    }
                    else{            
                    const user = axiosdata.Username;
                        // setAuth({user});
                        navigate(`/customerhome/${user}`);
                        
                    }                
                    
                }      
                catch(err){console.log(err);}
            }
        }

  return (
    <div className='StaffLogin'>

        <div className="LoginBox">
              <div className='loginHead'>Login as Staff</div> 
          
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
    
                <div>Enter Password</div>
                <input className={`login_input`} type='password'
                  placeholder='Password' 
                  onChange={(e)=>setPwd(e.target.value)}
              />
    
              {!phone || !pwd ? (<p className='loginerror'>
                        please complete all fields.        
                        </p>): <></>}
              </div>
              
    
              <button type="submit" className='LoginSubmit' 
                onClick={(e)=> submitUser(e)}>
                  Login
              </button>

              {/* <div>Your first time dining here? <Link to={'/'}>Signup</Link></div> */}
    
              {error?<p className='invalidUserError'>Invalid Phone or Password.</p>:<></>}
          
            </div>
    </div>
  )
}

export default StaffLogin