"use client";

import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import Link from 'next/link';
import { ApertureIcon, CheckCheck, LucideIcon } from 'lucide-react';
import { ReactElement } from 'react';
import infoCards from './libs/InfoCards';
import pricingCards from './libs/PricingCards';
import MobileNav from '@/components/MobileNav';
import { Button } from '@/components/ui/button';
import GetStartedCard from '@/components/Getstarted';
import GetStarted from '@/components/Getstarted';


export default function Home() {
  return (
    <main className="flex min-h-screen h-fit flex-col items-center justify-center relative">
      
      {/* Desktop Navbar */}
      <div className="hidden md:block w-full pt-4">
        <Navbar />
      </div>
      
      {/* Mobile Navbar */}
      <div className="flex md:hidden w-full fixed top-0 right-0 mt-5 z-50 pl-6 items-end">
        <MobileNav />
      </div>

      <header id="home" className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden pb-40 pr-20">
        <div className="w-full h-full flex flex-col justify-center items-center gap-8 ">
        <div className="absolute -z-10 h-full w-full overflow-hidden">

        </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-black md:text-8xl">Improve <span className='text-mint-1 outline-mint-1'>Now</span></h1>
            <h2 className="text-md md:text-2xl text-center font-light">Guaranteed to Rank Up</h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-zinc-500 text-center">Helped over 210 clients gain over 600 RR through our competitive coaching</p>
          <div className="w-full flex items-center justify-center gap-4">
            <Link href='/sign-up'>
            <Button className="w-48 h-12 text-sm sm:text-base rounded bg-white text-black hover:bg-mint-1 hover:text-white transition-colors">Get Started</Button>
            </Link>
            <Link href='https://discord.gg/Qq2uf788KW'>
              <Button className="w-48 h-12 text-sm sm:text-base rounded  transition-colors hover:text-mint-1 hover:bg-white hover:bg-opacity-10">Join the Discord</Button>
            </Link>
          </div>
        </div>
      </header>

      <section id="about" className="h-fit min-h-screen w-full flex relative items-center justify-center p-8">
        <div className="absolute -z-10 h-full w-full overflow-hidden">
            {/* <Spline
            scene="https://prod.spline.design/RMWq50qjRVu-I1m6/scene.splinecode" 
            onLoad={(spline) => spline.play()}
          /> */}
        </div>
        <div className="w-full h-full flex items-center justify-center flex-col gap-8 max-w-7xl">
          <h3 className="text-4xl md:text-5xl font-bold">Our Stats</h3>
          <div className="w-full grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-4 justify-between relative">
            {infoCards.map((infoCard) => (
              <InfoCard key={infoCard.id} Icon={infoCard.icon} title={infoCard.title}>
                <p className="text-sm sm:text-base text-center md:text-left">{infoCard.bodyText}</p>
              </InfoCard>
            ))}
          </div>
        </div>
      </section>
      <section className=''>
        <GetStarted />
      </section>

    </main>
  );
}

interface IInfoCardProps {
  title: string;
  Icon: LucideIcon;
  children: ReactElement<any, any>;
}

function InfoCard({ title, Icon, children }: IInfoCardProps) {
  return (
    <div className="w-full h-80 rounded flex flex-col justify-around items-center p-8 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
      <div className="p-4 bg-transparent rounded-full">
        <Icon />
      </div>
      <div>
        <h3 className="text-lg font-bold sm:text-xl">{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  );
}


function Navbar() {
  return (
    <div className="w-full h-16 backdrop-filter backdrop-blur-xl bg-opacity-20 border-b flex items-center justify-center">
      <div className="max-w-7xl w-full flex items-center justify-between p-4">
      <ApertureIcon color='white' scale={1.5}/>
        <h6 className="font-bold text-lg pl-3">
          Eddie's Ehub</h6>
        <div className="flex justify-center flex-grow">
          <ul className="flex gap-4 text-sm justify-center ml-18ç">
            <li><Link className="hover:text-mint-1 transition-colors pl-8" href="/guide">Guides</Link></li>
          </ul>
        </div>
        <div className="flex gap-2">
          {/* <Button className="hover:bg-gray-300 text-white py-2 px-4 rounded" variant="outline">
            <Link href='/sign-in'>
              Log In
            </Link>
          </Button> */}
          <Button className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 ml-4 rounded">
            <Link href='/sign-up'>
              Get Started
            </Link>
          </Button>
          <div className=" mt-2 ml-4">

          </div>

        </div>
      </div>
    </div>
  );
}
