
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
    return (
      <div className="w-full h-16 backdrop-filter backdrop-blur-xl bg-opacity-20 border-b flex items-center justify-center">
        <div className="max-w-7xl w-full flex items-center justify-between p-4">
          <Link href='/'>
            <h6 className="font-bold text-lg">Eddie's Ehub</h6>
          </Link>
          <div className="flex justify-center flex-grow">
            <ul className="flex gap-4 text-sm justify-center ml-20">
              <li><Link className="hover:text-mint-1 transition-colors pl-8" href="/guide">Guides</Link></li>
            </ul>
          </div>
          <div className="flex gap-2">
            <Button className="hover:bg-gray-300 text-white py-2 px-4 rounded" variant="outline">
              Log In
            </Button>
            <Button className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 ml-4 rounded">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    );
  }
  