import {
    SiReact, SiTypescript, SiJavascript, SiRedux, SiTailwindcss, SiNextdotjs, SiHtml5, SiCss3,
    SiNodedotjs, SiExpress, SiFastapi, SiGraphql, SiPostgresql, SiAmazondynamodb, SiAwsamplify,
    SiGit, SiJira, SiGithubactions,
    SiOpenai
} from 'react-icons/si';
import { VscCode, VscAzure } from 'react-icons/vsc';

export default function TechStack() {
    const categories = [
        {
            title: "Frontend Core",
            items: [
                { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
                { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
                { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
                { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
                { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
                { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
                { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
                { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
            ]
        },
        {
            title: "Backend & Cloud",
            items: [
                { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
                { name: "Azure", icon: <VscAzure className="text-[#0078D4]" /> },
                { name: "AWS", icon: <SiAwsamplify className="text-[#FF9900]" /> },
                { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
                { name: "GraphQL", icon: <SiGraphql className="text-[#E10098]" /> },
                { name: "FastAPI", icon: <SiFastapi className="text-[#009688]" /> },
                { name: "Express", icon: <SiExpress className="text-white" /> },
                { name: "DynamoDB", icon: <SiAmazondynamodb className="text-[#4053D6]" /> },
            ]
        },
        {
            title: "DevOps & Tools",
            items: [
                { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
                { name: "CI/CD", icon: <SiGithubactions className="text-[#2088FF]" /> },
                { name: "Jira", icon: <SiJira className="text-[#0052CC]" /> },
            ]
        },
        {
            title: "AI & Code Intelligence",
            highlight: true,
            items: [
                { name: "Cursor", icon: <VscCode className="text-white" /> },
                { name: "Antigravity", icon: <SiOpenai className="text-[#10A37F]" /> },
                // Note: Using OpenAI icon as placeholder for generic AI/Antigravity if specific icon unavailable
            ]
        }
    ];

    return (
        <section id="tech" className="py-12 bg-slate-950 border-t border-slate-900">
            <div className="container-clean">
                <h2 className="text-xl font-bold mb-10 tracking-tight text-foreground flex items-center gap-2">
                    Technical Arsenal
                </h2>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {categories.map((cat, idx) => (
                        <div key={idx} className={`space-y-4 ${cat.highlight ? 'p-6 bg-accent/5 border border-accent/10 rounded-xl' : ''}`}>
                            <h3 className={`text-sm font-semibold uppercase tracking-wider ${cat.highlight ? 'text-accent' : 'text-slate-500'}`}>
                                {cat.title}
                            </h3>
                            <div className="grid grid-cols-4 sm:grid-cols-4 gap-4">
                                {cat.items.map((item, i) => (
                                    <div key={i} className="flex flex-col items-center gap-2 group p-2 rounded-lg hover:bg-white/5 transition-colors">
                                        <span className="text-2xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 filter grayscale group-hover:grayscale-0">
                                            {item.icon}
                                        </span>
                                        <span className="text-[10px] text-slate-400 group-hover:text-slate-200 text-center font-medium">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
