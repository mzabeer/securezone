"use client";

import { type MouseEvent, useEffect, useState } from "react";
import Image from "next/image";
import { OPEN_WIDGET_EVENT } from "@/components/WhatsAppWidget";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Brands", href: "#brands" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeHref, setActiveHref] = useState("#home");
    const mobileMenuId = "mobile-nav-menu";

    const openChatWidget = () => {
        window.dispatchEvent(new Event(OPEN_WIDGET_EVENT));
    };

    const scrollToSection = (href: string) => {
        const section = document.querySelector(href);
        if (!(section instanceof HTMLElement)) return;

        const header = document.querySelector("header");
        const headerHeight = header instanceof HTMLElement ? header.offsetHeight : 80;
        const targetY = section.getBoundingClientRect().top + window.scrollY - headerHeight - 12;

        setActiveHref(href);
        window.history.pushState(null, "", href);
        window.scrollTo({ top: Math.max(targetY, 0), behavior: "smooth" });
    };

    const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
        event.preventDefault();
        setIsMobileOpen(false);

        // Wait one frame so mobile menu collapse does not affect scroll target.
        requestAnimationFrame(() => {
            scrollToSection(href);
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 14);

            let currentHref = "#home";

            for (const link of navLinks) {
                const section = document.querySelector(link.href);
                if (!section) continue;

                const top = (section as HTMLElement).offsetTop - 120;
                const height = (section as HTMLElement).offsetHeight;

                if (scrollY >= top && scrollY < top + height) {
                    currentHref = link.href;
                }
            }

            setActiveHref(currentHref);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className={`sticky top-0 z-50 border-b bg-gradient-to-r from-[#08153f]/95 via-[#0d214f]/95 to-[#0f2a5b]/95 text-white backdrop-blur-xl transition-all duration-300 ${isScrolled
            ? "border-blue-300/20 shadow-lg shadow-[#040a20]/40"
            : "border-blue-300/10"
            }`}>
            <div className={`mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 ${isScrolled ? "py-2" : "py-3"}`}>
                <a href="#home" className="group flex items-center">
                    <Image
                        src="/companylogo.png"
                        alt="Secure Zone logo"
                        width={340}
                        height={150}
                        className={`w-auto object-contain transition-all duration-300 ${isScrolled ? "h-8 sm:h-9" : "h-9 sm:h-10"}`}
                        priority
                    />
                </a>

                <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
                    {navLinks.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={(event) => handleNavClick(event, item.href)}
                            className={`rounded-full px-4 py-2 transition-all duration-200 hover:text-white ${activeHref === item.href
                                ? "bg-white/14 text-white shadow-inner shadow-white/15"
                                : "text-slate-300"
                                }`}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <button
                    type="button"
                    aria-label="Toggle menu"
                    aria-expanded={isMobileOpen}
                    aria-controls={mobileMenuId}
                    onClick={() => setIsMobileOpen((open) => !open)}
                    className="inline-flex cursor-pointer touch-auto h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/15 md:hidden"
                >
                    <span className="relative h-4 w-5">
                        <span className={`absolute left-0 top-0 h-0.5 w-5 bg-white transition-all duration-300 ${isMobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
                        <span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-white transition-all duration-300 ${isMobileOpen ? "opacity-0" : "opacity-100"}`} />
                        <span className={`absolute left-0 top-[14px] h-0.5 w-5 bg-white transition-all duration-300 ${isMobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
                    </span>
                </button>

                <div className="hidden items-center gap-3 md:flex">
                    <button
                        type="button"
                        onClick={openChatWidget}
                        className="inline-flex cursor-pointer touch-auto items-center gap-2 rounded-full border border-emerald-300/45 bg-emerald-500/10 px-5 py-2 text-sm font-semibold text-emerald-100 transition-all duration-200 hover:bg-emerald-500/20"
                    >
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#25D366] shadow-sm shadow-emerald-950/30">
                            <svg
                                className="h-3 w-3 text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M12 3.5a8.5 8.5 0 0 0-7.34 12.8L4 20l3.84-.64A8.5 8.5 0 1 0 12 3.5Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M9.15 8.6c.14-.32.28-.33.46-.34h.4c.13 0 .34-.05.52.28.18.32.69 1.18.75 1.27.06.09.1.2.02.32-.07.13-.11.2-.22.31-.11.11-.24.24-.34.32-.11.09-.23.19-.11.42.12.23.55.92 1.18 1.5.8.73 1.47.96 1.7 1.07.23.1.36.09.49-.05.13-.14.56-.58.7-.78.15-.2.3-.16.5-.09.2.07 1.25.59 1.47.7.22.11.36.17.42.26.06.09.06.53-.14 1.04-.2.51-.98.99-1.36 1.08-.38.09-.74.14-1.25.04-.51-.1-1.85-.53-3.53-2.03-1.31-1.17-2.19-2.61-2.45-3.05-.26-.44-.03-.7.15-.87.16-.16.35-.41.53-.62.17-.2.23-.33.33-.55Z"
                                    fill="#fff"
                                />
                            </svg>
                        </span>
                        Chat with us
                    </button>
                    <a
                        href="#contact"
                        className="inline-flex cursor-pointer touch-auto rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-900/40 transition-transform duration-200 hover:-translate-y-0.5"
                    >
                        Book Now
                    </a>
                </div>
            </div>

            {isMobileOpen ? (
                <button
                    type="button"
                    aria-label="Close mobile menu"
                    onClick={() => setIsMobileOpen(false)}
                    className="fixed inset-0 top-[60px] z-40 bg-slate-950/35 md:hidden"
                />
            ) : null}

            <div
                id={mobileMenuId}
                className={`relative z-50 overflow-hidden border-t border-white/10 bg-[#0b1d49]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${isMobileOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"}`}
            >
                <nav className="overflow-hidden">
                    <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-2 px-4 py-3 sm:px-6 lg:px-8">
                        {navLinks.map((item) => (
                            <a
                                key={`mobile-${item.href}`}
                                href={item.href}
                                onClick={(event) => handleNavClick(event, item.href)}
                                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${activeHref === item.href
                                    ? "bg-white/14 text-white"
                                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 pb-4 sm:px-6 lg:px-8">
                        <button
                            type="button"
                            onClick={() => {
                                openChatWidget();
                                setIsMobileOpen(false);
                            }}
                            className="inline-flex cursor-pointer touch-auto items-center justify-center gap-2 rounded-full border border-emerald-300/45 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-100 transition-all duration-200 hover:bg-emerald-500/20"
                        >
                            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#25D366] shadow-sm shadow-emerald-950/30">
                                <svg
                                    className="h-3 w-3 text-white"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M12 3.5a8.5 8.5 0 0 0-7.34 12.8L4 20l3.84-.64A8.5 8.5 0 1 0 12 3.5Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M9.15 8.6c.14-.32.28-.33.46-.34h.4c.13 0 .34-.05.52.28.18.32.69 1.18.75 1.27.06.09.1.2.02.32-.07.13-.11.2-.22.31-.11.11-.24.24-.34.32-.11.09-.23.19-.11.42.12.23.55.92 1.18 1.5.8.73 1.47.96 1.7 1.07.23.1.36.09.49-.05.13-.14.56-.58.7-.78.15-.2.3-.16.5-.09.2.07 1.25.59 1.47.7.22.11.36.17.42.26.06.09.06.53-.14 1.04-.2.51-.98.99-1.36 1.08-.38.09-.74.14-1.25.04-.51-.1-1.85-.53-3.53-2.03-1.31-1.17-2.19-2.61-2.45-3.05-.26-.44-.03-.7.15-.87.16-.16.35-.41.53-.62.17-.2.23-.33.33-.55Z"
                                        fill="#fff"
                                    />
                                </svg>
                            </span>
                            Chat with us
                        </button>
                        <a
                            href="#contact"
                            onClick={(event) => handleNavClick(event, "#contact")}
                            className="inline-flex cursor-pointer touch-auto items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-900/40 transition-transform duration-200 hover:-translate-y-0.5"
                        >
                            Book Now
                        </a>
                    </div>
                </nav>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent" />
        </header>
    );
}
