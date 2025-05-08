import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { UserToken } from '../../Context/TokenContext';
import { SidebarContext, updateProgressContext } from '../Layout/Layout';
import { makeRequest } from '../../api/axiosInstance';
function Navbar() {

    const [totalCourses, setTotalCourses] = useState(null)
    const [totalHours, setTotalHours] = useState(null)
    const [gpa, setGpa] = useState(null)
    const [gpaYear, setGpaYear] = useState(null)
    const { isCollapsed } = useContext(SidebarContext);
    const { upadteProgress } = useContext(updateProgressContext);


    useEffect(() => {
        const getTotalCourses = async () => {
            const response = await makeRequest('GET', `/api/Profile/calculate-course`);
            setTotalCourses(response.data.totalCourses);
        };
        const getTotalHours = async () => {
            const response = await makeRequest('GET', `/api/Profile/calculate-hours`);
            setTotalHours(response.data.totalHours);
        };
        const getGPA = async () => {
            const response = await makeRequest('GET', `/api/Profile/calculate-gpa`);
            setGpaYear(response.data.gpa);
        };
        const getGPAYear = async () => {
            const response = await makeRequest('GET', `/api/Profile/calculate-gpa-year`);
            setGpa(response.data.gpa);
        };
        getTotalCourses();
        getTotalHours();
        getGPA();
        getGPAYear();
    }, [upadteProgress]);

    let { userToken } = useContext(UserToken);


    return <>
        {userToken && (
            <div
                className={`absolute xl:fixed z-20 left-0 top-0 bg-white pb-6 transition-all duration-300 mx-auto 
                ${isCollapsed ? 'w-[calc(100%-60px)]' : 'w-[calc(100%-60px)] md:w-[calc(100%-230px)]'} `}
            >
                <div
                    className={`grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5  gap-4 bg-white shadow-sm p-5 rounded-[20px] mx-auto w-[98%] mt-3 transition-all duration-300 `}
                >
                    <div className="bg-[#c9ebe6] px-2 py-4 md:p-5 rounded-[20px] shadow-sm flex flex-col justify-start gap-1 sm:justify-center max-h-36 items-center">
                        <p className="font-[700] text-sm md:text-[16px] text-black leading-5">
                            الGPA التراكمي
                        </p>
                        <p className="text-2xl font-[600] font-[Inter] text-black text-left">
                            {Number(gpaYear - 4).toFixed(2)}
                        </p>
                        <p className="font-[700] text-sm md:text-[16px] text-black leading-5">
                            الGPA السنوي
                        </p>
                        <p className="text-2xl font-[600] font-[Inter] text-black text-left">
                            {Number(gpa - 4).toFixed(2)}
                        </p>
                    </div>
                    <div className="bg-[#fcdfb9] px-3 py-4 md:p-5 rounded-[20px] shadow-sm flex flex-col gap-3 justify-center h-36 items-center">
                        <p className="font-[700] text-sm md:text-[16px] text-black leading-5">
                            عدد الساعات المتبقية
                        </p>
                        <p className="text-2xl font-[600] font-[Inter] text-black text-left">
                            {148 - totalHours}
                        </p>
                    </div>
                    <div className="bg-[#bde2f2] px-3 py-4 md:p-5 rounded-[20px] shadow-sm flex flex-col gap-3 justify-center h-36 items-center">
                        <p className="font-[700] text-sm md:text-[16px] text-black leading-5">
                            عدد الساعات المجتازة
                        </p>
                        <p className="text-2xl font-[600] font-[Inter] text-black text-left">
                            {totalHours}
                        </p>
                    </div>
                    <div className="bg-[#fccbbe] px-3 py-4 md:p-5 rounded-[20px] shadow-sm flex flex-col gap-3 justify-center h-36 items-center">
                        <p className="font-[700] text-sm md:text-[16px] text-black leading-5">
                            عدد المواد المتبقية
                        </p>
                        <p className="text-2xl font-[600] font-[Inter] text-black text-left">
                            {totalCourses}
                        </p>
                    </div>
                    <div className="bg-[#d4c8f0] px-3 py-4 md:p-5 rounded-[20px] shadow-sm flex flex-col gap-3 justify-center h-36 items-center">
                        <p className="font-[700] text-sm md:text-[16px] text-black leading-5">
                            عدد المواد المجتازة
                        </p>
                        <p className="text-2xl font-[600] font-[Inter] text-black text-left">
                            {64 - totalCourses}
                        </p>
                    </div>
                </div>
            </div>
        )}
    </>

}

export default React.memo(Navbar);
