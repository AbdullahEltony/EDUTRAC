import React from 'react'

const Video = ({ video, caption }) => {
    console.log(caption)

    return (
        <div className='bg-[#EFF4F8] pb-10 pt-6 mb-8  mx-auto'>
            <h2 className='font-bold text-xl sm:text-3xl text-center font-[Almarai] px-2 mb-4'> {video === 'introduction' ? 'شاهد الفيديو التعريفي':'طريقة الإبحار في الموقع'} </h2>
            <div className="flex justify-center px-6 pt-6">
                <div className="relative w-full" style={{ maxWidth: '800px', aspectRatio: '16/9' }}>
                    <video
                        className="w-full h-full rounded-lg shadow-lg"
                        controls
                        poster={`./${caption}`}
                        src={
                            video === 'introduction' ? 'https://res.cloudinary.com/dlkw3tyvv/video/upload/v1749942283/Introduction-Video_nu7a1r.mp4'
                            :
                            'https://res.cloudinary.com/dlkw3tyvv/video/upload/v1749942802/Courses_bbsvtx.mp4'
                        }
                        type="video/mp4"
                    ></video>
                </div>
            </div>
        </div>
    )
}

export default Video