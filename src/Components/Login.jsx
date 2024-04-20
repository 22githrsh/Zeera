// Login.jsx
import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nav = useNavigate()

  const handleLogin = () => {

    setUser({ email });
    const users = JSON.parse(localStorage.getItem('users'))
    const isAdmin = users?.find(x => x.email === email)?.isAdmin
    
    nav(isAdmin ? '/admin' : '/user')
   
  };

  return (
    <div className='h-[100vh] w-full bg-black flex items-center justify-center'>
      <div className="max-w-md mx-auto p-[60px]  rounded-lg shadow-lg">
        <h1 className='text-white text-[40px] mb-10'>Login ID</h1>
        <input
          type="text"
          placeholder="Email"
          className="w-full px-3 py-2 mb-4 bg-transparent  border text-white border-gray-600 rounded-md outline-none focus:border-[#3B2FEA]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 mb-4 bg-transparent border border-gray-600 rounded-md outline-none focus:border-[#3B2FEA]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full px-4 py-2 bg-[#3B2FEA] text-white rounded-md hover:bg-[#3B2FEA] focus:outline-none focus:bg-blue-600"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
