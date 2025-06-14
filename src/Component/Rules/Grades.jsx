import React from "react";

const GradeTable = () => {
    const data = [
        { grade: "97–100", evaluation: "A+", points: "4.0" },
        { grade: "93–96", evaluation: "A", points: "4.0" },
        { grade: "90–92", evaluation: "A-", points: "3.7" },
        { grade: "87–89", evaluation: "B+", points: "3.3" },
        { grade: "83–86", evaluation: "B", points: "3.0" },
        { grade: "80–82", evaluation: "B-", points: "2.7" },
        { grade: "77–79", evaluation: "C+", points: "2.3" },
        { grade: "73–76", evaluation: "C", points: "2.0" },
        { grade: "70–72", evaluation: "C-", points: "1.7" },
        { grade: "67–69", evaluation: "D+", points: "1.3" },
        { grade: "63–66", evaluation: "D", points: "1.0" },
        { grade: "60–62", evaluation: "D-", points: "0.7" },
        { grade: "أقل من 60", evaluation: "F", points: "0.0" },
    ];

    return (
        <div className="overflow-x-auto w-full mt-5">
            <h3 className="table-title">التقديرات والدرجات</h3>
            <table className="able-auto w-full border-collapse border  bg-white text-center">
                <thead className="bg-orange-200">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">عدد النقاط</th>
                        <th className="border border-gray-300 px-4 py-2">
                            التقدير بنظام الساعات المعتمدة
                        </th>
                        <th className="border border-gray-300 px-4 py-2">الدرجة</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr
                            key={index}
                            className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                        >
                            <td className="border border-gray-300 px-4 !py-2">{row.points}</td>
                            <td className="border border-gray-300 px-4 !py-2">
                                {row.evaluation}
                            </td>
                            <td className="border border-gray-300 px-4 !py-2">{row.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GradeTable;
