import Image from "next/image";

const partners = [
    { name: "Hikvision", logo: "/hikvision-clean.png" },
    { name: "CP Plus", logo: "/cp-plus-tight.png", logoScale: "scale-[1.1]" },
    { name: "Commax", logo: "/comax-tight.png", logoScale: "scale-[1.08]" },
    { name: "Dahua", logo: "/dalhuatech.svg" },
    { name: "Meeso Communication", logo: "/messo-tight.png", logoScale: "scale-[1.08]" },
    { name: "TP-Link", logo: "/tplink.png" },
    { name: "Televes", logo: "/televes.png" },
    { name: "EnGenius", logo: "/engenius.png" },
    { name: "Ubiquiti", logo: "/ubiquiti-tight.png", logoScale: "scale-[1.12]" },
    { name: "D-Link", logo: "/d-link.png", logoScale: "scale-[1.1]" },
    { name: "Triax", logo: "/triax.png" },
    { name: "Bose", logo: "/Bose-logo.png", logoScale: "scale-[1.08]" },
    { name: "Tuya", logo: "/tuya.jpg" },
    { name: "KNX", logo: "/knx-tight.png", logoScale: "scale-[1.08]" },
    { name: "Zigbee", logo: "/zigbee.png" },
    { name: "Amazon Alexa", logo: "/amazon-alexa-tight.png", logoScale: "scale-[1.2]" },
    { name: "Bosch", logo: "/bosch-tight.png", logoScale: "scale-[1.12]" },
    { name: "JBL", logo: "/jbl-clean.png" },
    { name: "TOA", logo: "/toa-tight.png", logoScale: "scale-[1.12]" },
    { name: "Google Nest", logo: "/googlenest-clean.png" },
    { name: "ecobee", logo: "/ecobee.png" },
    { name: "Sonos", logo: "/sonos-tight.png", logoScale: "scale-[1.12]" },
    { name: "Aruba", logo: "/aruba-clean.png" },
    { name: "Cisco", logo: "/cisco-clean.png" },
];

const topRow = partners.slice(0, 12);
const bottomRow = partners.slice(12);



function PartnerCard({ partner }: { partner: (typeof partners)[number] }) {
    return (
        <div className="group relative flex h-20 w-[156px] flex-none items-center justify-center overflow-hidden rounded-2xl border border-white/70 bg-white/90 px-3 py-3 text-center shadow-[0_8px_24px_rgba(15,23,42,0.07)] ring-1 ring-sky-100/70 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_14px_36px_rgba(2,132,199,0.18)] hover:ring-sky-200 sm:w-[176px]">
            <span className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            {partner.logo ? (
                <div className={`relative flex h-10 w-[110px] items-center justify-center ${partner.logoScale ?? ""} sm:h-11 sm:w-[120px]`}>
                    <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        sizes="120px"
                        className="object-contain saturate-[1.06] transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                </div>
            ) : (
                <span className="text-[11px] font-semibold tracking-[0.04em] text-sky-800 sm:text-xs">
                    {partner.name}
                </span>
            )}
        </div>
    );
}

export default function Brands() {
    return (
        <section id="brands" className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#f0f7ff_45%,#e8f2fd_100%)] py-12 sm:py-16 lg:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(59,130,246,0.14),transparent_35%),radial-gradient(circle_at_85%_15%,rgba(125,211,252,0.12),transparent_32%),radial-gradient(circle_at_50%_90%,rgba(96,165,250,0.1),transparent_38%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]" />
            <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700 sm:text-sm">
                    Brands & Partners
                </p>
                <h2 className="mt-2 text-2xl font-bold leading-tight text-slate-900 sm:mt-3 sm:text-3xl lg:text-4xl">
                    Trusted Technology Partnerships
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
                    We collaborate with globally recognized manufacturers to deliver secure, reliable, and future-ready systems.
                </p>

                <div className="mt-8 space-y-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] sm:mt-10">
                    <div className="brand-track flex w-max gap-3 animate-brand-marquee-left">
                        {[...topRow, ...topRow].map((partner, index) => (
                            <PartnerCard key={`top-${partner.name}-${index}`} partner={partner} />
                        ))}
                    </div>

                    <div className="brand-track flex w-max gap-3 animate-brand-marquee-right">
                        {[...bottomRow, ...bottomRow].map((partner, index) => (
                            <PartnerCard key={`bottom-${partner.name}-${index}`} partner={partner} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
