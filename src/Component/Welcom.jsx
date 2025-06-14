
const WelcomeLoader = () => {
    const name = JSON.parse(localStorage.getItem('name'));
    return (
        <div className='fixed w-full h-screen z-100 left-0 top-0 flex justify-center items-center welcome'>
            <div className='flex flex-col items-center gap-4'>
                <h1 className='text-3xl font-bold text-black sm:text-5xl'>مرحبا <span className='text-[#6CA6CD]'>{name.split(' ')[0]}</span> </h1>
                <p className='text-black text-2xl sm:text-3xl'>أهلًا بك في Edu Track 👋</p>
                <div className="animate-spin mt-6 rounded-full h-12 w-12 border-3 border-[#6CA6CD] border-t-transparent"></div>
            </div>
        </div>
    )
}

export default WelcomeLoader