import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import '../styles/Sponsors.css';

const SponsorshipTiers = () => {
    const sponsorshipTiers = [
        { tier: "TITLE", price: "₹75,000", benefits: ["Exclusive 'Presented By' Branding", "10-Minute Sponsor Session", "Largest Logo on All Materials", "4 VIP Passes", "Recruitment Opportunities"] },
        { tier: "GOLD", price: "₹50,000", benefits: ["Large Logo on Banners & Certificates", "Large Logo on Website", "2 VIP Passes", "Recruitment Opportunities", "Logo on Event T-shirts"] },
        { tier: "SILVER", price: "₹25,000", benefits: ["Medium Logo on Materials", "Medium Logo on Website", "1 VIP Pass", "Recruitment Opportunities", "Shared Social Media Posts"] },
        { tier: "BRONZE", price: "₹10,000", benefits: ["Small Logo on Materials", "Small Logo on Website", "1 Social Media Mention"] }
    ];

    return (
        <section className="w-full mb-16">
            <header className="mb-8">
                <h3 className="text-orange-400 text-2xl font-bold">Sponsorship Opportunities</h3>
            </header>
            <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {sponsorshipTiers.map(tier => (
                    <article key={tier.tier} className='glass-card rounded-2xl p-6 text-left flex flex-col'>
                        <header>
                            <h4 className="text-orange-400 text-xl font-bold uppercase tracking-wide">{tier.tier}</h4>
                            <p className="text-white text-2xl font-bold mb-4">{tier.price}</p>
                        </header>
                        <ul className="space-y-2 mb-6 text-gray-300 text-sm flex-grow">
                            {tier.benefits.map(benefit => (
                                <li key={benefit} className="flex items-start gap-2">
                                    <span className="text-orange-400 mt-1">✓</span>
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                        <footer>
                            <a href="mailto:support@cyberonites.com" className="block w-full text-center px-4 py-3 bg-orange-500/80 text-white font-semibold rounded-lg hover:bg-orange-500 transition-colors">Sponsor {tier.tier}</a>
                        </footer>
                    </article>
                ))}
            </main>
        </section>
    );
};

const PastSponsors = () => {
    const pastSponsors = [
        { name: "Altered Security", tier: "PLATINUM", logo: "https://res.cloudinary.com/dkoez6c4h/image/upload/v1724950933/EscalateX/Sponsors/cnk1m3b0uihxonp9q9g6.png" },
        { name: "OffSec", tier: "GOLD", logo: "https://res.cloudinary.com/dkoez6c4h/image/upload/v1724950933/EscalateX/Sponsors/z2t5zgmzpcp5hqqmubcp.png" },
        { name: "Cyber Intelligence Global", tier: "GOLD", logo: "https://res.cloudinary.com/dkoez6c4h/image/upload/v1724950933/EscalateX/Sponsors/g2vgsdspk5qgxwthtrxa.png" },
        { name: "Unstop", tier: "SILVER", logo: "https://res.cloudinary.com/dkoez6c4h/image/upload/v1724950934/EscalateX/Sponsors/xucftjpn9vjdnxklxstc.png" },
        { name: "YCF", tier: "SILVER", logo: "https://res.cloudinary.com/dkoez6c4h/image/upload/v1724950934/EscalateX/Sponsors/j2wzrfgsd1ksk0vj3t8a.jpg" },
        { name: "Multigrad", tier: "SILVER", logo: "https://res.cloudinary.com/dkoez6c4h/image/upload/v1724950933/EscalateX/Sponsors/p8ddf5l9j3qn8vr9g9u9.png" },
        { name: "Cyberyaan", tier: "BRONZE", logo: "https://res.cloudinary.com/dkoez6c4h/image/upload/v1724950933/EscalateX/Sponsors/vyi1l2z1t3ihjpcvvepl.png" },
        { name: ".XYZ", tier: "BRONZE", logo: "https://res.cloudinary.com/dkoez6c4h/image/upload/v1724950934/EscalateX/Sponsors/jnyd6wdddcuaaxz30z5k.png" }
    ];

    return (
        <section className="w-full mb-16">
            <header className="mb-8">
                <h3 className="text-orange-400 text-2xl font-bold">Past Sponsors (2024)</h3>
            </header>
            <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={30}
                slidesPerView={'auto'}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                className="past-sponsors-carousel"
            >
                {pastSponsors.map(sponsor => (
                    <SwiperSlide key={sponsor.name}>
                        <article className='glass-card rounded-2xl p-4 text-center'>
                            <div className="w-full h-20 flex items-center justify-center mb-4">
                                <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="max-h-full max-w-full object-contain" />
                            </div>
                            <h4 className="text-white font-bold">{sponsor.name}</h4>
                            <p className="text-orange-400 text-xs font-semibold uppercase">{sponsor.tier}</p>
                        </article>
                    </SwiperSlide>
                ))}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </Swiper>
        </section>
    );
};

const Sponsors = () => {
    return (
        <section id="section6" className="main-section">
            <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center py-12">
                <header className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        <span className="text-white">PARTNERSHIP & </span>
                        <span style={{ color: 'var(--primary-orange)' }}>SPONSORSHIP</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        Join us as a partner and showcase your brand to the next generation of cybersecurity professionals.
                    </p>
                </header>

                <SponsorshipTiers />
                <PastSponsors />

                <footer className="glass-card rounded-2xl p-8 w-full max-w-3xl">
                     <h3 className="text-white text-xl font-bold mb-4">Partnership Contact</h3>
                     <p className="text-gray-300 leading-relaxed mb-6">
                         Ready to partner with EscalateX v2? Contact us for detailed sponsorship packages and custom opportunities.
                     </p>
                     <a href="mailto:support@cyberonites.com" className="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
                         support@cyberonites.com
                     </a>
                </footer>
            </div>
        </section>
    );
};

export default Sponsors;