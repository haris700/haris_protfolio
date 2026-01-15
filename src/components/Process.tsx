'use client';

import { motion } from 'framer-motion';
import {
    PenTool,
    Database,
    Code2,
    GitMerge,
    Users,
    Sparkles,
    Layers,
    Rocket
} from 'lucide-react';

export default function Process() {
    const steps = [
        {
            title: "Discovery & Strategy",
            description: "Deconstructing the problem. Identifying core requirements and user needs before writing a single line of code.",
            icon: <PenTool className="w-5 h-5 text-indigo-400" />,
        },
        {
            title: "Rapid AI Prototyping",
            description: "Using Cursor & Google Antigravity to generate fast, functional POCs. validating ideas instantly.",
            icon: <Sparkles className="w-5 h-5 text-amber-400" />,
            highlight: true
        },
        {
            title: "Scalable Architecture",
            description: "Refining the POC into a robust system. Designing PostgreSQL schemas, API layers, and type-safe interfaces.",
            icon: <Database className="w-5 h-5 text-indigo-400" />,
        },
        {
            title: "Production Development",
            description: "Frontend implementation with React & TypeScript. Focusing on performance, accessibility, and component reusability.",
            icon: <Code2 className="w-5 h-5 text-indigo-400" />,
        },
        {
            title: "CI/CD & Cloud Launch",
            description: "Automated pipelines to Azure/AWS. Ensuring zero-downtime deployments and easy rollback strategies.",
            icon: <Rocket className="w-5 h-5 text-indigo-400" />,
        },
        {
            title: "Review & Iterate",
            description: "Team code reviews, testing, and continuous improvement loops.",
            icon: <Users className="w-5 h-5 text-indigo-400" />,
        }
    ];

    return (
        <section id="process" className="py-16 bg-slate-950/50">
            <div className="container-clean">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">My Workflow</span>
                    <h2 className="text-2xl font-bold tracking-tight text-foreground">
                        From Idea to <span className="text-white">Production</span>
                    </h2>
                </motion.div>

                <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="relative pl-10 md:pl-16 group"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-1">
                                <div className={`h-2.5 w-2.5 rounded-full border-2 transition-all duration-300 ${step.highlight ? 'border-amber-400 bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)]' : 'border-slate-600 bg-slate-900 group-hover:border-indigo-400 group-hover:bg-indigo-400'}`} />
                            </div>

                            <div className={`p-4 rounded-lg border transition-all duration-300 ${step.highlight ? 'bg-amber-900/10 border-amber-500/20 hover:border-amber-500/40' : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10'}`}>
                                <div className="flex items-center gap-3 mb-1">
                                    {step.icon}
                                    <h3 className={`font-bold text-sm md:text-base ${step.highlight ? 'text-amber-100' : 'text-slate-100'}`}>{step.title}</h3>
                                </div>
                                <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-xl">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
