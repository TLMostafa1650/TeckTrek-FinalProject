// src/data/departments.js
import dataScienceImage from "../assets/images/data-science.jpg";
import medicalImage from "../assets/images/medical-information.jpg";
import cyberSecurityImage from "../assets/images/cybersecurity.jpg";
import artificialIntelligenceImage from "../assets/images/Artificial Intelligence.jpg";
import businessImage from "../assets/images/business-information.jpg";


export const departments = [
  {
    id: "ds",
    name: {
      ar: "علوم البيانات (Data Science)",
      en: "Data Science",
    },
    shortDescription: {
      ar: "تحليل البيانات الضخمة، التعلم الآلي، والإحصاء المتقدم لاستخراج المعرفة وبناء النماذج التنبؤية",
      en: "Big data analytics, machine learning, statistical modeling, and predictive insights",
    },
    description: {
      ar: "يهدف قسم علوم البيانات إلى إعداد كوادر متخصصة قادرة على التعامل مع البيانات الضخمة وتحويلها إلى معرفة قابلة للاستخدام، من خلال تدريس تقنيات التعلم الآلي، التنقيب في البيانات، والتصور البياني، بالتعاون مع شركاء من سوق العمل.",
      en: "The Data Science Department prepares specialists capable of turning large volumes of data into actionable insight, covering machine learning, data mining, and visualization techniques in partnership with industry leaders.",
    },
    image: dataScienceImage,
    programsCount: 1,
  },
  {
    id: "medical",
    name: {
      ar: "المعلوماتية الطبية (Medical)",
      en: "Medical Informatics",
    },
    shortDescription: {
      ar: "تطوير الأنظمة الحيوية، معالجة الصور الطبية، وإدارة وتطوير برمجيات الرعاية الصحية الرقمية",
      en: "Biomedical software systems, medical imaging processing, and digital health solutions",
    },
    description: {
      ar: "يجمع قسم المعلوماتية الطبية بين علوم الحاسب والمجال الطبي، ويؤهل الطلاب لتطوير أنظمة معلوماتية صحية وحلول ذكية تدعم التشخيص الطبي وتحسن جودة الرعاية الصحية الرقمية.",
      en: "The Medical Informatics Department bridges computing and healthcare, preparing students to build health information systems and smart solutions that support clinical diagnosis and digital healthcare quality.",
    },
    image: medicalImage,
    programsCount: 1,
  },
  {
    id: "cyber",
    name: {
      ar: "الأمن السيبراني (Cyber Security)",
      en: "Cyber Security",
    },
    shortDescription: {
      ar: "التشفير، حماية الأنظمة والشبكات، وتقييم الثغرات والتصدي للهجمات السيبرانية",
      en: "Cryptography, network defense, security audits, and threat mitigation",
    },
    description: {
      ar: "يعد قسم الأمن السيبراني متخصصين في حماية الأنظمة والشبكات من التهديدات الرقمية المتزايدة، من خلال تدريب عملي على التشفير، اختبار الاختراق، وإدارة المخاطر الأمنية.",
      en: "The Cyber Security Department trains specialists to protect systems and networks from growing digital threats through hands-on practice in cryptography, penetration testing, and security risk management.",
    },
    image: cyberSecurityImage,
    programsCount: 1,
  },
  {
    id: "ai",
    name: {
      ar: "الذكاء الاصطناعي (AI)",
      en: "Artificial Intelligence (AI)",
    },
    shortDescription: {
      ar: "التعلم العميق، الرؤية الحاسوبية، المعالجة اللغوية، وبناء الأنظمة والروبوتات الذكية",
      en: "Deep learning, computer vision, natural language processing, and smart robotics",
    },
    description: {
      ar: "يركز قسم الذكاء الاصطناعي على تعليم الطلاب أساسيات وتطبيقات التعلم العميق والرؤية الحاسوبية ومعالجة اللغات الطبيعية، ويؤهلهم لتصميم أنظمة وروبوتات ذكية تخدم قطاعات متعددة.",
      en: "The AI Department focuses on teaching the fundamentals and applications of deep learning, computer vision, and natural language processing, preparing students to design intelligent systems and robotics for diverse industries.",
    },
    image: artificialIntelligenceImage,
    programsCount: 1,
  },
  {
    id: "business",
    name: {
      ar: "تكنولوجيا الأعمال (Business)",
      en: "Business Informatics",
    },
    shortDescription: {
      ar: "تحليل الأعمال، إدارة مشاريع التكنولوجيا، ونظم المعلومات الإدارية والتحول الرقمي للمؤسسات",
      en: "Business analytics, IT project management, enterprise software, and digital transformation",
    },
    description: {
      ar: "يهتم قسم تكنولوجيا الأعمال بإعداد كوادر قادرة على الربط بين التكنولوجيا وقرارات الأعمال، من خلال تدريس تحليل الأعمال، إدارة المشروعات التقنية، ونظم المعلومات الإدارية اللازمة للتحول الرقمي بالمؤسسات.",
      en: "The Business Informatics Department prepares graduates who bridge technology and business decision-making, covering business analytics, IT project management, and the information systems organizations need for digital transformation.",
    },
    image: businessImage,
    programsCount: 1,
  },
];

export function getDepartmentById(id) {
  return departments.find((d) => d.id === id);
}
