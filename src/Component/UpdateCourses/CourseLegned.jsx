import { courseTypes } from "../../constants";
export const CourseLegend = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-[97%] mx-auto" >
    {courseTypes.map((type) => (
      <div key={type.name} className="flex items-center gap-4 sm:gap-3">
        <span className="w-6 sm:w-6 h-6 sm:h-6 rounded-full" style={{ backgroundColor: type.color }}></span>
        <span className="text-black text-lg sm:text-2xl font-normal">{type.name}</span>
      </div>
    ))}
    <div className="flex gap-4 sm:gap-3 items-center">
      <span className="mt-1"><i class="fas fa-times text-2xl text-red-500"></i></span>
      <span className="text-black text-lg sm:text-2xl font-normal" >متعثر</span>
    </div>
  </div>
);
