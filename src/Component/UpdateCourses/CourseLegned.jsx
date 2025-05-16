import { courseTypes } from "../../constants";
export const CourseLegend = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" >
    {courseTypes.map((type) => (
      <div key={type.name} className="flex items-center gap-4 sm:gap-3">
        <span className="w-14 sm:w-26 h-6 sm:h-9" style={{ backgroundColor: type.color }}></span>
        <span className="text-black text-lg sm:text-2xl font-normal">{type.name}</span>
      </div>
    ))}
  </div>
);
