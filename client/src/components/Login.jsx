import React, {useContext, useState} from 'react';
import login from '../images/login.gif';
import { NavLink, useHistory } from 'react-router-dom';
import { UserContext } from '../App';
import phone from '../images/telephone.png';
import mail from '../images/email.png';
import address from '../images/address.png';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

  

const Login=()=>{
  const {state,dispatch} = useContext(UserContext);

  const history=useHistory();

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const loginUser=async(e)=>{
     e.preventDefault();

     const res= await fetch('/signin',{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          'Accept': 'application/json'
        },
        
        body:JSON.stringify({
            email,password
        })
     });
     const data=await res.json();
     
     if(res.status===400 || !data){
       window.alert("Invalid Credentials");
     }else{
      dispatch({type:"USER",payload:true})
      window.alert("Login Successful");
      history.push("/");
     }
  }
  return(
    <>
      <section className="signup">
       <div className="container mt-5">
         <div className="signup-content">
           <div className="signup-form row">
             <div className="signup-image col-md-6">
              <figure>
              <img src={login} alt="not found"/>
              </figure>
              <NavLink to="/signup" className="login-image-link">CREATE AN ACCOUNT  | </NavLink>
              <NavLink to="/AdminLogin" className="login-image-link"> &nbsp;LOGIN AS ADMIN</NavLink>
             </div>
             <div className="col-md-6">
             <Card sx={{ minWidth: 275 }}>
               <CardContent>
             <h2 className='text-align:center'>Log In</h2>
             <hr/>
             <form method="POST" className="register-form" id="register-form">
            
              <div className="form-group">
                <TextField id="email" label="Email" variant="outlined" htmlFor="email"
                 type="email" name="email" autoComplete="off" 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="Enter email" className='mx-2'/>
              </div>
              
              <br />
              <div className="form-group">
              <FormControl sx={{ width: '27ch' }} variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            name="password" autoComplete="off" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter password" className='mx-2'/>
        </FormControl>
              </div>
<br />
              <div className="form-group form-button">
                <input type="submit" name="signin" id="signin" className="form-submit login btn btn-outline-primary"
                onClick={loginUser} value="Log In"/>
              </div>
             </form>
             </CardContent>
             </Card>
             </div>
           </div>
         </div>
       </div>
      </section>
      <div className="contact_info bg-dark text-white mt-5">
        <div className="container-fluid">
        <br />
         <div className="row">
           <div className="col-lg-12 row">   
             <div className="contact_info_item col-1 abc">
               <img src={phone} alt="not found" height="50" width="50"/>
             </div>
             <div className="contact_info_item col-2 abc">
               <h6>Phone</h6>
               <p>+1800 266 1236</p>
             </div>

<div className="col-1"></div>
             
             <div className="contact_info_item col-1 abc">
               <img src={mail} alt="not found" height="50" width="50"/>
             </div>
             <div className="contact_info_item col-3 abc">
               <h6>Email</h6>
               <p>safecamp@gmail.com</p>
             </div>
             

<div className="col-1"></div>
             <div className="contact_info_item col-1 abc">
               <img src={address} alt="not found" height="50" width="50"/>
             </div>
             <div className="contact_info_item col-2 abc">
               <h6>Address</h6>
               <p>Muthoot Institute of Technology and Science</p>
             </div>

           </div>
         </div>
        </div>
      </div>
    </>
  )
}

export default Login;


