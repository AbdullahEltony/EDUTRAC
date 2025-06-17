import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { UserToken } from '../Context/TokenContext';
import { NavLinks } from '../constants';
import { SidebarContext } from './Layout/Layout';

export const NavMenu = () => {
    const navigate = useNavigate();
    const { setUserToken } = useContext(UserToken);
    const { isCollapsed, setIsCollapsed } = useContext(SidebarContext);

    const [showMenu, setShowMenu] = useState(false);
    const homeLink = NavLinks.find(item => item.link === "/home");
    const otherLinks = NavLinks.filter(item => item.link !== "/home");
    function logOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('name');
        setUserToken(null);
        navigate('/');
    }

    return (
        <>
            {/* ✅ Desktop Sidebar */}
            <div
                className={`hidden md:flex flex-col bg-[#d9e7f1] px-2 sm:p-3 min-h-screen fixed z-50 right-0 top-0 bottom-0
        ${isCollapsed ? 'w-[60px]' : 'w-[230px]'} transition-[width] duration-300`}
            >
                {/* Toggle Collapse Button */}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="cursor-pointer self-end text-xl p-2 text-[#6CA6CD] hover:text-[#222] transition hidden md:block"
                    title={isCollapsed ? "Expand" : "Collapse"}
                >
                    <i className={`fa-solid ${isCollapsed ? 'fa-bars-staggered' : 'fa-bars'}`}></i>
                </button>

                {/* Logo and Title */}
                <Link
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    to="/home"
                    className="flex items-center justify-center md:justify-start mb-6 overflow-hidden"
                >
                    <img
                        src="logo.png"
                        alt="Logo"
                        className={`${isCollapsed ? '!h-9' : ''} h-9 md:h-12 object-cover`}
                    />
                    {!isCollapsed && (
                        <h2 className="text-xl font-bold text-[#6CA6CD] text-center md:w-full w-0 overflow-hidden transition-[width]">
                            EDU TRACK
                        </h2>
                    )}
                </Link>

                {/* Nav Links */}
                <div className="flex flex-col gap-4 w-full items-center md:items-start justify-center overflow-visible">
                    {NavLinks.map((item) => (
                        <div key={item.name} className="relative group w-full">
                            <NavLink
                                to={item.link}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className={({ isActive }) =>
                                    `flex items-center py-1 px-3 md:py-2 md:px-3 justify-center ${isCollapsed ? '!py-1' : 'md:justify-start'
                                    } gap-2.5 rounded-[10px] transition duration-300 ease-in-out w-full
                                    ${isActive ? 'bg-[#529ed0] text-white shadow-md' : 'hover:bg-[#529ed0a0] text-[#222] hover:text-[#222]'}`
                                }
                            >
                                <i className={`${item.icon} p-2 rounded-[12px]`}></i>
                                {!isCollapsed && (
                                    <span className="hidden md:inline">{item.name}</span>
                                )}
                            </NavLink>

                            {/* Tooltip */}
                            <span
                                className={`absolute right-[110%] top-1/2 -translate-y-1/2 bg-[#eff4f8] text-[#14142b] px-2 py-1 shadow-md opacity-0 group-hover:opacity-100 transition duration-300 z-50 min-w-[130px] rounded-lg text-center pointer-events-none after:content-[''] after:absolute after:top-1/2 after:left-full after:-translate-y-1/2 after:border-8 after:border-transparent after:border-l-[#eff4f8] 
                ${isCollapsed ? 'md:block' : 'md:hidden'} sm:block`}
                            >
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Logout */}
                <div className="mt-auto flex items-center w-full justify-center md:justify-start">
                    <div className="relative group w-full">
                        <NavLink
                            onClick={logOut}
                            to="/"
                            className={`flex items-center py-2 px-3 md:p-3 justify-center ${!isCollapsed && 'md:justify-start'
                                } gap-2.5 rounded-[10px] hover:bg-[#529ed0a0] hover:shadow-md transition duration-300 ease-in-out w-full`}
                        >
                            <i className="fa-solid fa-arrow-right-from-bracket text-[#222] p-2 rounded-[12px]"></i>
                            {!isCollapsed && <span className="text-[#14142b] hidden md:block">تسجيل خروج</span>}
                        </NavLink>

                        <span
                            className={`absolute right-[110%] top-1/2 -translate-y-1/2 bg-[#eff4f8] text-[#14142b] px-2 py-1 shadow-md opacity-0 group-hover:opacity-100 transition duration-300 z-50 min-w-[130px] rounded-lg text-center pointer-events-none after:content-[''] after:absolute after:top-1/2 after:left-full after:-translate-y-1/2 after:border-8 after:border-transparent after:border-l-[#eff4f8] 
                ${isCollapsed ? 'md:block' : 'md:hidden'} sm:block`}
                        >
                            تسجيل خروج
                        </span>
                    </div>
                </div>
            </div>

            {/* ✅ MObile Sidebar */}
            <div className="fixed -bottom-1 left-0 right-0 z-50 bg-[#d9e7f1] flex flex-col md:hidden border-t border-[#ccc]">
                {/* 🔹 Logo and Name */}
                <div className="flex items-center justify-center py-2 border-b border-[#ccc]">
                    <img src="/logo.png" alt="Logo" className="h-8 w-auto object-contain" />
                    <span className="inline-block mt-1 text-[#6CA6CD] font-semibold text-sm">EDU TRACK</span>
                </div>

                {/* 🔹 Navigation Buttons */}
                <div className="flex justify-between items-center px-6 py-3">
                    {/* Menu Toggle */}
                    <button
                        onClick={() => setShowMenu((prev) => !prev)}
                        className={`flex flex-col items-center cursor-pointer ${showMenu ? 'text-[#529ed0]' : 'text-[#222]'}  hover:text-[#text-[#529ed0]] transition`}
                    >
                        <i className="fa-solid fa-bars text-lg"></i>
                        <span className="text-[10px]">القائمة</span>
                    </button>


                    {/* Home */}
                    {homeLink && (
                        <button
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                navigate(homeLink.link);
                            }}
                            className={`flex flex-col items-center transition ${location.pathname === homeLink.link
                                ? "text-[#529ed0]"
                                : "text-[#222] hover:text-[#14142b]"
                                }`}
                        >
                            <i className={`fa-solid ${homeLink.icon} text-lg`}></i>
                            <span className="text-[10px]">{homeLink.name}</span>
                        </button>
                    )}
                    <button
                        onClick={logOut}
                        className="flex flex-col items-center text-[#222] hover:text-[#529ed0] transition cursor-pointer"
                    >
                        <i className="fa-solid fa-arrow-right-from-bracket text-lg"></i>
                        <span className="text-[10px]">خروج</span>
                    </button>


                </div>

                {/* 🔹 Floating Menu (optional) */}
                {showMenu && (
                    <div className="absolute bottom-20 right-2 left-2 bg-white shadow-xl rounded-xl p-4 z-50 border border-gray-200">
                        <div className="grid grid-cols-3 gap-4 gap-y-6">
                            {otherLinks.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => {
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                        navigate(item.link);
                                        setShowMenu(false);
                                    }}
                                    className={`flex flex-col items-center gap-2 text-sm cursor-pointer ${location.pathname === item.link ? "text-[#529ed0]" : "text-[#222]"
                                        } hover:text-[#529ed0] transition`}
                                >
                                    <i className={`fa-solid ${item.icon} text-lg`}></i>
                                    <span className="text-[10px] text-center">{item.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>



        </>
    );
};

export default NavMenu;
