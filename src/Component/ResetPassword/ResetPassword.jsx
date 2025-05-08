/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { motion } from "framer-motion";
import { NavLink, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { useFormik } from 'formik';
import axios from 'axios';
import { baseURL } from '../../constants';
import { toast } from 'react-toastify';

export default function ResetPassword() {
    const [searchParams] = useSearchParams();
    const code = searchParams.get("code");
    const email = searchParams.get("email");

    const [isLoading, setIsLoading] = useState(false)
    const [apiError, setApiError] = useState(null)

    const navigate = useNavigate();


    async function resetPassword(values) {
        try {
            setIsLoading(true);
            const response = await axios.post(`${baseURL}/api/Auth/reset-password`, values);
            if (response.status !== 200) throw new Error(response.statusText);
            toast.success("تم تغيير كلمة المرور بنجاح", { autoClose: 3000, rtl: true });
            setTimeout(() => {
                navigate('/');
            }, 3000)
        } catch (error) {
            setApiError(error.response.data.errors[1]);
        } finally {
            setIsLoading(false);
        }
    }

    function validateForm(values) {
        let errors = {};
        if (!values.email) {
            errors.email = 'الرقم القومي مطلوب'
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'البريد الالكتروني غير صحيح'
        }

        if (!values.newPassword) {
            errors.newPassword = 'كلمة المرور مطلوبة'
        }
        else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,15}$/.test(values.newPassword)) {
            errors.newPassword = 'كلمة المرور غير صحيحة '
        }

        return errors
    }

    let formik = useFormik({
        initialValues: {
            email: '',
            newPassword: '',
            code: code
        }, validate: validateForm
        , onSubmit: resetPassword
    })
    return <>
        <motion.div
            className="min-h-screen bg-[#EFF4F8] flex items-center justify-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>
            {apiError && <div class="absolute top-14 w-[50%] text-center p-4 mt-2 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                {apiError}
            </div>}
            <div className={` flex flex-row-reverse bg-white rounded-tr-[3rem] rounded-br-[3rem] overflow-hidden shadow-lg w-[100%] max-w-4xl `}>

                <form onSubmit={formik.handleSubmit} className={`flex-1 py-20 px-8 flex flex-col justify-center w-[50%] text-center transition-all duration-1000 ease-in-out`}>
                    <input
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                        id='البريد الالكتروني'
                        name='email'
                        placeholder='البريد الالكتروني'
                        className="mb-4 p-4 rounded-[12px] placeholder-[#000] bg-[#eff4f8] outline-none"
                    />
                    {formik.errors.email && formik.touched.email && <div class="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                        {formik.errors.email}
                    </div>}

                    <input
                        value={formik.values.newPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="password"
                        id='كلمة المرور'
                        name='newPassword'
                        placeholder="كلمة المرور"
                        className="mb-4 p-4 rounded-[12px] placeholder-[#000] bg-[#eff4f8] outline-none"
                    />
                    {formik.errors.newPassword && formik.touched.newPassword && <div class="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                        {formik.errors.newPassword}
                    </div>}
                    <input type="hidden" name="code" value={code} />

                    {isLoading ? <button type='button' className=" text-center cursor-pointer bg-[#377DAC] text-white py-2 rounded mb-4 mt-2 ">
                        <i className='fas fa-spinner fa-spin'></i></button>
                        : <button type='submit' className=" text-center cursor-pointer bg-[#377DAC] text-white py-2 rounded mb-4 mt-2">تسجيل</button>}
                </form>
            </div>
        </motion.div>
    </>
}
