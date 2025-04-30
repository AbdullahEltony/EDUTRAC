import React from 'react'
import style from './AboutUs.module.css'
import { NavLink } from 'react-router-dom'
import { UserToken } from '../../Context/TokenContext';
import { NavLinks } from '../../constants';
import {NavMenu} from '../NavMenu';

export default function AboutUs() {

    return <>
        <div className='w-full flex flex-row'>
            <NavMenu />
            <div className='w-[84%] md:w-[75%] lg:w-[82%] xl:w-[84%] mr-auto'>
                <div className=" pr-3 pl-6 space-y-8 my-8">
                    {/* قسم عن EDU TRACK */}
                    <div className="bg-[#d9e7f1] flex flex-col md:flex-row gap-2 items-center justify-start">
                        {/* النص */}
                        <div className="md:w-1/2 text-right p-4">
                            <h2 className="text-5xl font-bold text-[#262338] leading-[100%] mb-7">عن EDU TRACK</h2>
                            <p className="text-[16px] font-[Almarai] font-bold text-[#262338] leading-[36px]">
                                هي منصة تعليمية ذكية خصصت خصيصًا لطلاب قسم EDU TRACK تكنولوجيا التعليم بكلية التربية النوعية، بهدف تبسيط إدارة المسيرة الدراسية وضمان تحقيق التخرج في الوقت المحدد دون تعثر.تُقدِّم المنصة :أدوات متكاملة تساعد الطلاب على
                            </p>
                            <ul className="list-disc pr-6 text-[16px] font-[Almarai] font-bold text-[#262338] leading-[36px]">
                                <li>متابعة متطلبات التخرج: مثل عدد الساعات المعتمدة، والحد الأدنى للسنوات الدراسية، وسداد المصروفات.</li>
                                <li>تنظيم المقررات: تقسيم المواد حسب المستويات (الأول إلى الرابع) والترمات (صيفي/خريفي)، مع توضيح طبيعة كل مقرر (إجباري، اختياري، متطلب جامعة).</li>
                                <li>حساب المعدل التراكمي (GPA): تلقائيًا بناءً على الدرجات المدخلة، مع تنبيهات عند انخفاضه عن 0.7 لتجنب التسجيل الزائد.</li>
                            </ul>
                        </div>


                        {/* الصورة */}
                        <div className="md:w-1/2">
                            <img src="../src/assets/AboutUs.png" alt="about" className="rounded-md w-full lg:h-[500px] md:h-auto" />
                        </div>


                    </div>

                    {/* قسم رؤيتنا */}
                    <div className={`${style.AboutUsImage} relative  rounded-md overflow-hidden  flex items-center justify-center text-center `}>
                        <div className={` ${style.AboutBackGround} absolute inset-0`}></div>
                        <div className={`p-6 rounded-md absolute`}>
                            <h3 className="text-6xl leading-9 font-bold text-[#6CA6CD] mb-6">رؤيتنا</h3>
                            <p className="text-4xl leading-10 tracking-[2%] text-[#FCFCFC] w-[75%] m-auto">
                                "تمكين الطلاب من إدارة مسيرتهم الأكاديمية بذكاء لتحقيق التميز والإبداع في مجال تكنولوجيا التعليم عبر أدوات مبتكرة وتخطيط فعّال."
                            </p>
                        </div>
                    </div>

                    <div className="container mx-auto px-4 text-center w-[60%]">
                        {/* العنوان الرئيسي */}
                        <h2 className="text-3xl md:text-5xl font-bold  text-[#262338] mb-12 font-[Raleway]">فريقنا من المطورين الخبراء</h2>
                        <p className='font-[Raleway] text-[17px] '>في أكاديمية EDU TRACK، نُدرِّبك على يد مُبرمجين محترفين شاركوا في بناء أنظمة عالمية ويفهمون تحديات السوق التقني</p>
                    </div>
                </div>
                <div className='pr-3 pl-6 mb-14 mt-10 '>
                    <div className='bg-[#EFF4F8] py-6 px-10'>
                        <div className="grid grid-cols-4 gap-x-4 gap-y-6 py-6 px-10 pb-14">
                            <div className='col-span-4 md:col-span-1'>
                                <img src="../src/assets/about4.png" alt='' className="w-full object-cover border-0" />
                            </div>
                            <div className='col-span-4 md:col-span-1'>
                                <img src="../src/assets/about3.png" alt='' className="w-full object-cover border-0" />
                            </div>
                            <div className='col-span-4 md:col-span-1'>
                                <img src="../src/assets/about2.png" alt='' className="w-full object-cover border-0" />
                            </div>
                            <div className='col-span-4 md:col-span-1'>
                                <img src="../src/assets/about1.png" alt='' className="w-full object-cover border-0" />
                            </div>
                            <div className='col-span-4 md:col-span-1'>
                                <img src="../src/assets/about8.png" alt='' className="w-full object-cover border-0" />
                            </div>
                            <div className='col-span-4 md:col-span-1'>
                                <img src="../src/assets/about7.png" alt='' className="w-full object-cover border-0" />
                            </div>
                            <div className='col-span-4 md:col-span-1'>
                                <img src="../src/assets/about6.png" alt='' className="w-full object-cover border-0" />
                            </div>
                            <div className='col-span-4 md:col-span-1'>
                                <img src="../src/assets/about5.png" alt='' className="w-full object-cover border-0" />
                            </div>
                            <div className='col-span-4 md:col-span-1'>
                                <img src="../src/assets/about12.png" alt='' className="w-full object-cover border-0" />
                            </div>
                            <div className='col-span-4 md:col-span-1'>
                                <img src="../src/assets/about11.png" alt='' className="w-full object-cover border-0" />
                            </div>
                            <div className='col-span-4 md:col-span-1'>
                                <img src="../src/assets/about10.png" alt='' className="w-full object-cover border-0" />
                            </div>
                            <div className='col-span-4 md:col-span-1'>
                                <img src="../src/assets/about9.png" alt='' className="w-full object-cover border-0" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-16 px-5">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-center text-[#262338] mb-12">آراء عملائنا</h2>
                        <p className="text-lg text-[#262338] text-center mb-16 max-w-[46rem] mx-auto">في أكاديمية EDU TRACK، نُركّز على يد خبراء محترفين مشاركين في بناء أنظمة عالمية وخبراء تحديات السوق التقني.</p>

                        {/* آراء العملاء */}
                        <div className="grid grid-cols-3 justify-start gap-x-2.5 ">
                            <div className='p-6 pb-2 col-span-3 md:col-span-1 bg-[#EFF4F8] shadow-lg border-[3px] border-[#6CA6CD]'>
                                <p className="text-black text-right mb-8 font-normal font-[Almarai]">
                                    منصة Edu track ليست مجرد منصة للإرشاد التعليمي،
                                    بل هي صرح للإبداع والتميز.
                                </p>
                                <div className="flex items-center gap-4 ">
                                    <img src="../src/assets/client.png" alt="محمد عمران" className="w-12 h-12 rounded-full object-cover" />
                                    <div className="text-right">
                                        <h4 className="font-semibold text-black mb-2">محمد عمران</h4>
                                        <p className="text-sm text-[#00000094]">خبير إرشاد تعليمي</p>
                                    </div>
                                </div>
                            </div>
                            <div className='p-6 pb-2 col-span-3 md:col-span-1 bg-[#6CA6CD] rounded-[28px] '>
                                <p className="text-black text-right mb-8 font-normal font-[Almarai]">
                                    منصة Edu track ليست مجرد منصة للإرشاد التعليمي،
                                    بل هي صرح للإبداع والتميز.
                                </p>
                                <div className="flex items-center gap-4 ">
                                    <img src="../src/assets/client.png" alt="محمد عمران" className="w-12 h-12 rounded-full object-cover" />
                                    <div className="text-right">
                                        <h4 className="font-semibold text-black mb-2">محمد عمران</h4>
                                        <p className="text-sm text-[#00000094]">خبير إرشاد تعليمي</p>
                                    </div>
                                </div>
                            </div>
                            <div className='p-6 pb-2 col-span-3 md:col-span-1 bg-[#EFF4F8] shadow-lg border-[3px] border-[#6CA6CD]'>
                                <p className="text-black text-right mb-8 font-normal font-[Almarai]">
                                    منصة Edu track ليست مجرد منصة للإرشاد التعليمي،
                                    بل هي صرح للإبداع والتميز.
                                </p>
                                <div className="flex items-center gap-4 ">
                                    <img src="../src/assets/client.png" alt="محمد عمران" className="w-12 h-12 rounded-full object-cover" />
                                    <div className="text-right">
                                        <h4 className="font-semibold text-black mb-2">محمد عمران</h4>
                                        <p className="text-sm text-[#00000094]">خبير إرشاد تعليمي</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>


}
