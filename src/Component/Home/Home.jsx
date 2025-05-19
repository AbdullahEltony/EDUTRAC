import React from 'react'
import './Home.css'


import { NavMenu } from '../NavMenu';
import ProgressBar from '../shared/ProgressBar';
import Video from '../shared/Video';
import { useNavigate } from 'react-router-dom';
function Home() {

const navigate = useNavigate()
    return <>
        <div className='w-full flex flex-row'>
            <NavMenu />

            <div className={`bg-[#fdfdfd]`}>
                {/*  شريط التقدم  */}
                <ProgressBar />

                <div className='p-5' >
                    <div className='text-center mb-6'>
                        <h1 className='text-2xl md:text-5xl font-[Raleway] font-bold'>
                            <span className='text-[#6CA6CD]'>لماذا</span><br /> <span className='text-black'>EDU TRACK</span>
                        </h1>
                    </div>

                </div>

                <div className='mx-auto'>
                    {/* video */}
                    <Video />

                    <div className='bg-[#EFF4F8] py-12 mx-auto mt-6'>
                        <div className='flex flex-col  md:flex-row justify-end  gap-5 p-3 sm:p-5'>
                            <div className='min-w-1/2'>
                                <h3 className="text-2xl lg:text-4xl font-[Almarai] font-bold mb-4">متطلبات التخرج:</h3>
                                <ul className="flex flex-col gap-4 list ps-6">
                                    <li className='text-[#4E4B66] font-bold font-[Almarai] text-[14px] md:text-[18px]'>عدم تجاوز الحد الادني والحد الاقصي للسنوات الدراسية طبقا لقانون تنظيم الجامعات ولائحته التنفيذية .</li>
                                    <li className='text-[#4E4B66] font-bold font-[Almarai] text-[14px] md:text-[18px]'>استكمال جميع متطلبات الساعات المعتمدة المطلوبة في البرنامج الدراسي سواء الاجبارية او الاختيارية طبقا للخطة الدراسية للكلية</li>
                                    <li className='text-[#4E4B66] font-bold font-[Almarai] text-[14px] md:text-[18px]'>الحصول علي معدل تراكمي لا يقل عن ( 1.00 )</li>
                                    <li className='text-[#4E4B66] font-bold font-[Almarai] text-[14px] md:text-[18px]'>ضرورة اجتياز برنامج التربية العسكرية للطلاب الذكور المصريين فقط علي ان يكون تقديره مرضي ( S).</li>
                                    <li className='text-[#4E4B66] font-bold font-[Almarai] text-[14px] md:text-[18px]'>في حالة تعثر 3 فصول دراسية متتالية سيتم فصلك من الكلية </li>
                                    <button
                                        onClick={() => { navigate('/rules'); window.scrollTo(0, 0); }}
                                        className="text-[#6CA6CD] cursor-pointer font-bold font-[Almarai] text-[14px] md:text-[18px] flex items-center gap-1 group"
                                    >
                                        اقرأ المزيد عن متطلبات التخرج
                                        <i className="fas fa-arrow-left animate-left-arrow text-sm sm:text-xl mr-4"></i>
                                    </button>
                                </ul>
                            </div>
                            <div className='-order-1 md:order-1'>
                                <img src="./graduation.jpeg" alt="" className='w-full ' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
}


export default React.memo(Home);