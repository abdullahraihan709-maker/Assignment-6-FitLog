'use client';

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/assets/logo.png";
import { WorkoutsContext } from "@/context/WorkoutsContext";

const Navbar = () => {
  const pathname = usePathname();
  const { todaysPlan = [], saveLater = [] } = useContext(WorkoutsContext);

  const isWorkoutsActive = pathname === "/";
  const isMyPlanActive = pathname === "/my-plan";

  return (
    <header className="sticky top-0 z-50 bg-[#0b0c0e]/90 backdrop-blur-md border-b border-zinc-800/60 transition-all">
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Left Side (Mobile Menu + Logo) Start */}
        <div className="flex items-center gap-3">
          
          {/* Mobile Dropdown Start */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost p-1.5 text-zinc-300 hover:text-white">
              <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-zinc-900 text-white rounded-xl z-10 mt-3 w-48 p-2 shadow-2xl border border-zinc-800 gap-1"
            >
             
              <li>
                <Link
                  href="/"
                  className={`font-medium ${
                    isWorkoutsActive ? 'bg-zinc-800 text-[#b8e600]' : 'hover:text-[#b8e600]'
                  }`}
                >
                  Workouts
                </Link>
              </li>
              
              <li>
                <Link
                  href="/my-plan"
                  className={`font-medium ${
                    isMyPlanActive ? 'bg-zinc-800 text-[#b8e600]' : 'hover:text-[#b8e600]'
                  }`}
                >
                  My Plan
                </Link>
              </li>

            </ul>

          </div>
          {/* Mobile Dropdown End */}



          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="p-1 rounded-lg transition-transform group-hover:scale-105">
              <Image src={Logo} alt="FitLog Icon" width={28} height={28} className="object-contain" />
            </div>
            <span className="font-extrabold font-['Oswald',sans-serif] text-xl tracking-wider text-white">FITLOG</span>
          </Link>


        </div>
        {/* Left Side (Mobile Menu + Logo) End */}


        {/* Middle Navigation Links (Desktop) Start */}
        <div className="hidden lg:flex items-center gap-2">
          
          
          <Link
            href="/"
            className={`px-5 py-1.5 rounded-full font-semibold text-sm transition-all ${
              isWorkoutsActive
                ? 'bg-[#1a2114] text-[#b8e600] border border-[#2a381e]'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Workouts
          </Link>


          <Link
            href="/my-plan"
            className={`px-5 py-1.5 rounded-full font-semibold text-sm transition-all ${
              isMyPlanActive
                ? 'bg-[#1a2114] text-[#b8e600] border border-[#2a381e]'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            My Plan
          </Link>


        </div>
        {/* Middle Navigation Links (Desktop) End */}



        {/* Right-side Status Badges Counter Start */}
        <div className="flex items-center gap-6">
          
          {/* Plan Badge Start */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
          >
            <span>Plan</span>
            <span className="bg-[#b8e600] text-black text-xs font-extrabold px-2.5 py-0.5 rounded-full min-w-5.5 text-center">
              {todaysPlan.length}
            </span>
          </Link>
          {/* Plan Badge End */}


          {/* Saved Badge Start */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
          >
            <span>Saved</span>
            <span className="border border-zinc-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full min-w-5.5 text-center">
              {saveLater.length}
            </span>
          </Link>
          {/* Saved Badge End */}


        </div>
        {/* Right-side Status Badges Counter End */}


      </nav>
      
    </header>
  );
};

export default Navbar;

