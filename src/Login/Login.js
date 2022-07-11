import React, { useEffect, useState } from 'react'
import './style.css'
import { ReactDOM } from 'react'
import App from '../App'


function Login() {
  let signIn;
  let signUp;

  useEffect(() => {
    console.log(3)
    signIn = document.getElementsByClassName("signIn")[0]
    signUp = document.getElementsByClassName("signUp")[0]
  })
  console.log(1)
  // const [first, setFirst] = useState(false);
  // const [second, setSecond] = useState(false);

  const HandleLogin = () => {  
    signIn.classList.add("active-dx");
    signIn.classList.remove("inactive-dx");
    signUp.classList.add("inactive-sx");
    signUp.classList.remove("active-sx");
    // setFirst(!first);
  }

  const HandleBack = () => {
    signIn.classList.add("inactive-dx");
    signIn.classList.remove("active-dx");
    signUp.classList.add("active-sx");
    signUp.classList.remove("inactive-sx");
    // setSecond(!second) 
  }

  return (
    <>
    {console.log(2)}
      <div className="container">
        <form className="signUp">
          <h3>Create Your Account</h3>
          <p>
            Just enter your email address
            <br />
            and your password for join.
          </p>
          <input
            className="w100"
            type="email"
            placeholder="Insert eMail"
            reqired=""
            autoComplete="off"
          />
          <input type="password" placeholder="Insert Password" reqired="" />
          <input type="password" placeholder="Verify Password" reqired="" />
          <button className="form-btn sx log-in" type="button" onClick={() => HandleLogin()}>
            Log In
          </button>
          <button className="form-btn dx" type="submit">
            Sign Up
          </button>
        </form>
        <form className="signIn">
          <h3>
            Welcome
            <br />
            Back !
          </h3>
          <button className="fb" type="button">
            Log In With Facebook
          </button>
          <p>- or -</p>
          <input
            type="email"
            placeholder="Insert eMail"
            autoComplete="off"
            reqired=""
          />
          <input type="password" placeholder="Insert Password" reqired="" />
          <button className="form-btn sx back" type="button" onClick={() => HandleBack()}>
            Back
          </button>
          <button className="form-btn dx" type="submit">
            Log In
          </button>
        </form>
      </div>
    </>
  )
}

export default Login