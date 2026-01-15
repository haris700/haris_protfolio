import Link from 'next/link';

export default function Header() {
    const navItems = [
        { name: 'Process', href: '#process' },
        { name: 'Technical Skills', href: '#tech' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-white/5 h-16 transition-all">
            <div className="container-clean h-full flex items-center justify-between">
                <Link href="/" className="text-base font-bold tracking-tight text-foreground hover:text-accent transition-colors flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                    Haris V K
                </Link>

                <nav className="hidden md:flex gap-6 items-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-xs font-medium text-slate-400 hover:text-white transition-colors uppercase tracking-wider"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="w-px h-4 bg-white/10 mx-2"></div>
                    <Link
                        href="#contact"
                        className="text-xs font-bold text-accent hover:text-accent/80 transition-colors uppercase tracking-wider"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Mobile Contact Only (Simplified) */}
                <a href="#contact" className="md:hidden text-xs font-bold text-accent uppercase tracking-wider">
                    Contact
                </a>
            </div>
        </header>
    );
}
