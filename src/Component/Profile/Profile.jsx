import React, { useContext, useEffect, useRef } from 'react'
import style from './Profile.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserToken } from '../../Context/TokenContext';
import axios from 'axios';
import { useState } from 'react';

export default function Profile() {
    let navigate = useNavigate();
    let { userToken, setUserToken } = useContext(UserToken);
    const [NationalId, setNationalId] = useState(null)
    function logOut() {
        localStorage.removeItem('token');
        setUserToken(null);
        navigate('/');
    }

    const [fullName, setFullName] = useState(null);
    const [level, setLevel] = useState(null);


    useEffect(() => {
        const getUserAndCourses = async () => {
            const userRes = await axios.get('http://edutrack.runasp.net/api/Profile/user-courses', { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
            const nid = userRes.data.nationalId;
            setNationalId(nid);
            const coursesRes = await axios.get(`http://edutrack.runasp.net/api/Profile/${nid}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
            setFullName(coursesRes.data.fullName);
            setLevel(coursesRes.data.level);
            setNationalId(coursesRes.data.nationalId);
        };
        getUserAndCourses();
    }, []);
    
    const handleNameUpdate = async () => {
        // try {
            const response = await axios.put(
                "http://edutrack.runasp.net/api/Profile/update-name",
                { name: fullName },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );

            alert("✅ تم تحديث الاسم بنجاح");
            console.log("Response:", response.data);
        // } catch (error) {
        //     console.error("❌ Error updating name:", error.response?.data || error.message);
        //     alert("❌ حصل خطأ أثناء تحديث الاسم");
        // }
    };

    const inputRef = useRef(null); 

    const handleFocus = () => {
        inputRef.current.focus();
    };


    return <>
        <div className='w-full flex flex-row'>
            <div className="w-1/5 bg-[#d9e7f1] p-4 h-screen flex flex-col justify-between fixed">
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold text-[#6CA6CD] mb-4 text-center">EDU TRACK</h2>
                    <NavLink onClick={() => window.scrollTo({ top: 0, behavior: "smooth", block: 'center' })} to={'/home'} className="p-3 rounded-[20px]">
                        <div className='flex items-center gap-2.5'>
                            <i className="fa-solid fa-house text-[#222] p-2 rounded-[12px]"></i>
                            <p className='mb-0 text-[#14142b] font-[Font Family]'>الرئيسية</p>
                        </div>
                    </NavLink>
                    <NavLink onClick={() => window.scrollTo({ top: 0, behavior: "smooth", block: 'center' })} to={'/updateCourses'} className="p-3 rounded-[20px]">
                        <div className='flex items-center gap-2.5'>
                            <i className="fa-regular fa-clipboard text-[#222] p-2 rounded-[12px] bg-[#eff4f8]"></i>
                            <p className='mb-0 text-[#14142b] font-[Font Family]'>المقررات الدراسية</p>
                        </div>
                    </NavLink>
                    <NavLink onClick={() => window.scrollTo({ top: 0, behavior: "smooth", block: 'center' })} to={'/finalCourses'} className="p-3 rounded-[20px]">
                        <div className='flex items-center gap-2.5'>
                            <i className="fa-regular fa-clipboard text-[#222] p-2 rounded-[12px] bg-[#eff4f8]"></i>
                            <p className='mb-0 text-[#14142b] font-[Font Family]'>المقررات النهائية</p>
                        </div>
                    </NavLink>
                    <NavLink onClick={() => window.scrollTo({ top: 0, behavior: "smooth", block: 'center' })} to={'/aboutus'} className="p-3 rounded-[20px]">
                        <div className='flex items-center gap-2.5'>
                            <i className="fa-solid fa-users text-[#222] p-2 rounded-[12px] bg-[#eff4f8]"></i>
                            <p className='mb-0 text-[#14142b] font-[Font Family]'>نبذة عنا</p>
                        </div>
                    </NavLink>
                    <NavLink onClick={() => window.scrollTo({ top: 0, behavior: "smooth", block: 'center' })} to={'/profile'} className="p-3 bg-[#eff4f8] rounded-[20px]">
                        <div className='flex items-center gap-2.5'>
                            <i className="fa-solid fa-user text-[#222] p-2 rounded-[12px] bg-[#eff4f8]"></i>
                            <p className='mb-0 text-[#14142b] font-[Font Family]'>الملف الشخصي</p>
                        </div>
                    </NavLink>
                    <NavLink onClick={() => window.scrollTo({ top: 0, behavior: "smooth", block: 'center' })} to={'/chatBot'} className="p-3  rounded-[20px]">
                        <div className='flex items-center gap-2.5'>
                            <i className="fa-solid fa-robot text-[#222] p-2 rounded-[12px] bg-[#eff4f8]"></i>
                            <p className='mb-0 text-[#14142b] font-[Font Family]'>ChatBot للتواصل</p>
                        </div>
                    </NavLink>
                </div>
                <div className="mt-4">
                    <NavLink onClick={() => logOut()} className="p-3 rounded-[20px]">
                        <div className='flex items-center gap-2.5'>
                            <i className="fa-solid fa-arrow-right-to-bracket text-[#222] p-2 rounded-[12px] bg-[#eff4f8]"></i>
                            <p className='mb-0 text-[#14142b] font-[Font Family]'>تسجيل الخروج</p>
                        </div>
                    </NavLink>
                </div>
            </div>

            <div className='w-4/5 mr-[21%] mt-[15%] pl-6'>
                <div className='bg-[#EFF4F8] text-center p-6 mb-12 '>
                    <h2 className='font-bold text-black text-4xl'>بيانات الطالب</h2>
                </div>
                <div className='bg-[#EFF4F8] rounded-[12px] p-3 ltr mb-10'>
                    <h3 className="text-2xl mb-4 font-normal text-black ">
                        الإسم :
                        <input
                        type="text"
                        ref={inputRef} 
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="ml-2 p-1 rounded focus-visible:outline-none text-black"
                        />
                    </h3>
                    <h3 className='text-2xl mb-4 font-normal text-black'>المستوى : {level}</h3>
                    <h3 className='text-2xl mb-10 font-normal text-black'>الرقم القومي : {NationalId}</h3>
                    <button
                        onClick={handleFocus} 
                        className="px-4 py-2 ml-4 bg-[#61D0FF] text-black rounded hover:bg-[#61D0FF] cursor-pointer"
                    >
                        تعديل الاسم
                    </button>
                    <button
                        onClick={handleNameUpdate}
                        className="px-4 py-2 bg-[#61D0FF] text-black rounded hover:bg-[#61D0FF] cursor-pointer"
                    >
                        حفظ الاسم
                    </button>
                    
                </div>
            </div>

        </div>
    </>
}


