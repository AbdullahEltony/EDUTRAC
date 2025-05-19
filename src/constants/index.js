export const baseURL = "https://edutrack.runasp.net";

export const NavLinks = [
  {
    name: "الرئيسية",
    link: "/home",
    icon: "fa-solid fa-house",
  },
  {
    name: "المقررات الدراسية",
    link: "/updateCourses",
    icon: "fa-regular fa-clipboard",
  },
  {
    name: "المقررات النهائية",
    link: "/finalCourses",
    icon: "fa-regular fa-clipboard",
  },
  {
    name: " لوائح وقوانين",
    link: "/rules",
    icon: "fa-solid fa-list-check",
  },
  {
    name: "نبذة عنا",
    link: "/aboutus",
    icon: "fa-solid fa-users",
  },
  {
    name: "ChatBot للتواصل",
    link: "/chatBot",
    icon: "fa-solid fa-robot",
  },
];

export const Team = [
  {
    id: 1,
    image: "./ziad.jpg",
    name: "زياد محمد مصطفي",
  },
  {
    id: 2,
    image: "./khaled.jpg",
    name: "خالد عبدالظاهر كمال",
  },
  {
    id: 3,
    image: "./hazem.jpg",
    name: "حازم أحمد محمود",
  },
  {
    id: 4,
    image: "./ahmed.jpg",
    name: "أحمد محمد محمود",
  },
  {
    id: 5,
    image: "./osama.jpg",
    name: "أسامة أنور حنفي",
  },
  {
    id: 6,
    image: "./fatma.jpg",
    name: "فاطمة الزهراء عصام",
  },
  {
    id: 7,
    image: "./radua.jpg",
    name: "رضوي ياسر عبدالرحمن",
  },
  {
    id: 8,
    image: "./zynab.jpg",
    name: "زينب سيد رمضان",
  },
  {
    id: 9,
    image: "./aya.jpg",
    name: "ءاية محمد عبدالتواب",
  },
  {
    id: 10,
    image: "./duha.jpg",
    name: "ضحي صلاح عبدالله",
  },
  {
    id: 11,
    image: "./dalia.jpg",
    name: "داليا مصطفي إبراهيم",
  },
  {
    id: 12,
    image: "./yara.jpg",
    name: "يارا ناصر سيد",
  },
];

export const courseTypes = [
  { name: "إجباري متطلب كلية", color: "#497fc1" },
  { name: "إجباري متطلب جامعة", color: "#83a8d5" },
  { name: "إجباري تخصص", color: "#cddcee" },
  { name: "اختياري متطلب جامعة", color: "#eac885" },
  { name: "اختياري تخصص", color: "#f1ecca" },
];

export const programCreditsData = [
  {
    id: 1,
    category: "متطلبات جامعة",
    compulsory: 6,
    elective: 2,
    total: 8,
    avgHour: 3.6,
    avgGPA: 1.04,
  },
  {
    id: 2,
    category: "متطلبات كلية",
    compulsory: 43,
    elective: 0,
    total: 43,
    avgHour: 13.4,
    avgGPA: 1.04,
  },
  {
    id: 3,
    category: "متطلبات تخصص إجباري",
    compulsory: 81,
    elective: 0,
    total: 81,
    avgHour: 27.1,
    avgGPA: 1.04,
  },
  {
    id: 4,
    category: "متطلبات تخصص اختياري",
    compulsory: 0,
    elective: 6,
    total: 6,
    avgHour: 1.8,
    avgGPA: 0.47,
  },
  {
    id: 5,
    category: "مقررات تخصصية اختيارية",
    compulsory: 0,
    elective: 6,
    total: 6,
    avgHour: 1.8,
    avgGPA: 0.43,
  },
  {
    id: 6,
    category: "مقررات تكنولوجيا التعليم",
    compulsory: 3,
    elective: 0,
    total: 3,
    avgHour: 1.0,
    avgGPA: 0.34,
  },
];
