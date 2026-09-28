'use client';

import Image from "next/image";
import Banner from "@/assets/banner.png";

const Hero = () => {
  const scrollToLibrary = () => {
    document.getElementById('library')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-black max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
        {/* Outer Hero Card Container Start */}
        <div className="bg-[#15171dFF] border border-[#222630FF] rounded-3xl p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden">
            
            {/* Left Column (Text Content) Start */}
            <div className="lg:col-span-7 space-y-6">
            
                {/* Badge Label Start */}
                <span className="text-[#c2f800FF] font-bold text-xs sm:text-sm tracking-widest uppercase block">
                WORKOUT LIBRARY
                </span>
                {/* Badge Label End */}



                {/* Heading Start */}
                <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black font-['Oswald',sans-serif] text-white uppercase tracking-tight leading-[1.05]">
                TRAIN WITH INTENT. LOG <br />
                EVERY SET.
                </h1>
                {/* Heading End */}



                {/* Subtext Start */}
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-md">
                FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                into today&apos;s plan, and watch the week&apos;s work add up.
                </p>
                {/* Subtext End */}



                {/* CTA Button Start */}
                <div className="pt-2">
                <button
                    onClick={scrollToLibrary}
                    className="bg-[#ccff00] hover:bg-[#b8e600] text-black font-bold text-xs sm:text-sm px-6 py-3.5 rounded-lg transition-all uppercase tracking-wider shadow-md flex items-center gap-2 group cursor-pointer"
                >
                    <span>BROWSE WORKOUTS</span>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                </div>
                {/* CTA Button End */}

            </div>
            {/* Left Column (Text Content) End */}

            




            {/* Right Column (Graphic Image) Start */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative">
            <div className="relative w-full max-w-md h-70 sm:h-85">
                <Image
                src={Banner}
                alt="Gym Workouts Illustration"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            </div>
            {/* Right Column (Graphic Image) End */}
            

        </div>
        {/* Outer Hero Card Container End */}

    </section>
  );
};

export default Hero;