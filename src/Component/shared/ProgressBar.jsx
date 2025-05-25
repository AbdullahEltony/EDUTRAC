/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { baseURL } from "../../constants";
import axios from "axios";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { updateProgressContext } from "../Layout/Layout";
import { useContext } from "react";
import { makeRequest } from "../../api/axiosInstance";

export default React.memo(function ProgressBar() {
    // Removed unused state variable 'data'
    const progress = useMotionValue(0); // animated value from 0 to percentage
    const width = useTransform(progress, (latest) => `${latest}%`);
    const labelX = useTransform(progress, (latest) => `calc(${latest / 2}% - 1rem)`);
    const [target, setTarget] = useState(0);
    const {upadteProgress} = useContext(updateProgressContext);;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await makeRequest('GET',`/api/Profile/calculate-course-percentage`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                const target = response.data?.hoursePersentage || 0;
                setTarget(target);
                // Removed unused setter 'setData'
                animate(progress, target, {
                    duration: 2,
                    ease: "easeInOut"
                });
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [progress, upadteProgress]);

    return (
        <div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1 }}
            className={`sticky top-0 xl:top-[8.5rem] z-30 xl:z-10 w-[98%] h-8 bg-gray-300 rounded-full overflow-hidden mx-auto`}
        >
            <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#3383cc] to-[#5fc5f3] rounded-full"
                style={{ width }}
            ></motion.div>

            <motion.span
                className={`absolute ${target <= 10? 'right-1/2' : 'left-1/2'} pt-[5px] top-1/2 transform -translate-y-1/2 ps-3 sm:px-0 text-white text-xs  sm:text-lg font-semibold`}
                style={{ left: labelX }}
            >
                {Math.round(target)}%
            </motion.span>
        </div>
    );
});
