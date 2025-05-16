import React from 'react';
import { getCourseColor, getCourseTypeLabel } from '../../utils';
import { toast } from 'react-toastify';

export default function CourseTable({ courseList, formik2 }) {
    return (
        <div className='relative ltr  overflow-x-auto shadow-md sm:rounded-lg  mx-auto mb-6'>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-white uppercase  bg-gray-600">
                    <tr>
                        {['كود المقرر', 'وصف المقرر', 'الساعات العتمدة', 'الدرجة', 'حال المقرر', 'نوع المقرر'].map(
                            (header, index) => (
                                <th
                                    key={index}
                                    scope="col"
                                    className="py-6 px-4 text-center text-xs sm:text-sm md:text-lg w-2/12"
                                >
                                    {header}
                                </th>
                            )
                        )}

                    </tr>
                </thead>
                <tbody>
                    {courseList.length > 0 &&
                        courseList.map((course, index) => (
                            <tr
                                key={index}
                                className={getCourseColor(course.courseType, course.isOptional)}
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
                                                    newCourses[index].status = 'لم يجتاز';
                                                    newCourses[index].degree = '';
                                                } else {
                                                    // ❌ متعثر: يشيل كل القيم
                                                    newCourses[index] = {
                                                        code: "",
                                                        status: 'لم يجتاز',
                                                        degree: null,
                                                    };
                                                }

                                                formik2.setFieldValue("courses", newCourses);
                                            }}
                                            className="w-5 h-5 me-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                                        />
                                        <label htmlFor={`checkbox-${index}`} className="mr-2.5 text-[16px] sm:text-2xl font-normal text-black">
                                            {course.code}
                                        </label>
                                    </div>
                                </th>


                                {/* ✅ اسم المادة */}
                                <td className="text-[16px] sm:text-2xl text-center text-black">{course.name}</td>

                                {/* ✅ عدد الساعات */}
                                <td className="text-[16px] sm:text-2xl text-center text-black">{course.hours}</td>

                                <td className="text-[16px] sm-2xl w-1/12">
                                    <input
                                        type="number"
                                        className={`w-full text-black border text-center focus-visible:outline-none
                                      `}
                                        value={formik2.values.courses?.[index]?.degree || ""}
                                        disabled={
                                            !formik2.values.courses?.[index]?.code
                                        }
                                        min={0}   // يمنع إدخال أقل من 0
                                        max={100} // يمنع إدخال أكثر من 100
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            if (value === "" || (!isNaN(value) && value <= 100)) {
                                                formik2.setFieldValue(
                                                    `courses[${index}].degree`,
                                                    value === "" ? null : Number(value)
                                                );
                                            }
                                        }}
                                        onBlur={() => {
                                            const value = formik2.values.courses?.[index]?.degree;
                                            const statusField = `courses[${index}].status`;
                                            const isValid = /^\d+$/.test(value)
                                            if (!isValid) {
                                                toast.warning("يجب اختيار الكورسات وإدخال الحالة والدرجة بشكل صحيح", { autoClose: 2000 })
                                            }


                                            if (value === "" || value === 0) {
                                                formik2.setFieldValue(statusField, "لم يجتاز");
                                            } else if (value < 60) {
                                                formik2.setFieldValue(statusField, false);
                                            } else {
                                                formik2.setFieldValue(statusField, true);
                                            }
                                        }}
                                    />
                                </td>
                                <td className="text-[16px] sm:text-2xl">
                                    <select
                                        className="w-full pl-2 text-black text-center focus-visible:outline-none"
                                        disabled={!formik2.values.courses[index]?.code} // ❌ لا يمكن اختيار الحالة إلا بعد اختيار الكورس
                                        onChange={(e) => {
                                            formik2.setFieldValue(
                                                `courses[${index}].status`,
                                                e.target.value
                                            );
                                            formik2.values.courses[index].degree = '';
                                        }


                                        }
                                        value={formik2.values.courses?.[index]?.status === null ? "لم يجتاز" : formik2.values.courses?.[index]?.status}
                                        defaultValue={'لم يجتاز'}
                                    >
                                        <option value="لم يجتاز"> --</option>
                                        <option value="true">إجتاز</option>
                                        <option value="false">متعثر</option>
                                    </select>
                                </td>





                                {/* ✅ نوع المادة */}
                                <td className="text-[16px] sm:text-2xl text-center text-black">
                                    {getCourseTypeLabel(course.courseType)}
                                </td>
                            </tr>
                        ))}
                </tbody>

            </table>
        </div>
    )

}
