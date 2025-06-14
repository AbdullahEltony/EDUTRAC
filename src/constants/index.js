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
    name: "المقررات المرتبطة",
    link: "/RealtedCourses",
    icon: "fas fa-book-bookmark",
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
    name: "خالد أحمد",
    work: "طالب في المستوي الرابع",
    message:
      "بالنسبة لي، منصة Edutrack مش مجرد منصة للإرشاد، دي فعلاً بتساعدني وبتوجهني في رحلتي التعليمية خطوة بخطوة.",
    image: "./salem.jpg",
  },
  {
    id: 1,
    work: "طالب في المستوي الرابع",
    message:
      " ساعدتني منصة Track من خلال صفحة 'لوائح ونظم' على معرفة عدد ساعات التخرج، المقررات المطلوبة، والحد الأدنى للانتقال بين المستويات الدراسية.",
    image: "./sliman.jpg",
    name: "سليمان محمد ",
  },
  {
    id: 2,
    work: "طالب في المستوي الثاني",
    message:
      " منصة Edutrack أتاحت ليَ المنصة تصوراً دقيقاً لمساري الأكاديمي، ما ساعدني على تعزيز كفاءتي في اختيار المقررات المناسبة لكل فصل دراسي.  ",
    image: "./sayem.jpg",
    name: " أنور الصايم",
  },
  {
    id: 3,
    work: " استاذ مساعد في قسم تكنولوجيا التعليم",
    message:
      " منصة Edutrack track  منصة تمثل خطوة متقدمة نحو التحول الرقمي في الإرشاد الأكاديمي، حيث توفر بيانات آنية تدعم الطالب في اتخاذ قرارات مدروسة.",
    image: "./ashraf.jpg",
    name: "  اشرف عبد الستار",
  },
  {
    id: 4,
    work: "طالب في المستوي الثالث",
    message:
      " منصة Edutrack ساهمت في تحسين أدائي الأكاديمي من خلال تقديم تصوّر واضح لمساري الدراسي ومعدل GPAالتراكمي.  ",
    image: "./sheham.jpg",
    name: " محمد خالد",
  },
  {
    id: 5,
    work: "طالب في المستوي الرابع",
    message:
      " منصة Edutrack ساعدتني علي تتبع الساعات الدراسية المتبقية بدقة، مما سهّل عليّ وضع خطة أكاديمية فعالة للتخرج في الوقت المحدد.",

    image: "./abdullah.jpg",
    name: "محمود كمال",
  },
];
export const courses = [
  {
    id: 1,
    course: {
      name: "مصادر التعلم السمعية الرقمية",
      code: "TEC107",
      level: "الأول",
      semester: "فصل الربيع",
    },
    prerequisite: {
      name: "مراكز مصادر التعلم",
      code: "TEC103",
      level: "الأول",
      semester: "فصل الخريف",
    },
  },
  {
    id: 2,
    course: {
      name: "التصوير الرقمي والثقافة البصرية",
      code: "TEC201",
      level: "الثاني",
      semester: "فصل الخريف",
    },
    prerequisite: {
      name: "أساسيات التصوير الرقمي",
      code: "TEC106",
      level: "الأول",
      semester: "فصل الربيع",
    },
  },
  {
    id: 3,
    course: {
      name: "قواعد البيانات",
      code: "TEC202",
      level: "الثاني",
      semester: "فصل الخريف",
    },
    prerequisite: {
      name: "مقدمة في الحاسب الآلي",
      code: "TEC102",
      level: "الأول",
      semester: "فصل الخريف",
    },
  },
  {
    id: 4,
    course: {
      name: "تاريخ التربية ونظام التعليم في مصر",
      code: "FAC202",
      level: "الثاني",
      semester: "فصل الخريف",
    },
    prerequisite: {
      name: "مدخل إلى العلوم التربوية",
      code: "FAC101",
      level: "الأول",
      semester: "فصل الخريف",
    },
  },
  {
    id: 5,
    course: {
      name: "التعليم / التدريس المصغر",
      code: "FAC203",
      level: "الثاني",
      semester: "فصل الخريف",
    },
    prerequisite: {
      name: "طرق تدريس عامة",
      code: "FAC104",
      level: "الأول",
      semester: "فصل الربيع",
    },
  },
  {
    id: 6,
    course: {
      name: "علم نفس تعليمي (نظريات تعلم)",
      code: "FAC205",
      level: "الثاني",
      semester: "فصل الربيع",
    },
    prerequisite: {
      name: "مدخل إلى العلوم النفسية",
      code: "FAC103",
      level: "الأول",
      semester: "فصل الربيع",
    },
  },
  {
    id: 7,
    course: {
      name: "نظم إدارة التعلم الإلكتروني",
      code: "TEC205",
      level: "الثاني",
      semester: "فصل الربيع",
    },
    prerequisite: {
      name: "إدارة الفصول الإلكترونية",
      code: "TEC203",
      level: "الثاني",
      semester: "فصل الخريف",
    },
  },
  {
    id: 8,
    course: {
      name: "لغات البرمجة (2) المتطورة",
      code: "TEC301",
      level: "الثالث",
      semester: "فصل الخريف",
    },
    prerequisite: {
      name: "لغات البرمجة (1) المتطورة",
      code: "TEC207",
      level: "الثاني",
      semester: "فصل الربيع",
    },
  },
  {
    id: 9,
    course: {
      name: "تدريب (1) ميداني",
      code: "TEC305",
      level: "الثالث",
      semester: "فصل الخريف",
    },
    prerequisite: {
      name: "التعليم / التدريس المصغر",
      code: "FAC203",
      level: "الثاني",
      semester: "فصل الخريف",
    },
  },
  {
    id: 10,
    course: {
      name: "طرق واستراتيجيات التدريس في التخصص",
      code: "FAC302",
      level: "الثالث",
      semester: "فصل الخريف",
    },
    prerequisite: {
      name: "طرق تدريس عامة",
      code: "FAC104",
      level: "الأول",
      semester: "فصل الربيع",
    },
  },
  {
    id: 11,
    course: {
      name: "التقويم الإلكتروني",
      code: "TEC306",
      level: "الثالث",
      semester: "فصل الربيع",
    },
    prerequisite: {
      name: "نظم إدارة التعلم الإلكتروني",
      code: "TEC205",
      level: "الثاني",
      semester: "فصل الربيع",
    },
  },
  {
    id: 12,
    course: {
      name: "الصحة النفسية والإرشاد النفسي",
      code: "FAC305",
      level: "الثالث",
      semester: "فصل الربيع",
    },
    prerequisite: {
      name: "علم نفس النمو",
      code: "FAC201",
      level: "الثاني",
      semester: "فصل الخريف",
    },
  },
  {
    id: 13,
    course: {
      name: "تدريب (2) ميداني",
      code: "TEC310",
      level: "الثالث",
      semester: "فصل الربيع",
    },
    prerequisite: {
      name: "تدريب (1) ميداني",
      code: "TEC305",
      level: "الثالث",
      semester: "فصل الخريف",
    },
  },
  {
    id: 14,
    course: {
      name: "تدريب (3) ميداني",
      code: "TEC404",
      level: "الرابع",
      semester: "فصل الخريف",
    },
    prerequisite: {
      name: "تدريب (2) ميداني",
      code: "TEC310",
      level: "الثالث",
      semester: "فصل الربيع",
    },
  },
  {
    id: 15,
    course: {
      name: "تطبيقات في التعليم الإلكتروني",
      code: "TEC406",
      level: "الرابع",
      semester: "فصل الربيع",
    },
    prerequisite: {
      name: "التقويم الإلكتروني",
      code: "TEC306",
      level: "الثالث",
      semester: "فصل الربيع",
    },
  },
  {
    id: 16,
    course: {
      name: "علم نفس تعليمي (قدرات عقلية)",
      code: "FAC402",
      level: "الرابع",
      semester: "فصل الخريف",
    },
    prerequisite: {
      name: "علم نفس تعليمي (نظريات تعلم)",
      code: "FAC205",
      level: "الثاني",
      semester: "فصل الربيع",
    },
  },
  {
    id: 17,
    course: {
      name: "تخطيط وتطوير وتقويم المناهج",
      code: "FAC403",
      level: "الرابع",
      semester: "فصل الربيع",
    },
    prerequisite: {
      name: "المناهج وتنظيمها",
      code: "FAC102",
      level: "الأول",
      semester: "فصل الخريف",
    },
  },
  {
    id: 18,
    course: {
      name: "تدريب (4) ميداني",
      code: "TEC409",
      level: "الرابع",
      semester: "فصل الربيع",
    },
    prerequisite: {
      name: "تدريب (3) ميداني",
      code: "TEC404",
      level: "الرابع",
      semester: "فصل الخريف",
    },
  },
];
