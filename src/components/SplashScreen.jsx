import React from 'react';
import { Loader2 } from 'lucide-react';

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#0c6478] to-[#0BD0C7] text-white">
      {/* Logo/Brand Name Animation */}
      <div className="mb-8 animate-pulse text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Health Pulse
        </h1>
        <p className="mt-2 text-lg md:text-xl font-medium text-white/80">
          Saving Lives,Improving Healthier Communities
        </p>
      </div>

      {/* Spinner */}
      <div className="relative flex items-center justify-center">
        <div className="absolute h-20 w-20 animate-ping rounded-full bg-white/20"></div>
        <Loader2 className="h-12 w-12 animate-spin text-white" />
      </div>
    </div>
  );
};

export default SplashScreen;
