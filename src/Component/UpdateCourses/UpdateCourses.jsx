import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './UpdateCourses.css'
import { useFormik } from 'formik';
import NavMenu from '../NavMenu';
import ProgressBar from '../shared/ProgressBar';
import { toast } from 'react-toastify';
import { makeRequest } from '../../api/axiosInstance';
import { updateProgressContext } from '../Layout/Layout';
import { CourseLegend } from './CourseLegned';
import { useCallback } from 'react';
import LevelNote from './LevelNote';
import CourseTable from './CourseTable';
import Video from '../shared/Video';
import LevelSelector from './LevelSelector';
import SemesterSelector from './SemesterSelector';

export default function UpdateCourses() {
  let navigate = useNavigate();

  const [level, setLevel] = useState('');
  const [semester, setSemester] = useState('');
  const [course, setCourses] = useState(null);
  const [loading, setLoading] = useState(false)
  const [noteLoading, setNoteLoading] = useState(false)
  const { setUpadteProgress, upadteProgress } = useContext(updateProgressContext);
  const [note, setNote] = useState('')


  const fetchCourses = useCallback(async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.warn('Token not found');
      return;
    }

    try {
      const { data } = await makeRequest('POST', `/api/Profile/user-courses-assign`,
        {
          level,
          semester
        },
      );

      setCourses(data);

    } catch (err) {
      console.error('Error:', err.response?.status, err.response?.data);
    }
  }, [level, semester]);

  const fetchNote = useCallback(async () => {
    try {
      const { data } = await makeRequest('GET', `/api/UserNote?level=${level}&semester=${semester}`);
      if (data.length > 0) {
        setNote(data[0].notes);
      }
    } catch (error) {
      console.log(error)
    }
  }, [level, semester]);



  useEffect(() => {
    if (level && semester) {
      fetchCourses();
      fetchNote();
    }
  }, [level, semester, fetchNote, fetchCourses]);

  const handleSubmit = async () => {
    if (!formik2.isValid) {
      toast.warning("يجب اختيار الكورسات وإدخال الحالة والدرجة بشكل صحيح", { autoClose: 2000 })
      return;
    }
    const cleanedCourses = formik2.values.courses
      .filter(course =>
        course &&
        course.code &&
        (course.status === true || course.status === false) &&
        (course.status === false || (course.degree !== null && course.degree !== ""))
      )
      .map(course => ({
        code: course.code,
        status: course.status,
        degree: course.status !== 'لم يجتاز' ? Number(course.degree) : null
      }));


    if (cleanedCourses.length === 0) {
      toast.warning("يجب اختيار الكورسات وإدخال الحالة والدرجة بشكل صحيح", { autoClose: 2000 })
      return;
    }
    setLoading(true)
    await makeRequest(
      'PUT', `/api/Profile/update-course`,
      { updateCourse: cleanedCourses },
    );
    toast.success("  تم تحديث الكورسات بنجاج", { autoClose: 2000 , rtl:true })
    setLoading(false)
    setUpadteProgress(!upadteProgress);

    navigate("/finalCourses")
    window.scrollTo({ top: 0, behavior: "smooth" })
  };
  const handleSaveNote = async () => {

    {/* ارسال الملاحظة */ }
    setNoteLoading(true)
    await makeRequest('POST', '/api/UserNote', { level: level, semester: semester, note: note })
    setNoteLoading(false)
    toast.success('تم ارسال الملاحظة بنجاح', { autoClose: 2000 , rtl:true })
  }


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
        code: c.code,
        status: c.status ?? null,
        degree: c.degree ?? null,
      })) || [],
    },
    onSubmit: handleSubmit,
  });


  useEffect(() => {
    if (formik.values.level > 0 && formik.values.semester > 0) {
      fetchCourses(formik.values.level, formik.values.semester);

    }
  }, [formik.values.level, formik.values.semester, fetchCourses]);






  return <>
    <div className='w-full flex flex-row'>
      <NavMenu />
      <div className='w-full'>
        <Video video='courses' caption="caption2.png"/>

        <h3 className='text-2xl md:text-3xl mb-6 text-center text-bold'>المقررات المتبقية</h3>
        <form className="mx-auto mb-12 max-w-[97%]" dir="rtl">
          <LevelSelector value={level} onChange={setLevel} />
          <SemesterSelector value={semester} onChange={setSemester} />

        </form>

        <CourseLegend />

        {course?.courses?.length > 0 && <CourseTable courseList={course?.courses} formik2={formik2} handleSubmit={handleSubmit} loading={loading} />}
        {course?.courses?.length > 0 && <LevelNote note={note} handleSubmit={handleSaveNote} loading={noteLoading} formik2={formik2} setNote={setNote} />}

      </div>
    </div>
  </>
}

