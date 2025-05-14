import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { ArrowRight, Award, Bot, Calendar, ChartBar, Check, ChevronRight, Headphones, Heart, Menu, MessageSquare, Phone, Shield, X, Zap } from 'lucide-react';
import './index.css';
import DigitalWaveModel from './components/RobotModel';
import FeatureCard from './components/FeatureCard';
import Testimonial from './components/Testimonial';
import DashboardPreview from './components/DashboardPreview';
import CTAButton from './components/CTAButton';
import CalPopup from './components/CalPopup';

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Montserrat:wght@700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div 
      ref={containerRef} 
      className="font-sans bg-white text-slate-800 min-h-screen"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <CalPopup />
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-sky-500" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Avera<span className="text-slate-800">Automations</span>
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-sm font-medium text-slate-700 hover:text-sky-500 transition">Features</a>
              <a href="#benefits" className="text-sm font-medium text-slate-700 hover:text-sky-500 transition">Benefits</a>
              <a href="#dashboard" className="text-sm font-medium text-slate-700 hover:text-sky-500 transition">Dashboard</a>
              <a href="#testimonials" className="text-sm font-medium text-slate-700 hover:text-sky-500 transition">Testimonials</a>
              <a href="#pricing" className="text-sm font-medium text-slate-700 hover:text-sky-500 transition">Pricing</a>
              <a href="#faq" className="text-sm font-medium text-slate-700 hover:text-sky-500 transition">FAQ</a>
              <button 
                className="text-sm font-medium px-5 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition shadow-md"
                data-cal-link="ghlsetup/discovery-call"
                data-cal-namespace="discovery-call"
                data-cal-config='{"layout":"month_view"}'
              >
                Book a Call
              </button>
            </nav>
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-600"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#features" className="block px-3 py-2 text-slate-300" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#benefits" className="block px-3 py-2 text-slate-300" onClick={() => setMobileMenuOpen(false)}>Benefits</a>
              <a href="#dashboard" className="block px-3 py-2 text-slate-300" onClick={() => setMobileMenuOpen(false)}>Dashboard</a>
              <a href="#testimonials" className="block px-3 py-2 text-slate-300" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
              <a href="#booking" className="block px-3 py-2 text-slate-300 font-medium bg-sky-900 text-sky-100 rounded-lg" onClick={() => setMobileMenuOpen(false)}>Book a Call</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-sky-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-sky-500 to-sky-700 text-transparent bg-clip-text"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  AI Inbound Assistants for Local Businesses
                </h2>
                <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg">
                  Transform your customer service with AI assistants that respond instantly, 
                  qualify leads, and grow your business 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg bg-sky-500 text-white hover:bg-sky-600 transform transition hover:scale-105 shadow-lg"
                    data-cal-link="ghlsetup/discovery-call"
                    data-cal-namespace="discovery-call"
                    data-cal-config='{"layout":"month_view"}'
                  >
                    Book a Free Discovery Call <ChevronRight className="ml-2" size={20} />
                  </button>
                  <a 
                    href="#features" 
                    className="inline-flex items-center justify-center px-8 py-4 border border-sky-200 text-lg font-medium rounded-lg bg-white text-sky-600 hover:bg-sky-50"
                  >
                    See How It Works
                  </a>
                </div>
              </motion.div>
            </div>
            <div className="md:w-1/2 relative h-[300px] sm:h-[400px] md:h-[500px] w-full">
              <Canvas>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
                <DigitalWaveModel />
              </Canvas>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-800" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Powerful AI Features
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our AI assistants help you handle customer inquiries, qualify leads, and book meetings without lifting a finger.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<MessageSquare className="text-sky-500" size={24} />}
              title="24/7 Customer Support"
              description="AI assistants respond to customer inquiries instantly at any time of day or night, ensuring you never miss an opportunity."
            />
            <FeatureCard 
              icon={<Bot className="text-sky-500" size={24} />}
              title="Smart Lead Qualification"
              description="Automatically qualify leads based on your criteria, so you only spend time on prospects who are ready to buy."
            />
            <FeatureCard 
              icon={<Calendar className="text-sky-500" size={24} />}
              title="Automated Scheduling"
              description="Let AI book appointments directly into your calendar based on your availability, reducing scheduling hassles."
            />
            <FeatureCard 
              icon={<ChartBar className="text-sky-500" size={24} />}
              title="Custom Dashboard Access"
              description="Monitor every aspect of your AI assistants with our proprietary dashboard - track conversations, listen to call recordings, and analyze performance metrics."
            />
            <FeatureCard 
              icon={<ChartBar className="text-sky-500" size={24} />}
              title="Insightful Analytics"
              description="Get detailed reports on customer interactions, common questions, and conversion rates to optimize your business."
            />
            <FeatureCard 
              icon={<Zap className="text-sky-500" size={24} />}
              title="Rapid Deployment"
              description="Get up and running in days, not months. Our team handles setup, training, and integration with your existing tools."
            />
          </div>
          
          <div className="mt-12 text-center">
            <button 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg bg-sky-500 text-white hover:bg-sky-600 transform transition hover:scale-105 shadow-lg mx-auto"
              data-cal-link="ghlsetup/discovery-call"
              data-cal-namespace="discovery-call"
              data-cal-config='{"layout":"month_view"}'
            >
              Schedule Your Free Demo <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:flex items-center"
          >
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-6 text-slate-800" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Why Local Businesses Choose Avera
              </h2>
              <ul className="space-y-4">
                {[
                  "Increase response rates by up to 40% with instant 24/7 availability",
                  "Cut customer service costs by 60% while improving satisfaction",
                  "Convert more leads with intelligent qualification and personalized follow-up",
                  "Save 15+ hours per week on repetitive customer inquiries",
                  "Seamless integration with your existing website and tools"
                ].map((benefit, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-8">
                <button 
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg bg-sky-500 text-white hover:bg-sky-600 transform transition hover:scale-105 shadow-lg"
                  data-cal-link="ghlsetup/discovery-call"
                  data-cal-namespace="discovery-call"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Get Started Today <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="bg-white rounded-xl shadow-xl p-8 border border-sky-100">
                <h3 className="text-xl font-bold mb-4 text-slate-800">
                  Our Clients See Real Results
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-lg">
                    <span className="font-bold text-sky-600 text-2xl">70%</span>
                    <span className="text-slate-700">Reduction in response time</span>
                  </div>
                  <div className="flex items-center space-x-2 text-lg">
                    <span className="font-bold text-sky-600 text-2xl">35%</span>
                    <span className="text-slate-700">Increase in qualified leads</span>
                  </div>
                  <div className="flex items-center space-x-2 text-lg">
                    <span className="font-bold text-sky-600 text-2xl">24/7</span>
                    <span className="text-slate-700">Customer engagement</span>
                  </div>
                  <div className="flex items-center space-x-2 text-lg">
                    <span className="font-bold text-sky-600 text-2xl">60%</span>
                    <span className="text-slate-700">Cost savings on support</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section id="dashboard" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Powerful Admin Dashboard
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Monitor your AI assistants, track conversations, and analyze performance with our comprehensive dashboard.
            </p>
          </motion.div>

          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">Everything You Need in One Place</h3>
                <ul className="space-y-4">
                  {[
                    "Track call minutes and conversation analytics",
                    "Listen to past call recordings for quality assurance",
                    "Monitor lead generation and conversion metrics",
                    "Review conversation history and sentiment analysis",
                    "Customize your AI assistant's responses and knowledge"
                  ].map((feature, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <Check className="text-sky-500 mr-3 mt-1 flex-shrink-0" size={20} />
                      <span className="text-slate-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <a 
                  href="#booking" 
                  className="inline-flex items-center justify-center px-8 py-4 mt-8 border border-transparent text-lg font-medium rounded-lg bg-sky-500 text-white hover:bg-sky-600 transform transition hover:scale-105 shadow-lg"
                >
                  Get Started Today <ArrowRight className="ml-2" size={20} />
                </a>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <DashboardPreview />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-800" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              What Our Clients Say
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Local businesses are seeing real results with Avera Automations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial 
              quote="The AI assistant handles 80% of our customer inquiries automatically. We're booking more appointments than ever while our team focuses on higher-value activities."
              author="Sarah Johnson"
              company="Bright Smile Dental"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
            />
            <Testimonial 
              quote="We were skeptical about AI, but Avera made the transition seamless. Our customers love getting instant responses at any hour, and our conversion rate has increased by 40%."
              author="Michael Rodriguez"
              company="Pacific Coast Insurance"
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
            />
            <Testimonial 
              quote="As a small business owner, I couldn't afford a 24/7 support team. With Avera's AI assistant, we now provide round-the-clock service at a fraction of the cost."
              author="Jennifer Lee"
              company="Blossom Boutique"
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
            />
          </div>
          
          <div className="mt-12 text-center">
            <button 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg bg-sky-500 text-white hover:bg-sky-600 transform transition hover:scale-105 shadow-lg mx-auto"
              data-cal-link="ghlsetup/discovery-call"
              data-cal-namespace="discovery-call"
              data-cal-config='{"layout":"month_view"}'
            >
              Join Our Success Stories <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="booking" className="py-24 bg-gradient-to-r from-sky-500 to-sky-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg mb-6 text-white">
                  Book a free discovery call to learn how our AI assistants can help your business grow. 
                  We'll analyze your specific needs and create a custom solution that delivers results.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Free 30-minute consultation with our AI experts",
                    "Custom solution proposal tailored to your business",
                    "Clear pricing with no hidden fees",
                    "Quick implementation and ongoing support"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <Check className="text-white mr-2 mt-1 flex-shrink-0" size={20} />
                      <span className="text-white">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <button 
                  className="inline-flex items-center justify-center px-10 py-5 border border-transparent text-xl font-medium rounded-lg bg-white text-sky-600 hover:bg-sky-50 transform transition hover:scale-105 shadow-xl"
                  data-cal-link="ghlsetup/discovery-call"
                  data-cal-namespace="discovery-call"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Book Your Free Discovery Call <ArrowRight className="ml-2" size={20} />
                </button>
              </motion.div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white rounded-xl shadow-2xl p-8 w-full lg:max-w-2xl mx-auto"
              >
                <h3 className="text-2xl font-bold mb-6 text-slate-800 text-center">Why Wait? Get Started Today</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col items-center text-center p-4 bg-sky-50 rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-3">
                      <Bot className="text-sky-600" size={24} />
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-1">AI Assistants</h4>
                    <p className="text-sm text-slate-600">24/7 customer service with smart responses</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-sky-50 rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-3">
                      <Calendar className="text-sky-600" size={24} />
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-1">Easy Setup</h4>
                    <p className="text-sm text-slate-600">Get up and running in just days</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-sky-50 rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-3">
                      <ChartBar className="text-sky-600" size={24} />
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-1">Analytics</h4>
                    <p className="text-sm text-slate-600">Track performance and optimize</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-sky-50 rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center mb-3">
                      <Heart className="text-sky-600" size={24} />
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-1">Support</h4>
                    <p className="text-sm text-slate-600">Ongoing assistance and training</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-800" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              One Simple Solution for Your Business
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to transform your customer service with advanced AI technology.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-xl border-2 border-sky-500 overflow-hidden"
            >
              <div className="bg-sky-500 text-white text-center py-3 text-base font-semibold">
                ALL-INCLUSIVE PACKAGE
              </div>
              <div className="p-8 border-b border-slate-200 text-center">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">Avera Complete</h3>
                <p className="text-slate-600 text-lg max-w-lg mx-auto">
                  A comprehensive AI solution tailored to your business needs with flexible scalability
                </p>
                <div className="mt-4 mb-2 flex justify-center items-center space-x-2">
                  <span className="text-slate-700 font-medium">Custom pricing based on your requirements</span>
                  <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">
                    Book a call for details
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3 border-b border-slate-200 pb-2">Core Features</h4>
                    <ul className="space-y-3">
                      {[
                        "AI phone & chat assistant",
                        "24/7 customer support",
                        "Smart lead qualification",
 
                        "Comprehensive dashboard access"
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                          <span className="text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3 border-b border-slate-200 pb-2">Advanced Features</h4>
                    <ul className="space-y-3">
                      {[
                        "Custom AI training & tuning",
                        "Performance analytics & reports",
                        
                        "Dedicated success manager",
                        "Priority support & updates"
                      ].map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                          <span className="text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button 
                  className="w-full text-center py-4 px-6 bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-medium transition shadow-lg text-lg"
                  data-cal-link="ghlsetup/discovery-call"
                  data-cal-namespace="discovery-call"
                  data-cal-config='{"layout":"month_view"}'
                >
                  Schedule a Free Consultation
                </button>
                <p className="text-center text-sm text-slate-500 mt-4">
                  No obligation, no pressure. Learn how our solution fits your needs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-sky-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-800" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Got questions? We've got answers.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How does the AI assistant work?",
                answer: "Our AI assistants use advanced natural language processing to understand and respond to customer inquiries via phone or chat. They can answer questions, qualify leads, book appointments, and more - all while sounding natural and professional."
              },
              {
                question: "Will the AI assistant sound robotic?",
                answer: "No, our AI assistants are designed to sound natural and conversational. Most customers won't even realize they're talking to an AI, which ensures a smooth and professional experience."
              },
              {
                question: "How long does implementation take?",
                answer: "Most businesses can get up and running within 1-2 weeks. This includes setup, training the AI on your business information, and integration with your existing systems."
              },
              {
                question: "Can I customize what the AI says?",
                answer: "Absolutely! You have full control over how your AI assistant responds, what information it provides, and how it qualifies leads. We'll work with you to ensure it represents your brand perfectly."
              },
              {
                question: "What if the AI can't answer a question?",
                answer: "The AI is designed to know its limitations. If it encounters a question it can't answer confidently, it can transfer to a human team member or collect contact information to follow up later."
              },
              {
                question: "Do you offer a trial or money-back guarantee?",
                answer: "We offer a 30-day satisfaction guarantee. If you're not completely satisfied with your AI assistant in the first month, we'll provide a full refund."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-lg font-medium text-slate-800 mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">Still have questions? We're here to help.</p>
            <button 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg bg-sky-500 text-white hover:bg-sky-600 transform transition hover:scale-105 shadow-lg mx-auto"
              data-cal-link="ghlsetup/discovery-call"
              data-cal-namespace="discovery-call"
              data-cal-config='{"layout":"month_view"}'
            >
              Schedule a Consultation <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <h2 className="text-xl font-bold text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Avera<span className="text-sky-400">Automations</span>
                </h2>
              </div>
              <p className="max-w-xs">
                AI-powered inbound assistants for local businesses. 
                Transform your customer experience with intelligent automation.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white transition">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                  <li><a href="#" className="hover:text-white transition">Case Studies</a></li>
                  <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                  <li><a href="#" className="hover:text-white transition">Support</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-700 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Avera Automations. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
