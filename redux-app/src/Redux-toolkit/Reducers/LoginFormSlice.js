import { createSlice } from "@reduxjs/toolkit"

const users = [
  {
    username: "Renuka",
    password: "123"
  },
  {
    username: "user2",
    password: "pass2"
  }
]
const globalState = {
  name: 'auth',
  presentState: {
    user: null,
    isAuthenticated: false,
    error: null
  }
}

export const LoginFormSlice = createSlice({
  name: 'login-form',
  initialState: globalState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    loginCredentials: (state, action) => {
      const {username,password} = action.payload

      const user = users.find(user => user.username === username && user.password === password)
      console.log(user)
        if(user){
          console.log("user",user)
          state.presentState.user = user.username
          state.presentState.isAuthenticated=true
          state.presentState.error = null
        }else{
          state.presentState.error = "Invalid username or password"
          console.log(state.error)
        }

    }

  },
})

export const { loginCredentials, increment } = LoginFormSlice.actions

export default LoginFormSlice.reducer