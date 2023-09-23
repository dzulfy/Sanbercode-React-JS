import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Footer from './components/footer';
import Login from './components/login';
import Dashboard from './components/dashboard/dashboard';
import Vacancy from './components/vacancy';
import Admin from './components/dashboard/WelcomeAdmin';
import CreateData from './components/dashboard/createData';
import SignUp from './components/SignUp';
import UpdateData from './components/dashboard/updateData';
import ChangePassword from './components/dashboard/changePassword';
import JobDetail from './components/jobDetail';
import UserProfile from './components/dashboard/userProfile';
import OnlyAdmin from './components/onlyAdmin';
import Cookies from 'js-cookie';
import LoadingPage from './components/loadingPage';

function App() {
  const isLoggedIn = Cookies.get('token') !== undefined;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard/admin' element={<Dashboard />} />
        <Route path='/dashboard' element={<Admin />} />
        <Route path='/dashboard/profile' element={<UserProfile />} />
        <Route path='/dashboard/create-data' element={<CreateData />} />
        <Route path='/dashboard/update-data/:id' element={<UpdateData />} />
        <Route path='/dashboard/change-password' element={<ChangePassword />} />
        <Route path='/' element={<Navigate to="/home" />} />
        <Route
          path='/home'
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path='/login'
          element={
            isLoggedIn ? (
              <Navigate to="/" />
            ) : (
              <>
              <Navbar/>
              <Login />
              <Footer/>
              </>
            )
          }
        />
        <Route path='/ops' element={
        <>
        <Navbar/>
        <OnlyAdmin />
        <Footer/>
        </>
        } />
        <Route path='/vacancy' element={<>
        <Navbar/>
        <Vacancy />
        <Footer/>
        </>} />
        <Route path='/vacancy/job/:id' element={
        <>
        <Navbar/>
        <JobDetail />
        <Footer/>
        </>
        } />
        <Route path='/sign-up' element={
        <>
        <Navbar/>
        <SignUp />
        <Footer/>
        </>
        } />
        <Route path='/loading' element={<LoadingPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
