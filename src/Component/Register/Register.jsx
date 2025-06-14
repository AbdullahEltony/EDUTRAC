/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'
import { ActiveContext } from '../../Context/ActiveContext'
import { useContext, useState } from 'react'
import { baseURL } from "../../constants";


export default function Register() {

    const [apiError, setApiError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isShowPassword, setIsShowPassword] = useState(false)

    const navigate = useNavigate();

    let { isActive, setIsActive } = useContext(ActiveContext);

    async function register(values) {
        try {
            setIsLoading(true);
            const response = await axios.post(`${baseURL}/api/Auth/sign-up`, values);
            if (response.status !== 200) throw new Error(response.statusText);
            navigate('/');
        } catch (error) {
            setApiError(error.response.data.errors[1]);
        } finally {
            setIsLoading(false);
        }
    }

    function validateForm(values) {
        let errors = {};
        if (!values.fullName) {
            errors.fullName = 'الإسم مطلوب'
        }
        else if (!/^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF ]{10,50}$/.test(values.fullName)) {
            errors.fullName = '  الإسم غير صحيح أدخل الإسم باللغة العربية لا يقل عن 10 حروف ولا يتجاوز 50 حرفا'
        }
        if (!values.email) {
            errors.email = 'البريد الألكتروني مطلوب'
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'البريد الألكتروني غير صحيح'
        }

        if (!values.nationalId) {
            errors.nationalId = 'الرقم القومي مطلوب'
        }
        else if (!/^\d{14}$/.test(values.nationalId)) {
            errors.nationalId = ' الرقم القومي غير صحيح أدخل الرقم القومي لا يقل ولا يتجاوز 14 رقم'
        }

        if (!values.level) {
            errors.level = 'الفرقة مطلوبة'
        }
        else if (!/^[1-4]$/.test(values.level)) {
            errors.level = ' الفرقة غير صحيحة أدخل الفرقة لا تقل عن الفرقة 1 ولا تتجاوز الفرقة 4 '
        }

        if (!values.password) {
            errors.password = 'كلمة المرور مطلوبة'
        }
        else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,15}$/.test(values.password)) {
            errors.password = 'كلمة المرور غير صحيحة أدخل كلمة المرور تحتوي على حروف كبيرة وصغيرة وحروف خاصة وأرقام'
        }

        return errors
    }

    let formik = useFormik({
        initialValues: {
            nationalId: '',
            password: '',
            fullName: '',
            email: '',
            level: null,
        }, validate: validateForm
        , onSubmit: register
    })

    return <>
        <motion.div
            className="min-h-screen overflow-auto fixed w-full bg-[#EFF4F8] flex items-center justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}>
            {apiError && <div className="absolute top-0 z-10 text-center p-3 mt-2 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                {apiError}
            </div>}
            <div className={`absolute mt-[76px] sm:mt-0 flex flex-row-reverse bg-white rounded-tr-[0px] sm:rounded-tr-[2.5rem] rounded-bl-[2.5rem] sm:rounded-bl-[0px] rounded-br-[2.5rem] overflow-hidden shadow-lg w-[93%] max-w-6xl `}>
                <form onSubmit={formik.handleSubmit} className={`mr-auto mt-58 sm:mt-0 flex-1 py-10 px-4 md:px-8 flex flex-col justify-center w-full sm:max-w-[60%] md:max-w-[65%] lg:max-w-[70%] text-center transition-all duration-1000 ease-in-out ${isActive ? "opacity-0 translate-x-100" : "opacity-100 translate-x-0"}`}>
                    <input
                        value={formik.values.fullName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                        id='fullName'
                        name='fullName'
                        placeholder="الإسم باللغة العربية"
                        className="mb-2 p-4 rounded-[12px] placeholder-[#000] bg-[#eff4f8] outline-none"
                    />
                    {formik.errors.fullName && formik.touched.fullName && <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                        {formik.errors.fullName}
                    </div>}
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
                    {formik.errors.nationalId && formik.touched.nationalId && <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                        {formik.errors.nationalId}
                    </div>}
                    <input
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                        id='البريد الإلكتروني'
                        name='email'
                        placeholder=" البريد الإلكتروني"
                        className="mb-2 p-4 rounded-[12px] placeholder-[#000] bg-[#eff4f8] outline-none"
                    />
                    {formik.errors.email && formik.touched.email && <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                        {formik.errors.email}
                    </div>}
                    <input
                        value={formik.values.level}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="number"
                        id='level'
                        name='level'
                        placeholder="الفرقة"
                        className="mb-2 p-4 rounded-[12px] placeholder-[#000] bg-[#eff4f8] outline-none"
                    />
                    {formik.errors.level && formik.touched.level && <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                        {formik.errors.level}
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
                    <div className="text-right p-2 mb-4 text-sm text-[#377DAC] rounded-lg pt-0" role="alert"> يجب أن تحتوي كلمة المرور على 8-15 حرفًا تشمل حرفًا كبيرًا وصغيرًا ورقمًا ورمزًا خاصًا</div>
                    {formik.errors.password && formik.touched.password && <div className="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                        {formik.errors.password}
                    </div>}
                    {isLoading ? <button type='button' className=" text-center cursor-pointer bg-[#377DAC] text-white py-2 rounded  mt-2 ">
                        <i className='fas fa-spinner fa-spin'></i></button>
                        : <button type='submit' className=" text-center cursor-pointer bg-[#377DAC] text-white py-2 rounded mt-2">تسجيل</button>}
                </form>

                <div className={`w-full h-64 sm:h-full sm:w-[40%] md:w-[35%] lg:max-w-[30%] absolute top-0 right-[0%] bottom-0 rounded-b-[2.5rem] sm:rounded-b-[0px] rounded-r-[0px] sm:!rounded-r-[2.5rem] bg-[#6CA6CD] z-0 transition-all duration-[2000ms] ease-in-out ${isActive ? "right-[100%] w-[400%]" : ""}`}></div>

                <div className={`w-full h-64 sm:h-full sm:w-[40%] md:w-[35%] lg:max-w-[30%] text-white p-6 lg:p-8 flex flex-col justify-center text-center absolute top-0 bottom-0 transition-all duration-2000 ease-in-out ${isActive ? "right-[-100%]" : "right-0"}`}>
                    <h2 className="text-xl font-bold mb-2"> أهلًا بك في Edu Track 👋</h2>
                    <h2 className="text-xl font-bold mb-2"> منصتك لمتابعة أدائك وتقدمك الأكاديمي بسهولة ويُسر.</h2>
                    <p className="text-sm mb-4 mt-4">هل لديك حساب معنا من قبل؟</p>
                    <button
                        onClick={() => {
                            setIsActive(true);
                            setTimeout(() => {
                                setIsActive(false);
                            }, 2950);
                            setTimeout(() => {
                                navigate('/');
                            }, 3000);
                        }} className="border border-white py-2 px-4 rounded-[12px] w-[200px] sm:w-full mx-auto transition-all duration-1000">
                        تسجيل الدخول
                    </button>
                </div>


            </div>
        </motion.div>
    </>


}
