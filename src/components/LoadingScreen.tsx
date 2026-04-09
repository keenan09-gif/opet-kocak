import React from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
    >
      <div className="w-64 h-64 md:w-80 md:h-80">
        <DotLottiePlayer
          src="https://lottie.host/a5e8794d-cbf2-48d0-92bd-6525c27948ee/mhqHISD47n.lottie"
          autoplay
          loop
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-4"
      >
        <h2 className="text-xl font-display font-bold text-primary animate-pulse">
          Memuat Portofolio...
        </h2>
        <p className="text-muted-foreground text-sm">Keenan Kaisha - MAN 1 Banda Aceh</p>
      </motion.div>
    </motion.div>
  );
}