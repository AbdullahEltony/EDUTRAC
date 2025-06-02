import NavMenu from '../NavMenu'

const RelatedCourses = () => {
    return (
        <div className='w-full flex'>
            <NavMenu />
            <div className='w-full'>
                <div className='flex flex-col gap-12 min-h-screen'>
                    <h3 className='text-2xl md:text-3xl my-6 text-center text-bold'>المقررات المرتبطة</h3>

                </div>
            </div>
        </div>
    )
}

export default RelatedCourses