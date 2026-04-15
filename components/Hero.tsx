import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative overflow-hidden bg-[linear-gradient(180deg,#dbe6f3_0%,#e4edf7_35%,#edf3fb_66%,#f4f8fd_100%)] pt-16 sm:pt-20"
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,0.18),transparent_38%),radial-gradient(circle_at_90%_14%,rgba(125,211,252,0.2),transparent_34%),radial-gradient(circle_at_74%_80%,rgba(96,165,250,0.14),transparent_40%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,black_45%,transparent_100%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,black_12%,black_55%,transparent_100%)]" aria-hidden="true">
                <svg
                    className="h-full w-full"
                    viewBox="0 0 1440 560"
                    fill="none"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g stroke="rgba(59,130,246,0.22)" strokeWidth="1.5" strokeLinecap="round">
                        <path d="M40 120H280L360 200H640" />
                        <path d="M1120 100H900L830 170H700" />
                        <path d="M180 360H340L430 285H610" />
                        <path d="M840 320H980L1070 260H1320" />
                        <path d="M520 80V230" />
                        <path d="M920 180V320" />
                    </g>
                    <g fill="rgba(96,165,250,0.36)">
                        <circle cx="280" cy="120" r="5" />
                        <circle cx="360" cy="200" r="5" />
                        <circle cx="830" cy="170" r="5" />
                        <circle cx="430" cy="285" r="5" />
                        <circle cx="980" cy="320" r="5" />
                        <circle cx="1070" cy="260" r="5" />
                    </g>
                </svg>
            </div>
            <div className="pointer-events-none absolute -left-12 top-28 h-56 w-56 rounded-full bg-blue-300/25 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-44 w-full bg-[linear-gradient(120deg,transparent_44%,rgba(59,130,246,0.07)_44%,rgba(96,165,250,0.14)_62%,transparent_62%)]" />

            <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 px-4 pb-12 sm:gap-10 sm:px-6 sm:pb-16 lg:gap-12 lg:grid-cols-2 lg:pb-20 lg:px-8">
                <div className="animate-fade-up space-y-4 sm:space-y-5 lg:space-y-6">
                    <span className="inline-flex animate-fade-up items-center rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-blue-700" style={{ animationDelay: "0.1s" }}>
                        Secure Zone
                    </span>

                    <h1 className="animate-fade-up font-sans text-3xl font-black leading-[0.92] tracking-[-0.015em] text-slate-900 sm:text-4xl lg:text-6xl" style={{ animationDelay: "0.2s" }}>
                        Secure Zone Technical Services
                    </h1>

                    <p className="animate-fade-up max-w-2xl text-base leading-8 text-slate-600 sm:text-lg" style={{ animationDelay: "0.3s" }}>
                        CCTV, networking, smart home, SMATV, PA and integrated technical
                        solutions
                    </p>

                    <div className="animate-fade-up flex flex-wrap items-center gap-4 pt-2" style={{ animationDelay: "0.4s" }}>
                        <a
                            href="#contact"
                            className="rounded-xl bg-gradient-to-r from-sky-700 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                        >
                            Contact Us
                        </a>
                        <a
                            href="#services"
                            className="rounded-xl border border-sky-200 bg-white px-6 py-3 text-sm font-semibold text-sky-700 transition-all duration-300 hover:border-sky-400 hover:bg-sky-50"
                        >
                            Our Services
                        </a>
                    </div>
                </div>

                <div className="animate-fade-up relative mx-auto w-full max-w-lg" style={{ animationDelay: "0.3s" }}>
                    <div className="relative overflow-hidden rounded-3xl">
                        <Image
                            src="/hero1-Photoroom.png"
                            alt="Secure Zone Services"
                            width={500}
                            height={600}
                            loading="eager"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
