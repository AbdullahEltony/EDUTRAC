import './App.css'
import Layout from './Component/Layout/Layout'
import Register from './Component/Register/Register'
import ForgetPassword from './Component/ForgetPassword/ForgetPassword'
import ResetPassword from './Component/ResetPassword/ResetPassword'
import Login from './Component/Login/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './Component/Home/Home'
import Profile from './Component/Profile/Profile'
import AboutUs from './Component/AboutUs/AboutUs'
import NotFound from './Component/NotFound/NotFound'
import ActiveContextProvider from './Context/ActiveContext.jsx'
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute.jsx'
import UserTokenContextProvider from './Context/TokenContext.jsx'
import ChatBot from './Component/ChatBot/ChatBot.jsx'
import FinalCourses from './Component/FinalCourses/FinalCourses.jsx'
import UpdateCourses from './Component/UpdateCourses/UpdateCourses.jsx'
import { ToastContainer } from 'react-toastify'

function App() {
  useEffect(() => {
    document.documentElement.dir = "rtl"; // يجعل الصفحة بالكامل RTL
  }, []);
  const routers = createBrowserRouter([{
    path: '', element: <Layout />, children: [
      { index: true, element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'forgetPassword', element: <ForgetPassword /> },
      { path: 'resetPassword', element: <ResetPassword /> },
      { path: 'home', element: <ProtectedRoute> <Home /> </ProtectedRoute> },
      { path: 'profile', element: <ProtectedRoute> <Profile /> </ProtectedRoute> },
      { path: 'aboutus', element: <ProtectedRoute> <AboutUs /> </ProtectedRoute> },
      { path: 'chatBot', element: <ProtectedRoute> <ChatBot /> </ProtectedRoute> },
      { path: 'updateCourses', element: <ProtectedRoute> <UpdateCourses /> </ProtectedRoute> },
      { path: 'FinalCourses', element: <ProtectedRoute> <FinalCourses /> </ProtectedRoute> },
      { path: '*', element: <NotFound /> },
    ]
  }])

  return <>
    <UserTokenContextProvider>
      <ActiveContextProvider>
        <ToastContainer position="top-center" />
        <RouterProvider router={routers}></RouterProvider>
      </ActiveContextProvider>
    </UserTokenContextProvider>
  </>
}

export default App
