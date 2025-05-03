import React, { useEffect, useState } from "react";
import { baseURL } from "../../constants";
import axios from "axios";
export default React.memo(function ProgressBar({ updated }) {
    const [data, setData] = useState(0)
    useEffect(() => {
        console.log("updated", updated)
        const fetchData = async () => {
            try {
                const response = await axios.get(`${baseURL}/api/Profile/calculate-course-percentage`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setData(response.data);
            } catch (err) {
                console.log(err)
            }
        };

        fetchData();
    }, [updated]);

    const percentage = data?.hoursePersentage || 0;
    return (
        <div className="sticky top-0 xl:top-[13.7rem] z-50 xl:z-10 max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl w-full h-8 bg-gray-300 rounded-full overflow-hidden mx-auto mb-24">
            <div className={`absolute top-0 left-0 h-full bg-gradient-to-r from-[#3383cc] to-[#5fc5f3] rounded-full`} style={{ width: `${percentage}%` }}></div>
            <span className={`absolute top-1/2 !left-1/2 -translate-x-1/2'  transform  -translate-y-1/2 text-white text-sm sm:text-lg font-semibold`} style={{ left: `calc(${percentage / 2}% - 1rem)` }}>
                {percentage}%
            </span>
        </div>
    );
})
