 import type { LucideIcon } from 'lucide-react';
 
 export interface ServiceItem {
   id: string;
   title: string;
   desc: string;
   Icon: LucideIcon;
 }
 
 export interface TestimonialItem {
   id: number;
   name: string;
   text: string;
   event: string;
 }
 
 export interface BookingFormData {
   name: string;
   date: string;
   service: string;
   location: string;
 }
 
 export interface VendorItem {
   category: string;
   name: string;
   url: string;
 }
