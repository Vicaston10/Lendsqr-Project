import React from 'react';
import './App.scss';
import { Login } from './page/Auth/login';
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import { DashboardLayout } from './components/dashboard';
import { User } from './page/Users';
import { UserDetails } from './page/userDetails/userDetails';

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/user' element={
        <DashboardLayout>
        <User /> 
        </DashboardLayout>
      } />
      <Route path='/user-details' element={
        <DashboardLayout>
        <UserDetails /> 
        </DashboardLayout>
      } />
     </Routes>

   

    </BrowserRouter>
  );
}

export default App;
