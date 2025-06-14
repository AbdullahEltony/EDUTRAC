// hooks/useCoursesForm.js
import { useFormik } from "formik";
import { makeRequest } from "../api/axiosInstance";
import { toast } from "react-toastify";

export function useCoursesForm(course, level, semester, note, onSuccess) {
    console.log(course)
    
  const formik2 = useFormik({
    initialValues: {
      courses:
        course?.courses.map((c) => ({
          code: c.code,
          status: typeof c.status === "boolean" ? c.status : false,
          degree: c.degree ?? "",
        })) || [],
    },
    onSubmit: handleSubmit,
  });

  async function handleSubmit() {
    if (!formik2.isValid) {
      toast.warning("يجب اختيار الكورسات وإدخال الحالة والدرجة بشكل صحيح");
      return;
    }

    const cleanedCourses = formik2.values.courses
      .filter(
        (c) =>
          c.code &&
          (c.status === true || c.status === false) &&
          (c.status === false || (c.degree !== null && c.degree !== ""))
      )
      .map((c) => ({
        code: c.code,
        status: c.status,
        degree: c.status !== "لم يجتاز" ? Number(c.degree) : null,
      }));

    if (cleanedCourses.length === 0) {
      toast.warning("يجب اختيار الكورسات وإدخال الحالة والدرجة بشكل صحيح");
      return;
    }

    await makeRequest("POST", "/api/UserNote", { level, semester, note });

    await makeRequest("PUT", `/api/Profile/update-course`, {
      updateCourse: cleanedCourses,
    });

    onSuccess?.();
    
  }

  return {
    formik2,
    handleSubmit,
  };
}
