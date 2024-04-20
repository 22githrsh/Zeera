// Register.jsx
import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [error, setError] = useState()

  const { setUser } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nav = useNavigate()

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem('users'))

    if (users) {
      if (users.find((user) => username === user.username)) {
        setError('username already exist')
        return
      }
      if (users.find((user) => email === user.email)) {
        setError('email already exist')
        return
      }

      setError(null)
      users.push({ username, email })

      localStorage.setItem('users', JSON.stringify(users))

    }
    else {
      localStorage.setItem('users', JSON.stringify([{ username, email }]))
    }

    setUser({ username, email });

    nav('/user')


  };

  return (
    <div className='h-[100vh] w-full bg-black flex justify-center items-center flex-col'>
        <h1 className='text-white text-[40px] mb-10'>Register ID</h1>

      <div className="max-w-md mx-auto p-[50px]  rounded-lg shadow-lg ">
        <input
          type="text"
          placeholder="Username"
          className="w-full px-3 py-2 mb-4 bg-transparent text-white border border-gray-600 rounded-md outline-none focus:border-[#3B2FEA]"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 mb-4 bg-transparent text-white border border-gray-600 rounded-md outline-none focus:border-[#3B2FEA]"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 mb-4 bg-transparent text-white border border-gray-600 rounded-md outline-none focus:border-[#3B2FEA]"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <h1 className='mt-3 text-red-500 text-sm'>{error}</h1>}
        <button
          className="w-full px-4 py-2 bg-[#3B2FEA] text-white rounded-md hover:bg-[#3B2FEA] focus:outline-none focus:bg-[#3B2FEA]"
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
