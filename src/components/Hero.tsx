import Image from 'next/image';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 text-center md:text-left">
                    <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium">
                        Available for new opportunities
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Hi, I'm <span className="text-gradient">Haris V K</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-slate-400 mb-8 font-light">
                        Software Engineer – Frontend Focused
                    </h2>
                    <p className="text-lg text-slate-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Specializing in building scalable web applications with React, TypeScript, and Modern UI/UX. Creating digital experiences that live on the internet.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-full transition-all shadow-[0_0_20px_-5px_var(--primary)] text-center"
                        >
                            View My Work
                        </a>
                        <a
                            href="/resume_1.png"
                            target="_blank"
                            className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/10 transition-all text-center"
                        >
                            View Resume
                        </a>
                    </div>
                </div>

                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 bg-slate-800">
                        <Image
                            src="/profile.jpg"
                            alt="Haris V K"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
