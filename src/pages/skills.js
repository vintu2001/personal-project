import Head from 'next/head';

const skillsData = {
  Languages: ['Java', 'Python', 'JavaScript', 'C/C++', 'SQL', 'HTML', 'Shell'],
  Frameworks: ['Spring Boot', 'Hibernate ORM', 'React', 'Node.js', 'FastAPI', 'J2EE'],
  Databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Druid'],
  'Cloud & DevOps': ['AWS (EC2, CloudWatch)', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'Airflow', 'Unix/Linux'],
  'Data Processing & Tools': ['Apache Kafka', 'Apache Flink', 'Elasticsearch', 'Git', 'Maven', 'Postman', 'Grafana', 'JUnit', 'Mockito'],
  'AI & Concepts': ['LlamaIndex', 'Ollama (Llama 3)', 'Design Patterns', 'SOLID Principles', 'Distributed Systems', 'Agile Methodologies'],
};

export default function SkillsPage() {
  return (
    <>
      <Head>
        <title>Skills | Vineet</title>
      </Head>
      <div className="py-12 sm:py-20 animate-fadeIn">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">Skills & Technologies</h1>
        <p className="text-center text-lg text-slate-600 dark:text-slate-400 mb-12">My technical expertise and capabilities.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-800">
              <h2 className="text-2xl font-semibold mb-4 text-teal-500">{category}</h2>
              <ul className="space-y-2">
                {skills.map((skill) => (
                  <li key={skill} className="text-slate-700 dark:text-slate-300">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}