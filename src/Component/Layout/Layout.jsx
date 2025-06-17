/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useMemo, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'

export const SidebarContext = createContext(false)
export const updateProgressContext = createContext(false)

export default function Layout() {
    const location = useLocation();

    // State to manage sidebar collapse
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [upadteProgress, setUpadteProgress] = useState(false);



    const noLayoutRoutes = ['/', '/register', '/forgetPassword', '/resetPassword'];
    const hideLayout = noLayoutRoutes.includes(location.pathname);

    // Set the value for SidebarContext (passed to children components)
    const collapsed = useMemo(() => ({ isCollapsed, setIsCollapsed }), [isCollapsed]);
    const updateProgress = useMemo(() => ({ upadteProgress, setUpadteProgress }), [upadteProgress]);


    return (
        <SidebarContext.Provider value={collapsed}>
            {hideLayout ? (
                <Outlet />
            ) : (
                <>
                    <updateProgressContext.Provider value={updateProgress}>
                        <Navbar />
                        <div
                            className={`transition-[width] duration-300 ease-in-out overflow-hidden ${isCollapsed
                                ? 'w-[calc(100%)] md:w-[calc(100%-60px)]'
                                : 'w-[calc(100%)] md:w-[calc(100%-230px)]'
                                } mr-auto py-12 px-0 md:px-2 m-t`}
                        >
                            <Outlet />

                        </div>
                    </updateProgressContext.Provider>

                    <Footer />
                </>
            )}
        </SidebarContext.Provider>
    );

}
