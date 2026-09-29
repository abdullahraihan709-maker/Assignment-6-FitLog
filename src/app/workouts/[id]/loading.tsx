const WorkoutDetailsPageLoading = () => {
  return (
    <div className="min-h-screen bg-black px-4 py-8 text-white sm:px-6 md:px-12 lg:px-16">
      {/* Main Content Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2">
        
        {/* Left Column: Image Skeleton */}
        <div className="relative w-full overflow-hidden rounded-xl bg-zinc-900 lg:h-162.5">
          {/* Shimmer Effect */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-zinc-800/30 to-transparent" />
          {/* Fallback pulse */}
          <div className="absolute inset-0 animate-pulse bg-zinc-900/50" />
        </div>

        {/* Right Column: Text & Details Skeleton */}
        <div className="flex flex-col space-y-8">
          
          {/* Title & Subtitle */}
          <div className="space-y-4">
            <div className="h-12 w-3/4 animate-pulse rounded-lg bg-zinc-800 md:h-14" />
            <div className="h-5 w-full animate-pulse rounded-md bg-zinc-800/60" />
            <div className="h-5 w-2/3 animate-pulse rounded-md bg-zinc-800/60" />
          </div>

          {/* Tags (BACK, LEGS) */}
          <div className="flex gap-3">
            <div className="h-7 w-20 animate-pulse rounded-full bg-zinc-800" />
            <div className="h-7 w-20 animate-pulse rounded-full bg-zinc-800" />
          </div>

          {/* Stats Box (Equipment, Difficulty, Sets, etc.) */}
          <div className="space-y-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="h-3.5 w-24 animate-pulse rounded bg-zinc-800" />
                <div className="h-3.5 w-16 animate-pulse rounded bg-zinc-800" />
              </div>
            ))}
          </div>

          {/* Instructions Section */}
          <div className="space-y-5 pt-4">
            <div className="h-7 w-40 animate-pulse rounded-md bg-zinc-800" />
            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex gap-4">
                  {/* Number placeholder */}
                  <div className="h-5 w-5 shrink-0 animate-pulse rounded bg-zinc-800" />
                  {/* Text line placeholders */}
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-full animate-pulse rounded bg-zinc-800/60" />
                    {i === 0 && <div className="h-4 w-4/5 animate-pulse rounded bg-zinc-800/60" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 pt-6 sm:flex-row">
            {/* "Add to todays plan" button */}
            <div className="h-14 w-full animate-pulse rounded-lg bg-zinc-800 sm:w-64" />
            {/* "Save for later" button */}
            <div className="h-14 w-full animate-pulse rounded-lg border border-zinc-800 bg-zinc-900/50 sm:w-48" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPageLoading;