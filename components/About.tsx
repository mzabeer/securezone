const highlights = [
    "Dubai expert engineering team",
    "Premium install and commissioning",
    "End-to-end design and maintenance",
];

const stats = [
    { value: "24/7", label: "Operational support culture" },
    { value: "100%", label: "Project execution focus" },
    { value: "5+", label: "Integrated service domains" },
];

export default function About() {
    return (
        <section id="about" className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#f0f7ff_45%,#e8f2fd_100%)] py-12 sm:py-16 lg:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(59,130,246,0.14),transparent_35%),radial-gradient(circle_at_85%_15%,rgba(125,211,252,0.12),transparent_32%),radial-gradient(circle_at_50%_90%,rgba(96,165,250,0.1),transparent_38%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]" />
            <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-2xl border border-sky-100/80 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_45%,#f2f9ff_100%)] shadow-[0_28px_80px_rgba(14,116,144,0.16)] ring-1 ring-white/70 sm:rounded-[32px]">
                    <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                        <div className="p-5 sm:p-8 lg:p-12">
                            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700 sm:text-sm">
                                About Us
                            </p>
                            <h2 className="mt-2 text-2xl font-bold leading-tight text-slate-900 sm:mt-3 sm:text-3xl lg:text-4xl">
                                Reliable technical solutions for secure, modern spaces.
                            </h2>
                            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8">
                                Secure Zone Technical Services is a Dubai-based company delivering
                                reliable security and technical infrastructure for homes, offices,
                                and commercial facilities. We design, install, and maintain smart
                                systems with a focus on performance, safety, and long-term value.
                            </p>

                            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white/85 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-sky-800 shadow-sm sm:mt-6 sm:text-xs">
                                Trusted across residential and commercial projects
                            </div>

                            <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4 sm:grid-cols-3">
                                {highlights.map((item, index) => {
                                    return (
                                        <div
                                            key={item}
                                            className="rounded-xl border border-sky-200/80 bg-gradient-to-br from-sky-50 to-sky-100/80 p-3 text-xs font-semibold leading-6 text-sky-950 shadow-[0_8px_20px_rgba(15,23,42,0.06)] transition-all duration-300 animate-fade-up sm:rounded-2xl sm:p-4 sm:text-sm hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(14,116,144,0.16)]"
                                            style={{ animationDelay: `${index * 0.1}s` }}
                                        >
                                            {item}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="relative border-t border-sky-100 bg-[linear-gradient(180deg,#eef7ff_0%,#f8fbff_58%,#f0f9ff_100%)] p-5 sm:p-8 lg:border-l lg:border-t-0 lg:p-12">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(125,211,252,0.14),transparent_30%)]" />
                            <div className="absolute right-4 top-4 h-20 w-20 rounded-full border border-sky-200/60 bg-white/35 blur-[1px] sm:h-24 sm:w-24" />
                            <div className="absolute bottom-6 left-4 h-14 w-14 rounded-full border border-cyan-200/60 bg-cyan-100/35" />
                            <div className="relative">
                                <div className="rounded-2xl border border-white/80 bg-white/88 p-4 shadow-[0_20px_40px_rgba(14,116,144,0.12)] ring-1 ring-sky-100/70 backdrop-blur-sm sm:rounded-[28px] sm:p-6">
                                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
                                        Why Secure Zone
                                    </p>
                                    <h3 className="mt-2 text-lg font-semibold leading-tight text-slate-900 sm:mt-3 sm:text-2xl">
                                        A reliable technical partner for high-standard Dubai projects.
                                    </h3>
                                    <p className="mt-3 text-xs leading-6 text-slate-600 sm:mt-4 sm:text-sm sm:leading-7">
                                        We combine practical field experience with premium execution,
                                        helping clients get dependable systems that look clean and
                                        perform consistently.
                                    </p>

                                    <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                                        {stats.map((item, index) => (
                                            <div
                                                key={item.label}
                                                className="rounded-xl border border-sky-100/90 bg-gradient-to-b from-white to-sky-50/65 p-3 text-center shadow-sm transition-all duration-300 animate-fade-up hover:-translate-y-0.5 hover:shadow-md sm:rounded-2xl sm:p-4"
                                                style={{ animationDelay: `${index * 0.1}s` }}
                                            >
                                                <p className="text-xl font-bold text-sky-700 sm:text-2xl">{item.value}</p>
                                                <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.08em] text-slate-500 sm:text-xs">
                                                    {item.label}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
