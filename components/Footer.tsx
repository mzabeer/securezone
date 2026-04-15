import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Brands", href: "#brands" },
    { label: "Contact", href: "#contact" },
];

const services = [
    "CCTV & Security",
    "WiFi & Networking",
    "Smart Home Solutions",
    "SMATV Systems",
    "PA & BGM Systems",
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[linear-gradient(180deg,#0b1730_0%,#102344_48%,#09152b_100%)] text-slate-100">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(96,165,250,0.12),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(34,197,94,0.05),transparent_26%),radial-gradient(circle_at_78%_82%,rgba(147,197,253,0.1),transparent_32%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent" />

            <div className="relative mx-auto w-full max-w-7xl px-4 py-10 pb-[calc(1.25rem+env(safe-area-inset-bottom))] sm:px-6 sm:py-14 sm:pb-[calc(1.5rem+env(safe-area-inset-bottom))] lg:px-8 lg:py-16">
                <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/7 px-3 py-2.5 shadow-lg shadow-sky-950/15 backdrop-blur-sm sm:rounded-2xl sm:gap-3 sm:px-4 sm:py-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-indigo-500 sm:h-11 sm:w-11 sm:rounded-xl">
                                <ShieldCheck className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold text-white sm:text-sm">Secure Zone</p>
                                <p className="text-xs text-slate-300">Dubai-based solutions</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 sm:text-sm">
                            Quick Links
                        </h3>
                        <ul className="mt-3 space-y-2 text-xs text-slate-200 sm:mt-5 sm:space-y-3 sm:text-sm">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a className="transition-colors hover:text-white" href={link.href}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 sm:text-sm">
                            Services
                        </h3>
                        <ul className="mt-3 space-y-2 text-xs text-slate-200 sm:mt-5 sm:space-y-3 sm:text-sm">
                            {services.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 sm:text-sm">
                            Contact
                        </h3>
                        <div className="mt-3 space-y-3 text-xs text-slate-200 sm:mt-5 sm:space-y-4 sm:text-sm">
                            <a href="tel:+971556175765" className="flex items-center gap-2 transition-colors hover:text-white sm:gap-3">
                                <Phone className="h-3.5 w-3.5 text-sky-300 flex-shrink-0 sm:h-4 sm:w-4" />
                                <span className="break-words">+971 55 617 5765</span>
                            </a>
                            <a href="mailto:sadiqshiekh71@gmail.com" className="flex items-center gap-2 transition-colors hover:text-white sm:gap-3">
                                <Mail className="h-3.5 w-3.5 text-sky-300 flex-shrink-0 sm:h-4 sm:w-4" />
                                <span className="break-all text-xs">sadiqshiekh71@gmail.com</span>
                            </a>
                            <p className="flex items-start gap-2 leading-5 sm:gap-3 sm:leading-6">
                                <MapPin className="mt-0.5 h-3.5 w-3.5 text-sky-300 flex-shrink-0 sm:h-4 sm:w-4" />
                                <span className="text-xs sm:text-sm">Al Zahraa Techno Centre - 101, Al Raffa, Bur Dubai</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-4 text-xs text-slate-300 sm:mt-10 sm:pt-6 sm:text-sm sm:flex sm:items-center sm:justify-between">
                    <p>© 2026 Secure Zone. All rights reserved.</p>
                    <p className="mt-2 break-words sm:mt-0">CCTV • Networking • Smart Home • SMATV • PA & BGM</p>
                </div>
            </div>
        </footer>
    );
}
