/* eslint-disable no-unused-vars */
import NavMenu from '../NavMenu';
import './AboutUs.css';
import ProgressBar from '../shared/ProgressBar';
import { Team } from '../../constants';
import { motion } from 'framer-motion';

const titleVariants = {
    hidden: { opacity: 0, y: 30, letterSpacing: "0em" },
    visible: {
        opacity: 1,
        y: 0,
        letterSpacing: "0.02em",
        transition: { duration: 0.9, ease: 'easeOut' },
    },
};

export default function AboutUs() {
    return (
        <>
            <div className='w-full flex flex-row'>
                <NavMenu />
                <div className='w-full'>
                    <ProgressBar />
                    <div className="mx-auto">

                        {/* عن EDU TRACK */}
                        <motion.div
                            className="bg-[#d9e7f1] p-8 md:p-12 flex flex-col md:flex-row gap-6 justify-start"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <motion.div
                                className="pt-3 sm:pt-6 w-full lg:w-[60%]"
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                            >
                                <motion.h2
                                    className="text-2xl sm:text-2xl md:text-4xl font-bold text-[#262338] leading-[100%] mb-5"
                                    variants={titleVariants}
                                >
                                    عن EDU TRACK
                                </motion.h2>
                                <p className="text-[14px] sm:text-[16px] font-[Almarai] font-bold text-[#262338] leading-[36px]">

                                   <span className='font-bold'> EDU TRACK</span>  هو موقع ذكي صُمم خصيصاً لمساعدة طلاب قسم تكنولوجيا التعليم بكلية التربية النوعية في تنظيم حياتهم الدراسية بشكل أسهل وأكثر ترتيبًا
                                    الهدف الرئيسي من الموقع تسهيل التخطيط الأكاديمي والوصول للتخرج في الوقت المناسب.
                                </p>
                                <p>من خلال Edutrack يمكن للطالب ان :
                                </p>
                                <ul className="list-disc pr-6 text-[14px] sm:text-[16px] font-[Almarai] font-bold text-[#262338] leading-[36px]">
                                    <li>يتابع عدد الساعات التي اجتازها والساعات المتبقيه للتخرج.</li>
                                    <li>ينظم المقررات بناء علي الجدول في كل فصل دراسي.</li>
                                    <li>يتابع معدله التراكمي (GPA) أول بأول، يدرك صله المقررات ببعضها .</li>
                                </ul>
                            </motion.div>

                            <motion.div
                                className="w-full lg:w-[35%]"
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                            >
                                <motion.img
                                    src="./AboutUs.png"
                                    alt="about"
                                    className="rounded-md w-full lg:h-[300px] md:h-auto object-cover"
                                    animate={{
                                        scale: [1, 1.03, 1],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                            </motion.div>
                        </motion.div>

                        {/* رؤيتنا */}
                        <motion.div
                            className="AboutUsImage  h-[300px] md:h-[400px] mt-8 md:mt-12 relative rounded-md overflow-hidden flex items-center justify-center text-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                        >
                            <div className="AboutBackGround absolute inset-0" />
                            <motion.div
                                className="p-6 rounded-md absolute"
                                initial={{ y: -50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2 }}
                            >
                                <motion.h2
                                    className="text-2xl sm:text-4xl md:text-6xl font-bold text-[#6CA6CD] mb-6"
                                    variants={titleVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    رؤيتنا
                                </motion.h2>
                                <p className="text-xl sm:text-2xl md:text-4xl text-[#FCFCFC] w-[75%] m-auto">
                                    "تمكين الطلاب من إدارة مسيرتهم الأكاديمية" </p>
                            </motion.div>
                        </motion.div>

                        {/* فريقنا */}
                        <motion.div
                            className="container mx-auto my-24 px-4 text-center max-w-[600px]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
                            transition={{ duration: 1.2 }}
                        >
                            <motion.h2
                                className="text-xl sm:text-3xl md:text-5xl mt-10 font-bold text-[#262338] mb-6 font-[Raleway]"
                                variants={titleVariants}
                            >
                                فريقنا من المطورين الخبراء
                            </motion.h2>
                            <p className='font-[Raleway] text-[16px] sm:text-[17px]'>
                                في أكاديمية EDU TRACK، نُدرِّبك على يد مبرمجين محترفين...
                            </p>
                        </motion.div>

                        {/* صور الفريق */}
                        <motion.div
                            className='mb-14 mt-10 mx-auto'
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className='bg-[#EFF4F8] py-6 px-4 sm:px-10'>
                                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 pb-14">
                                    {Team.map((member) => (
                                        <motion.div
                                            key={member.id}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: member.id * 0.2 }}
                                        >
                                            <div className="rounded-md overflow-hidden aspect-[2/2]">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <h3 className="text-lg font-bold mt-2 text-[#262338]">{member.name}</h3>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* آراء العملاء */}
                        <motion.div
                            className='px-5 py-16'
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="max-w-6xl mx-auto">
                                <motion.h2
                                    className="text-3xl md:text-5xl font-bold text-center text-[#262338] mb-6"
                                    variants={titleVariants}
                                >
                                آراء طلابنا
                                </motion.h2>
                                <p className="text-lg text-[#262338] text-center mb-16 max-w-[46rem] mx-auto">
                                    في أكاديمية EDU TRACK، نُركّز على يد خبراء محترفين مشاركين
                                </p>
                            </div>

                            {/* بطاقات العملاء */}
                            <div className="grid grid-cols-3 justify-start gap-4">
                                {[...Array(3)].map((_, index) => (
                                    <motion.div
                                        key={index}
                                        className={`p-6 pb-2 col-span-3 md:col-span-1 ${index === 1 ? "bg-[#88b2d5]" : "bg-[#EFF4F8] "} shadow-lg border-[3px] border-[#6CA6CD] rounded-lg`}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.3 }}
                                    >
                                        <p className="text-black text-right mb-8 font-normal font-[Almarai]">
                                            منصة Edu track ليست مجرد منصة للإرشاد التعليمي، بل هي صرح للإبداع والتميز.
                                        </p>
                                        <div className="flex items-center gap-4">
                                            <img src="./client.png" alt="محمد عمران" className="w-12 h-12 rounded-full object-cover" />
                                            <div className="text-right">
                                                <h4 className="font-semibold text-black mb-2">محمد عمران</h4>
                                                <p className="text-sm text-[#00000094]">خبير إرشاد تعليمي</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}
