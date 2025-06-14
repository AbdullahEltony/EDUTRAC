/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { motion } from "framer-motion";
import { NavLink, useNavigate } from 'react-router-dom'
import { ActiveContext } from '../../Context/ActiveContext';
import { useFormik } from 'formik';
import axios from 'axios';
import { UserToken } from '../../Context/TokenContext';
import { baseURL } from '../../constants';
import WelcomeLoader from '../Welcom';

export default function Login() {

    const [isLoading, setIsLoading] = useState(false)
    const [apiError, setApiError] = useState(null)
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [welcomLoader, setWelcomeLoader] = useState(false)

    const navigate = useNavigate();

    let { isActive, setIsActive } = useContext(ActiveContext);
    let { setUserToken } = useContext(UserToken)

    async function login(values) {
        try {
            setIsLoading(true);
            const response = await axios.post(`${baseURL}/api/Auth/login`, values);
            if (response.status !== 200) throw new Error(response.statusText);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            localStorage.setItem('name', JSON.stringify(response.data.fullName));

            setUserToken(response.data.token);
            setWelcomeLoader(true);
            setTimeout(() => {
                navigate('/home');
                setTimeout(() => {
                    setWelcomeLoader(false);
                }, 1000)
            }, 5000)

        } catch (error) {
            setApiError(error.response.data.errors[1]);
        } finally {
            setIsLoading(false);
        }
    }

    function validateForm(values) {
        let errors = {};
        if (!values.nationalId) {
            errors.nationalId = 'الرقم القومي مطلوب'
        }
        else if (!/^\d{14}$/.test(values.nationalId)) {
            errors.nationalId = 'الرقم القومي غير صحيح'
        }

        if (!values.password) {
            errors.password = 'كلمة المرور مطلوبة'
        }
        else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,15}$/.test(values.password)) {
            errors.password = 'كلمة المرور غير صحيحة '
        }

        return errors
    }

    let formik = useFormik({
        initialValues: {
            nationalId: '',
            password: '',
        }, validate: validateForm
        , onSubmit: login
    })
    return <>
        <motion.div
            className="min-h-screen bg-[#EFF4F8] flex items-center justify-center"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>
            {apiError && <div class="absolute top-0 z-10 text-center p-3 mt-2 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                {apiError}
            </div>}
            <div className={`absolute flex flex-row-reverse bg-white overflow-hidden shadow-lg w-[93%] max-w-6xl rounded-tr-[0px] sm:rounded-tr-[2.5rem] rounded-bl-[2.5rem] sm:rounded-bl-[0px] rounded-br-[2.5rem]`}>
                <div className={`w-full h-64  sm:h-full sm:w-[40%] md:w-[30%] absolute top-0 left-[0%] bg-[#6CA6CD] z-1 rounded-b-[2.5rem] sm:rounded-b-[0px] rounded-r-[0px] sm:!rounded-r-[2.5rem] transition-all duration-[2000ms] ease-in-out ${isActive ? "left-[100%] w-[400%]" : ""}`}></div>

                <div className={`text-white h-64 sm:h-full w-full sm:w-[40%] md:w-[30%] p-8 flex flex-col justify-center text-center absolute z-2 top-0 left-0 bottom-0 transition-all duration-2000 ease-in-out ${isActive ? "left-[-100%]" : "left-0"}`}>
                    <h2 className="text-xl font-bold mb-2"> أهلًا بك في Edu Track 👋</h2>

                    <p className="text-sm mb-4"> ليس لديك حساب؟</p>
                    <button
                        onClick={() => {
                            setIsActive(true);
                            setTimeout(() => {
                                setIsActive(false);
                            }, 2950);
                            setTimeout(() => {
                                navigate('/register');
                            }, 3000);
                        }} className="border border-white py-2 px-4 rounded-[12px] w-[200px] sm:w-full mx-auto transition-all duration-1000">
                        تسجيل جديد
                    </button>
                </div>

                <form onSubmit={formik.handleSubmit} className={`flex-1 mt-50 sm:mt-0 py-20 px-8 flex flex-col justify-center w-full sm:max-w-[60%] md:max-w-[70%] ml-auto text-center transition-all duration-1000 ease-in-out ${isActive ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}`}>
                    <input
                        value={formik.values.nationalId}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                        id='الرقم القومي'
                        name='nationalId'
                        placeholder="الرقم القومي"
                        className="mb-2 p-4 rounded-[12px] placeholder-[#000] bg-[#eff4f8] outline-none"
                    />
                    {formik.errors.nationalId && formik.touched.nationalId && <div class="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                        {formik.errors.nationalId}
                    </div>}
                    <div className="relative z-0">
                        <input
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type={isShowPassword ? "text" : "password"}
                            id='كلمة المرور'
                            name='password'
                            placeholder="كلمة المرور"
                            className="w-full mb-2 p-4 rounded-[12px] placeholder-[#000] bg-[#eff4f8] outline-none"
                        />
                        <span className="absolute left-5 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => setIsShowPassword(!isShowPassword)}><i className={`fa-solid text-gray-500 ${isShowPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i></span>
                    </div>
                    <div className="text-right p-2 mb-2 text-sm text-[#377DAC] rounded-lg pt-0" role="alert"> يجب أن تحتوي كلمة المرور على 8-15 حرفًا تشمل حرفًا كبيرًا وصغيرًا ورقمًا ورمزًا خاصًا</div>
                    {formik.errors.password && formik.touched.password && <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                        {formik.errors.password}
                    </div>}
                    {isLoading ? <button type='button' className=" text-center cursor-pointer bg-[#377DAC] text-white py-2 rounded mb-4 mt-2 ">
                        <i className='fas fa-spinner fa-spin'></i></button>
                        : <button type='submit' className=" text-center cursor-pointer bg-[#377DAC] text-white py-2 rounded mb-4 mt-2">تسجيل</button>}


                    <NavLink to={"/forgetPassword"} className="cursor-pointer text-sm text-[#377dac] text-center">
                        نسيت كلمة المرور؟
                    </NavLink>

                </form>
            </div>
        </motion.div>
        {welcomLoader && <WelcomeLoader />}
    </>
}
