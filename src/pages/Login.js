import React, { useState } from 'react';
import API from '../api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post('/login', { email, password });
      localStorage.setItem('token', res.data.token);
      setMessage('✅ Login successful!');
    } catch (err) {
      console.error(err);
      setMessage('❌ Login failed. Check credentials.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input className="form-control mb-2" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="form-control mb-2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="btn btn-pink" type="submit">Login</button>
      </form>
      <p className="mt-2">{message}</p>
    </div>
  );
}

export default Login;
