
import { useEffect, useRef } from "react";

const About = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineItems = timelineRef.current?.querySelectorAll(".timeline-item");
    timelineItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const timelineData = [
    {
      year: "2024",
      title: "ISRO GNSS Internship",
      description: "Research on GNSS technology and satellite navigation systems",
      type: "research"
    },
    {
      year: "2023",
      title: "Real-time ANPR System",
      description: "Developed advanced computer vision system for automatic number plate recognition",
      type: "project"
    },
    {
      year: "2022",
      title: "AI & ML Specialization",
      description: "Deep dive into machine learning algorithms and neural networks",
      type: "education"
    },
    {
      year: "2021",
      title: "Software Engineering Journey",
      description: "Started professional development in full-stack technologies",
      type: "career"
    }
  ];

  const skills = [
    { name: "Python", level: 95 },
    { name: "Machine Learning", level: 90 },
    { name: "Data Science", level: 88 },
    { name: "Rock Climbing", level: 85 },
    { name: "Research", level: 92 },
    { name: "Leadership", level: 87 }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-mountain-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-mountain-600 dark:text-mountain-300 max-w-3xl mx-auto">
            Where technology meets adventure, and algorithms climb mountains
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Timeline */}
          <div ref={timelineRef} className="relative">
            <h3 className="text-2xl font-semibold text-mountain-900 dark:text-white mb-8">
              My Journey
            </h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-tech-500 via-forest-500 to-gold-500"></div>
              
              {timelineData.map((item, index) => (
                <div key={index} className="timeline-item relative flex items-center mb-12 opacity-0">
                  {/* Timeline dot */}
                  <div className={`absolute left-0 w-8 h-8 rounded-full border-4 border-white dark:border-mountain-900 shadow-lg ${
                    item.type === 'research' ? 'bg-tech-500' :
                    item.type === 'project' ? 'bg-forest-500' :
                    item.type === 'education' ? 'bg-gold-500' :
                    'bg-mountain-500'
                  }`}></div>
                  
                  {/* Content */}
                  <div className="ml-16 bg-white dark:bg-mountain-800 p-6 rounded-lg shadow-lg hover-lift">
                    <div className="flex items-center mb-2">
                      <span className="text-sm font-medium text-gold-600 dark:text-gold-400 bg-gold-100 dark:bg-gold-900/20 px-2 py-1 rounded">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-mountain-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-mountain-600 dark:text-mountain-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Philosophy */}
          <div className="space-y-12">
            {/* Philosophy */}
            <div className="bg-gradient-to-br from-mountain-50 to-forest-50 dark:from-mountain-800 dark:to-forest-900 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-mountain-900 dark:text-white mb-4">
                Philosophy
              </h3>
              <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed mb-4">
                I believe in the convergence of artificial intelligence and natural intelligence. 
                The mountains teach patience, persistence, and problem-solving—qualities that 
                translate directly to data science and software engineering.
              </p>
              <p className="text-mountain-700 dark:text-mountain-300 leading-relaxed">
                Every summit reached and every algorithm mastered is a step toward understanding 
                the intricate patterns that govern both nature and technology.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-mountain-900 dark:text-white mb-6">
                Skills & Expertise
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-mountain-700 dark:text-mountain-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-mountain-500 dark:text-mountain-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-mountain-200 dark:bg-mountain-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-tech-500 to-gold-500 h-2 rounded-full transition-all duration-1000 group-hover:from-gold-500 group-hover:to-tech-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
