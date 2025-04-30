import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserToken } from '../Context/TokenContext';
import { NavLinks } from '../constants';

export const NavMenu = () => {
    let navigate = useNavigate();

    let { setUserToken } = useContext(UserToken);
    function logOut() {
        localStorage.removeItem('token');
        setUserToken(null)
        navigate('/')
    }
    return (
        <div className="w-[16%] md:w-[25%] lg:w-[18%] xl:w-[16%] bg-[#d9e7f1] py-4 p-[4px] sm:p-4 min-h-screen transition duration-300 ease-in-out flex flex-col fixed z-50">
            <h2 className="text-xl md:text-2xl font-bold text-[#6CA6CD] mb-4 text-center hidden md:block">EDU TRACK</h2>
            <div className="flex flex-col gap-4 w-full items-center md:items-start justify-center"  >

                {NavLinks.map((item) => (
                    <NavLink
                        key={item.name}
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        to={item.link}
                        className="group flex items-center py-2 px-3 md:p-3 justify-center md:justify-start  gap-2.5 rounded-[10px] md:rounded-[22px] hover:bg-[#eff4f8] hover:shadow-md transition duration-300 ease-in-out w-full"
                    >
                        <i className={`${item.icon} text-[#222] p-2 rounded-[12px]`}></i>
                        <span className="hidden md:inline text-[#14142b]"> {item.name} </span>

                        {/* Tooltip on hover for small screens */}
                        <span className="md:hidden absolute right-[100%] bg-[#eff4f8] text-[#14142b] px-2 py-1 shadow-md opacity-0 group-hover:opacity-100 transition duration-300 z-50 min-w-[130px] rounded-lg text-center">
                            {item.name}
                        </span>
                    </NavLink>
                ))}
            </div>

            <div className="mt-auto flex items-center w-full justify-center md:justify-start">
                <button
                    onClick={logOut}
                    className="w-full group flex items-center py-2 px-3 md:p-2 md:py-3 justify-center md:justify-start  gap-2.5 rounded-[10px] md:rounded-[22px] hover:bg-[#eff4f8] hover:shadow-md transition duration-300 ease-in-out"
                >
                    <i className="fa-solid fa-arrow-right-to-bracket text-[#222] p-2 rounded-[12px]"></i>
                    <span className="hidden md:inline text-[#14142b]">تسجيل الخروج</span>

                    {/* Tooltip for logout on small screen */}
                    <span className="md:hidden absolute right-[100%] bg-[#eff4f8] text-[#14142b] px-2 py-1 shadow-md opacity-0 group-hover:opacity-100 transition duration-300 z-10 min-w-[130px] rounded-lg text-center">
                        تسجيل الخروج
                    </span>
                </button>
            </div>
        </div>

    )
}

export default NavMenu