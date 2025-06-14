
const LevelNote = ({note,handleSubmit,formik2,setNote,loading}) => {
    return (
        <div className="mx-auto mt-8 text-right py-4 sm:px-0 ">
            <label className="block text-black text-[18px] sm:text-[28px] font-normal mb-2.5">ملاحظات الطالب، اكتب ما تريد أن تضعه في كل من المستويات الأربعة</label>
            <textarea placeholder="ضع ملاحظتك هنا..." className="w-full h-60 bg-[#EFF4F8] p-4 text-[16px] sm:text-[22px] placeholder:text-black rounded-xl focus-visible:outline-none resize-none" value={note} onChange={(e) => setNote(e.target.value)} />
            <button disabled={loading} onClick={() => { handleSubmit(); formik2.handleSubmit; }} className="w-full mt-2.5 py-3 bg-[#EFF4F8] text-black text-2xl cursor-pointer duration-200">{loading ? 'جاري الحفظ':'حفظ الملاحظة'} </button>
            <div className="mt-6 py-6 px-4 rounded-xl text-black bg-[#EFF4F8] text-right leading-loose text-[28px]">
                <p className='text-[16px] sm:text-[18px]'>يرجى العلم</p>
                <p className='text-[16px] sm:text-[18px]'>أنه إذا كان المعدل التراكمي للطالب (GPA) أقل من 0.7 فلا يمكن تسجيل أكثر من 12 ساعة.</p>
                <p className='text-[16px] sm:text-[18px]'>لا يمكن اختيار أكثر من 20 ساعة في الفصل الواحد .</p>
                <p className='text-[16px] sm:text-[18px]'>يحق للطالب في المستوي الرابع تسجيل 21 ساعة لدواعي التخرج. </p>
            </div>
        </div>
    )
}

export default LevelNote