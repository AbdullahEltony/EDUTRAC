import React, { useEffect, useRef } from 'react'
import { NavLink, } from 'react-router-dom'
import { UserToken } from '../../Context/TokenContext';
import axios from 'axios';
import { useState } from 'react';
import {NavMenu} from '../NavMenu';
import { baseURL } from '../../constants';
export default function Profile() {
    const [NationalId, setNationalId] = useState(null)

    const [fullName, setFullName] = useState(null);
    const [level, setLevel] = useState(null);


    useEffect(() => {
        const getUserAndCourses = async () => {
            const userRes = await axios.get(`${baseURL}/api/Profile/user-courses`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
            const nid = userRes.data.nationalId;
            setNationalId(nid);
            const coursesRes = await axios.get(`${baseURL}/api/Profile/${nid}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
            setFullName(coursesRes.data.fullName);
            setLevel(coursesRes.data.level);
            setNationalId(coursesRes.data.nationalId);
        };
        getUserAndCourses();
    }, []);
    
    const handleNameUpdate = async () => {
            const response = await axios.put(
                `${baseURL}/api/Profile/update-name`,
                { name: fullName },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );

            alert("✅ تم تحديث الاسم بنجاح");
            console.log("Response:", response.data);
    };

    const inputRef = useRef(null); 

    const handleFocus = () => {
        inputRef.current.focus();
    };


    return <>
        <div className='w-full flex flex-row'>
            <NavMenu />

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


