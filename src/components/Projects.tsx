export default function Projects() {
    const projects = [
        {
            title: "Eco-friendly Social Platform",
            description: "Platform for sharing environmental events and exchanging eco-friendly products. Features multi-language support and affiliate network.",
            tech: ["React", "Redux", "GraphQL", "AWS"],
            url: "#",
            isAiProject: false
        },
        {
            title: "AI Ecosystem Dashboard",
            description: "Analytics dashboard built with Cursor's AI capabilities. Features real-time data visualization and predictive modeling interfaces.",
            tech: ["Next.js", "Tailwind CSS", "Recharts"],
            url: "https://example.com/cursor-project",
            isAiProject: true,
            aiTool: "Cursor"
        },
        {
            title: "Autonomous Agent Workflow",
            description: "Task orchestration platform designed by Google Antigravity. Demonstrates advanced state management and agentic patterns.",
            tech: ["React", "TypeScript", "Node.js"],
            url: "https://example.com/antigravity-project",
            isAiProject: true,
            aiTool: "Antigravity"
        }
    ];

    return (
        <section id="projects" className="py-12 bg-slate-950">
            <div className="container-clean">
                <h2 className="text-2xl font-bold mb-12 tracking-tight text-foreground">Featured Projects</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} className="group relative bg-slate-900/40 border border-white/5 rounded-lg overflow-hidden hover:border-slate-700 transition-all duration-300">

                            <div className="p-6 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">{project.title}</h3>
                                    {project.isAiProject && (
                                        <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] uppercase font-bold tracking-wider rounded-sm">
                                            AI Workflow
                                        </span>
                                    )}
                                </div>

                                <p className="text-slate-400 text-sm mb-6 flex-1 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-xs text-slate-500 font-mono">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.url}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                                    >
                                        View Project <span className="text-accent">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
