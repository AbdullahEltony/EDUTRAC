import React, { useContext } from 'react'
import style from './Home.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserToken } from '../../Context/TokenContext';

export default function Home() {
    let navigate = useNavigate();
    
    let { userToken, setUserToken } = useContext(UserToken);
    function logOut() {
        localStorage.removeItem('token');
        setUserToken(null)
        navigate('/')
    }


    return <>
        <div className='w-full flex flex-row'>
            <div className="w-1/5 bg-[#d9e7f1] p-4 h-screen flex flex-col justify-between fixed">
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold text-[#6CA6CD] mb-4 text-center">EDU TRACK</h2>
                    <NavLink to={'/home'} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })} className="p-3 bg-[#eff4f8] rounded-[20px]">
                        <div className='flex items-center gap-2.5'>
                            <i className="fa-solid fa-house text-[#222] p-2 rounded-[12px]"></i>
                            <p className='mb-0 text-[#14142b] font-[Font Family]'>الرئيسية</p>
                        </div>
                    </NavLink>
                    <NavLink to={'/updateCourses'} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })} className="p-3 rounded-[20px]">
                        <div className='flex items-center gap-2.5'>
                            <i className="fa-regular fa-clipboard text-[#222] p-2 rounded-[12px] bg-[#eff4f8]"></i>
                            <p className='mb-0 text-[#14142b] font-[Font Family]'>المقررات الدراسية</p>
                        </div>
                    </NavLink>
                    <NavLink to={'/finalCourses'} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })} className="p-3 rounded-[20px]">
                        <div className='flex items-center gap-2.5'>
                            <i className="fa-regular fa-clipboard text-[#222] p-2 rounded-[12px] bg-[#eff4f8]"></i>
                            <p className='mb-0 text-[#14142b] font-[Font Family]'>المقررات النهائية</p>
                        </div>
                    </NavLink>
                    <NavLink to={'/aboutus'} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })} className="p-3 rounded-[20px]">
                        <div className='flex items-center gap-2.5'>
                            <i className="fa-solid fa-users text-[#222] p-2 rounded-[12px] bg-[#eff4f8]"></i>
                            <p className='mb-0 text-[#14142b] font-[Font Family]'>نبذة عنا</p>
                        </div>
                    </NavLink>
                    <NavLink to={'/profile'} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })} className="p-3 rounded-[20px]">
                        <div className='flex items-center gap-2.5'>
                            <i className="fa-solid fa-user text-[#222] p-2 rounded-[12px] bg-[#eff4f8]"></i>
                            <p className='mb-0 text-[#14142b] font-[Font Family]'>الملف الشخصي</p>
                        </div>
                    </NavLink>
                    <NavLink onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })} to={'/chatBot'} className="p-3  rounded-[20px]">
                        <div className='flex items-center gap-2.5'>
                            <i className="fa-solid fa-robot text-[#222] p-2 rounded-[12px] bg-[#eff4f8]"></i>
                            <p className='mb-0 text-[#14142b] font-[Font Family]'>ChatBot للتواصل</p>
                        </div>
                    </NavLink>
                </div>
                <div className="mt-4">
                    <NavLink onClick={()=> logOut()} className="p-3 rounded-[20px]">
                        <div className='flex items-center gap-2.5'>
                            <i className="fa-solid fa-arrow-right-to-bracket text-[#222] p-2 rounded-[12px] bg-[#eff4f8]"></i>
                            <p className='mb-0 text-[#14142b] font-[Font Family]'>تسجيل الخروج</p>
                        </div>
                    </NavLink>
                </div>
            </div>

            <div className='w-4/5 bg-[#fdfdfd] mr-[20%] mt-[15%]'>
                <div className='p-10 m-10'>
                    <div className='text-center mb-10'>
                        <h1 className='text-5xl font-[Raleway] font-bold'>
                            <span className='text-[#6CA6CD]'>لماذا</span> <span className='text-black'>EDU TRACK؟</span>
                        </h1>
                        <p 
                            className='font-[Open Sans] font-normal text-base text-[#383838] pt-3 text-center'>
                            "Technical Skills. Personality Development. Confidence."
                        </p>
                    </div>

                    <div className='grid max-w-6xl mx-auto grid-cols-1 gap-10  sm:grid-cols-2 lg:grid-cols-3'>
                        <div className="group relative bg-white p-6 rounded-xl text-center">
                            <div className='text-5xl text-[#377DAC]'>
                                <i className="fa-solid fa-pen-to-square"></i>
                            </div>
                            <div className='mt-1'>
                                <h2 className='font-[Almarai] text-[#377DAC] font-bold leading-9'>متابعة متطلبات التخرج</h2>
                                <p className="mt-4 text-sm font-normal font-[Almarai] text-[#262338] opacity-[70%]">
                                    1. تتبع تقدمك في استكمال الساعات المعتمدة، والحد الأدنى للسنوات، وسداد المصروفات.
                                </p>
                            </div>
                        </div>
                        <div className="group relative bg-white p-6 rounded-xl text-center">
                            <div className='text-5xl text-[#377DAC]'>
                                <i className="fa-solid fa-user "></i>
                            </div>
                            <div className='mt-1'>
                                <h2 className='font-[Almarai] text-[#377DAC] font-bold leading-9'>حساب الـ GPA تلقائيًا</h2>
                                <p className="mt-4 text-sm font-normal font-[Almarai] text-[#262338] opacity-[70%]">
                                    1. احصل على معدلك التراكمي فور إدخال الدرجات مع نصائح لتحسينه.
                                </p>
                            </div>
                        </div>
                        <div className="group relative bg-white p-6 rounded-xl text-center">
                            <div className='text-5xl text-[#377DAC]'>
                                <i className="fa-solid fa-briefcase "></i>
                            </div>
                            <div className='mt-1'>
                                <h2 className='font-[Almarai] text-[#377DAC] font-bold leading-9'>مقررات دراسية ذكية</h2>
                                <p className="mt-4 text-sm font-normal font-[Almarai] text-[#262338] opacity-[70%]">
                                    تصفح المواد حسب المستوى، وتعرف على المتطلبات السابقة، واحصل على مقترحات مخصصة.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mb-10 mr-3 ml-6'>
                    <div className='bg-[#EFF4F8] py-10 mb-8'>
                        <h2 className='font-bold text-3xl text-center font-[Almarai] px-2'>شاهد الفيديو التعريفي </h2>
                        <div className="flex justify-center px-6 pt-6">
                            <div className="relative w-full" style={{ maxWidth: '800px', aspectRatio: '16/9' }}>
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src="https://www.youtube.com/embed/B7DZImMXm4k"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>

                        {/* <div className="bg-black text-white p-4 flex items-center justify-between m-auto w-[76%] gap-4  shadow-md">
                            <span className="text-sm mr-4">3:45 / 15:00</span>

                            <div className="flex items-center gap-2 ml-6">
                                <div className="w-28 h-1 bg-gray-600 relative rounded overflow-hidden">
                                <div className="absolute left-0 top-0 h-full w-2/3 bg-red-600"></div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="white" viewBox="0 0 24 24"><path d="M5 9v6h4l5 5V4l-5 5H5z"/></svg>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transform scale-x-[-1]" fill="white" viewBox="0 0 24 24">
                                        <path d="M13 5v14l7-7-7-7z" />
                                    </svg>
                                </button>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="white" viewBox="0 0 24 24"><path d="M13 5v14l7-7-7-7z"/></svg>
                                </button>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="white" viewBox="0 0 24 24"><path d="M6 19V5l10 7-10 7z"/></svg>
                                </button>
                                
                                
                            </div>

                            
                        </div> */}
                    </div>
                    <div className='bg-[#EFF4F8] '>
                        <div className='flex justify-end  gap-2 py-3'>
                            <div className='w-[45%]'>
                                <h3 className="text-5xl font-[Almarai] font-bold mb-4">متطلبات التخرج:</h3>
                                <div className="pr-3">
                                    <span className='text-[#4E4B66] font-bold font-[Almarai] size-[18px]'>1- عدم تجاوز الحد الادني والحد الاقصي للسنوات الدراسية طبقا لقانون تنظيم الجامعات ولائحته التنفيذية .</span><br />
                                    <span className='text-[#4E4B66] font-bold font-[Almarai] size-[18px]'>2- استكمال جميع متطلبات الساعات المعتمدة المطلوبة في البرنامج الدراسي سواء الاجبارية او الاختيارية طبقا للخطة الدراسية للكلية</span><br/>
                                    <span className='text-[#4E4B66] font-bold font-[Almarai] size-[18px]'>3- الحصول علي معدل تراكمي لا يقل عن ( 1.00 )</span><br/>
                                    <span className='text-[#4E4B66] font-bold font-[Almarai] size-[18px]'>4- سداد كافة المصروفات الدراسية</span><br/>
                                    <span className='text-[#4E4B66] font-bold font-[Almarai] size-[18px]'>5- ضرورة اجتياز برنامج التربية العسكرية للطلاب الذكور المصريين فقط علي ان يكون تقديره مرضي ( S).</span><br/>
                                </div>
                            </div>
                            <div className='w-[50%]'>
                                <img src="../src/assets/graduation.jpeg" alt="" className='w-full ' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
}

