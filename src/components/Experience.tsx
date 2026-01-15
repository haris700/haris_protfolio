export default function Experience() {
    return (
        <section id="experience" className="py-16 bg-background">
            <div className="container-clean">
                <h2 className="text-xl font-bold mb-10 tracking-tight text-foreground">Work Experience</h2>

                <div className="border-l border-slate-800 ml-3 md:ml-6 space-y-10">

                    <div className="relative pl-10 md:pl-16">
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-accent" />

                        <div className="mb-4">
                            <h3 className="text-xl font-bold text-foreground">Software Engineer – Frontend Focused</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-1">
                                <span className="text-base text-slate-300">AptlyLabs</span>
                                <span className="hidden sm:block text-slate-600">•</span>
                                <span className="text-xs font-mono text-slate-500">Dec 2022 – Present</span>
                            </div>
                        </div>

                        <ul className="space-y-3 text-slate-400 leading-relaxed list-disc list-outside ml-4 mb-6 text-sm">
                            <li>Built scalable frontend applications using React and TypeScript with clean and reusable components.</li>
                            <li>Managed global state using Redux Toolkit and optimized API calls using RTK Query.</li>
                            <li>Developed responsive and accessible UI using Tailwind CSS.</li>
                            <li>Integrated REST and GraphQL APIs in collaboration with backend teams.</li>
                            <li>Participated in code reviews, sprint planning, and feature discussions.</li>
                        </ul>

                        <div className="pt-4 border-t border-slate-800/50">
                            <h5 className="text-xs font-semibold text-slate-300 mb-2">Key Project: Eco-friendly Social Platform</h5>
                            <p className="text-xs text-slate-400 mb-3 max-w-xl">
                                An eco-friendly social media platform where users share posts, exchange gifts, and publish environmental events.
                            </p>
                            <div className="flex flex-wrap gap-2 text-[10px] font-mono text-slate-500 uppercase">
                                <span>React.js</span> &middot; <span>Redux</span> &middot; <span>GraphQL</span> &middot; <span>AWS Lambda</span> &middot; <span>PostgreSQL</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
