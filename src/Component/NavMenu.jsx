import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { UserToken } from '../Context/TokenContext';
import { NavLinks } from '../constants';
import { SidebarContext } from './Layout/Layout';

export const NavMenu = () => {
    const navigate = useNavigate();
    const { setUserToken } = useContext(UserToken);
    const { isCollapsed, setIsCollapsed } = useContext(SidebarContext);

    function logOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        setUserToken(null);
        navigate('/');
    }

    return (
        <div
            className={`bg-[#d9e7f1] px-2 sm:p-3 min-h-screen transition-all duration-300 ease-in-out flex flex-col fixed z-50 right-0 top-0 bottom-0
            ${isCollapsed ? 'w-[60px]' : 'w-[60px] md:w-[230px]'} transition-[width]`}
        >
            {/* زر الفتح والإغلاق */}
            <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="cursor-pointer self-end text-xl p-2 text-[#6CA6CD] hover:text-[#222] transition hidden md:block"
                title={isCollapsed ? "Expand" : "Collapse"}
            >
                <i className={`fa-solid ${isCollapsed ? 'fa-bars-staggered' : 'fa-bars'}`}></i>
            </button>

            {/* الشعار واسم التطبيق */}
            <Link to="/home" className="flex items-center justify-center md:justify-start mb-6 overflow-hidden">
                <img src="logo.png" alt="Logo" className={`${isCollapsed ? '!h-9':''} h-9 md:h-12 object-cover`} />
                {!isCollapsed && (
                    <h2 className="text-xl font-bold text-[#6CA6CD] text-center  md:w-full w-0 overflow-hidden transition-[width]">
                        EDU TRACK
                    </h2>
                )}
            </Link>

            {/* روابط التنقل */}
            <div className="flex flex-col gap-4 w-full items-center md:items-start justify-center overflow-visible">
                {NavLinks.map((item) => (
                    <div key={item.name} className="relative group w-full">
                        <NavLink
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            to={item.link}
                            className={`flex items-center py-1 px-3 md:py-2 md:px-3 justify-center ${isCollapsed ? '!py-1':'md:justify-start'} gap-2.5 rounded-[10px] hover:bg-[#eff4f8] hover:shadow-md transition duration-300 ease-in-out w-full`}
                        >
                            <i className={`${item.icon} text-[#222] p-2 rounded-[12px]`}></i>
                            {!isCollapsed && (
                                <span className="hidden md:inline text-[#14142b]">{item.name}</span>
                            )}
                        </NavLink>

                        {/* Tooltip عند الطي */}
                        <span
                            className={`absolute right-[110%] top-1/2 -translate-y-1/2 bg-[#eff4f8] text-[#14142b] px-2 py-1 shadow-md opacity-0 group-hover:opacity-100 transition duration-300 z-50 min-w-[130px] rounded-lg text-center pointer-events-none after:content-[''] after:absolute after:top-1/2 after:left-full after:-translate-y-1/2 after:border-8 after:border-transparent after:border-l-[#eff4f8] 
                            ${isCollapsed ? 'md:block' : 'md:hidden'} sm:block`}
                        >
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>


            {/* تسجيل الخروج */}
            <div className="mt-auto flex items-center w-full justify-center md:justify-start">
                <div className="relative group w-full">
                    <NavLink
                        onClick={logOut}
                        to="/"
                        className={`flex items-center py-2 px-3 md:p-3 justify-center ${!isCollapsed && 'md:justify-start'
                            } gap-2.5 rounded-[10px] hover:bg-[#eff4f8] hover:shadow-md transition duration-300 ease-in-out w-full`}
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
    );
};

export default NavMenu;

