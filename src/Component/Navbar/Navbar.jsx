import React, { useContext, useState } from 'react'
import style from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react';
import { UserToken } from '../../Context/TokenContext';
// import { tokenContext } from '../../Context/TokenContext';

export default function Navbar() {

    const [totalCourses, setTotalCourses] = useState(null)
    const [totalHours, setTotalHours] = useState(null)
    const [gpa, setGpa] = useState(null)
    const [gpaYear, setGpaYear] = useState(null)
    

    useEffect(() => {
        const getTotalCourses = async () => {
            const response = await axios.get(`http://edutrack.runasp.net/api/Profile/calculate-course`, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
            setTotalCourses(response.data.totalCourses);
        };
        const getTotalHours = async () => {
            const response = await axios.get(`http://edutrack.runasp.net/api/Profile/calculate-hours`, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
            setTotalHours(response.data.totalHours);
        };
        const getGPAYear = async () => {
            const response = await axios.get(`http://edutrack.runasp.net/api/Profile/calculate-gpa`, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
            setGpaYear(response.data.gpa);
        };
        const getGPA = async () => {
            const response = await axios.get(`http://edutrack.runasp.net/api/Profile/calculate-gpa`, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
            setGpa(response.data.gpa);
        };
        getTotalCourses();
        getTotalHours();
        getGPA();
        getGPAYear();
    }, []);

    let { userToken, setUserToken } = useContext(UserToken);


    return <>
        {userToken && <div className="flex gap-4 pt-4 pb-2  flex-wrap justify-baseline mr-[21%] fixed z-10  bg-white  ">
            <div className={`bg-[#c9ebe6] p-5 rounded-[20px] shadow-sm flex flex-col justify-between`}>
                <p className="font-normal px-4 text-black leading-5">الGPA التراكمي</p>
                <p className="text-2xl font-[600] font-[Inter] px-4 text-black  text-left">{Number((gpa - 4).toFixed(2))}</p>
                <p className="font-normal px-4 text-black leading-5">الGPA السنوي</p>
                <p className="text-2xl font-[600] font-[Inter] px-4 text-black  text-left">{Number((gpaYear - 4).toFixed(2))}</p>
            </div>
            <div className={`bg-[#fcdfb9] p-5 rounded-[20px] shadow-sm flex flex-col justify-between`}>
                <p className="font-normal p-4 text-black leading-5">عدد الساعات المتبقية</p>
                <p className="text-2xl font-[600] font-[Inter] p-4 text-black  text-left">{ 148 - totalHours }</p>
            </div>
            <div className={`bg-[#bde2f2] p-5 rounded-[20px] shadow-sm flex flex-col justify-between`}>
                <p className="font-normal p-4 text-black leading-5">عدد  الساعات المجتازة</p>
                <p className="text-2xl font-[600] font-[Inter] p-4 text-black  text-left">{ totalHours}</p>
            </div>
            <div className={`bg-[#fccbbe] p-5 rounded-[20px] shadow-sm flex flex-col justify-between`}>
                <p className="font-normal p-4 text-black leading-5">عدد المواد المتبقية</p>
                <p className="text-2xl font-[600] font-[Inter] p-4 text-black  text-left">{ totalCourses }</p>
            </div>
            <div className={`bg-[#d4c8f0] p-5 rounded-[20px] shadow-sm flex flex-col justify-between`}>
                <p className="font-normal p-4 text-black leading-5">عدد المواد المجتازة</p>
                <p className="text-2xl font-[600] font-[Inter] p-4 text-black  text-left">{ 64 - totalCourses }</p>
            </div>
        </div>}
    </>


}
