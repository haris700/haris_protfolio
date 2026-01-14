import Link from 'next/link';

export default function Header() {
    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Tech Stack', href: '#tech' },
        { name: 'Projects', href: '#projects' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold font-mono tracking-tighter text-gradient">
                    HARIS.DEV
                </Link>
                <nav className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <a
                    href="mailto:harisvkvnr@gmail.com"
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-full transition-all border border-white/10"
                >
                    Contact Me
                </a>
            </div>
        </header>
    );
}
