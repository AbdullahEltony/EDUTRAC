import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const clients = [
    {
        name: 'محمد عمران',
        role: 'خبير إرشاد تعليمي',
        image: './client.png',
        text: 'منصة Edu track ليست مجرد منصة للإرشاد التعليمي، بل هي صرح للإبداع والتميز.',
    },
    {
        name: 'محمد عمران',
        role: 'خبير إرشاد تعليمي',
        image: './client.png',
        text: 'منصة Edu track ليست مجرد منصة للإرشاد التعليمي، بل هي صرح للإبداع والتميز.',
    },
    {
        name: 'محمد عمران',
        role: 'خبير إرشاد تعليمي',
        image: './client.png',
        text: 'منصة Edu track ليست مجرد منصة للإرشاد التعليمي، بل هي صرح للإبداع والتميز.',
    },
    {
        name: 'محمد عمران',
        role: 'خبير إرشاد تعليمي',
        image: './client.png',
        text: 'منصة Edu track ليست مجرد منصة للإرشاد التعليمي، بل هي صرح للإبداع والتميز.',
    },
    {
        name: 'محمد عمران',
        role: 'خبير إرشاد تعليمي',
        image: './client.png',
        text: 'منصة Edu track ليست مجرد منصة للإرشاد التعليمي، بل هي صرح للإبداع والتميز.',
    },
];

export default function ClientSlider() {
    return (
        <div className="md:px-0 max-w-full">
            {/* بطاقات العملاء */}
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={25}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    768: {
                        slidesPerView: 3,
                    },
                }}
                className="!pb-10"
            >
                {clients.map((client, index) => (
                    <SwiperSlide key={index}>
                        <motion.div
                            className={`p-6 pb-2 bg-[#EFF4F8] shadow-lg border-[3px] border-[#6CA6CD] rounded-lg ${index === 1 ? 'bg-[#88b2d5]' : ''
                                }`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.3 }}
                        >
                            <p className="text-black text-right mb-8 font-normal font-[Almarai]">
                                {client.text}
                            </p>
                            <div className="flex items-center gap-4">
                                <img
                                    src={client.image}
                                    alt={client.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div className="text-right">
                                    <h4 className="font-semibold text-black mb-2">{client.name}</h4>
                                    <p className="text-sm text-[#00000094]">{client.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
