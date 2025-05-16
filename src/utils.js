export const getCourseColor = (courseType, isOptional) => {
  const type = getCourseTypeLabel(courseType);

  if (type === "جامعة" && isOptional) return "bg-[#e69595]";
  if (type === "تخصص" && isOptional) return "bg-[#edd5d5]";
  if (type === "تخصص") return "bg-[#cddcee]";
  if (type === "جامعة") return "bg-[#83a8d5]";
  if (type === "كلية") return "bg-[#497fc1]";

  return "";
};

export const getCourseTypeLabel = (type) => {
  switch (type) {
    case 0:
      return "تخصص";
    case 1:
      return "كلية";
    case 2:
      return "جامعة";
    default:
      return "غير معروف";
  }
};
