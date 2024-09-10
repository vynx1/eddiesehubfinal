import MobileNav from "@/components/MobileNav";
import Navbar from "@/components/Navbar";
import { HeartIcon, ShieldCheckIcon, GraduationCapIcon } from "lucide-react";
import Image from "next/image";

export default function OurMission() {
  return (
    <main className="flex min-h-screen h-fit flex-col items-center justify-center relative">
        {/* Desktop Navbar */}
        <div className="hidden md:block w-full">
            <Navbar />
        </div>
        
        {/* Mobile Navbar */}
        <div className="flex md:hidden w-full fixed top-0 right-0 mt-5 z-50 pl-6 items-end">
            <MobileNav />
        </div>

    <div className="mt-40">
    <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight">Our Mission</h1>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed opacity-75">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in pede commodo porttitor.
          </p>
        </div>
    </div>
    <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-black text-white mb-20">
      <div className="container mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
            <ShieldCheckIcon className="w-12 h-12 mx-auto text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-4">Our Goal</h2>
            <p className="text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in pede commodo porttitor. Donec
              laoreet tempus quam, sed dignissim massa tincidunt nec.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
            <GraduationCapIcon className="w-12 h-12 mx-auto text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-4">How We Accomplish It</h2>
            <p className="text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in pede commodo porttitor. Donec
              laoreet tempus quam, sed dignissim massa tincidunt nec.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
            <HeartIcon className="w-12 h-12 mx-auto text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-4">How It Benefits You</h2>
            <p className="text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut risus in pede commodo porttitor. Donec
              laoreet tempus quam, sed dignissim massa tincidunt nec.
            </p>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}
