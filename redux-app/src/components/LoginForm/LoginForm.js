import React, { useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { loginCredentials } from '../../Redux-toolkit/Reducers/LoginFormSlice';
import Dashboard from '../Dashboard/Dashboard';

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const Auth = useSelector(isAuthenticated => isAuthenticated)
    const isVerified = Auth.LoginFormSlice.presentState.user 
    console.log(Auth,"Auth")
    console.log(isVerified,"verified")
    const [loginUserDetails, setLoginUserDetails] = useState({
        username:"",
        password: ""
    })
    console.log(loginUserDetails.username)
const globalData = useSelector((globalStateStorePlace) => globalStateStorePlace)
console.log("globalData:",globalData.LoginFormSlice.presentState)



function handleUserDetails(event){
    const name = event.target.name
    const value = event.target.value
    
    setLoginUserDetails({
        ...loginUserDetails, [name]:value
    })
    console.log("after execution" , loginUserDetails)
    
}


function handleSubmit(event){
event.preventDefault()
  dispatch(loginCredentials({username:loginUserDetails.username,password:loginUserDetails.password}))
  if(isVerified === globalData.LoginFormSlice.presentState.user){
    console.log("navigation successfull")
    navigate('./Dashboard');
  }


}

  return (
    <div className='d-flex  justify-content-center m-5'>

      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="text" class="form-control" id="exampleInputEmail1" onChange={handleUserDetails} name='username' aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name='password' onChange={handleUserDetails}/>
  </div>
  
  <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Login</button>
</form>

    </div>
  )
}

export default LoginForm
