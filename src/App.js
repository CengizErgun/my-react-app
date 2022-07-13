import logo from './logo.svg';
import './App.css';
import Login from './Login/Login.js';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home/Home';
import AuthService from './services/auth.service';
import { useEffect, useState } from 'react';
import Admin from './Admin/Admin';
import Partner from './Partner/Partner';
import Profile from './Profile/Profile';
import { useNavigate } from 'react-router-dom';


function App() {
  let navigate = useNavigate();
  const [showPartnerBoard, setShowPartnerBoard] = useState(false);
  const [showInternalAdministratorBoard, setInternalAdministratorBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setShowPartnerBoard(user.roles.includes("ROLE_PARTNER"));
      setInternalAdministratorBoard(user.roles.includes("ROLE_INTERNALADMINISTRATOR"));
    }
  }, []);
  const logOut = () => {
    AuthService.logout();
    navigate("/login");
    window.location.reload();
  };
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
          {showInternalAdministratorBoard && (
            <li>
              <Link to={"/internaladministrator"}>
                Internal Administrator
              </Link>
            </li>
          )}
          {showPartnerBoard && (
            <li>
              <Link to={"/partner"}>
                Partner
              </Link>
            </li>
          )}
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
          {/* <li>
            <Link to={"/login"}>
              <button className="login-button">
                  Login
              </button>
            </Link>
          </li> */}
          {currentUser ? (
          <>
            <li>
              <Link to={"/profile"}>
                <button className="login-button">
                  {currentUser.username}
                </button>
              </Link>
            </li>
            <li>
              <Link to={"/login"} >
                <button className="join-button" onClick={logOut}>
                    Logout
                </button>
              </Link>
            </li>
          </>
          ) : (
          <li>
            <Link to={"/login"}>
              <button className="login-button">
                  Login
              </button>
            </Link>
          </li>
          )}
          {/* <li>
            <button className="join-button" href="#">
              Join
            </button>
          </li> */}
        </ul>

      </nav>
      <div className='routes'>
        <Routes>
          {/* <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/internaladministrator" element={<Admin />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/profile" element={<Profile />} />
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
