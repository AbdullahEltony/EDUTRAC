import React from "react";

const Table10 = () => {
    return (
        <div className="overflow-x-auto w-full mt-5">
            <h3 className="table-title">توزيع الساعات المعتمدة علي الفصول الدراسية للبرنامج (أخصائي تكنولوجيا التعليم)</h3>
            <table className="table-auto w-full border-collapse border  bg-white text-center">
                <thead className="bg-[#fccbbe]">
                    <tr className="">
                        <th rowSpan="2" className="border px-4 py-2">م</th>
                        <th rowSpan="2" className="border px-4 py-2"> المستوي</th>
                        <th rowSpan="2" className="border px-4 py-2"> الفصول الدراسية</th>
                        <th colSpan="2" className="border px-4 py-2">متطلبات  جامعة</th>
                        <th rowSpan="2" className="border px-4 py-2">متطلب كلية</th>
                        <th colSpan="2" className="border px-4 py-2">متطلبات البرنامج</th>
                        <th rowSpan="2" className="border px-4 py-2"> الحد الأقصي لكل فصل دراسي</th>
                    </tr>
                    <tr className="">
                        <th className="border px-4 py-2"> إجباري</th>
                        <th className="border px-4 py-2"> إختياري</th>
                        <th className="border px-4 py-2"> إجباري</th>
                        <th className="border px-4 py-2"> إختياري</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-gray-50">
                        <td className="border px-4 !py-2">1</td>
                        <td rowSpan={2} className="border px-4 py-2">الأول</td>
                        <td className="border px-4 py-2">الفصل الدراسي الخريفي</td>
                        <td className="border px-4 py-2">--</td>
                        <td className="border px-4 py-2">1</td>
                        <td className="border px-4 py-2">4</td>
                        <td className="border px-4 py-2">10</td>
                        <td className="border px-4 py-2">3</td>
                        <td className="border px-4 py-2">18</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <td className="border px-4 !py-2">2</td>
                        <td className="border px-4 !py-2">الفصل الدراسي الربيعي</td>
                        <td className="border px-4 !py-2">1</td>
                        <td className="border px-4 !py-2">1</td>
                        <td className="border px-4 !py-2">4</td>
                        <td className="border px-4 !py-2">10</td>
                        <td className="border px-4 !py-2">2</td>
                        <td className="border px-4 !py-2">18</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <td className="border px-4 !py-2">3</td>
                        <td rowSpan={2} className="border px-4 py-2">الثاني</td>
                        <td className="border px-4 !py-2">الفصل الدراسي الخريفي</td>
                        <td className="border px-4 !py-2">--</td>
                        <td className="border px-4 !py-2">1</td>
                        <td className="border px-4 !py-2">6</td>
                        <td className="border px-4 !py-2">9</td>
                        <td className="border px-4 !py-2">3</td>
                        <td className="border px-4 !py-2">19</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <td className="border px-4 !py-2">4</td>
                        <td className="border px-4 !py-2">الفصل الدراسي الربيعي</td>
                        <td className="border px-4 !py-2">1</td>
                        <td className="border px-4 !py-2">--</td>
                        <td className="border px-4 !py-2">4</td>
                        <td className="border px-4 !py-2">14</td>
                        <td className="border px-4 !py-2">--</td>
                        <td className="border px-4 !py-2">19</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <td className="border px-4 !py-2">5</td>
                        <td rowSpan={2} className="border px-4 !py-2">الثالث</td>
                        <td className="border px-4 !py-2">الفصل الدراسي الخريفي</td>
                        <td className="border px-4 !py-2">--</td>
                        <td className="border px-4 !py-2">--</td>
                        <td className="border px-4 !py-2">6</td>
                        <td className="border px-4 !py-2">13</td>
                        <td className="border px-4 !py-2">--</td>
                        <td className="border px-4 !py-2">19</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <td className="border px-4 !py-2">6</td>
                        <td className="border px-4 !py-2">الفصل الدراسي الربيعي</td>
                        <td className="border px-4 !py-2">--</td>
                        <td className="border px-4 !py-2">--</td>
                        <td className="border px-4 !py-2">4</td>
                        <td className="border px-4 !py-2">3</td>
                        <td className="border px-4 !py-2">2</td>
                        <td className="border px-4 !py-2">19</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <td className="border px-4 !py-2">7</td>
                        <td rowSpan={2} className="border px-4 py-2">الرابع</td>
                        <td className="border px-4 !py-2">الفصل الدراسي الخريفي</td>
                        <td className="border px-4 !py-2">2</td>
                        <td className="border px-4 !py-2">1</td>
                        <td className="border px-4 !py-2">4</td>
                        <td className="border px-4 !py-2">10</td>
                        <td className="border px-4 !py-2">--</td>
                        <td className="border px-4 !py-2">17</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <td className="border px-4 !py-2">8</td>
                        <td className="border px-4 !py-2">الفصل الدراسي الربيعي</td>
                        <td className="border px-4 !py-2">--</td>
                        <td className="border px-4 !py-2">--</td>
                        <td className="border px-4 !py-2">4</td>
                        <td className="border px-4 !py-2">14</td>
                        <td className="border px-4 !py-2">1</td>
                        <td className="border px-4 !py-2">19</td>
                    </tr>
                    <tr className="bg-gray-50">
                        <td colSpan={3} className="border px-4 py-2">المجموع</td>
                        <td className="border px-4 !py-2">4</td>
                        <td className="border px-4 !py-2">4</td>
                        <td className="border px-4 !py-2">36</td>
                        <td className="border px-4 !py-2">92</td>
                        <td className="border px-4 !py-2">12</td>
                        <td className="border px-4 !py-2">148</td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
};

export default Table10;
