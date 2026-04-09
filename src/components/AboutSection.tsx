import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Trophy, Heart } from 'lucide-react';

const bioSlides = [
  {
    year: "2010",
    title: "Lahir di Banda Aceh",
    description: "Lahir pada tanggal 10 Mei 2010 di kota serambi mekkah, Banda Aceh. Menjadi awal dari perjalanan hidup saya.",
    icon: MapPin,
    color: "from-blue-500 to-cyan-400"
  },
  {
    year: "Hobi & Passon",
    title: "Sepak Bola",
    description: "Sangat senang menghabiskan waktu sore hari bermain bola bersama teman-teman. Bagi saya, bola bukan sekadar olahraga tapi tentang kerjasama tim.",
    icon: Trophy,
    color: "from-green-500 to-emerald-400"
  },
  {
    year: "Sekarang",
    title: "MAN 1 Banda Aceh",
    description: "Saat ini menempuh pendidikan di kelas X-4. Mulai mendalami dunia teknologi dan tertarik mempelajari coding lebih dalam.",
    icon: Calendar,
    color: "from-orange-500 to-yellow-400"
  },
  {
    year: "Masa Depan",
    title: "Cita-cita",
    description: "Saya bercita-cita menjadi atlit profesional yang dapat membanggakan kedua orang tua saya, daerah saya, dan negara saya.",
    icon: Heart,
    color: "from-purple-500 to-pink-400"
  }
];

export default function BiographyCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        
        <div className="relative group max-w-5xl mx-auto">
          {/* Viewport */}
          <div className="overflow-hidden px-4" ref={emblaRef}>
            <div className="flex -ml-4">
              {bioSlides.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass border border-white/10 p-8 rounded-[2.5rem] h-full flex flex-col items-start gap-4 hover:shadow-glow transition-all duration-300"
                  >
                    {/* Icon dengan Background Lingkaran Gradien */}
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg`}>
                      <item.icon className="h-8 w-8 text-white" />
                    </div>

                    <div>
                      <span className="text-primary font-bold text-sm tracking-widest uppercase">
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-bold mt-1 mb-3 font-display">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigasi Custom */}
          <div className="flex justify-center md:justify-between items-center mt-10 px-4">
            <div className="flex gap-2">
              <button
                onClick={scrollPrev}
                className="p-3 rounded-full glass hover:bg-primary hover:text-white transition-all border border-white/10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={scrollNext}
                className="p-3 rounded-full glass hover:bg-primary hover:text-white transition-all border border-white/10"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            
            {/* Indikator Progres Sederhana */}
            <div className="hidden md:block text-sm text-muted-foreground font-medium">
              Geser untuk melihat perjalanan saya &rarr;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}