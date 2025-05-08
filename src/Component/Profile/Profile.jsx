import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import { NavMenu } from '../NavMenu';
import './Profile.css'
import ProgressBar from '../shared/ProgressBar';
import { toast } from 'react-toastify';
import { makeRequest } from '../../api/axiosInstance';
export default function Profile() {
    const [NationalId, setNationalId] = useState(null)

    const [fullName, setFullName] = useState(null);
    const [level, setLevel] = useState(null);


    useEffect(() => {
        const getUserAndCourses = async () => {
            const userRes = await makeRequest('GET',`/api/Profile/user-courses`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
            const nid = userRes.data.nationalId;
            setNationalId(nid);
            const coursesRes = await makeRequest('GET',`/api/Profile/${nid}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
            setFullName(coursesRes.data.fullName);
            setLevel(coursesRes.data.level);
            setNationalId(coursesRes.data.nationalId);
        };
        getUserAndCourses();
    }, []);

    const handleNameUpdate = async () => {
        const response = await makeRequest(
            'PUT', `/api/Profile/update-name`,
            { name: fullName },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );

        toast.success("✅ تم تحديث الاسم بنجاح", { autoClose: 2000 });
        console.log("Response:", response.data);
    };

    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus();
    };


    return <>
        <div className='w-full flex flex-row'>
            <NavMenu />

            <div className='w-full'>
                <ProgressBar updated={false} />
                <div className='bg-[#EFF4F8] text-center p-6 mb-6 mx-auto mt-20'>
                    <h2 className='font-bold text-black text-2xl sm:text-4xl'>بيانات الطالب</h2>
                </div>
                <div className='bg-[#EFF4F8] rounded-[12px] p-3 ltr mb-10 mx-auto'>
                    <h3 className="text-lg  sm:text-2xl flex items-center mb-4 font-normal text-black ">
                        <span>الأسم : </span>
                        <input
                            type="text"
                            ref={inputRef}
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="ml-2 p-1 rounded focus-visible:outline-none text-black"
                        />
                    </h3>
                    <h3 className='text-lg  sm:text-2xl mb-4 font-normal text-black'>المستوى : {level}</h3>
                    <h3 className='text-lg  sm:text-2xlmb-10 font-normal text-black'>الرقم القومي : {NationalId}</h3>
                    <button
                        onClick={handleFocus}
                        className="mt-4 px-4 py-2 ml-4 bg-[#61D0FF] text-black rounded hover:bg-[#61D0FF] cursor-pointer"
                    >
                        تعديل الاسم
                    </button>
                    <button
                        onClick={handleNameUpdate}
                        className="mt-4 px-4 py-2 bg-[#61D0FF] text-black rounded hover:bg-[#61D0FF] cursor-pointer"
                    >
                        حفظ الاسم
                    </button>

                </div>
            </div>

        </div>
    </>
}


