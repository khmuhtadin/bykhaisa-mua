 import { useState, useEffect } from 'react';
 import { Menu, X } from 'lucide-react';
 
 const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => {
       setScrolled(window.scrollY > 50);
     };
     window.addEventListener('scroll', handleScroll);
     return () => window.removeEventListener('scroll', handleScroll);
   }, []);
 
  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Booking', href: '/#booking' },
  ];
 
   return (
     <nav 
       className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
         scrolled 
           ? 'bg-creme/95 backdrop-blur-md shadow-sm py-3 text-clay-dark' 
           : 'bg-transparent py-6 text-clay-dark'
       }`}
     >
       <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <a href="/" className="text-2xl font-serif font-semibold tracking-wider hover:text-clay transition-colors">
            @byanisaputri
          </a>
        </div>
         
         {/* Desktop Menu */}
         <div className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-[0.2em]">
           {navLinks.map((link) => (
             <a 
               key={link.name} 
               href={link.href} 
              className="hover:text-clay transition-colors duration-300 relative group font-bold"
             >
               {link.name}
               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-clay transition-all duration-300 group-hover:w-full"></span>
             </a>
           ))}
         </div>
 
         {/* Mobile Menu Toggle */}
         <button 
           className="md:hidden p-2 text-clay-dark focus:outline-none" 
           onClick={() => setIsMenuOpen(!isMenuOpen)}
           aria-label="Toggle Menu"
         >
           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
         </button>
       </div>
 
       {/* Mobile Menu Dropdown */}
       <div 
         className={`md:hidden absolute top-full left-0 w-full bg-creme border-t border-bone shadow-xl flex flex-col transition-all duration-300 origin-top overflow-hidden ${
           isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
         }`}
       >
         {navLinks.map((link) => (
           <a 
             key={link.name}
             href={link.href} 
             className="px-8 py-4 text-sm uppercase tracking-widest font-medium hover:bg-bone hover:text-clay-dark border-b border-bone last:border-none transition-colors"
             onClick={() => setIsMenuOpen(false)}
           >
             {link.name}
           </a>
         ))}
       </div>
     </nav>
   );
 };
 
 export default Navbar;
