
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "Data Scientist",
    "Software Engineer",
    "Researcher",
    "Mountaineer",
    "Rock Climber"
  ];

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, texts]);

  const scrollToNext = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-mountain-900 via-mountain-800 to-forest-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-mountain-900/80 via-transparent to-mountain-900/40"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-tech-500/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-gold-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-forest-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Durvesh Sunil
            <br />
            <span className="gradient-text">Baharwal</span>
          </h1>
          
          <div className="h-16 mb-8">
            <p className="text-xl sm:text-2xl lg:text-3xl text-mountain-200 font-light">
              I'm a{" "}
              <span className="text-gold-400 font-medium border-r-2 border-gold-400 pr-1">
                {displayText}
              </span>
            </p>
          </div>

          <p className="text-lg sm:text-xl text-mountain-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            "Exploring AI, Nature & Self – One Algorithm and Summit at a Time"
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 text-lg font-semibold hover-lift animate-pulse-glow"
              onClick={() => window.open("https://durveshbaharwal.github.io/single-column-resume/", "_blank")}
            >
              View Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-mountain-900 px-8 py-3 text-lg font-semibold hover-lift"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToNext}
            className="text-white hover:text-gold-400 transition-colors"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
