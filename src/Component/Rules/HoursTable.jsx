import React from 'react';

const HoursTable = () => {

    return (
        <div className="overflow-x-auto w-full mt-5">
            <h3 className='table-title '>عدد الساعات المعتمدة المطلوبة للتخرج</h3>
            <table className="table-auto w-full border-collapse border  bg-white text-center">
                <thead>
                    <tr className="bg-orange-200">
                        <th colSpan="2" className="border px-4 py-2">متطلبات الجامعة</th>
                        <th rowSpan="2" className="border px-4 py-2">متطلبات الكلية</th>
                        <th colSpan="2" className="border px-4 py-2">متطلبات البرنامج العام</th>
                        <th rowSpan="2" className="border px-4 py-2">عدد الساعات المعتمدة</th>
                    </tr>
                    <tr className="bg-orange-200">
                        <th className="border px-4 py-2">إجبارية</th>
                        <th className="border px-4 py-2">اختيارية</th>
                        <th className="border px-4 py-2">إجبارية</th>
                        <th className="border px-4 py-2">اختيارية</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-gray-50">
                        <td className="border px-4 py-2">4 س</td>        {/* إجبارية الجامعة */}
                        <td className="border px-4 py-2">4 س</td>        {/* اختيارية الجامعة */}
                        <td className="border px-4 py-2">36 س</td>       {/* كلية */}
                        <td className="border px-4 py-2">92 س</td>        {/* إجبارية البرنامج */}
                        <td className="border px-4 py-2">12 س</td>        {/* اختيارية البرنامج */}
                        <td className="border px-4 py-2">148 ساعة معتمدة </td>      {/* مجموع الساعات في الصف */}
                    </tr>
                    <tr>
                        <td className="border px-4 py-2">2.70%</td>        {/* إجبارية الجامعة */}
                        <td className="border px-4 py-2">2.70%</td>       {/* اختيارية الجامعة */}
                        <td className="border px-4 py-2">24.32%</td>        {/* كلية */}
                        <td className="border px-4 py-2">62.16%</td>        {/* إجبارية البرنامج */}
                        <td className="border px-4 py-2">8.11%</td>       {/* اختيارية البرنامج */}
                        <td className="border px-4 py-2">100%</td>       {/* مجموع الساعات في الصف */}
                    </tr>
                    <tr>
                        <td colSpan="6" className="border text-right px-4 py-2 font-bold">عدد المستويات الدراسية: أربعة مستويات (8 فصول دراسية)</td>

                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default HoursTable;
