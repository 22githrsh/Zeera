// App.jsx
import React from 'react';
import { AuthProvider } from './Components/AuthContext';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Zeera from './Components/Zeera'
import Login from './Components/Login'
import AdminPage from './Components/AdminPage';
import Register from './Components/Register'
import UserPage from './Components/UserPage';

const App = () => {
  
  return (
    <>
      <nav className='h-[10vh] w-full bg-black text-white flex items-center justify-between p-4 fixed z-[999]'>
        <div className='flex gap-4 items-center'>
          <Link to={"/Zeera/Home"} className='text-[18px] font-[Helvetica] ml-10 font-[600]'>Sheryians <br /> Coding School</Link>
        </div>
        <div className='gap-4 flex'>
          <Link  to={"/Login"} className='p-2 bg-[#3B2FEA] rounded-md'>login</Link>
          <Link to={"/Register"} className='p-2 bg-[#3B2FEA] rounded-md'>register</Link>
        </div>
      </nav>
       
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Zeera />} />
          <Route path='/Zeera/Home' element={<Zeera />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </AuthProvider>
  </>
  );
};

export default App;
