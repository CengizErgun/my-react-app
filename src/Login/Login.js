import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import { ReactDOM } from 'react'
import App from '../App'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { useNavigate } from 'react-router-dom';
import AuthService from "../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger red" role="alert">
        This field is required!
      </div>
    );
  }
};

function Login() {
  const form2 = useRef();
  const checkBtn2 = useRef();
  const [username2, setUsername2] = useState("");
  const [message2, setMessage2] = useState("");
  const [loading2, setLoading2] = useState(false);
  const [password2, setPassword2] = useState("");
  let navigate = useNavigate();

  let signIn;
  let signUp;

  useEffect(() => {
    console.log(3)
    signIn = document.getElementsByClassName("signIn")[0]
    signUp = document.getElementsByClassName("signUp")[0]
  })
  console.log(1)

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setMessage2("");
    setLoading2(true);
    form2.current.validateAll();
    if (checkBtn2.current.context._errors.length === 0) {
      AuthService.login(username2, password2).then(
        () => {
          navigate("/profile"); //TODOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setLoading2(false);
          setMessage2(resMessage);
        }
      );
    } else {
      setLoading2(false);
    }
  };
  const onChangeUsername2 = (e) => {
    const username = e.target.value;
    setUsername2(username);
  };
  const onChangePassword2 = (e) => {
    const password = e.target.value;
    setPassword2(password);
  };

  const HandleLogin = () => {  
    signIn.classList.add("active-dx");
    signIn.classList.remove("inactive-dx");
    signUp.classList.add("inactive-sx");
    signUp.classList.remove("active-sx");
  }
  const HandleBack = () => {
    signIn.classList.add("inactive-dx");
    signIn.classList.remove("active-dx");
    signUp.classList.add("active-sx");
    signUp.classList.remove("inactive-sx");
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
          <input type="text" placeholder="Insert Username" reqired="" />
          <input
            className="w100"
            type="email"
            placeholder="Insert eMail"
            reqired=""
            autoComplete="off"
          />
          <input type="password" placeholder="Insert Password" reqired="" />
          {/* <input type="password" placeholder="Verify Password" reqired="" /> */}
          <button className="form-btn sx log-in" type="button" onClick={() => HandleLogin()}>
            Log In
          </button>
          <button className="form-btn dx" type="submit">
            Sign Up
          </button>
        </form>

        <Form className="signIn" onSubmit={handleLoginSubmit} ref={form2} >
          <h3>
            Welcome
            <br />
            Back !
          </h3>
          <button className="fb" type="button">
            Log In With Facebook
          </button>
          <p>- or -</p>
          <Input type="text" placeholder="Insert Username" value={username2} onChange={onChangeUsername2} validations={[required]} />
          <Input type="password" placeholder="Insert Password" value={password2} onChange={onChangePassword2} validations={[required]}/>
          <button className="form-btn sx back" type="button" onClick={() => HandleBack()}>
            Back
          </button>
          <button className="form-btn dx" type="submit">
            Log In
          </button>

          {message2 && (
            <div className="form-group">
              <div className="alert alert-danger red" role="alert">
                {message2}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn2} />
        </Form>
      </div>
    </>
  )
}

export default Login