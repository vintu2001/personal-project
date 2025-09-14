import Head from 'next/head';

export default function ResumePage() {
  return (
    <>
      <Head>
        <title>Resume | Vineet</title>
      </Head>
      <div className="pt-2 sm:pt-4 pb-12 sm:pb-20 animate-fadeIn max-w-5xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-lg text-slate-600 dark:text-slate-400 text-center sm:text-left">
            View my professional experience, education, and skills in detail.
          </p>
          <div className="flex gap-4 flex-shrink-0">
            <a href="/Vineet_Malewar_SDE_Resume.pdf" download className="inline-block bg-teal-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-teal-700 transition-colors duration-300 shadow-md">
              Download
            </a>
            <a href="/Vineet_Malewar_SDE_Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-block border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold py-2 px-5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300 shadow-md">
              Open in New Tab
            </a>
          </div>
        </div>
        <div className="mt-10 w-full h-[95vh] rounded-lg overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
            <iframe
                src="/Vineet_Malewar_SDE_Resume.pdf"
                className="w-full h-full"
                title="Vineet Malewar's Resume"
            />
        </div>
      </div>
    </>
  );
}