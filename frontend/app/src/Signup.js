import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, password };
    axios.post('/api/register', newUser)
      .then((response) => {
        console.log(response.data.message);
        // Handle successful registration (e.g., redirect to login page)
      })
      .catch((error) => {
        console.error(error.response.data.error);
        // Handle registration error (e.g., display error message)
      });
  };
  return (
    <div className="container">
      
      <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <br/>
    <form onSubmit={handleSubmit}>
    <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
    
    <br/>

    
    <button type="submit">Register</button>
    </form>
    
        
    </div>
  );
}

export default Signup;
