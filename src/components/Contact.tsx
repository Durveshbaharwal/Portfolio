
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Youtube } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Durveshbaharwal",
      icon: Github,
      color: "hover:text-mountain-900 dark:hover:text-white"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/durvesh-baharwal",
      icon: Linkedin,
      color: "hover:text-tech-600"
    },
    {
      name: "YouTube - Prof",
      url: "https://youtube.com/@prof.dsb7",
      icon: Youtube,
      color: "hover:text-red-600"
    },
    {
      name: "YouTube - Capt",
      url: "http://youtube.com/@Capt.DSB7",
      icon: Youtube,
      color: "hover:text-red-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-mountain-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-mountain-600 dark:text-mountain-300 max-w-3xl mx-auto">
            Let's discuss your next project or just chat about algorithms and adventures
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <div className="bg-white dark:bg-mountain-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-mountain-900 dark:text-white mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-mountain-700 dark:text-mountain-300 mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-mountain-700 dark:text-mountain-300 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-mountain-700 dark:text-mountain-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-tech-500 to-gold-500 hover:from-tech-600 hover:to-gold-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover-lift"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-tech-50 to-forest-50 dark:from-tech-900/20 dark:to-forest-900/20 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-mountain-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-mountain-700 dark:text-mountain-300 mb-6 leading-relaxed">
                Whether you're interested in collaborating on a data science project, 
                discussing research opportunities, or planning your next climbing adventure, 
                I'd love to hear from you.
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      onClick={() => window.open(social.url, "_blank")}
                      className={`flex items-center gap-2 transition-all duration-300 hover-lift ${social.color}`}
                    >
                      <IconComponent className="h-5 w-5" />
                      <span className="hidden sm:inline">{social.name}</span>
                    </Button>
                  );
                })}
              </div>
            </div>

            <div className="bg-white dark:bg-mountain-800 p-8 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold text-mountain-900 dark:text-white mb-4">
                Quick Links
              </h4>
              <div className="space-y-3">
                <a
                  href="https://durveshbaharwal.github.io/Portfolio/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-tech-600 hover:text-tech-700 dark:text-tech-400 dark:hover:text-tech-300 transition-colors"
                >
                  Current Portfolio →
                </a>
                <a
                  href="https://durveshbaharwal.github.io/single-column-resume/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-tech-600 hover:text-tech-700 dark:text-tech-400 dark:hover:text-tech-300 transition-colors"
                >
                  Download Resume →
                </a>
                <a
                  href="https://instagram.com/durvesh_baharwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-tech-600 hover:text-tech-700 dark:text-tech-400 dark:hover:text-tech-300 transition-colors"
                >
                  Instagram Adventures →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
