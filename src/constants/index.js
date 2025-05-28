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
    icon: "fas fa-book-open",
  },
  {
    name: "المقررات النهائية",
    link: "/finalCourses",
    icon: "fas fa-file-signature",
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
    name: "رضوى ياسر عبدالرحمن",
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
    name: "ضحى صلاح عبدالله",
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
    mandatory: 3,
    optional: 4,
    totalCourses: 7,
    totalHours: 8,
  },
  {
    id: 2,
    category: "متطلبات كلية",
    mandatory: 18,
    optional: "--",
    totalCourses: 18,
    totalHours: 36,
  },
  {
    id: 3,
    category: "مقررات تخصص\nإعداد أخصائي تكنولوجيا التعليم",
    mandatory: 33,
    optional: 6,
    totalCourses: 39,
    totalHours: 104,
  },
];

export const testimonials = [
  {
    id: 0,
    name: "حازم أحمد",
    work: "طالب في المستوي الرابع",
    message:"بالنسبة لي، منصة Edutrack مش مجرد منصة للإرشاد، دي فعلاً بتساعدني وبتوجهني في رحلتي التعليمية خطوة بخطوة.",
    image: "./hazem.jpg",
  },
  {
    id: 1,
    work: "طالب في المستوي الرابع",
    message:
      " ساعدتني منصة Track من خلال صفحة 'لوائح ونظم' على معرفة عدد ساعات التخرج، المقررات المطلوبة، والحد الأدنى للانتقال بين المستويات الدراسية.",
    image: "./ahmed.jpg",
    name: "أحمد محمد محمود",
  },
  {
    id: 2,
    work: "طالب في المستوي الرابع",
    message:
      " منصة Edutrack أتاحت ليَ المنصة تصوراً دقيقاً لمساري الأكاديمي، ما ساعدني على تعزيز كفاءتي في اختيار المقررات المناسبة لكل فصل دراسي.  ",
    image: "./osama.jpg",
    name: "أسامة أنور حنفي",
  },
  {
    id: 3,
    work: "طالب في المستوي الرابع",
    message:
      " منصة Edutrack track  منصة تمثل خطوة متقدمة نحو التحول الرقمي في الإرشاد الأكاديمي، حيث توفر بيانات آنية تدعم الطالب في اتخاذ قرارات مدروسة.",
    image: "./khaled.jpg",
    name: "خالد عبدالظاهر كمال",
  },
  {
    id: 4,
    work: "طالب في المستوي الرابع",
    message:
      " منصة Edutrack ساهمت في تحسين أدائي الأكاديمي من خلال تقديم تصوّر واضح لمساري الدراسي ومعدل GPAالتراكمي.  ",
    image: "./ziad.jpg",
    name: "زياد محمد مصطفي",
  },
  {
    id: 5,
    work: "طالب في المستوي الرابع",
    message:
      " منصة Edutrack ساعدتني علي تتبع الساعات الدراسية المتبقية بدقة، مما سهّل عليّ وضع خطة أكاديمية فعالة للتخرج في الوقت المحدد.",
    image: "./radua.jpg",
    name: "رضوى ياسر عبدالرحمن",
  },
];
