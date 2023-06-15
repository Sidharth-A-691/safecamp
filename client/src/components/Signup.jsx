import React, { useState } from "react";
import signpic from "../images/signup.gif";
import { NavLink, useHistory } from "react-router-dom";
import phone from "../images/telephone.png";
import mail from "../images/email.png";
import address from "../images/address.png";
import TextField from '@mui/material/TextField';

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    phone: "",
    address: "",
  });
  let name, value;
  const handleInputs = (event) => {
    //console.log(event);
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  //we will use fetch API to post data which returns a promise
  const PostData = async (event) => {
    event.preventDefault();
    const { name, email, password, cpassword, phone, address } = user;

    const res = await fetch("/register", {
      //these key-value pair are similar to data or elements shown on postman while posting the data
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "same-origin",
      body: JSON.stringify({
        name,
        email,
        password,
        cpassword,
        phone,
        address,
      }),
    });
    const data = await res.json();

    if (data.status === 400 || !data) {
      window.alert("Invalid Credentials");
      console.log("Invalid Credentials");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");

      history.push("/login");
    }
  };
  return (
    <>
      <section className="signup_reg">
        <div className="container mt-2">
          <div className="signup-content">
            <h2 className="text-center">Sign Up</h2>
            <hr />
            <div className="signup-form row">
              <div className="col-md-6">
                <form
                  method="POST"
                  className="register-form"
                  id="register-form"
                >
                  <div className="form-group">
                  <InputLabel htmlFor="name"></InputLabel>
                    <TextField
                      type="text"
                      name="name"
                      variant="outlined"
                      id="name"
                      autoComplete="off"
                      value={user.name}
                      onChange={handleInputs}
                      placeholder="Enter your name"
                      label="Name"   
                      fullWidth      
                    />
                  </div>

                  <br />
                  <div className="form-group">
                  <InputLabel htmlFor="email"></InputLabel>
                    <TextField
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInputs}
                      placeholder="Enter your email ID"
                      variant="outlined"
                      label="Email"
                      fullWidth 
                    />
                  </div>

                  <br />
                  <div className="form-group">
                  <InputLabel htmlFor="password"></InputLabel>
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
            name="password" autoComplete="off" 
            value={user.password}
            onChange={handleInputs}
            placeholder="Enter password" className='' fullWidth />
                  </div>

                  <br />
                  <div className="form-group">
                  <InputLabel htmlFor="password"></InputLabel>
          <OutlinedInput
            id="cpassword"
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
            name="cpassword" autoComplete="off" 
            value={user.cpassword}
            onChange={handleInputs}
            placeholder="Enter password" className='' fullWidth />
                  </div>
                  <br />
                  <div className="form-group">
                    <label htmlFor="phone">
                    </label>
                    <TextField
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInputs}
                      placeholder="Enter your phone number"
                      label="Phone"
                      fullWidth 
                    />
                  </div>

                  <br />
                  <div className="form-group">
                    <label htmlFor="address"></label>     
                    <TextField
                      type="text"
                      name="address"
                      id="address"
                      autoComplete="off"
                      value={user.address}
                      onChange={handleInputs}
                      placeholder="Enter your address"
                      label="Address"
                      fullWidth 
                    />
                  </div>
                  <br />

                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="register"
                      id="register"
                      onClick={PostData}
                      className="form-submit btn btn-outline-primary"
                      value="Register"
                    />
                  </div>
                </form>
              </div>
              <div className="signup-image col-md-6 ">
                <figure>
                  <img src={signpic} height="300" width="300" alt="not found" />
                </figure>
                <NavLink to="/login" className="signup-image-link">
                  Already Registered?
                </NavLink>
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
                <img src={phone} alt="not found" height="50" width="50" />
              </div>
              <div className="contact_info_item col-2 abc">
                <h6>Phone</h6>
                <p>+1800 266 1236</p>
              </div>

              <div className="col-1"></div>

              <div className="contact_info_item col-1 abc">
                <img src={mail} alt="not found" height="50" width="50" />
              </div>
              <div className="contact_info_item col-3 abc">
                <h6>Email</h6>
                <p>safecamp@gmail.com</p>
              </div>

              <div className="col-1"></div>
              <div className="contact_info_item col-1 abc">
                <img src={address} alt="not found" height="50" width="50" />
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
  );
};

export default Signup;




