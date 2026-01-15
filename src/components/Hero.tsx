import Image from 'next/image';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import profilePic from '@/assets/profile.jpg';

export default function Hero() {
    return (
        <section className="min-h-[85vh] flex items-center justify-center pt-20 md:pt-0">
            <div className="container-clean flex flex-col md:flex-row items-center gap-10 md:gap-20">

                <div className="flex-1 text-center md:text-left order-2 md:order-1">
                    <div className="inline-block px-3 py-1 mb-4 rounded-md bg-white/5 text-muted text-[10px] font-bold tracking-widest border border-white/5 uppercase">
                        Available for new opportunities
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter text-foreground">
                        Haris V K
                    </h1>
                    <h2 className="text-lg md:text-xl text-muted mb-4 font-normal leading-relaxed">
                        Senior Frontend Engineer & <br className="hidden md:block" /> Product Architect
                    </h2>

                    {/* Social Links */}
                    <div className="flex justify-center md:justify-start gap-4 mb-8">
                        <a href="https://github.com/haris700/" target="_blank" className="text-slate-400 hover:text-white transition-colors text-2xl"><SiGithub /></a>
                        <a href="https://www.linkedin.com/in/harisvk700" target="_blank" className="text-slate-400 hover:text-[#0A66C2] transition-colors text-2xl"><SiLinkedin /></a>
                    </div>

                    <p className="text-sm md:text-base text-slate-400 mb-8 max-w-lg mx-auto md:mx-0 leading- relaxed">
                        Designing and building scalable web ecosystems. I bridge the gap between complex engineering requirements and intuitive user experiences.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                        <a
                            href="#projects"
                            className="px-6 py-2.5 bg-white text-slate-950 font-bold rounded-md hover:bg-slate-200 transition-colors text-xs uppercase tracking-wide"
                        >
                            View Selected Work
                        </a>
                        <a
                            href="/haris_portfolio/resume_1.png"
                            target="_blank"
                            className="px-6 py-2.5 bg-transparent text-slate-300 font-bold rounded-md border border-slate-800 hover:border-slate-600 hover:text-white transition-colors text-xs uppercase tracking-wide"
                        >
                            Resume
                        </a>
                    </div>
                </div>

                <div className="relative order-1 md:order-2">
                    <div className="relative w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-2 border-slate-800 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
                        <Image
                            src={profilePic}
                            alt="Haris V K"
                            fill
                            sizes="(max-width: 768px) 160px, 240px"
                            className="object-cover"
                            priority
                            placeholder="blur"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
