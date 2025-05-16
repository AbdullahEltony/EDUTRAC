
const LevelNote = ({note,handleSubmit,formik2,setNote}) => {
    return (
        <div className="  mx-auto mt-8 text-right py-4 px-2 sm:px-0 ">
            <label className="block text-black text-[18px] sm:text-[28px] font-normal mb-2.5">ملاحظات الطالب، اكتب ما تريد أن تضعه في كل من المستويات الأربعة</label>
            <textarea placeholder="ضع ملاحظتك هنا..." className="w-full h-60 bg-[#EFF4F8] p-4 text-[16px] sm:text-[22px] placeholder:text-black rounded-xl focus-visible:outline-none resize-none" value={note} onChange={(e) => setNote(e.target.value)} />
            <button onClick={() => { handleSubmit(); formik2.handleSubmit; }} className="w-full mt-2.5 py-3 bg-[#EFF4F8] text-black text-2xl cursor-pointer duration-200">حفظ </button>
            <div className="mt-6 py-6 px-4 rounded-xl text-black bg-[#EFF4F8] text-right leading-loose text-[28px]">
                <p className='text-[16px] sm:text-[18px]'>يرجى العلم</p>
                <p className='text-[16px] sm:text-[18px]'>أنه إذا كان المعدل التراكمي للطالب (GPA) أقل من 0.7 فلا يمكن تسجيل أكثر من 12 ساعة.</p>
                <p className='text-[16px] sm:text-[18px]'>لا يمكن اختيار أكثر من 20 ساعة في الترم الواحد</p>
            </div>
        </div>
    )
}

export default LevelNote