import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Dashboard = () => {
    const dispath = useDispatch()
    const loginData = useSelector(globalstore => globalstore)
    console.log("Dashboard",loginData.LoginFormSlice.presentState.user)
  return (
    <div>
      <h1>Welcome {loginData.LoginFormSlice.presentState.user}</h1>
    </div>
  )
}

export default Dashboard
