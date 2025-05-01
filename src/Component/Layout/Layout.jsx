import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'

export default function Layout() {
    const location = useLocation();

    const noLayoutRoutes = ['/', '/register', '/forgetPassword', '/resetPassword'];
    const hideLayout = noLayoutRoutes.includes(location.pathname);
    
    return <>
        {!hideLayout && <Navbar />}
            <div>
                <Outlet/>
            </div>
        {!hideLayout && <Footer />}
    </>


}
