import Head from 'next/head';

const projects = [
    { 
        title: "Hermes Pro", 
        description: [
            "Architected a multi-service, containerized AI agent to unify siloed data from multiple developer platforms.",
            "Engineered a code-to-graph pipeline using Python’s AST module to parse a 15,000+ line codebase into a Knowledge Graph.",
            "Implemented an advanced agentic RAG system using LlamaIndex and a local LLM (Llama 3) for autonomous querying.",
            "Built a real-time conversational interface via a Discord Bot with responses in under 5 seconds."
        ], 
        tags: ["Python", "FastAPI", "Docker", "LlamaIndex", "Ollama", "AST"],
        link: "https://github.com/vintu2001/Hermes-Pro"
    },
    { 
        title: "Log Flow and Query", 
        description: [
            "Engineered a robust log ingestion pipeline using Kafka and Spring Boot to manage high-volume data streams.",
            "Centralized log data into a MongoDB database for efficient storage and access.",
            "Implemented an efficient query system with advanced full-text search and customizable filters via a REST API."
        ], 
        tags: ["Java", "Spring Boot", "Apache Kafka", "MongoDB", "REST API", "Python"],
        link: "https://github.com/vintu2001/Log-Flow-and-Query"
    }
];

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects | Vineet</title>
      </Head>
      <div className="py-12 sm:py-20 animate-fadeIn max-w-5xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">Projects</h1>
        <p className="text-center text-lg text-slate-600 dark:text-slate-400 mb-12">A selection of projects I've worked on.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                 <div 
                    key={index}
                    className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-lg shadow-md flex flex-col border border-slate-200 dark:border-slate-700"
                >
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-bold text-teal-500">{project.title}</h3>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-base text-slate-600 dark:text-slate-300 flex-grow mb-4">
                        {project.description.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                    </ul>
                    <div className="mt-auto flex justify-between items-end pt-4">
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-xs font-medium px-2.5 py-0.5 rounded-full">{tag}</span>
                            ))}
                        </div>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} on GitHub`}
                            className="text-slate-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                        >
                            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </>
  );
}