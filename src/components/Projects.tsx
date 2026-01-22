'use client';

import { motion } from 'framer-motion';
import { FileText, Activity, Database, ArrowRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'ForgeDoc Extraction',
        description: 'An intelligent document processing system where users upload documents for extraction based on custom templates. The system triggers an Azure Lambda queue for AI-based data extraction, returning structured data to the database.',
        url: 'https://blue-field-09c556b1e.2.azurestaticapps.net',
        tech: ['Azure Static Apps', 'Azure Lambda', 'Database', 'Custom Templates'],
        icon: <FileText className="w-6 h-6" />,
        color: 'from-blue-500 to-cyan-500'
    },
    {
        id: 2,
        title: 'Forge Cognite',
        description: 'Industrial data visualization platform utilizing Cognite public data. Features asset trees, time-series data visualization with Chart.js, and interactive 3D asset models using the Cognite 3D Viewer.',
        url: 'https://nice-pond-09759a50f.6.azurestaticapps.net',
        tech: ['React', 'FastAPI', 'Chart.js', 'Cognite SDK', '3D Viewer'],
        icon: <Activity className="w-6 h-6" />,
        color: 'from-emerald-500 to-teal-500'
    },
    {
        id: 3,
        title: 'Employee Management',
        description: 'A comprehensive solution for the food and bakery industry to manage employee lifecycles. Handles joining, attendance, leave management, and generates automated payroll reports in PDF format.',
        url: 'https://employee-managment-c2793.web.app/login',
        tech: ['React', 'Firebase', 'PDF Generation', 'Payroll Management'],
        icon: <Database className="w-6 h-6" />,
        color: 'from-purple-500 to-pink-500'
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
};

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                        Featured Projects
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Solving real-world problems with modern technology stacks.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="group relative h-full"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative h-full bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col overflow-visible hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
                                {/* Icon Bubble */}
                                <div className={`absolute -top-6 left-8 w-14 h-14 rounded-2xl bg-gradient-to-r ${project.color} p-[1px] shadow-lg`}>
                                    <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-white">
                                        {project.icon}
                                    </div>
                                </div>

                                <div className="mt-8 flex-1">
                                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-200 mb-3 group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="text-xs px-2.5 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-300 font-medium"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto pt-6 border-t border-white/5">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white group-hover:gap-3 transition-all"
                                    >
                                        Visit Project <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
