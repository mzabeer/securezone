export default function SectionDivider() {
  return (
    <div className="pointer-events-none relative mx-auto h-12 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="absolute left-4 right-4 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-sky-500/95 to-transparent sm:left-6 sm:right-6 lg:left-8 lg:right-8" />
      <div className="animate-divider-pulse absolute left-1/2 top-1/2 h-4 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/55 blur-md" />
      <div className="animate-divider-sweep absolute top-1/2 h-2 w-28 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-cyan-200 to-transparent blur-[2px]" />
    </div>
  );
}
