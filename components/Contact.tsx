
"use client";

import { FormEvent, useEffect, useState } from "react";
import { Mail, MapPin, Phone, UserRound, MessageCircle } from "lucide-react";
import { OPEN_WIDGET_EVENT } from "@/components/WhatsAppWidget";

type FormState = {
    name: string;
    email: string;
    service: string;
    message: string;
};

type FormErrors = {
    name?: string;
    email?: string;
    service?: string;
    message?: string;
};

const initialForm: FormState = {
    name: "",
    email: "",
    service: "",
    message: "",
};

function validateForm(form: FormState): FormErrors {
    const errors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (form.name.trim().length < 2) {
        errors.name = "Please enter your full name.";
    }

    if (!emailRegex.test(form.email.trim())) {
        errors.email = "Please enter a valid email address.";
    }

    if (!form.service.trim()) {
        errors.service = "Please select a service.";
    }

    return errors;
}

export default function Contact() {
    const [form, setForm] = useState<FormState>(initialForm);
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<"idle" | "valid" | "invalid">("idle");
    const [isCallOptionsOpen, setIsCallOptionsOpen] = useState(false);
    const managerPhone = "+971556175765";
    const projectManagerPhone = "+971541793004";

    useEffect(() => {
        if (status !== "invalid" && status !== "valid" && Object.keys(errors).length === 0) {
            return;
        }

        const timeoutId = window.setTimeout(() => {
            setErrors({});
            setStatus("idle");
        }, 7000);

        return () => window.clearTimeout(timeoutId);
    }, [errors, status]);

    const openCallOptions = () => {
        setIsCallOptionsOpen(true);
    };

    const openChatWidget = () => {
        window.dispatchEvent(new Event(OPEN_WIDGET_EVENT));
    };

    const handleWhatsAppClick = () => {
        openChatWidget();
    };

    const handleCallNow = () => {
        openCallOptions();
    };

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const validationErrors = validateForm(form);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setStatus("invalid");
            return;
        }

        setErrors({});
        setStatus("valid");

        const subject = encodeURIComponent(`Project Inquiry from ${form.name.trim()}`);
        const body = encodeURIComponent(
            `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\nService Needed: ${form.service.trim()}\n\nMessage:\n${form.message.trim()}`,
        );

        window.location.href = `mailto:sadiqshiekh71@gmail.com?subject=${subject}&body=${body}`;
    }

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#f0f7ff_45%,#e8f2fd_100%)] py-14 scroll-mt-28 sm:py-16 sm:scroll-mt-32 lg:py-20 lg:scroll-mt-36"
        >
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_25%,rgba(59,130,246,0.14),transparent_35%),radial-gradient(circle_at_85%_15%,rgba(125,211,252,0.12),transparent_32%),radial-gradient(circle_at_50%_90%,rgba(96,165,250,0.1),transparent_38%)]" />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]" />
            <div className="pointer-events-none absolute -left-20 top-12 h-64 w-64 rounded-full bg-sky-300/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />

            <div className="relative z-10 mx-auto grid w-full max-w-7xl items-start gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                        Contact
                    </p>
                    <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">
                        Let&apos;s Discuss Your Project
                    </h2>
                    <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
                        Reach out for planning and implementation of residential and commercial systems across Dubai.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                        <span className="rounded-full border border-sky-200 bg-white/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-sky-700">
                            Fast Response
                        </span>
                        <span className="rounded-full border border-slate-200 bg-white/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-600">
                            Dubai Coverage
                        </span>
                    </div>

                    <div className="mt-7 space-y-4 text-sm text-slate-700 sm:mt-8">
                        <div className="rounded-2xl border border-sky-200/80 bg-[linear-gradient(145deg,rgba(255,255,255,0.95),rgba(239,246,255,0.86))] p-4 shadow-[0_14px_30px_rgba(2,132,199,0.14)] ring-1 ring-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_38px_rgba(2,132,199,0.22)]">
                            <span className="inline-flex rounded-full bg-sky-100 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-sky-700">
                                Manager
                            </span>
                            <p className="mt-2 flex flex-wrap items-center gap-2.5 sm:gap-3 font-semibold text-slate-900">
                                <UserRound className="h-4 w-4 text-sky-600" /> Mohammed Sadiq
                            </p>
                            <a
                                href="tel:+971556175765"
                                className="mt-2 flex items-center gap-2.5 sm:gap-3 text-sm font-semibold text-sky-700 transition-colors hover:text-sky-800"
                            >
                                <Phone className="h-4 w-4 text-sky-600" /> +971 55 617 5765
                            </a>
                        </div>

                        <div className="rounded-2xl border border-slate-200/85 bg-[linear-gradient(145deg,rgba(255,255,255,0.94),rgba(241,245,249,0.9))] p-4 shadow-[0_14px_30px_rgba(15,23,42,0.12)] ring-1 ring-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_38px_rgba(15,23,42,0.18)]">
                            <span className="inline-flex rounded-full bg-slate-200 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-slate-700">
                                Project Engineer
                            </span>
                            <p className="mt-2 flex flex-wrap items-center gap-2.5 sm:gap-3 font-semibold text-slate-900">
                                <UserRound className="h-4 w-4 text-sky-600" /> Mohammed Safwan
                            </p>
                            <a
                                href="tel:+971541793004"
                                className="mt-2 flex items-center gap-3 text-sm font-semibold text-sky-700 transition-colors hover:text-sky-800"
                            >
                                <Phone className="h-4 w-4 text-sky-600" /> +971 54 179 3004
                            </a>
                        </div>

                        <div className="rounded-2xl border border-slate-200/85 bg-[linear-gradient(145deg,rgba(255,255,255,0.94),rgba(248,250,252,0.88))] p-4 shadow-[0_12px_26px_rgba(15,23,42,0.1)] ring-1 ring-white/80">
                            <p className="flex items-center gap-3 break-all sm:break-normal">
                                <Mail className="h-4 w-4 text-sky-600" /> sadiqshiekh71@gmail.com
                            </p>
                            <p className="mt-3 flex items-start gap-3 leading-6">
                                <MapPin className="mt-1 h-4 w-4 shrink-0 text-sky-600" /> Al Zahraa Techno Centre - 101,
                                Al Raffa, Bur Dubai, Dubai
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        <button
                            type="button"
                            onClick={handleWhatsAppClick}
                            className="flex w-full cursor-pointer touch-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(16,185,129,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:from-green-600 hover:to-emerald-600 sm:w-auto"
                        >
                            <MessageCircle className="h-5 w-5" />
                            WhatsApp
                        </button>
                        <button
                            type="button"
                            onClick={handleCallNow}
                            className="flex w-full cursor-pointer touch-auto items-center justify-center gap-2 rounded-xl border border-sky-200 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md sm:w-auto"
                        >
                            <Phone className="h-5 w-5" />
                            Call Now
                        </button>
                    </div>
                </div>

                {isCallOptionsOpen ? (
                    <div
                        className="fixed inset-0 z-[999990] flex items-center justify-center bg-slate-950/55 px-4 py-6 backdrop-blur-sm pointer-events-auto"
                        onClick={() => setIsCallOptionsOpen(false)}
                    >
                        <div
                            role="dialog"
                            aria-modal="true"
                            aria-label="Choose a number to call"
                            className="z-[1000000] w-full max-w-md overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.28)]"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <div className="flex items-center justify-between bg-gradient-to-r from-sky-700 to-indigo-700 px-5 py-4 text-white">
                                <div>
                                    <p className="text-lg font-semibold">Call Now</p>
                                    <p className="text-sm text-white/85">Choose Manager or Project Manager</p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setIsCallOptionsOpen(false)}
                                    className="rounded-full p-2 text-white/90 transition-colors hover:bg-white/15"
                                    aria-label="Close call popup"
                                >
                                    <span className="text-2xl leading-none">×</span>
                                </button>
                            </div>

                            <div className="grid gap-3 p-4 sm:p-5">
                                <a
                                    href={`tel:${managerPhone}`}
                                    className="flex cursor-pointer touch-auto items-center justify-between rounded-2xl border border-sky-100 bg-sky-50/70 px-4 py-4 text-left transition-colors hover:border-sky-200 hover:bg-sky-50"
                                >
                                    <span>
                                        <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">Manager</span>
                                        <span className="block text-base font-semibold text-slate-900">Mohammed Sadiq</span>
                                        <span className="block text-sm font-medium text-slate-600">{managerPhone}</span>
                                    </span>
                                    <Phone className="h-5 w-5 text-sky-600" />
                                </a>

                                <a
                                    href={`tel:${projectManagerPhone}`}
                                    className="flex cursor-pointer touch-auto items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 text-left transition-colors hover:border-slate-300 hover:bg-slate-50"
                                >
                                    <span>
                                        <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">Project Manager</span>
                                        <span className="block text-base font-semibold text-slate-900">Mohammed Safwan</span>
                                        <span className="block text-sm font-medium text-slate-600">{projectManagerPhone}</span>
                                    </span>
                                    <Phone className="h-5 w-5 text-sky-600" />
                                </a>
                            </div>
                        </div>
                    </div>
                ) : null}

                <form
                    onSubmit={handleSubmit}
                    suppressHydrationWarning
                    className="rounded-3xl border border-sky-100/80 bg-white/85 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.16)] ring-1 ring-white/70 backdrop-blur-sm sm:p-7"
                    noValidate
                >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                        Send Enquiry
                    </p>
                    <p className="mt-1.5 text-xs text-slate-600 sm:text-sm">
                        Share your requirements and our team will contact you shortly.
                    </p>

                    <div className="mt-5 space-y-3.5">
                        <div>
                            <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-slate-900">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                suppressHydrationWarning
                                placeholder="Your name"
                                value={form.name}
                                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                                aria-invalid={Boolean(errors.name)}
                                className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition duration-200 placeholder:text-slate-400 hover:border-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                            />
                            {errors.name ? <p className="mt-2 text-xs text-rose-600">{errors.name}</p> : null}
                        </div>

                        <div>
                            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-slate-900">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                suppressHydrationWarning
                                placeholder="you@company.com"
                                value={form.email}
                                onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                                aria-invalid={Boolean(errors.email)}
                                className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition duration-200 placeholder:text-slate-400 hover:border-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                            />
                            {errors.email ? <p className="mt-2 text-xs text-rose-600">{errors.email}</p> : null}
                        </div>

                        <div>
                            <label htmlFor="service" className="text-xs font-semibold uppercase tracking-wide text-slate-900">
                                Service Needed
                            </label>
                            <select
                                id="service"
                                name="service"
                                suppressHydrationWarning
                                value={form.service}
                                onChange={(event) => setForm((prev) => ({ ...prev, service: event.target.value }))}
                                aria-invalid={Boolean(errors.service)}
                                className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition duration-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                            >
                                <option value="">Select a service</option>
                                <option value="CCTV & Security">CCTV & Security</option>
                                <option value="PA & BGM Systems">PA & BGM Systems</option>
                                <option value="Smart Home Solutions">Smart Home Solutions</option>
                                <option value="WiFi & Networking">WiFi & Networking</option>
                                <option value="SMATV">SMATV</option>
                                <option value="General Consultation">General Consultation</option>
                            </select>
                            {errors.service ? <p className="mt-2 text-xs text-rose-600">{errors.service}</p> : null}
                        </div>

                        <div>
                            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-slate-900">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                suppressHydrationWarning
                                placeholder="Tell us about your requirements"
                                value={form.message}
                                onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                                aria-invalid={Boolean(errors.message)}
                                className="mt-1.5 w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition duration-200 placeholder:text-slate-400 hover:border-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                            />
                            {errors.message ? <p className="mt-2 text-xs text-rose-600">{errors.message}</p> : null}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="mt-5 w-full rounded-xl bg-gradient-to-r from-sky-700 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(30,64,175,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_36px_rgba(37,99,235,0.36)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                    >
                        Send Message
                    </button>
                    {status === "invalid" ? (
                        <p className="mt-3 text-xs text-rose-600">
                            Please correct the highlighted fields before sending.
                        </p>
                    ) : null}
                    {status === "valid" ? (
                        <p className="mt-3 text-xs text-emerald-600">
                            Opening your email app with the message details...
                        </p>
                    ) : null}
                </form>
            </div>
        </section>
    );
}