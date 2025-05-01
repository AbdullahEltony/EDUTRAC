import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { UserToken } from '../../Context/TokenContext';
import { baseURL } from '../../constants';
export default function Navbar() {

    const [totalCourses, setTotalCourses] = useState(null)
    const [totalHours, setTotalHours] = useState(null)
    const [gpa, setGpa] = useState(null)
    const [gpaYear, setGpaYear] = useState(null)


    useEffect(() => {
        const getTotalCourses = async () => {
            const response = await axios.get(`${baseURL}/api/Profile/calculate-course`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
            setTotalCourses(response.data.totalCourses);
        };
        const getTotalHours = async () => {
            const response = await axios.get(`${baseURL}/api/Profile/calculate-hours`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
            setTotalHours(response.data.totalHours);
        };
        const getGPAYear = async () => {
            const response = await axios.get(`${baseURL}/api/Profile/calculate-gpa`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
            setGpaYear(response.data.gpa);
        };
        const getGPA = async () => {
            const response = await axios.get(`${baseURL}/api/Profile/calculate-gpa`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
            setGpa(response.data.gpa);
        };
        getTotalCourses();
        getTotalHours();
        getGPA();
        getGPAYear();
    }, []);

    let { userToken } = useContext(UserToken);


    return <>
        {userToken && <div className='absolute xl:fixed z-10 left-0 top-0 bg-white w-[84%] md:w-[75%] lg:w-[82%] xl:w-[84%] pb-6'>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 bg-white shadow-sm p-5 rounded-[20px] mx-auto w-[98%] mt-3">
                <div className={`bg-[#c9ebe6] px-2 py-4 md:p-5 rounded-[20px] shadow-sm flex flex-col justify-start gap-1 sm:justify-center max-h-36 items-center`}>
                    <p className="font-[700] text-sm md:text-[16px] text-black leading-5">الGPA التراكمي</p>
                    <p className="text-2xl font-[600] font-[Inter] text-black  text-left">{Number((gpa - 4).toFixed(2))}</p>
                    <p className="font-[700] text-sm md:text-[16px] text-black leading-5">الGPA السنوي</p>
                    <p className="text-2xl font-[600] font-[Inter] text-black  text-left">{Number((gpaYear - 4).toFixed(2))}</p>
                </div>
                <div className={`bg-[#fcdfb9] px-3 py-4 md:p-5 rounded-[20px] shadow-sm flex flex-col gap-3 justify-center h-36 items-center`}>
                    <p className="font-[700] text-sm md:text-[16px] text-black leading-5">عدد الساعات المتبقية</p>
                    <p className="text-2xl font-[600] font-[Inter] text-black  text-left">{148 - totalHours}</p>
                </div>
                <div className={`bg-[#bde2f2] px-3 py-4 md:p-5 rounded-[20px] shadow-sm flex flex-col gap-3 justify-center h-36 items-center`}>
                    <p className="font-[700] text-sm md:text-[16px] text-black leading-5">عدد  الساعات المجتازة</p>
                    <p className="text-2xl font-[600] font-[Inter] text-black  text-left">{totalHours}</p>
                </div>
                <div className={`bg-[#fccbbe] px-3 py-4 md:p-5 rounded-[20px] shadow-sm flex flex-col gap-3 justify-center h-36 items-center`}>
                    <p className="font-[700] text-sm md:text-[16px] text-black leading-5">عدد المواد المتبقية</p>
                    <p className="text-2xl font-[600] font-[Inter] text-black  text-left">{totalCourses}</p>
                </div>
                <div className={`bg-[#d4c8f0] px-3 py-4 md:p-5 rounded-[20px] shadow-sm flex flex-col gap-3 justify-center h-36 items-center`}>
                    <p className="font-[700] text-sm md:text-[16px] text-black leading-5">عدد المواد المجتازة</p>
                    <p className="text-2xl font-[600] font-[Inter] text-black  text-left">{64 - totalCourses}</p>
                </div>
            </div>
        </div>}
    </>


}
