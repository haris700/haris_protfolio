'use client';

import { Mail, Phone } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-slate-950 border-t border-slate-900">
            <div className="container-clean text-center">
                <h2 className="text-2xl font-bold mb-8 tracking-tight text-foreground">Get In Touch</h2>
                <p className="text-slate-400 mb-10 max-w-xl mx-auto">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
                    <a href="mailto:harisvkvnr@gmail.com" className="group flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-all w-full md:w-auto min-w-[250px] justify-center">
                        <Mail className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium text-slate-300 group-hover:text-white">harisvkvnr@gmail.com</span>
                    </a>

                    <a href="tel:+919961896887" className="group flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-all w-full md:w-auto min-w-[250px] justify-center">
                        <Phone className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium text-slate-300 group-hover:text-white">+91 9961896887</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
