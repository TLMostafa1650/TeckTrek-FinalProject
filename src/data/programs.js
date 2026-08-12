// src/data/programs.js
// One Bachelor's program per department (matches the faculty's
// actual specialization structure already reflected across the site).

import dataScienceImage from "../assets/images/data-science.jpg";
import medicalImage from "../assets/images/medical-information.jpg";
import cyberSecurityImage from "../assets/images/cybersecurity.jpg";
import artificialIntelligenceImage from "../assets/images/Artificial Intelligence.jpg";
import businessImage from "../assets/images/business-information.jpg";

export const programs = [
  {
    id: "ds",
    departmentId: "ds",
    name: { ar: "بكالوريوس علوم البيانات", en: "Bachelor of Data Science" },
    shortDescription: {
      ar: "تحليل البيانات الضخمة، التعلم الآلي، والإحصاء المتقدم لاستخراج المعرفة وبناء النماذج التنبؤية",
      en: "Big data analytics, machine learning, statistical modeling, and predictive insights",
    },
    description: {
      ar: "يؤهل البرنامج الطلاب لاستخدام أدوات التحليل الإحصائي والتعلم الآلي في استخراج المعرفة من البيانات الضخمة، وبناء نماذج تنبؤية تدعم القرار في مختلف الصناعات.",
      en: "The program equips students with statistical analysis and machine learning tools to extract knowledge from big data and build predictive models that support decision-making across industries.",
    },
    duration: { ar: "4 سنوات", en: "4 Years" },
    degree: { ar: "بكالوريوس", en: "Bachelor" },
    image: dataScienceImage,
  },
  {
    id: "medical",
    departmentId: "medical",
    name: { ar: "بكالوريوس المعلوماتية الطبية", en: "Bachelor of Medical Informatics" },
    shortDescription: {
      ar: "تطوير الأنظمة الحيوية، معالجة الصور الطبية، وإدارة وتطوير برمجيات الرعاية الصحية الرقمية",
      en: "Biomedical software systems, medical imaging processing, and digital health solutions",
    },
    description: {
      ar: "يمزج البرنامج بين أساسيات الحوسبة والمجال الطبي، ويؤهل الخريجين لتطوير أنظمة معلوماتية صحية وحلول ذكية تخدم المستشفيات ومراكز الرعاية الصحية.",
      en: "The program blends computing fundamentals with the medical field, preparing graduates to develop health information systems and smart solutions for hospitals and healthcare centers.",
    },
    duration: { ar: "4 سنوات", en: "4 Years" },
    degree: { ar: "بكالوريوس", en: "Bachelor" },
    image: medicalImage,
  },
  {
    id: "cyber",
    departmentId: "cyber",
    name: { ar: "بكالوريوس الأمن السيبراني", en: "Bachelor of Cyber Security" },
    shortDescription: {
      ar: "التشفير، حماية الأنظمة والشبكات، وتقييم الثغرات والتصدي للهجمات السيبرانية",
      en: "Cryptography, network defense, security audits, and threat mitigation",
    },
    description: {
      ar: "يقدم البرنامج تدريبًا عمليًا مكثفًا في التشفير، اختبار الاختراق، وإدارة المخاطر الأمنية، ليخرّج متخصصين قادرين على حماية البنية التحتية الرقمية للمؤسسات.",
      en: "The program offers intensive hands-on training in cryptography, penetration testing, and security risk management, producing specialists capable of protecting organizations' digital infrastructure.",
    },
    duration: { ar: "4 سنوات", en: "4 Years" },
    degree: { ar: "بكالوريوس", en: "Bachelor" },
    image: cyberSecurityImage,
  },
  {
    id: "ai",
    departmentId: "ai",
    name: { ar: "بكالوريوس الذكاء الاصطناعي", en: "Bachelor of Artificial Intelligence" },
    shortDescription: {
      ar: "التعلم العميق، الرؤية الحاسوبية، المعالجة اللغوية، وبناء الأنظمة والروبوتات الذكية",
      en: "Deep learning, computer vision, natural language processing, and smart robotics",
    },
    description: {
      ar: "يغطي البرنامج أساسيات وتطبيقات التعلم العميق والرؤية الحاسوبية ومعالجة اللغات الطبيعية، ويؤهل الطلاب لتصميم أنظمة وروبوتات ذكية تخدم قطاعات متعددة.",
      en: "The program covers the fundamentals and applications of deep learning, computer vision, and natural language processing, preparing students to design intelligent systems and robotics for diverse industries.",
    },
    duration: { ar: "4 سنوات", en: "4 Years" },
    degree: { ar: "بكالوريوس", en: "Bachelor" },
    image: artificialIntelligenceImage,
  },
  {
    id: "business",
    departmentId: "business",
    name: { ar: "بكالوريوس تكنولوجيا الأعمال", en: "Bachelor of Business Informatics" },
    shortDescription: {
      ar: "تحليل الأعمال، إدارة مشاريع التكنولوجيا، ونظم المعلومات الإدارية والتحول الرقمي للمؤسسات",
      en: "Business analytics, IT project management, enterprise software, and digital transformation",
    },
    description: {
      ar: "يعد البرنامج خريجين قادرين على الربط بين التكنولوجيا وقرارات الأعمال، من خلال تحليل الأعمال، إدارة المشروعات التقنية، ونظم المعلومات الإدارية اللازمة للتحول الرقمي.",
      en: "The program prepares graduates who bridge technology and business decision-making through business analytics, IT project management, and the information systems organizations need for digital transformation.",
    },
    duration: { ar: "4 سنوات", en: "4 Years" },
    degree: { ar: "بكالوريوس", en: "Bachelor" },
    image: businessImage,
  },
];

export function getProgramById(id) {
  return programs.find((p) => p.id === id);
}

export function getProgramsByDepartment(departmentId) {
  return programs.filter((p) => p.departmentId === departmentId);
}
