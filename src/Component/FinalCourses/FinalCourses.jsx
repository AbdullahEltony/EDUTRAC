import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { NavMenu } from '../NavMenu';
import './FinalCourses.css';
import { baseURL } from '../../constants';
import ProgressBar from '../shared/ProgressBar';
import { toast } from 'react-toastify';
import { FaRegTrashCan } from "react-icons/fa6";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { updateProgressContext } from '../Layout/Layout';
import { makeRequest } from '../../api/axiosInstance';

export default function FinalCourses() {
    const [userCourses, setUserCourses] = useState(null);
    const [editMode, setEditMode] = useState({});
    const [editedCourses, setEditedCourses] = useState([]);
    const [deletedCourses, setDeletedCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [loading, setLoading] = useState(false);
    const { setUpadteProgress, upadteProgress } = useContext(updateProgressContext);
    console.log(upadteProgress)

    useEffect(() => {
        fetchUserCourses();
    }, []);

    const fetchUserCourses = async () => {
        const response = await axios.get(`${baseURL}/api/Profile/user-courses`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setUserCourses(response.data);
    };

    const getCourseTypeLabel = (type) => {
        switch (type) {
            case 0: return "تخصص";
            case 1: return "كلية";
            case 2: return "جامعة";
            default: return "غير معروف";
        }
    };

    const getStatus = (status) => {
        return status === true ? "إجتاز" : "متعثر";
    };

    const handleDelete = (code) => {
        setDeletedCourses(prev => [...prev, { code }]);
        setUserCourses(prev => ({
            ...prev,
            updateUserCourse: prev.updateUserCourse.filter(course => course.code !== code)
        }));
    };

    const handleBulkDelete = () => {
        selectedCourses.forEach(code => handleDelete(code));
        setSelectedCourses([]);
    };

    const handleEdit = (code) => {
        setEditMode(prev => ({ ...prev, [code]: true }));
    };

    const handleDegreeChange = (code, value) => {
        if(isNaN(value) || value > 100) {
            return;
        }
        setUserCourses(prev => ({
            ...prev,
            updateUserCourse: prev.updateUserCourse.map(course =>
                course.code === code ? { ...course, degree: Number(value) } : course
            )
        }));
        

        const course = userCourses.updateUserCourse.find(c => c.code === code);
        const updated = { code: course.code, status: course.status, degree: Number(value) };

        setEditedCourses(prev => {
            const exists = prev.find(c => c.code === code);
            if (exists) {
                return prev.map(c => c.code === code ? updated : c);
            } else {
                return [...prev, updated];
            }
        });
    };

    const handleBlur = (e, code) => {
        const value = parseInt(e.target.value);
        
        if (isNaN(value) || value < 60) {
            toast.warning("الدرجة يجب أن تكون على الأقل 60", { autoClose: 2000 });
    
            setUserCourses(prev => ({
                ...prev,
                updateUserCourse: prev.updateUserCourse.map(course =>
                    course.code === code ? { ...course, degree: '' } : course
                )
            }));
    
            // إعادة التركيز بعد التأكد من أن event انتهى
            setTimeout(() => {
                e.target.focus();
            }, 0);
        }
    };

    const handleKeyPress = (e, code) => {
        if (e.key === 'Enter') {
            setEditMode(prev => ({ ...prev, [code]: false }));
        }
    };

    const handleSave = async () => {

        try {
            setLoading(true);
            if (editedCourses.length > 0) {
                await makeRequest('PUT',`/api/Profile/update-course`, {
                    updateCourse: [...editedCourses]
                });
            }

            if (deletedCourses.length > 0) {
                await makeRequest('DELETE',`/api/Profile/remove-course`,
                    {
                        courses: [...deletedCourses]
                    }
                );
            }

            
            setEditedCourses([]);
            setDeletedCourses([]);
            setEditMode({});
            setUpadteProgress(!upadteProgress);
            setSelectedCourses([]);
            toast.success("تم حفظ التغييرات بنجاح", { autoClose: 2000, rtl: true });
            window.scrollTo({ top: 0, behavior: "smooth" });

        } catch (err) {
            console.error("Error saving changes:", err);
            toast.error("فشل في حفظ التغييرات");
        } finally {
            setLoading(false);
            await fetchUserCourses();

        }
    };

    const handleSelect = (code) => {
        setSelectedCourses(prev => {
            if (prev.includes(code)) {
                return prev.filter(item => item !== code);
            } else {
                return [...prev, code];
            }
        });
    };

    const isSelected = (code) => selectedCourses.includes(code);

    return (
        <div className='w-full flex flex-row'>
            <NavMenu />
            <div className='w-full'>
                <ProgressBar />
                <div className="relative overflow-x-auto ltr shadow-md rounded-lg mb-10 mx-auto mt-20">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-white uppercase bg-gray-600">
                            <tr>
                                <th className="py-6 px-4 text-center text-xs sm:text-sm md:text-lg w-2/12"> كود المقرر </th>
                                <th className="py-6 px-4 text-center text-xs sm:text-sm md:text-lg w-6/12 lg:w-4/12">وصف المقرر</th>
                                <th className="py-6 px-4 text-center text-xs sm:text-sm md:text-lg w-2/12">الساعات العتمدة</th>
                                <th className="py-6 px-4 text-center text-xs sm:text-sm md:text-lg w-2/12">حالة المقرر</th>
                                <th className="py-6 px-4 text-center text-xs sm:text-sm md:text-lg w-1/12">الدرجة</th>
                                <th className="py-6 px-4 text-center text-xs sm:text-sm md:text-lg w-2/12">نوع المقرر</th>
                                <th className="py-6 px-4 text-center text-xs sm:text-sm md:text-lg w-2/12">الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userCourses?.updateUserCourse?.length > 0 &&
                                userCourses.updateUserCourse.map((course, index) => (
                                    <tr key={index}
                                        className={`${
                                            // course.name.includes("جامعة اختياري")
                                            getCourseTypeLabel(course.courseType) == "جامعة" && course.isOptional == true
                                                ? "bg-[#e5b7b7]"
                                                // : course.name.includes("تخصص اختياري")
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
                                        <td className="p-12 font-normal text-[16px] sm:text-2xl text-black whitespace-nowrap">
                                            <div className='flex items-center'>
                                                <input
                                                    id={course.code}
                                                    className="w-5 h-5 me-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                                    type="checkbox"
                                                    checked={isSelected(course.code)}
                                                    onChange={() => handleSelect(course.code)}
                                                />
                                                <label htmlFor={course.code}> {course.code}</label>

                                            </div>
                                        </td>
                                        <td className="text-[16px] sm:text-2xl text-center text-black">{course.name}</td>
                                        <td className="text-[16px] sm:text-2xl text-center text-black">{course.hours}</td>
                                        <td className={`font-normal text-[16px] sm:text-2xl text-black text-center ${course.status ?'bg-green-300' : 'bg-red-300'}`}>{getStatus(course.status)}</td>
                                        <td className="font-normal text-[16px] sm:text-2xl text-black w-1/12 text-center">
                                            {editMode[course.code] ? (
                                                <input
                                                    type="number"
                                                    min="60"
                                                    max="100"
                                                    value={course.degree}
                                                    onChange={(e) => handleDegreeChange(course.code, e.target.value)}
                                                    onKeyDown={(e) => handleKeyPress(e, course.code)}
                                                    className="w-[60px] text-center border rounded"
                                                    onBlur={(e) => handleBlur(e,course.code)}
                                                />
                                            ) : (
                                                course.degree
                                            )}
                                        </td>
                                        <td className="text-[16px] sm:text-2xl text-center text-black">{getCourseTypeLabel(course.courseType)}</td>
                                        <td className="text-[16px] sm:text-2xl text-center text-black">
                                            <div className='flex justify-center items-center gap-4'>
                                                <button
                                                    onClick={() => handleEdit(course.code)}
                                                    className="cursor-pointer text-gray-600 hover:text-gray-800 p-1 rounded transition duration-150"
                                                    title="تعديل"
                                                >
                                                    <HiOutlinePencilSquare size={20} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(course.code)}
                                                    className="cursor-pointer text-gray-600 hover:text-gray-800 p-1 rounded transition duration-150"
                                                    title="حذف"
                                                >
                                                    <FaRegTrashCan size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>

                {(editedCourses.length > 0 || deletedCourses.length > 0 || selectedCourses.length > 0) && (
                    <div className="text-center my-6 flex gap-4 justify-center">
                        <button
                            onClick={handleSave}
                            className="bg-green-600 cursor-pointer hover:bg-green-700 text-white font-bold py-3 px-6 rounded"
                        >
                            {loading ? "جاري الحفظ..." : "حفظ التغييرات"}
                        </button>
                        {selectedCourses.length > 0 && (
                            <button
                                onClick={handleBulkDelete}
                                className="bg-red-500 hover:bg-red-700 cursor-pointer text-white font-bold py-3 px-6 rounded"
                            >
                                حذف المحدد
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
