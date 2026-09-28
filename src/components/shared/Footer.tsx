import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800/60 bg-black text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Logo Start */}
        <Link href="/" className="flex items-center gap-2 group">
         
          <Image
            src={Logo}
            alt="FITLOG"
            width={22}
            height={22}
            className="object-contain transition-transform group-hover:scale-105"
          />

          <span className="font-extrabold font-['Oswald',sans-serif] text-lg tracking-wider text-white uppercase">
            FITLOG
          </span>

        </Link>
        {/* Logo End */}


        {/* Copyright & Tagline */}
        <p className="text-xs sm:text-sm text-zinc-500 text-center sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
