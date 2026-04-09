import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Youtube, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero py-20">
      <ThreeScene />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* --- BAGIAN FOTO PROFIL START --- */}
          <div className="relative flex justify-center mb-10">
            {/* Efek Cahaya Belakang (Breathing Effect) */}
            <motion.div
              className="absolute w-40 h-40 md:w-56 md:h-56 bg-primary/20 rounded-full blur-3xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1.2 }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.8, 
                type: "spring", 
                stiffness: 100 
              }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              {/* Border Gradien yang Menyala saat Hover */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary via-blue-500 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              
              {/* Frame Foto */}
              <div className="relative w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-background shadow-2xl bg-muted">
                <img
                  src="/foto-profil.jpg" // PASTIKAN FILE INI ADA DI FOLDER PUBLIC
                  alt="Keenan Kaisha"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback jika gambar tidak ditemukan
                    e.currentTarget.src = "https://ui-avatars.com/api/?name=Keenan+Kaisha&background=0D8ABC&color=fff&size=128";
                  }}
                />
                
                {/* Overlay Kilatan Cahaya */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Status Badge (Online/Active) */}
              <motion.div 
                className="absolute bottom-2 right-2 w-5 h-5 md:w-6 md:h-6 bg-green-500 border-4 border-background rounded-full shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
              >
                 <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
              </motion.div>
            </motion.div>
          </div>
          {/* --- BAGIAN FOTO PROFIL END --- */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span 
              className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              👋 Welcome To My Portfolio
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Hi I'M
            <br />
            <span className="text-gradient">Keenan Kaisha</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Saya seorang siswa dari **MAN 1 Banda Aceh** yang sedang belajar di 
            kelas **X-4**, izinkan saya mempersembahkan portofolio saya
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button 
              size="lg" 
              className="rounded-full px-8 shadow-glow"
              onClick={() => {
                const element = document.querySelector('#projects');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Lihat Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Hubungi Saya
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center justify-center gap-6"
          >
            {[
              { icon: Github, href: 'https://github.com/keenan09-gif/opet-kocak.git', label: 'GitHub' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                className="p-3 rounded-full glass hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-foreground" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full glass animate-float cursor-pointer"
        whileHover={{ scale: 1.1 }}
        aria-label="Scroll to About"
      >
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.button>
    </section>
  );
}