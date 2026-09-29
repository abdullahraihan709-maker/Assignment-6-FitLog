

const HomePageLoading = () => {
  
    return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-black min-h-[60vh]">
      {/* Header Skeleton */}
      <div className="animate-pulse space-y-3 mb-8">
        <div className="h-8 bg-zinc-800 rounded-md w-48" />
        <div className="h-4 bg-zinc-800/60 rounded-md w-64" />
      </div>

      {/* Grid Cards Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-[#15171E] rounded-2xl p-4 border border-slate-800/60 animate-pulse flex flex-col justify-between h-95"
          >
            <div>
              <div className="w-full h-48 bg-zinc-800 rounded-xl mb-4" />
              <div className="flex gap-2 mb-3">
                <div className="h-5 w-14 bg-zinc-800 rounded" />
                <div className="h-5 w-14 bg-zinc-800 rounded" />
              </div>
              <div className="h-6 w-3/4 bg-zinc-800 rounded mb-2" />
              <div className="h-4 w-1/2 bg-zinc-800/60 rounded" />
            </div>
            <div className="pt-4 border-t border-slate-800/60 flex justify-between">
              <div className="h-4 w-16 bg-zinc-800/60 rounded" />
              <div className="h-4 w-16 bg-zinc-800/60 rounded" />
              <div className="h-4 w-12 bg-zinc-800/60 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageLoading;