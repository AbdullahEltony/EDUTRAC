import React, { useEffect, useState } from 'react'
import style from './FinalCourses.module.css'
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

export default function FinalCourses() {
    const [userCourses, setUserCourses] = useState(null)
    useEffect(() => {
        const getUserCourses = async () => {
            const response = await axios.get(`http://edutrack.runasp.net/api/Profile/user-courses`, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
            setUserCourses(response.data);
            console.log(response.data);
            ;
        }
        getUserCourses();
    }, []);
    
    let navigate = useNavigate();
    function logOut() {
        localStorage.removeItem('token');
        setUserToken(null)
        navigate('/')
    }

    const getCourseTypeLabel = (type) => {
        switch (type) {
            case 0:
                return "تخصص";
            case 1:
                return "كلية";
            case 2:
                return "جامعة";
            default:
                return "غير معروف";
        }
    };
    const getStatus = (type) => {
        switch (type) {
            case true:
                return "إجتاز";
            case false:
                return "متعثر";
            default:
                return "غير معروف";
        }
    };


    return <>
        <div className='w-full flex flex-row'>
            <div className="w-1/5 bg-[#d9e7f1] p-4 min-h-screen flex flex-col justify-between fixed">
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold text-[#6CA6CD] mb-4 text-center">EDU TRACK</h2>
                    <NavLink onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })} to={'/home'} className="p-3  rounded-[20px]">
                        <div className='flex items-center gap-2.5'>
                            <i className="fa-solid fa-house text-[#222] p-2 rounded-[12px]"></i>
                            <p className='mb-0 text-[#14142b] font-[Font Family]'>الرئيسية</p>
                        </div>
                    </NavLink>
                    <NavLink onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })} to={'/updateCourses'} className="p-3  rounded-[20px]">
                        <div className='flex items-center gap-2.5'>
                            <i className="fa-regular fa-clipboard text-[#222] p-2 rounded-[12px] bg-[#eff4f8]"></i>
                            <p className='mb-0 text-[#14142b] font-[Font Family]'>المقررات الدراسية</p>
                        </div>
                    </NavLink>
                    <NavLink onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })} to={'/finalCourses'} className="p-3 bg-[#eff4f8]  rounded-[20px]">
                        <div className='flex items-center gap-2.5'>
                            <i className="fa-regular fa-clipboard text-[#222] p-2 rounded-[12px] bg-[#eff4f8]"></i>
                            <p className='mb-0 text-[#14142b] font-[Font Family]'>المقررات النهائية</p>
                        </div>
                    </NavLink>
                    <NavLink onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })} to={'/aboutus'} className="p-3 rounded-[20px]">
                        <div className='flex items-center gap-2.5'>
                            <i className="fa-solid fa-users text-[#222] p-2 rounded-[12px] bg-[#eff4f8]"></i>
                            <p className='mb-0 text-[#14142b] font-[Font Family]'>نبذة عنا</p>
                        </div>
                    </NavLink>
                    <NavLink onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })} to={'/profile'} className="p-3 rounded-[20px]">
                        <div className='flex items-center gap-2.5'>
                            <i className="fa-solid fa-user text-[#222] p-2 rounded-[12px] bg-[#eff4f8]"></i>
                            <p className='mb-0 text-[#14142b] font-[Font Family]'>الملف الشخصي</p>
                        </div>
                    </NavLink>
                    <NavLink onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })} to={'/chatBot'} className="p-3  rounded-[20px]">
                        <div className='flex items-center gap-2.5'>
                            <i className="fa-solid fa-robot text-[#222] p-2 rounded-[12px] bg-[#eff4f8]"></i>
                            <p className='mb-0 text-[#14142b] font-[Font Family]'>ChatBot للتواصل</p>
                        </div>
                    </NavLink>
                </div>
                <div className="mt-4">
                    <NavLink onClick={()=> logOut()} className="p-3 rounded-[20px]">
                        <div className='flex items-center gap-2.5'>
                            <i className="fa-solid fa-arrow-right-to-bracket text-[#222] p-2 rounded-[12px] bg-[#eff4f8]"></i>
                            <p className='mb-0 text-[#14142b] font-[Font Family]'>تسجيل الخروج</p>
                        </div>
                    </NavLink>
                </div>
            </div>
        <div className='w-4/5 mr-[21%] pr-2 mb-10 mt-[15%]'>
            <div className="relative overflow-x-auto ltr shadow-md sm:rounded-lg ml-6">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-white uppercase  bg-gray-600">
                        <tr>
                            <th scope="col" className="py-6 px-4 text-center text-2xl w-2/12">
                            كود المقرر
                            </th>
                            <th scope="col" className="py-6 px-4 text-center text-2xl w-2/12">
                            وصف المقرر
                            </th>
                            <th scope="col" className="py-6 px-4 text-center text-2xl w-3/12">
                            الساعات العتمدة
                            </th>
                            <th scope="col" className="py-6 px-4 text-center text-2xl w-2/12">
                            حالة المقرر
                            </th>
                            <th scope="col" className="py-6 px-4 text-center text-2xl w-1/12">
                            الدرجة
                            </th>
                            <th scope="col" className="py-6 px-4 text-center text-2xl w-2/12">
                            نوع المقرر
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {userCourses?.updateUserCourse?.length > 0 &&
                            userCourses.updateUserCourse.map((course, index) => (
                            <tr
                                key={index}
                                className={`${
                                getCourseTypeLabel(course.courseType) == "جامعة" && course.isOptional == true
                                ? "bg-[#e5b7b7]"
                                :getCourseTypeLabel(course.courseType) == "تخصص" && course.isOptional == true
                                ? "bg-[#f1dcdb]"
                                    : getCourseTypeLabel(course.courseType) == "تخصص"
                                    ? "bg-[#dbe5f1]"
                                    : getCourseTypeLabel(course.courseType) == "جامعة"
                                    ? "bg-[#b8cce4]"
                                    : getCourseTypeLabel(course.courseType) == "كلية"
                                    ? "bg-[#95b3d7]"
                                    : ""
                                }`}
                            >
                                <th scope="row" className="p-12 font-normal text-2xl text-black whitespace-nowrap">{course.code}</th>
                                <td className="text-2xl text-center text-black">{course.name}</td>
                                <td className="text-2xl text-center text-black">{course.hours}</td>
                                <td className="font-normal text-2xl text-black text-center">{ getStatus(course.status) }</td>       
                                <td className="font-normal text-2xl text-black  w-1/12 text-center">{ course.degree }</td>
                                <td className="text-2xl text-center text-black">{getCourseTypeLabel(course.courseType)}</td>
                            </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            </div>
            </div>

    </>


}
