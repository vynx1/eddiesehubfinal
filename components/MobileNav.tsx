"use client"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { AlarmClock, ApertureIcon, BadgeHelpIcon, CircleDashed, Goal, Home, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "./ui/button"


const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-black-1">
          <Link href="/" className="flex cursor-pointer items-center gap-1 pb-10 pl-4">
            <ApertureIcon color='white' scale={1.5}/>
            <h1 className="text-24 font-extrabold  text-white-1 ml-2">ABG's</h1>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 text-white-1">
              {sidebarLinks.map(({ route, label, imgURL }) => {
                const isActive = pathname === route || pathname.startsWith(`${route}/`);

                return <SheetClose asChild key={route}><Link href={route} className={cn("flex gap-3 items-center py-4 max-lg:px-4 justify-start", {
                  'bg-nav-focus border-r-4 border-orange-1': isActive
                })}>
                  {imgURL}
                  <p className="hover:text-mint-1">{label}</p>
                </Link></SheetClose>
              })}
              <div className="flex flex-col">
                <Button variant='secondary' className="mb-4 mt-2 hover:text-mint-1">
                  Log In
                </Button>
                <Button variant='default' className="hover:text-mint-1">
                  Get Started
                </Button>
              </div>
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav

export const sidebarLinks = [
  {
    imgURL: <Goal />,
    route: "/mission",
    label: "Our Mission",
  },
  {
    imgURL: <AlarmClock />,
    route: "/session",
    label: "Book a Session",
  },
  {
    imgURL: <BadgeHelpIcon />,
    route: "/guide",
    label: "Guides",
  },
];