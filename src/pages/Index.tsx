
import { ArrowDown, Github, Linkedin, Sparkles, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Shishir Singh',
      };

      await emailjs.send(
        'service_q66iu9d',
        'template_2n1so1i',
        templateParams,
        'kdkru72quB2wAnfUv'
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Enhanced Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative z-10">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-teal-900/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium border border-cyan-300/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Available for Full-time Opportunities
            </div>
            
            {/* Main heading with enhanced typography */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
                Shishir
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 relative">
                  Singh
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-cyan-400/30 to-purple-400/30 -z-10 rounded blur-sm"></div>
                </span>
              </h1>
              <div className="flex items-center gap-3">
                <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"></div>
                <p className="text-xl lg:text-2xl text-gray-300 font-light">
                  Full-Stack Web Developer & Problem Solver
                </p>
              </div>
            </div>
            
            {/* Enhanced description */}
            <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
              Transforming ideas into elegant, scalable web solutions with modern technologies and clean code practices.
            </p>
            
            {/* Enhanced buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('about')}
                className="group bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white px-8 py-6 rounded-xl text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 border-0"
              >
                About Me
                <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
              </Button>
              <Button 
                onClick={() => scrollToSection('projects')}
                variant="outline" 
                className="group border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:text-cyan-200 hover:border-cyan-300 px-8 py-6 rounded-xl text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm bg-transparent"
              >
                View My Work
                <div className="w-2 h-2 bg-current rounded-full ml-2 group-hover:w-4 transition-all duration-300"></div>
              </Button>
            </div>
            
            {/* Social links */}
            <div className="flex items-center gap-6 pt-4">
              <span className="text-sm text-gray-400 font-medium">Connect with me</span>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/shishir-singhh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800/50 border border-gray-600/50 rounded-xl flex items-center justify-center text-cyan-300 hover:bg-gradient-to-r hover:from-cyan-600/20 hover:to-purple-600/20 hover:text-cyan-200 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-sm backdrop-blur-sm"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/SHISHIR1507" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800/50 border border-gray-600/50 rounded-xl flex items-center justify-center text-cyan-300 hover:bg-gradient-to-r hover:from-cyan-600/20 hover:to-purple-600/20 hover:text-cyan-200 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-sm backdrop-blur-sm"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Enhanced Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Decorative rings with gradient */}
              <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500 backdrop-blur-sm"></div>
              <div className="absolute -inset-3 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-2xl -rotate-2 group-hover:-rotate-3 transition-transform duration-500 backdrop-blur-sm"></div>
              
              {/* Profile photo with glowing border */}
              <div className="relative w-96 h-[500px] lg:w-[450px] lg:h-[550px] rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-cyan-400/20">
                <img 
                  src="/lovable-uploads/b8ee3780-9497-48df-8f41-9eab09526720.png" 
                  alt="Shishir Singh - Full Stack Developer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-cyan-900/20"></div>
                
                {/* Floating elements with glow */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-300 shadow-lg shadow-purple-400/50"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Scroll Down</span>
          <button 
            onClick={() => scrollToSection('about')}
            className="group w-10 h-16 border-2 border-cyan-400/30 rounded-full flex justify-center pt-2 hover:border-cyan-400 transition-colors duration-300 backdrop-blur-sm"
          >
            <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full animate-bounce group-hover:from-cyan-300 group-hover:to-purple-300"></div>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-800/50 backdrop-blur-sm relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-16 text-center">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Highly motivated and skilled B.E. in Computer Science Engineering seeking a challenging Software Engineer role to leverage my strong programming skills, data structures expertise, and web development knowledge to contribute to innovative software solutions.
              </p>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Education</h3>
                <div className="border-l-4 border-gradient-to-b from-cyan-400 to-purple-400 pl-6">
                  <h4 className="text-xl font-semibold text-white">B.E. in Computer Science & Engineering</h4>
                  <p className="text-gray-400">Chandigarh University (2021–2025)</p>
                </div>
                <p className="text-lg text-gray-300">
                  Fresher, passionate about real-world software impact
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">10+</div>
                  <div className="text-gray-400">Technologies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">5+</div>
                  <div className="text-gray-400">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">100%</div>
                  <div className="text-gray-400">Dedication</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-16 text-center">Skills</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 border border-gray-600/50 shadow-lg bg-gray-800/30 backdrop-blur-sm">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">Frontend</h3>
                <div className="space-y-3">
                  {['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'React.js'].map((skill) => (
                    <div key={skill} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                      <span className="text-lg text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="p-8 border border-gray-600/50 shadow-lg bg-gray-800/30 backdrop-blur-sm">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">Backend & Database</h3>
                <div className="space-y-3">
                  {['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'PostgreSQL', 'RESTful APIs'].map((skill) => (
                    <div key={skill} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                      <span className="text-lg text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Leadership', 'Problem Solving', 'Communication', 'Team Collaboration'].map((skill) => (
                <span key={skill} className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-2 rounded-full text-lg">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-800/50 backdrop-blur-sm relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-16 text-center">What I Can Do for You</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Full-Stack Development",
                description: "End-to-end web application development with modern technologies"
              },
              {
                title: "Custom APIs",
                description: "RESTful API development and third-party integrations"
              },
              {
                title: "Responsive Websites",
                description: "Mobile-first, responsive web design and development"
              },
              {
                title: "Database Design",
                description: "Efficient database architecture and optimization"
              }
            ].map((service, index) => (
              <Card key={index} className="p-6 border border-gray-600/50 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-800/30 backdrop-blur-sm hover:bg-gray-700/30">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-16 text-center">Recent Work</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Weather App",
                description: "React-based weather application using OpenWeather API with real-time data and location services",
                tech: ["React.js", "API Integration", "CSS3"]
              },
              {
                title: "Cyber Resilient Network",
                description: "Network architecture design for smart grids with enhanced security protocols",
                tech: ["Network Design", "Security", "Architecture"]
              },
              {
                title: "TODO Application",
                description: "Full-featured task management app with local storage and CRUD operations",
                tech: ["JavaScript", "Local Storage", "DOM Manipulation"]
              },
              {
                title: "QR Generator",
                description: "Express.js application for generating QR codes with jQuery frontend",
                tech: ["Express.js", "jQuery", "Node.js"]
              }
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden border border-gray-600/50 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-800/30 backdrop-blur-sm">
                <div className="h-48 bg-gray-700/50 flex items-center justify-center border-b border-gray-600/50">
                  <span className="text-gray-400 text-lg">Project Screenshot</span>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section with EmailJS Form */}
      <section id="contact" className="py-20 px-4 bg-gray-800/50 backdrop-blur-sm relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-16 text-center">Get In Touch</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="p-8 border border-gray-600/50 shadow-lg bg-gray-800/30 backdrop-blur-sm">
                <CardContent className="p-0 space-y-6">
                  <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">Let's Connect</h3>
                  <p className="text-lg text-gray-300 mb-8">
                    Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-cyan-300" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Email</p>
                        <p className="text-gray-400">singhshishir4727@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-cyan-300" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Phone</p>
                        <p className="text-gray-400">+91 77240 73214</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6">
                    <h4 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">Follow Me</h4>
                    <div className="flex gap-4">
                      <a 
                        href="https://linkedin.com/in/shishir-singhh" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                      <a 
                        href="https://github.com/SHISHIR1507" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form with EmailJS Integration */}
            <Card className="p-8 border border-gray-600/50 shadow-lg bg-gray-800/30 backdrop-blur-sm">
              <CardContent className="p-0">
                <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-300">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="Your full name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-600/50 bg-gray-700/50 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/50 transition-colors backdrop-blur-sm"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-300">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-600/50 bg-gray-700/50 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/50 transition-colors backdrop-blur-sm"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-gray-300">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Tell me about your project or just say hello..."
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-600/50 bg-gray-700/50 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400/50 transition-colors resize-none backdrop-blur-sm"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed border-0"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/80 text-white py-12 px-4 backdrop-blur-sm border-t border-gray-700/50 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Shishir Singh</h3>
              <p className="text-gray-400">Full-Stack Developer</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400">© 2024 Shishir Singh. All rights reserved.</p>
            </div>
            <div className="flex justify-center md:justify-end gap-4">
              <a 
                href="https://linkedin.com/in/shishir-singhh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-300 transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/SHISHIR1507" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-300 transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-gray-400 hover:text-cyan-300 transition-colors duration-300"
              >
                <ArrowDown className="w-6 h-6 rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
