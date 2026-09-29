import Link from "next/link";



const notFound = () => {
  
    return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-black">
      <h1 className="text-7xl sm:text-8xl font-black text-[#b8e600] tracking-wider mb-2">404</h1>
      <h2 className="text-2xl font-bold text-white uppercase tracking-tight mb-3">
        Page Not Found
      </h2>
      <p className="text-zinc-400 text-sm max-w-md mb-8">
        The workout or page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-[#b8e600] hover:bg-[#a3cc00] text-black font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-colors uppercase tracking-wider"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default notFound;