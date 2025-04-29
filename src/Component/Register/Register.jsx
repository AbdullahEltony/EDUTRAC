
import style from './Register.module.css'
import { motion } from "framer-motion";
import { NavLink, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'
import { ActiveContext } from '../../Context/ActiveContext'
import { useContext, useState} from 'react'

export default function Register() {

    const [apiError, setApiError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate();

    let {isActive , setIsActive} = useContext(ActiveContext);

    async function register(values) {
        try {
            setIsLoading(true);
            const response = await axios.post("http://edutrack.runasp.net/api/Auth/sign-up", values);
            setIsLoading(false);
            navigate('/');
        } catch (error) {
            setApiError(error.response.data.errors[1]);
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
            level: null,
        }, validate: validateForm
        ,  onSubmit: register
    })

    return <>
        <motion.div
            className="min-h-screen bg-[#EFF4F8] flex items-center justify-center"
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: 1, x: 0 }}  
            transition={{ duration: 1 }}>
            {apiError && <div class="absolute top-0 z-10 text-center p-3 mt-2 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                {apiError}
            </div>}
            <div className={`absolute flex flex-row-reverse bg-white rounded-tl-[3rem]  rounded-bl-[3rem] overflow-hidden shadow-lg w-[90%] max-w-4xl `}>
                <form onSubmit={formik.handleSubmit}  className={`mr-[29%] flex-1 py-10 px-8 flex flex-col justify-center w-[50%] text-center transition-all duration-1000 ease-in-out ${ isActive ? "opacity-0 translate-x-100" : "opacity-100 translate-x-0"}`}>
                    <input
                        value={formik.values.fullName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                        id='fullName'
                        name='fullName'
                        placeholder="الإسم"
                        className="mb-2 p-4 rounded-[12px] placeholder-[#000] bg-[#eff4f8] outline-none"
                    />
                    {formik.errors.fullName && formik.touched.fullName && <div class="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
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
                    {formik.errors.nationalId && formik.touched.nationalId && <div class="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                        {formik.errors.nationalId}
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
                    {formik.errors.level && formik.touched.level && <div class="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                        {formik.errors.level}
                    </div>}
                    <input
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="password"
                        id='كلمة المرور'
                        name='password'
                        placeholder="كلمة المرور"
                        className="mb-2 p-4 rounded-[12px] placeholder-[#000] bg-[#eff4f8] outline-none"
                    />
                    {formik.errors.password && formik.touched.password && <div class="p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
                        {formik.errors.password}
                    </div>}
                    {isLoading ? <button type='button' className=" text-center cursor-pointer bg-[#377DAC] text-white py-2 rounded  mt-2 ">
                        <i className='fas fa-spinner fa-spin'></i></button>
                        : <button type='submit' className=" text-center cursor-pointer bg-[#377DAC] text-white py-2 rounded mt-2">تسجيل</button>}
                </form>

                <div className={`w-[30%] absolute top-0 right-[0%] bottom-0 rounded-tl-[2.5rem] rounded-bl-[2.5rem] bg-[#6CA6CD] z-0 transition-all duration-[3000ms] ease-in-out ${isActive ? "right-[100%] w-[400%]" : ""}`}></div>

                <div className={`text-white p-8 flex flex-col justify-center text-center absolute top-0 bottom-0 transition-all duration-10000 ease-in-out ${
                    isActive ? "right-[-100%]" : "right-0"}`}>
                    <h2 className="text-xl font-bold mb-2">أهلاً ومرحبًا بك</h2>
                    <p className="text-sm mb-4">هل لديك حساب معنا من قبل؟</p>
                    <button 
                        onClick={() => {
                            setIsActive(true); 
                            setTimeout(() => {
                            setIsActive(false);
                            }, 2950); 
                            setTimeout(() => {
                                navigate('/');
                            }, 3000);
                        }} className="border border-white py-2 px-4 rounded-[12px] transition-all duration-1000">
                        تسجيل الدخول
                    </button>
                </div>

                
            </div>
        </motion.div>
    </>


}
