import NavMenu from '../NavMenu'
import { courses } from '../../constants'

const RelatedCourses = () => {
    const getLevelColor = (level) => {
        switch (level) {
            case "الأول":
                return "bg-red-100";
            case "الثاني":
                return "bg-green-100";
            case "الثالث":
                return "bg-purple-100";
            case "الرابع":
                return "bg-sky-100";
            default:
                return "";
        }
    };
    return (
        <div className='w-full flex'>
            <NavMenu />
            <div className='w-full'>
                <div className='flex flex-col gap-6 min-h-screen'>
                    <h3 className='text-2xl md:text-3xl my-6 text-center text-bold'>المقررات المرتبطة</h3>
                    <LevelLegend />
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300 text-center">
                            <thead className="bg-gray-100 text-gray-700 text-sm">
                                <tr>
                                    <th className="p-4 text-[16px] ms:text-lg !font-bold border">#</th>
                                    <th className="p-4 text-[16px] ms:text-lg !font-bold border">اسم المقرر</th>
                                    <th className="p-4 text-[16px] ms:text-lg !font-bold border">الكود</th>
                                    <th className="p-4 text-[16px] ms:text-lg !font-bold border">المستوى</th>
                                    <th className="p-4 text-[16px] ms:text-lg !font-bold border bg-gray-200"> المقرر المطلوب دراسته سابقا</th>
                                    <th className="p-4 text-[16px] ms:text-lg !font-bold border bg-gray-200">الكود</th>
                                    <th className="p-4 text-[16px] ms:text-lg !font-bold border bg-gray-200">المستوى</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {courses.map((item, index) => (
                                    <tr key={item.id} className="hover:bg-gray-50">
                                        <td className={`!px-4 !py-6 border text-[16px] sm:text-lg`}>{index + 1}</td>
                                        <td className={`!px-4 !py-6 border text-[16px] sm:text-lg ${getLevelColor(item.course.level)}`}>{item.course.name}</td>
                                        <td className={`!px-4 !py-6 border text-[16px] sm:text-lg ${getLevelColor(item.course.level)}`}>{item.course.code}</td>
                                        <td className={`!px-4 !py-6 border text-[16px] sm:text-lg ${getLevelColor(item.course.level)}`}>{item.course.level} <br />{item.course.semester}</td>
                                        <td className={`!px-4 !py-6 border text-[16px] sm:text-lg ${getLevelColor(item.prerequisite.level)}`}>{item.prerequisite.name}</td>
                                        <td className={`!px-4 !py-6 border text-[16px] sm:text-lg ${getLevelColor(item.prerequisite.level)}`}>{item.prerequisite.code}</td>
                                        <td className={`!px-4 !py-6 border text-[16px] sm:text-lg ${getLevelColor(item.prerequisite.level)}`}>{`${item.prerequisite.level} - ${item.prerequisite.semester}`}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
const levels = [
    { name: "المستوى الأول", color: "bg-red-100" },
    { name: "المستوى الثاني", color: "bg-green-100" },
    { name: "المستوى الثالث", color: "bg-purple-100" },
    { name: "المستوى الرابع", color: "bg-sky-100" }
];

const LevelLegend = () => {
    return (
        <div className="flex justify-center flex-wrap gap-8 p-4 max-w-full">
            {levels.map((level, index) => (
                <div key={index} className="flex flex-col gap-2 items-center text-sm font-semibold text-gray-800">
                    <span>{level.name}</span>
                    <span className={`w-5 h-5 rounded-full ${level.color}`}></span>
                </div>
            ))}
        </div>
    );
};
export default RelatedCourses