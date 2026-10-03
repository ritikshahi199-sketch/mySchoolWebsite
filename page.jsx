"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const services = [
    {
      title: t("Academic Excellence", "शैक्षणिक उत्कृष्टता"),
      desc: t("Rigorous curriculum aligned with CBSE standards, blending modern technology with core values.", "आधुनिक तकनीक को मुख्य मूल्यों के साथ मिलाते हुए सीबीएसई मानकों के अनुरूप कठोर पाठ्यक्रम।"),
      tag: t("EDUCATION", "शिक्षा"),
    },
    {
      title: t("Modern Laboratories", "आधुनिक विज्ञान प्रयोगशालाएं"),
      desc: t("State-of-the-art science and computer labs designed for hands-on experiential learning.", "हैंड्स-ऑन प्रायोगिक सीखने के लिए डिज़ाइन की गई अत्याधुनिक विज्ञान और कंप्यूटर लैब।"),
      tag: t("INNOVATION", "नवाचार"),
    },
    {
      title: t("Holistic Growth", "सर्वांगीण विकास"),
      desc: t("Comprehensive sports, arts, and extracurricular programs to nurture well-rounded individuals.", "सुयोग्य व्यक्तियों के पोषण के लिए व्यापक खेल, कला और पाठ्येतर कार्यक्रम।"),
      tag: t("DEVELOPMENT", "विकास"),
    },
  ];

  const showcaseImages = [
    { title: t("Smart Campus Experience", "स्मार्ट कैंपस अनुभव"), img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80" },
    { title: t("Collaborative Learning", "सहयोगी शिक्षण"), img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" },
    { title: t("Library & Research Hub", "पुस्तकालय और अनुसंधान केंद्र"), img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <div className="bg-white text-slate-900 font-sans overflow-x-hidden">
      
      {/* 1. Hero Section with Full-Screen Infinite Looping Background Video */}
      <section className="relative min-h-[100vh] flex items-center justify-center text-white px-4 py-28 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-50"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-students-walking-in-the-school-hallway-43285-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-slate-950/60 z-1 pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-from-top">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-amber-400 text-xs font-bold uppercase tracking-widest shadow-lg">
            <span>✨</span> {t("S.P. Public School • Gurvaliya, Kushinagar", "एस.पी. पब्लिक स्कूल • गुरवलिया, कुशीनगर")}
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-none">
            {t("Shaping Futures, ", "भविष्य को आकार देना, ")} <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              {t("Inspiring Excellence.", "उत्कृष्टता को प्रेरित करना।")}
            </span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed">
            {t("Experience a modern educational ecosystem designed to foster creativity, intellect, and strong moral character.", "रचनात्मकता, बुद्धि और मजबूत नैतिक चरित्र को बढ़ावा देने के लिए डिज़ाइन किए गए एक आधुनिक शैक्षणिक पारिस्थितिकी तंत्र का अनुभव करें।")}
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link href="/admissions" className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg hover:scale-105">
              {t("Explore Admissions", "प्रवेश विवरण देखें")}
            </Link>
            <Link href="/facilities" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-md border border-white/20 transition-all hover:scale-105">
              {t("Our Facilities", "हमारी सुविधाएं")}
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Services Section with Rapid Slide Animations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6 animate-from-left">
            <span className="text-amber-600 font-bold text-xs uppercase tracking-widest">{t("WHO WE ARE", "हम कौन हैं")}</span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              {t("Dedicated to superior learning standards.", "उत्कृष्ट शिक्षण मानकों के लिए समर्पित।")}
            </h2>
            <p className="text-slate-600 leading-relaxed text-base">
              {t("At S.P. Public School, Gurvaliya, we combine traditional values with modern pedagogical techniques to ensure holistic student development.", "एस.पी. पब्लिक स्कूल, गुरवलिया में, हम छात्रों के सर्वांगीण विकास को सुनिश्चित करने के लिए पारंपरिक मूल्यों को आधुनिक शिक्षण तकनीकों के साथ जोड़ते हैं।")}
            </p>
            <div className="pt-2">
              <Link href="/about" className="inline-flex items-center gap-2 font-bold text-slate-900 hover:text-amber-600 transition-colors">
                {t("Read more about our legacy", "हमारी विरासत के बारे में अधिक पढ़ें")} <span>→</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 animate-from-right">
            {services.map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-xl space-y-4 group transform hover:-translate-y-1">
                <span className="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-[10px] font-bold tracking-wider">
                  {item.tag}
                </span>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Showcase Gallery Section with Fast Entry & Smooth Stop */}
      <section className="bg-slate-900 text-white py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 animate-from-left">
            <div className="space-y-3">
              <span className="text-amber-400 font-bold text-xs uppercase tracking-widest">{t("CAMPUS SNAPSHOTS", "परिसर की झलकियां")}</span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
                {t("Glimpse of Life at School", "स्कूल में जीवन की एक झलक")}
              </h2>
            </div>
            <Link href="/gallery" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all">
              {t("View Full Gallery →", "पूर्ण गैलरी देखें →")}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-from-bottom">
            {showcaseImages.map((s, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl bg-slate-800 border border-slate-700 shadow-md transform transition-all duration-500 hover:-translate-y-2">
                <div className="h-72 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                </div>
                <div className="p-6 bg-slate-900">
                  <h3 className="font-bold text-lg text-white group-hover:text-amber-400 transition-colors">{s.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}