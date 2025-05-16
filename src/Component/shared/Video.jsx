import React from 'react'

const Video = () => {
    return (
        <div className='bg-[#EFF4F8] pb-10 pt-6 mb-8  mx-auto'>
            <h2 className='font-bold text-xl sm:text-3xl text-center font-[Almarai] px-2 mb-4'>شاهد الفيديو التعريفي </h2>
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
        </div>
    )
}

export default Video