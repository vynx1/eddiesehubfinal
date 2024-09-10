import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { User } from "lucide-react";
import Spline from "@splinetool/react-spline";
import Link from "next/link";

export default function GetStarted() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-4 p-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-6xl">What People </h2>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-6xl pb-10"> Say About Us</h2>
            <p className="max-w-[500px] text-muted-foreground text-sm md:text-base lg:text-sm pl-4 opacity-70 mb-10">
              Real testimonials given to us by clients.
            </p>
          </div>
          <div className="pl-10">
            <QuoteIcon className="w-8 h-8 text-primary"/>
          </div>
          <div className="flex items-center gap-4">
            <blockquote className="text-lg font-medium leading-snug lg:text-xl lg:leading-normal pl-3">
              Eddies Ehub was the only valorant coach that actually explained to me what I was doing wrong, and how to improve. Without him I could've never have gotten to Ascendant
            </blockquote>
          </div>
          <div className="pl-20">
            <QuoteIcon className="w-8 h-8 text-primary"/>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 mt-6 p-6 bg-black text-white rounded-lg shadow-lg">


  {/* <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
  <p className="text-lg">Get started with us or join our Discord community.</p>
  <div className="flex gap-4 mt-4">
    <Button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
      Get Started
    </Button>
    <Button className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md">
      Join Discord
    </Button>
  </div> */}

<Spline
    scene="https://prod.spline.design/aE0-AXJbeKkav9Ot/scene.splinecode"
    onLoad={(spline) => {
      // spline.stop();  // Stop the animation
        // Disable mouse interactions
    }}
    style={{ width: '100%', maxWidth: '500px', height: '600px', pointerEvents: 'none' }}  // Limit the size
  />
  <Link href='https://discord.gg/Qq2uf788KW'>
  <Button className="mt-6 px-6 py-2 bg-white text-black rounded-md hover:text-white hover:bg-black">
    Join the Discord
  </Button>
  </Link>

</div>

      </div>
    </section>
  );
}

function QuoteIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  );
}
