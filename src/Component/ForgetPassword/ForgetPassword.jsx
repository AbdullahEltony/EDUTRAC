/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import axios from 'axios';
import { baseURL } from '../../constants';
import { toast } from 'react-toastify';

export default function ForgetPassword() {

    const [isLoading, setIsLoading] = useState(false)
    const [apiError, setApiError] = useState(null)

    const navigate = useNavigate();


    async function forgetPassword(values) {
        try {
            setIsLoading(true);
            const response = await axios.post(`${baseURL}/api/Auth/forget-password`, values);
            if (response.status !== 200) throw new Error(response.statusText);
            toast.success("تم ارسال رابط اعادة تعيين كلمة المرور", { autoClose: 3000, rtl: true });
            
        } catch (error) {
            setApiError(error.response.data.errors[1]);
        } finally {
            setIsLoading(false);
        }
    }

    function validateForm(values) {
        let errors = {};
        if (!values.email) {
            errors.email = 'البريد الالكتروني مطلوب'
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.nationalId = 'الرقم القومي غير صحيح'
        }

        return errors
    }

    let formik = useFormik({
        initialValues: {
            email: '',
        }, validate: validateForm
        , onSubmit: forgetPassword
    })
    return <>

        <motion.div
            className="min-h-screen bg-[#EFF4F8] flex items-center justify-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>
            {apiError && <div class="absolute top-20 w-[50%] text-center p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                {apiError}
            </div>}
            <div className={` flex flex-row-reverse bg-white rounded-[0x] md:rounded-[2.5rem] shadow-lg w-[100%] max-w-4xl `}>

                <form onSubmit={formik.handleSubmit} className={`flex-1 py-20 px-8 flex flex-col justify-center w-[50%] text-center transition-all duration-1000 ease-in-out`}>
                    <input
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                        id='البريد الالكتروني'
                        name='email'
                        placeholder=" البريد الالكتروني"
                        className="mb-4 p-4 rounded-[12px] placeholder-[#000] bg-[#eff4f8] outline-none"
                    />
                    {formik.errors.email && formik.touched.email && <div class="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                        {formik.errors.email}
                    </div>}

                    {isLoading ? <button type='button' className=" text-center cursor-pointer bg-[#377DAC] text-white py-2 rounded mb-4 mt-2 ">
                        <i className='fas fa-spinner fa-spin'></i></button>
                        : <button type='submit' className=" text-center cursor-pointer bg-[#377DAC] text-white py-2 rounded mb-4 mt-2">تسجيل</button>}
                </form>
            </div>
        </motion.div>
    </>
}
