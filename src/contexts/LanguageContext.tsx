import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation objects
const translations = {
  en: {
    // Header
    'header.features': 'Features',
    'header.products': 'Products',
    'header.designDev': 'Design & Development',
    'header.community': 'Community',
    'header.ourWork': 'Our Work',
    'header.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Open Source Robotics & Physical AI Development',
    'hero.subtitle': 'Accelerating innovation through collaborative development of cutting-edge robotics solutions and intelligent physical systems.',
    'hero.cta.primary': 'Explore Our Solutions',
    'hero.cta.secondary': 'View Documentation',
    
    // Features
    'features.title': 'Features',
    'features.subtitle': 'Discover our comprehensive suite of open-source modules designed to accelerate your robotics development',
    'features.systemControl.title': 'System Control Modules',
    'features.systemControl.description': 'Comprehensive system control solutions designed for robotics applications with real-time performance and reliability.',
    'features.analysis.title': 'Flexible Analysis Framework',
    'features.analysis.description': 'Advanced analytical tools that adapt to your specific use cases, providing deep insights into system performance.',
    'features.motorControl.title': 'High Performance Motor Control',
    'features.motorControl.description': 'Precision motor control systems optimized for demanding robotics and physical AI applications.',
    'features.ros2.title': 'ROS2 Integration',
    'features.ros2.description': 'Seamless integration with ROS2 ecosystem, ensuring compatibility with modern robotics development workflows.',
    
    // Design & Development
    'designDev.title': 'Design & Development',
    'designDev.breadcrumb': 'Design & Development',
    'designDev.services.title': 'Development Services I Provide',
    'designDev.contact.title': 'Let\'s Talk for Your',
    'designDev.contact.subtitle': 'Next Projects',
    'designDev.contact.general': 'General Contact',
    'designDev.contact.hardware': 'Hardware Development & Manufacturing',
    'designDev.form.name': 'Your Name',
    'designDev.form.email': 'Email',
    'designDev.form.message': 'Message',
    'designDev.form.send': 'Send Message',
    
    // Community
    'community.title': 'Community',
    'community.breadcrumb': 'Community',
    'community.socialMedia.title': 'Connect with Our Community',
    'community.socialMedia.subtitle': 'Join our vibrant community of robotics enthusiasts, developers, and researchers.',
    
    // Kardus Challenge
    'kardus.title': 'Kardus Challenge',
    'kardus.subtitle': 'Build Amazing Things from Cardboard',
    'kardus.description': 'An open-source challenge for builders, researchers, and makers. Create incredible projects using cardboard or build anything that fits within the size of an ordinary cardboard box.',
    'kardus.cta': 'Join the Challenge',
    
    // Common
    'common.learnMore': 'Learn more',
    'common.explore': 'Explore',
    'common.comingSoon': 'Coming Soon',
    'common.joinWaitlist': 'Join Waitlist'
  },
  id: {
    // Header
    'header.features': 'Fitur',
    'header.products': 'Produk',
    'header.designDev': 'Desain & Pengembangan',
    'header.community': 'Komunitas',
    'header.ourWork': 'Karya Kami',
    'header.contact': 'Kontak',
    
    // Hero Section
    'hero.title': 'Pengembangan Robotika & AI Fisik Open Source',
    'hero.subtitle': 'Mempercepat inovasi melalui pengembangan kolaboratif solusi robotika mutakhir dan sistem fisik cerdas.',
    'hero.cta.primary': 'Jelajahi Solusi Kami',
    'hero.cta.secondary': 'Lihat Dokumentasi',
    
    // Features
    'features.title': 'Fitur',
    'features.subtitle': 'Temukan rangkaian lengkap modul open-source kami yang dirancang untuk mempercepat pengembangan robotika Anda',
    'features.systemControl.title': 'Modul Kontrol Sistem',
    'features.systemControl.description': 'Solusi kontrol sistem komprehensif yang dirancang untuk aplikasi robotika dengan performa dan keandalan real-time.',
    'features.analysis.title': 'Framework Analisis Fleksibel',
    'features.analysis.description': 'Alat analitik canggih yang beradaptasi dengan kasus penggunaan spesifik Anda, memberikan wawasan mendalam tentang performa sistem.',
    'features.motorControl.title': 'Kontrol Motor Performa Tinggi',
    'features.motorControl.description': 'Sistem kontrol motor presisi yang dioptimalkan untuk aplikasi robotika dan AI fisik yang menuntut.',
    'features.ros2.title': 'Integrasi ROS2',
    'features.ros2.description': 'Integrasi mulus dengan ekosistem ROS2, memastikan kompatibilitas dengan alur kerja pengembangan robotika modern.',
    
    // Design & Development
    'designDev.title': 'Desain & Pengembangan',
    'designDev.breadcrumb': 'Desain & Pengembangan',
    'designDev.services.title': 'Layanan Pengembangan yang Saya Sediakan',
    'designDev.contact.title': 'Mari Bicara untuk',
    'designDev.contact.subtitle': 'Proyek Selanjutnya Anda',
    'designDev.contact.general': 'Kontak Umum',
    'designDev.contact.hardware': 'Pengembangan & Manufaktur Perangkat Keras',
    'designDev.form.name': 'Nama Anda',
    'designDev.form.email': 'Email',
    'designDev.form.message': 'Pesan',
    'designDev.form.send': 'Kirim Pesan',
    
    // Community
    'community.title': 'Komunitas',
    'community.breadcrumb': 'Komunitas',
    'community.socialMedia.title': 'Bergabung dengan Komunitas Kami',
    'community.socialMedia.subtitle': 'Bergabunglah dengan komunitas yang dinamis dari para penggemar robotika, pengembang, dan peneliti.',
    
    // Kardus Challenge
    'kardus.title': 'Tantangan Kardus',
    'kardus.subtitle': 'Bangun Hal-hal Menakjubkan dari Kardus',
    'kardus.description': 'Tantangan open-source untuk pembuat, peneliti, dan maker. Ciptakan proyek luar biasa menggunakan kardus atau buat apa saja yang muat dalam ukuran kotak kardus biasa.',
    'kardus.cta': 'Ikut Tantangan',
    
    // Common
    'common.learnMore': 'Pelajari lebih lanjut',
    'common.explore': 'Jelajahi',
    'common.comingSoon': 'Segera Hadir',
    'common.joinWaitlist': 'Gabung Daftar Tunggu'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'id' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};