export const SITE = {
  name: "JR Agro Chemicals",
  tagline: {
    en: "Nourishing Nature. Enriching Lives.",
    hi: "प्रकृति का पोषण। जीवन की समृद्धि।",
    mr: "निसर्गाचे पोषण. जीवनाची समृद्धी.",
  },
  dreamLine: {
    en: "Success Your Dream With Us",
    hi: "आपल्या स्वप्नांची यशस्वी वाट — आमच्यासोबत",
    mr: "तुमच्या स्वप्नांचे यश — आमच्यासोबत",
  },
  address:
    "Amit Apt. Flat No-7, Gulmohor Colony, Sangli 416416, Maharashtra, India",
  addressShort: "Gulmohor Colony, Sangli 416416, Maharashtra",
  phones: ["+91 9822623658", "+91 8983434736"],
  whatsapp: "918983434736",
  whatsappDisplay: "+91 8983434736",
  contacts: ["JRAgro Team", "JRAgro Office"],
  emailGeneral: "jragrochem@gmail.com",
  emailSales: "jragrochem@gmail.com",
  website: "www.jragrochemicals.com",
  mapQuery: "Gulmohar Colony, Sangli, Maharashtra 416416",
  year: new Date().getFullYear(),
};

export const waLink = (message) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

export const mailLink = (subject, body) =>
  `mailto:${SITE.emailSales}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const productMail = (productName) =>
  mailLink(
    `Product Enquiry: ${productName} — JR Agro Chemicals Website`,
    `Hello JR Agro Chemicals,\n\nI would like to know more about ${productName}.\n\nName: \nMobile: \nDistrict: \n\nThank you.`,
  );
