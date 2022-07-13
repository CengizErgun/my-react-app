import React from "react";
import AuthService from "../services/auth.service";
import './styles.css'
const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username} Profile</strong> 
        </h3>
      </header>
      <p>
        <strong>Token: {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}</strong> 
      </p>
      <p>
        <strong>Id:  {currentUser.id}</strong>
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div>
  );
};
export default Profile;
