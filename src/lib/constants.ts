import { Crown, Users, Gem, BookOpen, Award, GraduationCap, Heart } from 'lucide-react';
import type { ServiceItem, TestimonialItem, VendorItem } from './types';

export const WHATSAPP_NUMBER = '6287812234804';

export const SERVICES: ServiceItem[] = [
  { 
    id: 'wedding',
    title: "Wedding", 
    desc: "Flawless look untuk akad & resepsi. Spesialisasi Melayu Modern & International Look.", 
    Icon: Crown 
  },
  { 
    id: 'engagement',
    title: "Engagement", 
    desc: "Soft glam look untuk momen lamaran yang berkesan dan memorable.", 
    Icon: Gem 
  },
  { 
    id: 'wisuda',
    title: "Wisuda", 
    desc: "Tahan lama, fresh, dan anti-crack untuk momen spesial kelulusan.", 
    Icon: GraduationCap 
  },
  { 
    id: 'bridesmaid',
    title: "Bridesmaid", 
    desc: "Tampil cantik mendampingi pengantin dengan makeup yang serasi dan elegan.", 
    Icon: Users 
  },
  { 
    id: 'yudisium',
    title: "Yudisium", 
    desc: "Tampil fresh dan percaya diri untuk momen sidang kelulusan.", 
    Icon: Award 
  },
  { 
    id: 'pengajian',
    title: "Pengajian", 
    desc: "Makeup anggun dan sopan untuk acara pengajian dan syukuran.", 
    Icon: BookOpen 
  },
  { 
    id: 'ibu',
    title: "Makeup Ibu-ibu", 
    desc: "Makeup elegan untuk ibu pengantin, ibu wisudawan, dan acara keluarga.", 
    Icon: Heart 
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  { 
    id: 1,
    name: "Putri A.", 
    text: "Suka banget sama look makeupnya, tahan seharian walaupun outdoor! Hijab stylingnya juga rapi banget.", 
    event: "Wedding Melayu" 
  },
  { 
    id: 2,
    name: "Jessica T.", 
    text: "Ci Anisa ngerti banget tone muka aku. Sangjit look-nya elegan, gak menor tapi pangling.", 
    event: "Sangjit" 
  },
  { 
    id: 3,
    name: "Rina S.", 
    text: "Makeup wisuda paling awet yang pernah aku coba. Foto studio sore masih on point.", 
    event: "Wisuda Untan" 
  }
];

export const VENDORS: VendorItem[] = [
  { category: "Attire", name: "Pontianak Kebaya", url: "#" },
  { category: "Henna", name: "Artistic Henna Pontianak", url: "#" },
  { category: "Photography", name: "Lensa Wedding", url: "#" },
];

export const LOCATIONS = [
  "Pontianak Kota",
  "Pontianak Barat",
  "Pontianak Selatan",
  "Pontianak Tenggara",
  "Pontianak Utara",
  "Pontianak Timur",
  "Kubu Raya (Sungai Raya)",
  "Luar Kota (Kalbar - Transport Charge)"
];

export const SERVICE_OPTIONS = [
  "Wedding (Akad/Resepsi)",
  "Engagement / Lamaran",
  "Wisuda",
  "Bridesmaid",
  "Yudisium",
  "Pengajian",
  "Makeup Ibu-ibu",
  "Lainnya"
];
