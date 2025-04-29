import React, { useContext, useState } from 'react'
import { motion } from "framer-motion";
import style from './Login.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { ActiveContext } from '../../Context/ActiveContext';
import { useFormik } from 'formik';
import axios from 'axios';
import { UserToken } from '../../Context/TokenContext';

export default function Login() {

    const [isLoading, setIsLoading] = useState(false)
    const [apiError, setApiError] = useState(null)

    const navigate = useNavigate();

    let { isActive, setIsActive } = useContext(ActiveContext);
    let { userToken, setUserToken } = useContext(UserToken)

    async function login(values) {
        try {
            setIsLoading(true);
            const response = await axios.post(`http://edutrack.runasp.net/api/Auth/login`, values);
            setIsLoading(false);
            localStorage.setItem('token', response.data.token);
            setUserToken(response.data.token);
            navigate('/home');
        } catch (error) {
            setApiError(error.response.data.errors[1]);
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
            ,  onSubmit: login
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
            <div className={`absolute flex flex-row-reverse bg-white rounded-tr-[3rem] rounded-br-[3rem] overflow-hidden shadow-lg w-[100%] max-w-4xl `}>
                <div className={`w-[30%] absolute top-0 left-[0%] bottom-0 rounded-tr-[2.5rem] rounded-br-[2.5rem] bg-[#6CA6CD] z-0 transition-all duration-[3000ms] ease-in-out ${isActive ? "left-[100%] w-[400%]" : ""}`}></div>

                <div className={`text-white p-8 flex flex-col justify-center text-center absolute top-0 left-10 bottom-0 transition-all duration-10000 ease-in-out ${
                    isActive ? "left-[-100%]" : "left-0"}`}>
                    <h2 className="text-xl font-bold mb-2">أهلاً ومرحبًا بك</h2>
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
                        }} className="border border-white py-2 px-6 rounded-[12px] transition-all duration-1000">
                        تسجيل جديد
                    </button>
                </div>
                
                <form onSubmit={formik.handleSubmit} className={`ml-[29%] flex-1 py-20 px-8 flex flex-col justify-center w-[50%] text-center transition-all duration-1000 ease-in-out ${isActive ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}`}>
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
                    <input
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="password"
                        id='كلمة المرور'
                        name='password'
                        placeholder="كلمة المرور"
                        className="mt-4 mb-2 p-4 rounded-[12px] placeholder-[#000] bg-[#eff4f8] outline-none"
                    />
                    {formik.errors.password && formik.touched.password && <div class="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
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
    </>
}
