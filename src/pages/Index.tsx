import { ArrowDown, Github, Linkedin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white to-[#7B8F71]/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#7B8F71]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#7B8F71]/3 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#7B8F71]/10 text-[#7B8F71] px-4 py-2 rounded-full text-sm font-medium border border-[#7B8F71]/20">
              <Sparkles className="w-4 h-4" />
              Available for Full-time Opportunities
            </div>
            
            {/* Main heading with enhanced typography */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-bold text-black leading-tight tracking-tight">
                Shishir
                <br />
                <span className="text-[#7B8F71] relative">
                  Singh
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#7B8F71]/20 -z-10 rounded"></div>
                </span>
              </h1>
              <div className="flex items-center gap-3">
                <div className="w-12 h-0.5 bg-[#7B8F71]"></div>
                <p className="text-xl lg:text-2xl text-gray-600 font-light">
                  Full-Stack Web Developer & Problem Solver
                </p>
              </div>
            </div>
            
            {/* Enhanced description */}
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              Transforming ideas into elegant, scalable web solutions with modern technologies and clean code practices.
            </p>
            
            {/* Enhanced buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('about')}
                className="group bg-[#7B8F71] hover:bg-[#6B7F61] text-white px-8 py-6 rounded-xl text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#7B8F71]/25"
              >
                About Me
                <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
              </Button>
              <Button 
                onClick={() => scrollToSection('projects')}
                variant="outline" 
                className="group border-2 border-[#7B8F71] text-[#7B8F71] hover:bg-[#7B8F71] hover:text-white px-8 py-6 rounded-xl text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm"
              >
                View My Work
                <div className="w-2 h-2 bg-current rounded-full ml-2 group-hover:w-4 transition-all duration-300"></div>
              </Button>
            </div>
            
            {/* Social links */}
            <div className="flex items-center gap-6 pt-4">
              <span className="text-sm text-gray-500 font-medium">Connect with me</span>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/shishir-singhh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-[#7B8F71] hover:bg-[#7B8F71] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-sm"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/SHISHIR1507" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-[#7B8F71] hover:bg-[#7B8F71] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-sm"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Enhanced profile section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Decorative rings */}
              <div className="absolute -inset-4 bg-[#7B8F71]/10 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="absolute -inset-2 bg-[#7B8F71]/5 rounded-2xl -rotate-2 group-hover:-rotate-3 transition-transform duration-500"></div>
              
              {/* Profile card */}
              <div className="relative w-80 h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#7B8F71]/20 to-transparent"></div>
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-[#7B8F71]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Sparkles className="w-12 h-12 text-[#7B8F71]" />
                  </div>
                  <span className="text-gray-600 text-lg font-medium">Profile Photo</span>
                  <p className="text-sm text-gray-500 mt-2">Coming Soon</p>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-[#7B8F71] rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-[#7B8F71]/60 rounded-full animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Scroll Down</span>
          <button 
            onClick={() => scrollToSection('about')}
            className="group w-10 h-16 border-2 border-[#7B8F71]/30 rounded-full flex justify-center pt-2 hover:border-[#7B8F71] transition-colors duration-300"
          >
            <div className="w-1 h-3 bg-[#7B8F71] rounded-full animate-bounce group-hover:bg-[#6B7F61]"></div>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-black mb-16 text-center">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Highly motivated and skilled B.E. in Computer Science Engineering seeking a challenging Software Engineer role to leverage my strong programming skills, data structures expertise, and web development knowledge to contribute to innovative software solutions.
              </p>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-[#7B8F71]">Education</h3>
                <div className="border-l-4 border-[#7B8F71] pl-6">
                  <h4 className="text-xl font-semibold text-black">B.E. in Computer Science & Engineering</h4>
                  <p className="text-gray-600">Chandigarh University (2021–2025)</p>
                </div>
                <p className="text-lg text-gray-700">
                  Fresher, passionate about real-world software impact
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#7B8F71] mb-2">10+</div>
                  <div className="text-gray-600">Technologies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#7B8F71] mb-2">5+</div>
                  <div className="text-gray-600">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#7B8F71] mb-2">100%</div>
                  <div className="text-gray-600">Dedication</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-black mb-16 text-center">Skills</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 border-none shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold text-[#7B8F71] mb-6">Frontend</h3>
                <div className="space-y-3">
                  {['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'React.js'].map((skill) => (
                    <div key={skill} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#7B8F71] rounded-full"></div>
                      <span className="text-lg text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="p-8 border-none shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold text-[#7B8F71] mb-6">Backend & Database</h3>
                <div className="space-y-3">
                  {['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'PostgreSQL', 'RESTful APIs'].map((skill) => (
                    <div key={skill} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#7B8F71] rounded-full"></div>
                      <span className="text-lg text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold text-[#7B8F71] mb-4">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Leadership', 'Problem Solving', 'Communication', 'Team Collaboration'].map((skill) => (
                <span key={skill} className="bg-[#7B8F71] text-white px-6 py-2 rounded-full text-lg">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-black mb-16 text-center">What I Can Do for You</h2>
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
              <Card key={index} className="p-6 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-[#7B8F71] rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-black mb-16 text-center">Recent Work</h2>
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
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Project Screenshot</span>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-black mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-[#7B8F71] text-white px-3 py-1 rounded-full text-sm">
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-black mb-16">Get In Touch</h2>
          <Card className="p-12 border-none shadow-lg">
            <CardContent className="p-0 space-y-8">
              <p className="text-xl text-gray-700 mb-8">
                Ready to bring your ideas to life? Let's discuss your next project.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-[#7B8F71]">Contact Info</h3>
                  <div className="space-y-2 text-left">
                    <p className="text-gray-700">
                      <span className="font-semibold">Email:</span> singhshishir4727@gmail.com
                    </p>
                    <p className="text-gray-700">
                      <span className="font-semibold">Phone:</span> +91 77240 73214
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-[#7B8F71]">Follow Me</h3>
                  <div className="flex justify-center md:justify-start gap-4">
                    <a 
                      href="https://linkedin.com/in/shishir-singhh" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#7B8F71] hover:bg-[#6B7F61] text-white p-3 rounded-lg transition-colors duration-300"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://github.com/SHISHIR1507" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#7B8F71] hover:bg-[#6B7F61] text-white p-3 rounded-lg transition-colors duration-300"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C3E2D] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Shishir Singh</h3>
              <p className="text-gray-300">Full-Stack Developer</p>
            </div>
            <div className="text-center">
              <p className="text-gray-300">© 2024 Shishir Singh. All rights reserved.</p>
            </div>
            <div className="flex justify-center md:justify-end gap-4">
              <a 
                href="https://linkedin.com/in/shishir-singhh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://github.com/SHISHIR1507" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-gray-300 hover:text-white transition-colors duration-300"
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
