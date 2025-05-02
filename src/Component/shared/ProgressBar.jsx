export default function ProgressBar() {
    return (
        <div className="sticky top-0 xl:top-[13.7rem] z-50 xl:z-10 max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl w-full h-8 bg-gray-300 rounded-full overflow-hidden mx-auto mb-24">
            <div className="absolute top-0 left-0 h-full w-[55%] bg-gradient-to-r from-[#3383cc] to-[#5fc5f3] rounded-full"></div>
            <span className="absolute top-1/2  left-[27.5%]  transform  -translate-y-1/2 text-white text-sm sm:text-lg font-semibold">
                55%
            </span>
        </div>
    );
}
