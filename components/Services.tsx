import Image from "next/image";
import { Camera, House, Megaphone, SatelliteDish, Wifi } from "lucide-react";

const featuredServices = [
    {
        icon: Camera,
        title: "CCTV & Security",
        description:
            "Intelligent surveillance, access control, and 24/7 protection layers.",
        image: "/cctv&sec.webp",
    },
    {
        icon: Megaphone,
        title: "PA & BGM Systems",
        description:
            "Clear public announcements and zone-based background music design.",
        image: "/pa&bgm.jpeg",
    },
    {
        icon: House,
        title: "Smart Home Solutions",
        description:
            "Unified control of lighting, climate, scenes, and smart automations.",
        image: "/smarthome.jpeg",
    },
];

const supportServices = [
    {
        icon: Wifi,
        title: "WiFi & Networking",
        description: "High-performance wired and wireless networks built for reliability.",
        image: "/wifi&network.jpg",
    },
    {
        icon: SatelliteDish,
        title: "SMATV",
        description: "Structured TV distribution with stable signal quality across properties.",
        image: "/smatv.jpg",
    },
];

export default function Services() {
    return (
        <section id="services" className="relative overflow-hidden bg-[linear-gradient(180deg,#fafdff_0%,#eef7ff_40%,#e4f1ff_100%)] py-12 sm:py-16 lg:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(14,165,233,0.2),transparent_34%),radial-gradient(circle_at_88%_12%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_50%_88%,rgba(37,99,235,0.12),transparent_40%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.56)_0%,rgba(219,234,254,0.28)_45%,rgba(191,219,254,0.16)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(56,189,248,0.06)_1px,transparent_1px),linear-gradient(0deg,rgba(56,189,248,0.04)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_18%,black_82%,transparent_100%)]" />
            <div className="pointer-events-none absolute -left-24 top-14 h-64 w-64 rounded-full bg-sky-300/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-28 bottom-8 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
            <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl text-left">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 sm:text-sm">
                        Services
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:mt-3 sm:text-3xl lg:text-4xl">
                        End-to-End Technical Solutions
                    </h2>
                </div>

                <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
                    {featuredServices.map(({ icon: Icon, title, description, image }, index) => (
                        <article
                            key={title}
                            className="group relative min-h-[220px] overflow-hidden rounded-2xl bg-slate-900 shadow-lg shadow-sky-100/60 transition-transform duration-300 hover:-translate-y-1 animate-fade-up sm:rounded-[26px] sm:min-h-[260px] sm:shadow-xl"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(min-width: 1024px) 33vw, 100vw"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.18)_0%,rgba(15,23,42,0.5)_58%,rgba(15,23,42,0.8)_100%)]" />
                            <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-6">
                                <span className="inline-flex items-center gap-2 rounded-full border border-white/45 bg-white/18 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_8px_22px_rgba(2,6,23,0.28)] backdrop-blur-md">
                                    <Icon className="h-3.5 w-3.5" />
                                    {title}
                                </span>
                                <p className="mt-2 max-w-sm text-xs leading-6 text-white/90 sm:mt-4 sm:text-base sm:leading-7">
                                    {description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2 lg:mt-8 lg:grid-cols-6 lg:gap-6">
                    {supportServices.map(({ icon: Icon, title, description, image }, index) => (
                        <article
                            key={title}
                            className={`group relative min-h-[220px] overflow-hidden rounded-2xl bg-slate-900 shadow-lg shadow-sky-100/60 transition-transform duration-300 hover:-translate-y-1 animate-fade-up sm:rounded-[26px] sm:min-h-[260px] sm:shadow-xl lg:col-span-2 ${index === 0 ? "lg:col-start-2" : "lg:col-start-4"
                                }`}
                            style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                        >
                            {image ? (
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(min-width: 1024px) 33vw, 100vw"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(56,189,248,0.35),transparent_45%),linear-gradient(150deg,#0b1f3f_0%,#123868_52%,#0f2948_100%)]" />
                            )}
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.16)_0%,rgba(15,23,42,0.52)_58%,rgba(15,23,42,0.82)_100%)]" />

                            <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-6">
                                <span className="inline-flex items-center gap-2 rounded-full border border-white/45 bg-white/18 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_8px_22px_rgba(2,6,23,0.28)] backdrop-blur-md">
                                    <Icon className="h-3.5 w-3.5" />
                                    {title}
                                </span>
                                <p className="mt-2 max-w-sm text-xs leading-6 text-white/90 sm:mt-4 sm:text-base sm:leading-7">{description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section >
    );
}
