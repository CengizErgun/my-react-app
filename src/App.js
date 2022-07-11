import logo from './logo.svg';
import './App.css';
import Login from './Login/Login.js';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home/Home';


function App() {
  return (
    <>
      {/* <Login></Login> */}
      <nav>
        {/* <div className="logo">
          <img src="logo.svg" alt="Logo Image" />
        </div> */}
        <ul className="nav-links">
          <li>
              <Link to={"/home"}>
                <a>              
                  Home
                </a>
              </Link>
          </li>
          <li>
            <a href="#">Solutions</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <Link to={"/login"}>
              <button className="login-button">
                  Login
              </button>
            </Link>
            {/* <button className="login-button" href="#">
              <Link to={"/login"}>
                Login
              </Link>
            </button> */}
          </li>
          <li>
            <button className="join-button" href="#">
              Join
            </button>
          </li>
        </ul>
      </nav>
      <div className='routes'>
        <Routes>
          {/* <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/user" element={<BoardUser/>} />
          <Route path="/mod" element={<BoardModerator/>} />
          <Route path="/admin" element={<BoardAdmin/>} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
