import React from 'react'
import style from './UpdateCourses.module.css'
import { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserToken } from '../../Context/TokenContext';
import axios from 'axios';
import { useFormik } from 'formik';
import { code } from 'framer-motion/client';

export default function UpdateCourses() {
    let navigate = useNavigate();
    let { setUserToken } = useContext(UserToken);
    function logOut() {
        localStorage.removeItem('token');
        setUserToken(null)
        navigate('/')
  }

// useEffect(() => {
//   // هنا بتحمّل البيانات من API
//   async function fetchCourses() {
//     const res = await fetch("http://api.example.com/courses"); // عدّل الرابط حسب حالتك
//     const data = await res.json();

//     // ضيف لكل مادة مفتاح درجة ونجاح افتراضيًا
//     const fetched = apiData.map(course => ({
//   ...course,
//   degree: course.degree ?? 50,   // لو مفيش درجة، خليها 50
//   status: course.status ?? true, // لو مفيش حالة، خليها ناجح
// }));

// setCourses(fetched);

//     setCourses(initialCourses);
//   }

//   fetchCourses();
// }, []);
  const [level, setlevel] = useState(0);
  const [semester, setSemester] = useState(0);
  const [course, setCourses] = useState(null);

  const fetchCourses = async (level , semester) => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.warn('Token not found');
      return;
    }

    try {
      const { data } = await axios.post('http://edutrack.runasp.net/api/Profile/user-courses-assign',
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
      // console.log(data);
      
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
const handleSubmit = async () => {
  const cleanedCourses = formik2.values.courses
  .filter(course =>
    course &&
    course.code &&
    (course.status === true || course.status === false) &&
    (course.status === false || (course.degree !== null && course.degree !== "" && course.degree >= 60))
  )
  .map(course => ({
    code: course.code,
    status: course.status,
    degree: course.status ? Number(course.degree) : null
  }));

if (cleanedCourses.length === 0) {
  alert("⚠️ يجب اختيار الكورسات وإدخال الحالة والدرجة بشكل صحيح.");
  return;
}

  console.log("📦 Payload being sent:", { updateCourse: cleanedCourses });

  const response = await axios.put(
    "http://edutrack.runasp.net/api/Profile/update-course",
    { updateCourse: cleanedCourses },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  alert('تم تسجيل بياناتك بنجاح')
  console.log(response);
  
  navigate("/finalCourses")
};

//   const sendCoursesCodes = async (values) => {
//   const filteredCourses = values.courses.filter(course => course.code?.trim());
//   const payload = {
//     courses: filteredCourses,
//   };

//   console.log("🚀 Payload to send:", payload);

//   try {
//     const response = await axios.post(
//       "http://edutrack.runasp.net/api/Profile",
//       payload,
//       {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       }
//     );
//     if (!response.data || response.data.courses == []) {
//       alert("⚠️ لن يتم تسجيل المواد! لأنه تم تسجيل إحدى المواد من قبل.");
//       return; // وقف التنفيذ
//     }

//     alert("✅ تم إرسال الكورسات بنجاح!");
//     console.log(response);
    
    
//   } catch (error) {
//     console.error("❌ Error:", error.response?.data || error.message);
//     alert("❌ حصل خطأ أثناء إرسال الكورسات");
//   }
// };

// useEffect(() => {
// const YourComponent = ({ level, semester }) => {
//   useEffect(() => {
//     // اتأكد إن الاتنين متوفرين قبل ما تبعت الطلب
//     if (!level || !semester) return;

//     const getTotalCourses = async () => {
//       try {
//         const response = await axios.post(
//           `http://edutrack.runasp.net/api/Profile/user-courses-assign`,
//           {
//             level,
//             semester
//           },
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem('token')}`
//             }
//           }
//         );
//         console.log("Courses Response:", response.data);
//         // هنا ممكن تحفظ الـ response في state لو حابب تعرضه
//       } catch (err) {
//         if (err.response?.status === 401) {
//           console.error("غير مصرح: تأكد من صلاحية التوكن");
//         } else {
//           console.error("خطأ أثناء جلب البيانات", err);
//         }
//       }
//     };

//     getTotalCourses();
//   }, [level, semester]); // الدالة تشتغل كل ما الليفل أو الترم يتغير
// };

// }, []);


//   axios.post("http://edutrack.runasp.net/api/Profile/user-courses-assign", {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
// .then(res => {
//   console.log("تم تسجيل الكورس:", res.data);
// })
// .catch(err => {
//   if (err.response?.status === 409) {
//     alert("الكورس مسجل مسبقًا");
//   } else {
//     console.error("خطأ في الشبكة أو السيرفر", err);
//   }
// });

  const formik = useFormik({
    initialValues: {
      level: null,
      semester: null,
    },
    onSubmit: () => {},
  });
const formik2 = useFormik({
  initialValues: {
    courses: course?.courses?.map(c => ({
      code: c.code,
      status: c.status ?? false,
      degree: c.degree ?? null,
    })) || [],
  },
  onSubmit: handleSubmit,
});


  const [courses, setcourses] = useState([]);
  useEffect(() => {
    if (formik.values.level > 0 && formik.values.semester > 0) {
      fetchCourses(formik.values.level, formik.values.semester);
      
    }
  }, [formik.values.level, formik.values.semester]);


  
  
    

  return <>
    <div className='w-full flex flex-row'>
      <div className="w-1/5 bg-[#d9e7f1] p-4 min-h-screen flex flex-col justify-between fixed">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-[#6CA6CD] mb-4 text-center">EDU TRACK</h2>
          <NavLink onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })} to={'/home'} className="p-3  rounded-[20px]">
              <div className='flex items-center gap-2.5'>
                  <i className="fa-solid fa-house text-[#222] p-2 rounded-[12px]"></i>
                  <p className='mb-0 text-[#14142b] font-[Font Family]'>الرئيسية</p>
              </div>
          </NavLink>
          <NavLink onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })} to={'/updateCourses'} className="p-3 bg-[#eff4f8] rounded-[20px]">
              <div className='flex items-center gap-2.5'>
                  <i className="fa-regular fa-clipboard text-[#222] p-2 rounded-[12px] bg-[#eff4f8]"></i>
                  <p className='mb-0 text-[#14142b] font-[Font Family]'>المقررات الدراسية</p>
              </div>
          </NavLink>
          <NavLink onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })} to={'/finalCourses'} className="p-3 rounded-[20px]">
              <div className='flex items-center gap-2.5'>
                  <i className="fa-regular fa-clipboard text-[#222] p-2 rounded-[12px] bg-[#eff4f8]"></i>
                  <p className='mb-0 text-[#14142b] font-[Font Family]'>المقررات النهائية</p>
              </div>
          </NavLink>
          <NavLink onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })} to={'/aboutus'} className="p-3 rounded-[20px]">
              <div className='flex items-center gap-2.5'>
                  <i className="fa-solid fa-users text-[#222] p-2 rounded-[12px] bg-[#eff4f8]"></i>
                  <p className='mb-0 text-[#14142b] font-[Font Family]'>نبذة عنا</p>
              </div>
          </NavLink>
          <NavLink onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })} to={'/profile'} className="p-3 rounded-[20px]">
              <div className='flex items-center gap-2.5'>
                  <i className="fa-solid fa-user text-[#222] p-2 rounded-[12px] bg-[#eff4f8]"></i>
                  <p className='mb-0 text-[#14142b] font-[Font Family]'>الملف الشخصي</p>
              </div>
          </NavLink>
          <NavLink onClick={() => window.scrollTo({ top: 0, behavior: "smooth" , block: 'center' })} to={'/chatBot'} className="p-3  rounded-[20px]">
            <div className='flex items-center gap-2.5'>
                <i className="fa-solid fa-robot text-[#222] p-2 rounded-[12px] bg-[#eff4f8]"></i>
                <p className='mb-0 text-[#14142b] font-[Font Family]'>ChatBot للتواصل</p>
            </div>
        </NavLink>
        </div>
        <div className="mt-4">
          <NavLink onClick={()=> logOut()} className="p-3 rounded-[20px]">
              <div className='flex items-center gap-2.5'>
                  <i className="fa-solid fa-arrow-right-to-bracket text-[#222] p-2 rounded-[12px] bg-[#eff4f8]"></i>
                  <p className='mb-0 text-[#14142b] font-[Font Family]'>تسجيل الخروج</p>
              </div>
          </NavLink>
        </div>
      </div>
      <div className='w-4/5 mr-[21%] pr-2 mb-10 mt-[15%]'>
        <div className='bg-[#EFF4F8] py-10 mb-8'>
          <h2 className='font-bold text-3xl text-center font-[Almarai] px-2'>شاهد الفيديو التعريفي </h2>
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
              <span className="w-32 h-9 bg-[#e5b7b7]"></span>
            </div>
            <div class="flex items-center gap-1 ">
              <span className='text-black text-2xl font-normal'>إختياري تخصص</span>
              <span className="w-32 h-9 bg-[#f1dcdb]"></span>
            </div>
          </div>
        </div>

        <div className="relative overflow-x-auto ltr shadow-md sm:rounded-lg ml-6">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-white uppercase  bg-gray-600">
              <tr>
                <th scope="col" className="py-6 px-4 text-center text-2xl w-2/12">
                  كود المقرر
                </th>
                <th scope="col" className="py-6 px-4 text-center text-2xl w-2/12">
                  وصف المقرر
                </th>
                <th scope="col" className="py-6 px-4 text-center text-2xl w-3/12">
                  الساعات العتمدة
                </th>
                <th scope="col" className="py-6 px-4 text-center text-2xl w-2/12">
                  حالة المقرر
                </th>
                <th scope="col" className="py-6 px-4 text-center text-2xl w-1/12">
                  الدرجة
                </th>
                <th scope="col" className="py-6 px-4 text-center text-2xl w-2/12">
                  نوع المقرر
                </th>
              </tr>
            </thead>
            <tbody>
  {course?.courses?.length > 0 &&
    course.courses.map((course, index) => (
      <tr
        key={index}
        className={`${
        // course.name.includes("جامعة اختياري")
          getCourseTypeLabel(course.courseType) == "جامعة" && course.isOptional == true
            ? "bg-[#e5b7b7]"
            // : course.name.includes("تخصص اختياري")
            :getCourseTypeLabel(course.courseType) == "تخصص" && course.isOptional == true
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
    <input
      id={`checkbox-${index}`}
      type="checkbox"
      checked={!!formik2.values.courses[index]?.code}
      onChange={(e) => {
        const newCourses = [...formik2.values.courses];

        // حضّر العنصر لو مش موجود
        if (!newCourses[index]) {
          newCourses[index] = {
            code: "",
            status: false,
            degree: null,
          };
        }

        if (e.target.checked) {
          // ✅ اجتاز: لازم كود + حالة true + يدخل درجة
          newCourses[index].code = course.code;
          newCourses[index].status = true;
        } else {
          // ❌ متعثر: يشيل كل القيم
          newCourses[index] = {
            code: "",
            status: false,
            degree: null,
          };
        }

        formik2.setFieldValue("courses", newCourses);
      }}
      className="w-4 h-4 rounded-sm border-outline-none accent-[#1EE80B] focus:ring-0"
    />
    <label htmlFor={`checkbox-${index}`} className="mr-2.5 text-2xl font-normal text-black">
      {course.code}
    </label>
  </div>
</th>


        {/* ✅ اسم المادة */}
        <td className="text-2xl text-center text-black">{course.name}</td>

        {/* ✅ عدد الساعات */}
        <td className="text-2xl text-center text-black">{course.hours}</td>


<td className="text-2xl">
  <select
    className="w-full pl-2 text-black text-center focus-visible:outline-none"
    disabled={!formik2.values.courses[index]?.code} // ❌ لا يمكن اختيار الحالة إلا بعد اختيار الكورس
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
</td>

<td className="text-2xl w-1/12">
  <input
    type="number"
    className={`w-full text-black border text-center focus-visible:outline-none ${
      !formik2.values.courses?.[index]?.status ? "bg-gray-100 cursor-not-allowed" : ""
    }`}
    value={formik2.values.courses?.[index]?.degree || ""}
    disabled={
      !formik2.values.courses?.[index]?.code ||
      !formik2.values.courses?.[index]?.status
    }
    min={0}   // يمنع إدخال أقل من 0
    max={100} // يمنع إدخال أكثر من 100
    onChange={(e) => {
      const value = e.target.value;
      if (value === "" || (!isNaN(value) && value <= 100)) {
        formik2.setFieldValue(
          `courses[${index}].degree`,
          value === "" ? "" : Number(value)
        );
      }
    }}
    onBlur={() => {
      const value = formik2.values.courses?.[index]?.degree;
      const status = formik2.values.courses?.[index]?.status;
      
      if (status && value < 60) {
        alert("الدرجة يجب أن تكون 60 أو أكثر عند الإجتياز");
        formik2.setFieldValue(`courses[${index}].degree`, "");
      }
    }}
  />
</td>



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
            <button onClick={() => { handleSubmit(); formik2.handleSubmit; }} className="w-full mt-2.5 py-3 bg-[#EFF4F8] text-black text-2xl cursor-pointer duration-200">حفظ </button>
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

