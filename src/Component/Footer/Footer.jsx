import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Footer.css'
import { SidebarContext } from '../Layout/Layout';

export default function Footer() {
  const { isCollapsed } = useContext(SidebarContext);

  return (
    <>
      <div className={`mr-auto transition-[width] duration-300 ease-in-out ${isCollapsed ? 'w-[calc(100%-60px)]' : 'w-[calc(100%-60px)] md:w-[calc(100%-230px)]'}`}>
        <div className="bg-[#191A1B] text-white py-10 px-6 md:px-20 w-[100%]">
          <div className="footer">
            {/* وسائل التواصل الاجتماعي */}
            <div className="social">
              <h3 className="font-semibold mb-2">انضم إلينا على</h3>
              <div className="flex space-x-4 text-xl justify-start">
                <NavLink to={"#"} className='!bg-transparent'><i className="fab fa-linkedin-in"></i></NavLink>
                <NavLink to={"#"} className='!bg-transparent'><i className="fab fa-instagram"></i></NavLink>
                <NavLink to={"#"} className='!bg-transparent'><i className="fab fa-facebook-f"></i></NavLink>
              </div>
            </div>

            {/* معلومات الاتصال */}
            <div className="contact">
              <h3 className="font-semibold mb-2">تواصل معنا</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>📍 مصر<i className="fa-solid fa-location-dot p-1"></i></li>
                <li>📧 academia@gmail.com <i className="p-1 fa-regular fa-envelope"></i></li>
                <li>📞 01-11345677 / 9841525263 / 984374444 <i className="p-1 fa-solid fa-phone"></i></li>
              </ul>
            </div>

            {/* روابط سريعة */}
            <div className="links">
              <h3 className="font-semibold mb-2">روابط سريعة</h3>
              <ul className="space-y-1 text-sm text-gray-300">
                <li><NavLink className='!bg-transparent' to={"/home"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth", block: 'center' })}>الرئيسية</NavLink></li>
                <li><NavLink className='!bg-transparent' to={"/updateCourses"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth", block: 'center' })}>المقررات</NavLink></li>
                <li><NavLink className='!bg-transparent' to={"/finalCourses"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth", block: 'center' })}>المقررات النهائية</NavLink></li>
                <li><NavLink className='!bg-transparent' to={"/aboutus"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth", block: 'center' })}>معلومات عنا</NavLink></li>
                <li><NavLink className='!bg-transparent' to={"/chatBot"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth", block: 'center' })}>المساعد الذكي</NavLink></li>
              </ul>
            </div>

            {/* قسم EDU TRACK */}
            <div className="about">
              <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth", block: 'center' })} to="/home" className="text-lg font-bold text-blue-400">EDU TRACK</Link>
              <p className="text-sm mt-2 text-gray-400">
                شريكك في رحلتك نحو التميز الأكاديمي والتعليمي      </p>
            </div>
          </div>

          {/* أسفل الفوتر */}
          <hr className="my-6 border-gray-700" />
          <p dir="rtl" className="font-[Inter] font-normal text-[#FCFCFC] mt-4">© 2077    . جميع الحقوق محفوظة edutrack.</p>
        </div>
      </div>
    </>
  );
}
