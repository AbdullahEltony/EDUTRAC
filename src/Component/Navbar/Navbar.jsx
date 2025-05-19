import React, { useContext, useEffect, useState } from 'react';
import { UserToken } from '../../Context/TokenContext';
import { SidebarContext, updateProgressContext } from '../Layout/Layout';
import { makeRequest } from '../../api/axiosInstance';

function Navbar() {
    const [totalCourses, setTotalCourses] = useState(null);
    const [totalHours, setTotalHours] = useState(null);
    const [gpa, setGpa] = useState(null);
    const [gpaYear, setGpaYear] = useState(null);

    // Loading states
    const [loadingCourses, setLoadingCourses] = useState(true);
    const [loadingHours, setLoadingHours] = useState(true);
    const [loadingGpa, setLoadingGpa] = useState(true);
    const [loadingGpaYear, setLoadingGpaYear] = useState(true);

    const { isCollapsed } = useContext(SidebarContext);
    const { upadteProgress } = useContext(updateProgressContext);
    const { userToken } = useContext(UserToken);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoadingCourses(true);
                const coursesRes = await makeRequest('GET', '/api/Profile/calculate-course');
                setTotalCourses(coursesRes.data.totalCourses);
            } finally {
                setLoadingCourses(false);
            }

            try {
                setLoadingHours(true);
                const hoursRes = await makeRequest('GET', '/api/Profile/calculate-hours');
                setTotalHours(hoursRes.data.totalHours);
            } finally {
                setLoadingHours(false);
            }

            try {
                setLoadingGpaYear(true);
                const gpaYearRes = await makeRequest('GET', '/api/Profile/calculate-gpa');
                setGpaYear(gpaYearRes.data.gpa);
            } finally {
                setLoadingGpaYear(false);
            }

            try {
                setLoadingGpa(true);
                const gpaRes = await makeRequest('GET', '/api/Profile/calculate-gpa-year');
                setGpa(gpaRes.data.gpa);
            } finally {
                setLoadingGpa(false);
            }
        };

        fetchData();
    }, [upadteProgress]);



    return (
        <>
            {userToken && (
                <div
                    className={`absolute xl:fixed pb-3 z-20 left-0 top-0 bg-white transition-all duration-300 mx-auto 
            ${isCollapsed ? 'w-[calc(100%-60px)]' : 'w-[calc(100%-60px)] md:w-[calc(100%-230px)]'}`}
                >
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-2 bg-white shadow-sm p-2 sm:p-4 rounded-[20px] mx-auto w-[98%] mt-3">
                        <Card title="عدد المواد المجتازة" bgColor="#d4c8f0" isLoading={loadingCourses}>
                            {64 - totalCourses}
                        </Card>

                        <Card title="عدد المواد المتبقية" bgColor="#fccbbe" isLoading={loadingCourses}>
                            {totalCourses}
                        </Card>

                        <Card title="عدد الساعات المجتازة" bgColor="#bde2f2" isLoading={loadingHours}>
                            {totalHours}
                        </Card>

                        <Card title="عدد الساعات المتبقية" bgColor="#fcdfb9" isLoading={loadingHours}>
                            {148 - totalHours}
                        </Card>

                        <div className="bg-[#c9ebe6] col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1 px-3 py-4 md:p-5 rounded-[20px] shadow-sm flex flex-col justify-start gap-1 sm:justify-center h-20 items-center">
                            <div className="flex justify-between w-full">
                                <p className="font-[700] text-xs md:text-base text-black leading-5">الGPA التراكمي</p>
                                {loadingGpaYear ? (
                                    <Loader />
                                ) : (
                                    <p className="text-xl font-semibold">{Number(gpaYear).toFixed(2)}</p>
                                )}
                            </div>
                            <div className="flex justify-between w-full">
                                <p className="font-[700] text-xs md:text-base text-black leading-5">الGPA السنوي</p>
                                {loadingGpa ? (
                                    <Loader />
                                ) : (
                                    <p className="text-xl font-semibold">{Number(gpa).toFixed(2)}</p>
                                )}
                            </div>
                        </div>
                    </div>



                </div>
            )}
        </>
    );
}

const Card = ({ title, children, bgColor, isLoading }) => (
    <div className={` py-4 rounded-[20px] shadow-sm flex flex-col gap-1 justify-center h-20 items-center`} style={{ backgroundColor: bgColor }}>
        <p className="font-bold text-xs md:text-base text-black">{title}</p>
        {isLoading ? (
            <Loader />
        ) : (
            <p className="text-xl font-semibold text-black">{children}</p>
        )}
    </div>
);

export default React.memo(Navbar);


const Loader = () => (
    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
);