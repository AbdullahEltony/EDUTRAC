import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useFormik } from 'formik';
import { NavMenu } from '../NavMenu';
import { baseURL } from '../../constants';
export default function Courses() {


  const [level, setlevel] = useState(0);
  const [semester, setSemester] = useState(0);
  const [course, setCourses] = useState(null);

  const fetchCourses = async (level, semester) => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.warn('Token not found');
      return;
    }

    try {
      const { data } = await axios.post(`${baseURL}/api/Profile/courses-level-season`,
        {
          level,
          semester
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setCourses(data);
    } catch (err) {
      console.error('Error:', err.response?.status, err.response?.data);
    }
  };

  useEffect(() => {
    if (level && semester) {
      fetchCourses();
    }
  }, [level, semester]);

  const getCourseTypeLabel = (type) => {
    switch (type) {
      case 0:
        return "تخصص";
      case 1:
        return "كلية";
      case 2:
        return "جامعة";
      default:
        return "غير معروف";
    }
  };
  const sendCoursesCodes = async (values) => {
    const filteredCourses = values.courses.filter(course => course.code?.trim());
    const payload = {
      courses: filteredCourses,
    };

    console.log("🚀 Payload to send:", payload);

    try {
      const response = await axios.post(
        `${baseURL}/api/Profile`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (!response.data || response.data.courses == []) {
        alert("⚠️ لن يتم تسجيل المواد! لأنه تم تسجيل إحدى المواد من قبل.");
        return; // وقف التنفيذ
      }

      alert("✅ تم إرسال الكورسات بنجاح!");
      console.log(response);


    } catch (error) {
      console.error("❌ Error:", error.response?.data || error.message);
      alert("❌ حصل خطأ أثناء إرسال الكورسات");
    }
  };


  const formik = useFormik({
    initialValues: {
      level: null,
      semester: null,
    },
    onSubmit: () => { },
  });
  const formik2 = useFormik({
    initialValues: {
      courses: course?.courses?.map(c => ({
        code: "", // لازم تبدأ فاضية علشان المستخدم يحدد
      })) || [],
    },
    onSubmit: sendCoursesCodes,
  });



  useEffect(() => {
    if (formik.values.level > 0 && formik.values.semester > 0) {
      fetchCourses(formik.values.level, formik.values.semester);

    }
  }, [formik.values.level, formik.values.semester]);


  return <>
    <div className='w-full flex flex-row'>
      <NavMenu />
      <div className='w-4/5 mr-[21%] pr-2 mb-10 mt-[15%]'>
      <ProgressBar />
        <form className="max-w-[80%] mb-12" dir="rtl">
          <select
            id="levels"
            name="level"
            className="bg-[#EFF4F8] border border-[#6CA6CD] text-black text-2xl rounded-lg block w-full p-5 font-normal focus-visible:outline-none"
            onChange={formik.handleChange}
            value={formik.values.level}
          >
            <option value="0">المستويات</option>
            <option value="1">المستوى الأول</option>
            <option value="2">المستوى الثاني</option>
            <option value="3">المستوى الثالث</option>
            <option value="4">المستوى الرابع</option>
          </select>

          <div className="flex gap-8 mt-8">
            <div className="flex items-center">
              <label htmlFor="semester-1" className="ms-2 text-[24px] font-normal text-black">الترم الأول</label>
              <div className="w-7 h-7 rounded-full flex items-center justify-center bg-[#D9D9D9]">
                <input
                  id="semester-1"
                  type="radio"
                  name="semester"
                  value="1" // ✅ لازم تتضاف
                  className="w-5 h-5 text-[#6CA6CD]"
                  onChange={(e) => formik.setFieldValue("semester", Number(e.target.value))}
                  checked={formik.values.semester === 1}
                />
              </div>
            </div>

            <div className="flex items-center">
              <label htmlFor="semester-2" className="ms-2 text-[24px] font-normal text-black">الترم الثاني</label>
              <div className="w-7 h-7 rounded-full flex items-center justify-center bg-[#D9D9D9]">
                <input
                  id="semester-2"
                  type="radio"
                  name="semester"
                  value="2" // ✅ لازم تتضاف
                  className="w-5 h-5 text-[#6CA6CD]"
                  onChange={(e) => formik.setFieldValue("semester", Number(e.target.value))}
                  checked={formik.values.semester === 2}
                />
              </div>
            </div>
          </div>
        </form>

        <div dir="ltr" className="space-y-6 w-[100%] p-4 text-sm mb-10 font-medium">
          <div className="flex justify-center items-center gap-6">
            <div className="flex items-center gap-1 ">
              <span className='text-black text-2xl font-normal'>إجباري متطلب جامعة</span>
              <span className="w-32 h-9 bg-[#b8cce4]"></span>
            </div>
            <div class="flex items-center gap-1 ">
              <span className='text-black text-2xl font-normal'>إجباري متطلب كلية</span>
              <span className="w-32 h-9 bg-[#95b3d7]"></span>
            </div>
            <div class="flex items-center gap-1 ">
              <span className='text-black text-2xl font-normal'>إجباري تخصص</span>
              <span className="w-32 h-9 bg-[#dbe5f1]"></span>
            </div>
          </div>

          <div class="flex justify-center items-center gap-12">
            <div class="flex items-center gap-1 ">
              <span className='text-black text-2xl font-normal'>إختياري متطلب جامعة</span>
              <span className="w-32 h-9 bg-[#e5b7b7] transform rotate-[2deg]"></span>
            </div>
            <div class="flex items-center gap-1 ">
              <span className='text-black text-2xl font-normal'>إختياري تخصص</span>
              <span className="w-32 h-9 bg-[#f1dcdb] transform -rotate-[2deg]"></span>
            </div>
          </div>
        </div>


        <div className="relative overflow-x-auto ltr shadow-md sm:rounded-lg ml-6">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-white uppercase  bg-gray-600">
              <tr>
                <th scope="col" className="py-6 px-4 text-center text-2xl">
                  كود المقرر
                </th>
                <th scope="col" className="py-6 px-4 text-center text-2xl">
                  وصف المقرر
                </th>
                <th scope="col" className="py-6 px-4 text-center text-2xl">
                  الساعات العتمدة
                </th>
                {/* <th scope="col" className=x-4 text-center text-2xl w-2/12">
                  حالة المقرر
                </th>
                <th scope="col" className="py-6 text-center text-2xl w-1/12">
                  الدرجة
                </th> */}
                <th scope="col" className="py-6 px-4 text-center text-2xl">
                  نوع المقرر
                </th>
              </tr>
            </thead>
            <tbody>
              {course?.courses?.length > 0 &&
                course.courses.map((course, index) => (
                  <tr
                    key={index}
                    className={`${course.name.includes("جامعة اختياري")
                      ? "bg-[#e5b7b7]"
                      : course.name.includes("تخصص اختياري")
                        ? "bg-[#f1dcdb]"
                        : getCourseTypeLabel(course.courseType) == "تخصص"
                          ? "bg-[#dbe5f1]"
                          : getCourseTypeLabel(course.courseType) == "جامعة"
                            ? "bg-[#b8cce4]"
                            : getCourseTypeLabel(course.courseType) == "كلية"
                              ? "bg-[#95b3d7]"
                              : ""
                      }`}
                  >
                    {/* ✅ الكود */}
                    <th scope="row" className="p-12 font-normal text-black whitespace-nowrap">
                      <div className="flex items-center">
                        <form onSubmit={formik2.handleSubmit}>
                          <input
                            id={`checkbox-${index}`}
                            type="checkbox"
                            checked={!!formik2.values.courses[index]?.code}
                            onChange={(e) => {
                              const newCourses = [...formik2.values.courses];

                              newCourses[index] = e.target.checked
                                ? { code: course.code }
                                : { code: "" }; // 👈 بنخليه فاضي لكن بيحافظ على الـ index

                              formik2.setFieldValue("courses", newCourses);

                              console.log("📌 بعد التحديث:", newCourses);
                            }}
                            className="w-4 h-4 rounded-sm border-outline-none accent-[#1EE80B] focus:ring-0"
                          />
                          <label htmlFor={`checkbox-${index}`} className="mr-2.5 text-2xl font-normal text-black">
                            {course.code}
                          </label>
                        </form>
                      </div>
                    </th>

                    {/* ✅ اسم المادة */}
                    <td className="text-2xl text-center text-black">{course.name}</td>

                    {/* ✅ عدد الساعات */}
                    <td className="text-2xl text-center text-black">{course.hours}</td>

                    {/* ✅ الـ status
        <td className="text-2xl">
          <select
            className="w-full text-black text-center focus-visible:outline-none"
            onChange={(e) =>
              formik2.setFieldValue(
                `courses[${index}].status`,
                e.target.value === "true"
              )
            }
            value={formik2.values.courses?.[index]?.status ? "true" : "false"}
          >
            <option value="true">إجتاز</option>
            <option value="false">متعثر</option>
          </select>
        </td> */}

                    {/* ✅ درجة المادة */}
                    {/* <td className="text-2xl w-1/12">
          <input
            type="number"
            className="w-full text-black border text-center focus-visible:outline-none"
            value={formik2.values.courses?.[index]?.degree || ""}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "" || !isNaN(value)) {
                formik2.setFieldValue(
                  `courses[${index}].degree`,
                  value === "" ? "" : Number(value)
                );
              }
            }}
          />
        </td> */}

                    {/* ✅ نوع المادة */}
                    <td className="text-2xl text-center text-black">
                      {getCourseTypeLabel(course.courseType)}
                    </td>
                  </tr>
                ))}
            </tbody>

          </table>
          {course?.courses?.length > 0 && <div className="w-full mt-8 text-right">
            <label className="block text-black text-[28px] font-normal mb-2.5">ملاحظات الطالب، اكتب ما تريد أن تضعه في كل من المستويات الأربعة</label>
            <textarea placeholder="ضع ملاحظتك هنا..." className="w-full h-60 bg-[#EFF4F8] p-4 text-[22px] placeholder:text-black rounded-xl focus-visible:outline-none resize-none" />
            <button onClick={() => { navigate('/updateCourses') }} className="w-full my-2.5 py-3 bg-[#61D0FF] text-black text-2xl cursor-pointer duration-200">تعديل</button>
            <form onSubmit={formik2.handleSubmit}>
              <button
                type="submit"
                className="w-full mt-2.5 py-3 bg-[#EFF4F8] text-black text-2xl cursor-pointer duration-200"
              >
                حفظ
              </button>
            </form>
            <div className="mt-6 py-6 px-4 rounded-xl text-black bg-[#EFF4F8] text-right leading-loose text-[28px]">
              <p>يرجى العلم</p>
              <p>أنه إذا كان المعدل التراكمي للطالب (GPA) أقل من 0.7 فلا يمكن تسجيل أكثر من 12 ساعة.</p>
              <p>لا يمكن اختيار أكثر من 20 ساعة في الترم الواحد</p>
            </div>
          </div>}
        </div>


      </div>
    </div>
  </>


}

