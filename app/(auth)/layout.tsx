'use client';

import { useState } from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import Spline from '@splinetool/react-spline';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  return (
    <html>
      <body className='bg-black h-screen relative'>
        <Spline
          scene="https://prod.spline.design/gR-09Zmqr1WSEmqa/scene.splinecode"
          className='absolute top-0 left-0 w-full h-full md:scale-100 sm:scale-50 mt-20'
          onLoad={() => setIsSplineLoaded(true)}
        
        />
        <div className={`flex justify-center h-screen items-center pr-4 transition-opacity duration-500 ${isSplineLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {children}
        </div>
      </body>
    </html>
  );
}
