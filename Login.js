import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // use useNavigate here

  const handleSubmit = (e) => {
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      localStorage.setItem("loggedInUserEmail", user.email); 
      alert(user.email)// Save the email to localStorage
      return
      navigate("/transection");
      setIsLoggedIn(true); // Redirect to dashboard if login is successful
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="hero-button btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
