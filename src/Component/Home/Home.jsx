import React from 'react'
import './Home.css'


import { NavMenu } from '../NavMenu';
import ProgressBar from '../shared/ProgressBar';
function Home() {


    return <>
        <div className='w-full flex flex-row'>
            <NavMenu />

            <div className={`bg-[#fdfdfd]`}>
                {/*  شريط التقدم  */}
                <ProgressBar />

                <div className='p-5 md:p-10 !pt-5' >
                    <div className='text-center mb-6'>
                        <h1 className='text-2xl md:text-5xl font-[Raleway] font-bold'>
                            <span className='text-[#6CA6CD]'>لماذا</span><br/> <span className='text-black'>EDU TRACK</span>
                        </h1>
                    </div>

                    <div className='grid max-w-6xl mx-auto grid-cols-1 gap-5 sm:grid-cols-2'>
                        <div className="group relative bg-white py-4 sm:py-6 px-4 sm:px-12 rounded-xl text-center shadow-xs">
                            <div className='text-2xl md:text-5xl text-[#377DAC]'>
                                <i className="fa-solid fa-pen-to-square"></i>
                            </div>
                            <div className='mt-1'>
                                <h2 className='font-[Almarai] text-[#377DAC] font-bold leading-9'>متابعة متطلبات التخرج</h2>
                                <p className="mt-4 text-sm font-normal font-[Almarai] text-[#262338] opacity-[70%]">
                                     تتبع تقدمك في استكمال الساعات المعتمدة، والحد الأدنى للسنوات، وسداد المصروفات.
                                </p>
                            </div>
                        </div>
                        <div className="group relative bg-white py-4 sm:py-6 px-4 sm:px-12 rounded-xl text-center shadow-xs">
                            <div className='text-2xl md:text-5xl text-[#377DAC]'>
                                <i className="fa-solid fa-user "></i>
                            </div>
                            <div className='mt-1'>
                                <h2 className='font-[Almarai] text-[#377DAC] font-bold leading-9'>حساب الـ GPA تلقائيًا</h2>
                                <p className="mt-4 text-sm font-normal font-[Almarai] text-[#262338] opacity-[70%]">
                                    احصل على معدلك التراكمي فور إدخال الدرجات مع نصائح لتحسينه.
                                </p>
                            </div>
                        </div>
                        {/* <div className="group relative bg-white p-6 rounded-xl text-center">
                            <div className='text-2xl md:text-5xl text-[#377DAC]'>
                                <i className="fa-solid fa-briefcase "></i>
                            </div>
                            <div className='mt-1'>
                                <h2 className='font-[Almarai] text-[#377DAC] font-bold leading-9'>مقررات دراسية ذكية</h2>
                                <p className="mt-4 text-sm font-normal font-[Almarai] text-[#262338] opacity-[70%]">
                                    تصفح المواد حسب المستوى، وتعرف على المتطلبات السابقة، واحصل على مقترحات مخصصة.
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className='mx-auto'>
                    {/* video */}
                    <div className='bg-[#EFF4F8] py-6 sm:py-12  mx-auto'>
                        <h2 className='font-bold text-xl md:text-3xl text-center font-[Almarai] px-2'>شاهد الفيديو التعريفي </h2>
                        <div className="flex justify-center px-0 sm:px-6 pt-6">
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

                    </div>

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