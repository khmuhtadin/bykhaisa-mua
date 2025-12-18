 import { Crown, HeartHandshake, GraduationCap, Camera, Gem } from 'lucide-react';
 import type { ServiceItem, TestimonialItem, VendorItem } from './types';
 
 export const WHATSAPP_NUMBER = '6287812234804';
 
 export const SERVICES: ServiceItem[] = [
   { 
     id: 'wedding',
     title: "Wedding Makeup", 
     desc: "Flawless look untuk akad & resepsi. Spesialisasi Melayu Modern & International Look.", 
     Icon: Crown 
   },
   { 
     id: 'sangjit',
     title: "Sangjit & Engagement", 
     desc: "Soft glam look khas oriental atau bold statement untuk acara lamaran.", 
     Icon: Gem 
   },
   { 
     id: 'graduation',
     title: "Graduation / Wisuda", 
     desc: "Tahan lama, fresh, dan anti-crack untuk momen spesial mahasiswi.", 
     Icon: GraduationCap 
   },
   { 
     id: 'photoshoot',
     title: "Editorial & Photoshoot", 
     desc: "Konsep makeup profesional untuk katalog brand fashion lokal.", 
     Icon: Camera 
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
     text: "Ci Isa ngerti banget tone muka aku. Sangjit look-nya elegan, gak menor tapi pangling.", 
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
   "Wedding Makeup (Akad/Resepsi)",
   "Sangjit / Engagement",
   "Graduation / Wisuda",
   "Bridesmaid / Party",
   "Pre-wedding Photoshoot",
   "Private Makeup Course",
   "Lainnya"
 ];
