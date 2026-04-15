"use client";

import { useEffect, useMemo, useState } from "react";
import { MessageCircle, X } from "lucide-react";

const OPEN_WIDGET_EVENT = "securezone:open-whatsapp-widget";

type Agent = {
    name: string;
    role: string;
    phone: string;
    emoji: string;
};

const agents: Agent[] = [
    {
        name: "Mohammed Sadiq",
        role: "Manager",
        phone: "971556175765",
        emoji: "🧑‍💼",
    },
    {
        name: "Mohammed Safwan",
        role: "Project Engineer",
        phone: "971507841754",
        emoji: "👷",
    },
];

function getWhatsAppLink(phone: string, message: string) {
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export default function WhatsAppWidget() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const openWidget = () => setIsOpen(true);
        window.addEventListener(OPEN_WIDGET_EVENT, openWidget);
        return () => window.removeEventListener(OPEN_WIDGET_EVENT, openWidget);
    }, []);

    const introMessage = useMemo(
        () =>
            "Hi, I’m interested in your services. Please share more details about CCTV, networking, smart home, SMATV, and PA system solutions.",
        []
    );

    return (
        <>
            {/* Floating Button */}
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label="Open WhatsApp chat"
                className="fixed bottom-5 right-4 z-[100000] flex h-16 w-16 cursor-pointer touch-auto items-center justify-center rounded-full bg-gradient-to-br from-[#2ddf72] to-[#1fb65a] text-white shadow-[0_16px_30px_rgba(31,182,90,0.45)] ring-1 ring-white/45 transition-transform duration-200 active:scale-95"
                style={{ WebkitTapHighlightColor: "transparent" }}
            >
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            </button>

            {isOpen ? (
                <>
                    {/* Overlay */}
                    <div
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-[140] hidden bg-black/40 md:block"
                    />

                    {/* Popup */}
                    <div
                        className="fixed bottom-24 right-4 z-[100010] w-[90vw] max-w-[360px] overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-[0_26px_70px_rgba(2,6,23,0.28)] transition-all duration-300"
                        style={{ WebkitTapHighlightColor: "transparent" }}
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between bg-gradient-to-r from-[#0b7b55] to-[#0a8f61] px-4 py-4 text-white">
                            <div>
                                <h2 className="text-xl font-bold tracking-tight">Secure Zone</h2>
                                <p className="mt-0.5 inline-flex items-center gap-1.5 text-xs text-emerald-100/95">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                                    Typically replies instantly
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="rounded-full p-1.5 text-white/90 transition-colors hover:bg-white/15"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Message */}
                        <div className="bg-[linear-gradient(180deg,#f3f4f6_0%,#f8fafc_100%)] p-4">
                            <div className="rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm">
                                <p className="font-semibold text-slate-900">👋 Hello! Welcome to <strong>Secure Zone Technical Services</strong>.</p>
                                <p className="mt-1 text-sm leading-6 text-slate-600">
                                    Choose an agent to chat:
                                </p>
                            </div>
                        </div>

                        {/* Agents */}
                        <div className="divide-y divide-slate-100 bg-white">
                            {agents.map((agent) => (
                                <a
                                    key={agent.phone}
                                    href={getWhatsAppLink(agent.phone, introMessage)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex w-full cursor-pointer touch-auto items-center gap-3 px-4 py-4 text-left transition-colors hover:bg-emerald-50 active:scale-[0.99]"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-lg ring-1 ring-emerald-200/70">{agent.emoji}</div>

                                    <div className="flex-1 text-left">
                                        <p className="font-semibold text-gray-900">
                                            {agent.name}
                                        </p>
                                        <p className="text-sm text-slate-500">
                                            {agent.role}
                                        </p>
                                        <p className="mt-0.5 text-xs text-emerald-600">
                                            ● Online
                                        </p>
                                    </div>

                                    <div className="rounded-full bg-[#25D366] p-2.5 text-white shadow-sm">
                                        <MessageCircle size={16} />
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="border-t border-slate-100 bg-slate-50/70 py-2 text-center">
                            <p className="text-xs font-medium text-slate-500">Powered by WhatsApp Business</p>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
}

export { OPEN_WIDGET_EVENT };
