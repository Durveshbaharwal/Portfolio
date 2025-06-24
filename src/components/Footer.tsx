
const Footer = () => {
  return (
    <footer className="bg-mountain-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Durvesh Sunil Baharwal
            </h3>
            <p className="text-mountain-300 leading-relaxed">
              Exploring AI, Nature & Self – One Algorithm and Summit at a Time
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-mountain-300 hover:text-gold-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-mountain-300 hover:text-gold-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-mountain-300 hover:text-gold-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-mountain-300 hover:text-gold-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">External Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/Durveshbaharwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mountain-300 hover:text-gold-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/durvesh-baharwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mountain-300 hover:text-gold-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@prof.dsb7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mountain-300 hover:text-gold-400 transition-colors"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-mountain-700 mt-8 pt-8 text-center">
          <p className="text-mountain-400">
            © 2024 Durvesh Sunil Baharwal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
