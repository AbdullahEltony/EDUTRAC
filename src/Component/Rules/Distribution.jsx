import React from 'react';
import { programCreditsData as data } from '../../constants';
const ProgramCreditDistribution = () => {
    return (
        <div className="overflow-x-auto mt-8">
            <h3 className='table-title '>المقررات الدراسيةالإجبارية والأختيارية للبرامج الدراسية  </h3>
            <table className="w-full text-center border border-gray-400">
                <thead className="bg-[#fccbbe]">
                    <tr>
                        <th rowSpan="2" className="border p-2">م</th>
                        <th rowSpan="2" className="border p-2">المقررات</th>
                        <th colSpan="2" className="border p-2">عدد المقررات</th>
                        <th rowSpan="2" className="border p-2">إجمالي عدد المقررات</th>
                        <th rowSpan="2" className="border p-2">إجمالي عدد الساعات المعتمدة</th>
                    </tr>
                    <tr>
                        <th className="border p-2">إجباري</th>
                        <th className="border p-2">اختياري</th>
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {data.map((row) => (
                        <tr key={row.id} className="even:bg-gray-50">
                            <td className="border !p-2 text-[16px] sm:text-lg">{row.id}</td>
                            <td className="border !p-2 text-[16px] sm:text-lg">{row.category.split('\n').map((line, index) => <p key={index}>{line}</p>)}</td>
                            <td className="border !p-2 text-[16px] sm:text-lg">{row.mandatory}</td>
                            <td className="border !p-2 text-[16px] sm:text-lg">{row.optional}</td>
                            <td className="border !p-2 text-[16px] sm:text-lg">{row.totalCourses}</td>
                            <td className="border !p-2 text-[16px] sm:text-lg">{row.totalHours}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="2" className="border p-2 text-[16px] sm:text-lg">إجمالي عدد المقررات الدراسية</td>
                        <td className="border !p-2 text-[16px] sm:text-lg">{54}</td>
                        <td className="border !p-2 text-[16px] sm:text-lg">{21}</td>
                        <td className="border !p-2 text-[16px] sm:text-lg">{159}</td>
                        <td className="border !p-2 text-[16px] sm:text-lg">{148}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ProgramCreditDistribution;
