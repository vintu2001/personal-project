const Footer = () => {
  return (
    <footer className="py-8 mt-20 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 dark:text-slate-400">
        <p>&copy; {new Date().getFullYear()} Vineet Malewar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;