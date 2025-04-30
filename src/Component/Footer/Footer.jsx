import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Footer(){
  return <>
    <div className='w-[84%] md:w-[75%] lg:w-[82%] xl:w-[84%] mr-auto '>
      <div className="bg-[#191A1B] text-white py-10 px-6 md:px-20 mx-auto w-[95%]">
        <div className="grid grid-cols-12 text-left">
          {/* Social Icons */}
          <div  className="col-span-12 md:col-span-2">
            <h3 className="font-semibold mb-2">Join us on</h3>
            <div className="flex space-x-4 text-xl justify-end">
              <NavLink to={"#"} className='!bg-transparent'><i className="fab fa-linkedin-in"></i></NavLink>
              <NavLink to={"#"} className='!bg-transparent'><i className="fab fa-instagram"></i></NavLink>
              <NavLink to={"#"} className='!bg-transparent'><i className="fab fa-facebook-f"></i></NavLink>
            </div>
          </div>

          {/* Contact */}
          <div  className="col-span-12 md:col-span-4">
            <h3 className="font-semibold mb-2">Contact</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>📍 Tripureshwor <i class="fa-solid fa-location-dot p-1"></i></li>
              <li>📧 academia@gmail.com <i class="p-1 fa-regular fa-envelope"></i></li>
              <li>📞 01-11345677 / 9841525263 / 984374444 <i class="p-1 fa-solid fa-phone"></i></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div  className="col-span-12 md:col-span-2">
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><NavLink className='!bg-transparent' to={"/home"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })}>Home</NavLink></li>
              <li><NavLink className='!bg-transparent' to={"/updateCourses"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })}>Courses</NavLink></li>
              <li><NavLink className='!bg-transparent' to={"/finalCourses"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })}>Final Courses</NavLink></li>
              <li><NavLink className='!bg-transparent' to={"/aboutus"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })}>About us</NavLink></li>
              <li><NavLink className='!bg-transparent' to={"/profile"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })}>Profile</NavLink></li>
              <li><NavLink className='!bg-transparent' to={"/chatBot"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })}>ChatBot</NavLink></li>
            </ul>
          </div>

          {/* EDU TRACK Section */}
          <div className="col-span-12 md:col-span-4 mr-4">
            <h2 className="text-lg font-bold text-blue-400">EDU TRACK</h2>
            <p className="text-sm mt-2 text-gray-400">
              Welcome to Edu Track, a dynamic technology solutions provider with a mission to empower businesses and individuals with cutting-edge technology solutions.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="my-6 border-gray-700" />
        <p dir="ltr" className="font-[Inter] font-normal text-[#FCFCFC] mt-4">© 2077 Untitled UI. All rights reserved.</p>
    </div>
    </div>
  </>
}

