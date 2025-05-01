import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NavMenu } from '../NavMenu';
import './FinalCourses.css'
import { baseURL } from '../../constants';
export default function FinalCourses() {
    const [userCourses, setUserCourses] = useState(null)
    useEffect(() => {
        const getUserCourses = async () => {
            const response = await axios.get(`${baseURL}/api/Profile/user-courses`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
            setUserCourses(response.data);
            console.log(response.data);
            ;
        }
        getUserCourses();
    }, []);

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
            <NavMenu />
            <div className='w-[84%] md:w-[75%] lg:w-[82%] xl:w-[84%] mr-auto m-t final-courses'>
                <div className="relative overflow-x-auto ltr shadow-md rounded-lg mb-10 w-[95%] mx-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-white uppercase  bg-gray-600">
                            <tr>
                                <th scope="col" className="py-6 px-4 text-center text-xs sm:text-sm md:text-lg w-2/12">
                                    كود المقرر
                                </th>
                                <th scope="col" className="py-6 px-4 text-center text-xs sm:text-sm md:text-lg w-2/12">
                                    وصف المقرر
                                </th>
                                <th scope="col" className="py-6 px-4 text-center text-xs sm:text-sm md:text-lg w-2/12">
                                    الساعات العتمدة
                                </th>
                                <th scope="col" className="py-6 px-4 text-center text-xs sm:text-sm md:text-lg w-2/12">
                                    حالة المقرر
                                </th>
                                <th scope="col" className="py-6 px-4 text-center text-xs sm:text-sm md:text-lg w-1/12">
                                    الدرجة
                                </th>
                                <th scope="col" className="py-6 px-4 text-center text-xs sm:text-sm md:text-lg w-2/12">
                                    نوع المقرر
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {userCourses?.updateUserCourse?.length > 0 &&
                                userCourses.updateUserCourse.map((course, index) => (
                                    <tr
                                        key={index}
                                        className={`${getCourseTypeLabel(course.courseType) == "جامعة" && course.isOptional == true
                                            ? "bg-[#e5b7b7]"
                                            : getCourseTypeLabel(course.courseType) == "تخصص" && course.isOptional == true
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
                                        <td className="font-normal text-2xl text-black text-center">{getStatus(course.status)}</td>
                                        <td className="font-normal text-2xl text-black  w-1/12 text-center">{course.degree}</td>
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
