import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const history = useHistory();

  const getAccess = () => {
    if (email === "admin@gmail.com" && password === "admin") {
      window.alert("Login Successful");
      history.push("/aAbBcC");
    } else if (email === "admin.edu@gmail.com" && password === "education") {
      window.alert("Login Successful");
      history.push("/education");
    } else if (email === "admin.health@gmail.com" && password === "health") {
      window.alert("Login Successful");
      history.push("/health");
    } else if (email === "admin.service@gmail.com" && password === "service") {
      window.alert("Login Successful");
      history.push("/service");
    } else {
      window.alert("You don't have this access");
    }
  };
  return (
    <>
  <Card sx={{ minWidth: 275 }}>
    <CardContent>
      <h1 className="text-center my-1">Admin Login</h1>
      <hr />

      <form method="GET">
        <div className="form-group text-center jumbotron mx-7">
          <div>
            <label htmlFor="email"></label>
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
            <input
              type="submit"
              name="signin"
              id="signin"
              className="form-submit btn btn-outline-primary"
              onClick={getAccess}
              value="Log In"
            />
          </div>
        </div>
      </form>
      </CardContent>
    </Card>
    </>
  );
};

export default AdminLogin;
