import React from 'react';

const LevelProgressionTable = () => {
    const data = [
        { from: 'الأول', to: 'الثاني', hours: '24 ساعة معتمدة' },
        { from: 'الثاني', to: 'الثالث', hours: '48 ساعة معتمدة' },
        { from: 'الثالث', to: 'الرابع', hours: '72 ساعة معتمدة' },
    ];

    return (
        <div className="overflow-x-auto mt-6">
            <h3 className="table-title">  الحد الأدني للإنتقال من مستوي لمستوي أعلي</h3>
            <table className="min-w-full table-auto border text-center">
                <thead className="bg-orange-200">
                    <tr>
                        <th className="border px-4 py-2">من المستوى</th>
                        <th className="border px-4 py-2">إلى المستوى</th>
                        <th className="border px-4 py-2">الحد الأدنى من الساعات المعتمدة للأنتقال للمستوي الأعلي</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                            <td className="border px-4 !py-2">{row.from}</td>
                            <td className="border px-4 !py-2">{row.to}</td>
                            <td className="border px-4 !py-2">{row.hours}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LevelProgressionTable;
