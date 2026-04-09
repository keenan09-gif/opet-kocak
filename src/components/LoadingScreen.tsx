import React from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import { motion } from 'framer-motion';

// Gunakan "export default" agar bisa dipanggil tanpa kurung kurawal
const LoadingScreen = () => {
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
      <div className="text-center mt-4">
        <h2 className="text-xl font-bold text-primary animate-pulse">Memuat...</h2>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;