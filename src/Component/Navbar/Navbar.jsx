import React, { useContext, useEffect, useState } from 'react';
import { UserToken } from '../../Context/TokenContext';
import { SidebarContext, updateProgressContext } from '../Layout/Layout';
import { makeRequest } from '../../api/axiosInstance';
import ProgressBar from '../shared/ProgressBar';

function Navbar() {
    const [totalCourses, setTotalCourses] = useState(null);
    const [totalHours, setTotalHours] = useState(null);
    const [gpa, setGpa] = useState(null);

    // Loading states
    const [loadingCourses, setLoadingCourses] = useState(true);
    const [loadingHours, setLoadingHours] = useState(true);
    const [loadingGpa, setLoadingGpa] = useState(true);

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
                setLoadingGpa(true);
                const gpa = await makeRequest('GET', '/api/Profile/calculate-gpa');
                setGpa(gpa.data.gpa);
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
                    <div className="grid grid-cols-2 mb-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-2 bg-white shadow-sm p-2 sm:p-4 rounded-[20px] mx-auto w-[98%] mt-3">
                        <Card title="عدد المقررات المجتازة" bgColor="#d4c8f0" isLoading={loadingCourses}>
                            {64 - totalCourses}
                        </Card>

                        <Card title="عدد المقررات المتبقية" bgColor="#fccbbe" isLoading={loadingCourses}>
                            {totalCourses}
                        </Card>

                        <Card title="عدد الساعات المجتازة" bgColor="#bde2f2" isLoading={loadingHours}>
                            {totalHours}
                        </Card>

                        <Card title="عدد الساعات المتبقية" bgColor="#fcdfb9" isLoading={loadingHours}>
                            {148 - totalHours}
                        </Card>
                        <Card title="ال GPA التراكمي" bgColor="#c9ebe6" isLoading={loadingGpa}>
                            {Number(gpa).toFixed(2)}
                        </Card>

                    </div>

                    <ProgressBar />

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
    <div className="animate-spin rounded-full h-4 w-4 border-2 border-[#529ed0] border-t-transparent" />
);