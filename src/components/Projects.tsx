
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, ArrowUp } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Real-time ANPR System",
      description: "Advanced computer vision system for automatic number plate recognition using deep learning and OpenCV",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["AI", "Computer Vision", "Python", "OpenCV"],
      category: "ai",
      github: "https://github.com/Durveshbaharwal",
      demo: "#"
    },
    {
      id: 2,
      title: "ISRO GNSS Research",
      description: "Research project on Global Navigation Satellite Systems for improved positioning accuracy",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Research", "GNSS", "Satellite", "Navigation"],
      category: "research",
      github: "https://github.com/Durveshbaharwal",
      demo: "#"
    },
    {
      id: 3,
      title: "Mountain Route Optimizer",
      description: "ML-powered route optimization for mountaineering expeditions using terrain analysis",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Machine Learning", "Optimization", "GIS", "Python"],
      category: "ml",
      github: "https://github.com/Durveshbaharwal",
      demo: "#"
    },
    {
      id: 4,
      title: "IoT Climbing Tracker",
      description: "Wearable device for rock climbing performance tracking with real-time analytics",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["IoT", "Wearables", "Data Analysis", "Sensors"],
      category: "iot",
      github: "https://github.com/Durveshbaharwal",
      demo: "#"
    },
    {
      id: 5,
      title: "AI-Powered Portfolio",
      description: "Intelligent portfolio website with dynamic content generation and personalized experiences",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "AI", "Web Development", "TypeScript"],
      category: "web",
      github: "https://github.com/Durveshbaharwal",
      demo: "#"
    },
    {
      id: 6,
      title: "Altitude Prediction Model",
      description: "Machine learning model for predicting optimal climbing conditions based on weather data",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["ML", "Weather Analysis", "Python", "Tensorflow"],
      category: "ml",
      github: "https://github.com/Durveshbaharwal",
      demo: "#"
    }
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "ai", name: "AI & Vision" },
    { id: "ml", name: "Machine Learning" },
    { id: "research", name: "Research" },
    { id: "iot", name: "IoT" },
    { id: "web", name: "Web Development" }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-mountain-50 dark:bg-mountain-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-mountain-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-mountain-600 dark:text-mountain-300 max-w-3xl mx-auto">
            Innovative solutions bridging technology and adventure
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className={`transition-all duration-300 ${
                filter === category.id
                  ? "bg-gradient-to-r from-tech-500 to-gold-500 text-white"
                  : "hover:bg-mountain-100 dark:hover:bg-mountain-800"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-mountain-800 rounded-lg overflow-hidden shadow-lg hover-lift transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Action buttons */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => window.open(project.github, "_blank")}
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => window.open(project.demo, "_blank")}
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                  >
                    <ArrowUp className="h-4 w-4 rotate-45" />
                  </Button>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-mountain-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-mountain-600 dark:text-mountain-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium bg-mountain-100 dark:bg-mountain-700 text-mountain-700 dark:text-mountain-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.open("https://github.com/Durveshbaharwal", "_blank")}
            className="border-2 border-mountain-300 dark:border-mountain-600 hover:bg-mountain-100 dark:hover:bg-mountain-800"
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
