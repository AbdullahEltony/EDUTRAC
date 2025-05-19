import React from 'react';

const ProgramCreditDistribution = () => {
    const data = [
        {
            id: 1,
            category: 'متطلبات جامعة',
            mandatory: 3,
            optional: 4,
            totalCourses: 7,
            totalHours: 8,
        },
        {
            id: 2,
            category: 'متطلبات كلية',
            mandatory: 18,
            optional: '--',
            totalCourses: 18,
            totalHours: 36,
        },
        {
            id: 3,
            category: 'مقررات تخصص\nإعداد معلم الإقتصاد المنزلي التربوي',
            mandatory: 42,
            optional: 5,
            totalCourses: 47,
            totalHours: 104,
        },
        {
            id: 4,
            category: "مقررات تخصص\nإعداد معلم التربية الفنية",
            mandatory: 41,
            optional: 6,
            totalCourses: 48,
            totalHours: 104,
        },
        {
            id: 5,
            category: 'مقررات تخصص\nإعداد أخصائي تكنولوجيا التعليم',
            mandatory: 33,
            optional: 6,
            totalCourses: 39,
            totalHours: 104,
        },

    ];

    return (
        <div className="overflow-x-auto mt-8">
            <h3 className='table-title '>المقررات الدراسيةالإجبارية والأختيارية للبرامج الدراسية  </h3>
            <table className="w-full text-center border border-gray-400">
                <thead className="bg-orange-200">
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
                            <td className="border p-2">{row.id}</td>
                            <td className="border p-2">{row.category.split('\n').map((line, index) => <p key={index}>{line}</p>)}</td>
                            <td className="border p-2">{row.mandatory}</td>
                            <td className="border p-2">{row.optional}</td>
                            <td className="border p-2">{row.totalCourses}</td>
                            <td className="border p-2">{row.totalHours}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="2" className="border p-2">إجمالي عدد المقررات الدراسية</td>
                        <td className="border p-2">{137}</td>
                        <td className="border p-2">{21}</td>
                        <td className="border p-2">{159}</td>
                        <td className="border p-2">{148}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ProgramCreditDistribution;
