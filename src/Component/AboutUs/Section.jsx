/* eslint-disable no-unused-vars */
// components/Section.js
import { motion } from 'framer-motion';

const Section = ({ title, children, className, motionProps }) => (
    <motion.div
        className={`bg-[#d9e7f1] p-8 md:p-12 flex flex-col lg:flex-row gap-6 justify-start ${className}`}
        initial={motionProps.initial}
        animate={motionProps.animate}
        transition={motionProps.transition}
    >
        {children}
    </motion.div>
);

export default Section;
