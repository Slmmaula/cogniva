"use client"

import Image from "next/image"
import { ContactForm } from "@/components/contact-form"
import { ServiceCard } from "@/components/service-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { StatsCard } from "@/components/stats-card"
import { CaseStudyCard } from "@/components/case-study-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Code, LineChart, Megaphone, Smartphone, Zap } from "lucide-react"
import { FaqAccordion } from "@/components/faq-accordion"
import { Navbar } from "@/components/navbar"
import { LiveChat } from "@/components/live-chat"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white py-20 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
                  Award-Winning Digital Agency
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  We Craft Digital Experiences That <span className="text-purple-600">Drive Results</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Transform your online presence with our expert team of designers, developers, and strategists.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={() => {
                      const contactSection = document.getElementById("contact")
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => {
                      const storiesSection = document.getElementById("success-stories")
                      if (storiesSection) {
                        storiesSection.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    View Our Work
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <Image
                        key={i}
                        src={`/images/clients/user${i}.jpg`}
                        alt={`Client ${i}`}
                        width={32}
                        height={32}
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">100+</span> satisfied clients worldwide
                  </p>
                </div>
              </div>
              <div className="relative mx-auto lg:mr-0">
                <Image
                  src="/images/hero-image.jpg"
                  alt="Digital agency hero image"
                  width={1200}
                  height={800}
                  quality={100}
                  className="rounded-xl shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                    <span className="text-sm font-medium">Projects Delivered On Time</span>
                  </div>
                  <div className="mt-2 text-2xl font-bold">98%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-1/2 -z-10 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-to-tl from-purple-100 to-purple-50 opacity-50 blur-3xl" />
        </section>

        {/* Trusted By Section */}
        <section className="border-y bg-muted/40 py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Trusted by industry leaders
            </p>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
              {[
                { name: 'NeuLink', src: '/images/client-logo/logo1.png' },
                { name: 'EcoSphere', src: '/images/client-logo/logo2.png' },
                { name: 'GrowthSync', src: '/images/client-logo/logo3.png' },
                { name: 'Cortex Health', src: '/images/client-logo/logo4.png' },
                { name: 'InfinityLoop', src: '/images/client-logo/logo5.png' },
                { name: 'OrbitOne', src: '/images/client-logo/logo6.png' },
              ].map((logo, index) => (
                <div key={index} className="flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    width={120}
                    height={40}
                    className="opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Comprehensive digital solutions tailored to your business needs
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                icon={<Code className="h-10 w-10 text-purple-600" />}
                title="Web Development"
                description="Custom websites and web applications built with the latest technologies for optimal performance and user experience."
                features={["Responsive Design", "E-commerce Solutions", "CMS Integration"]}
              />
              <ServiceCard
                icon={<Smartphone className="h-10 w-10 text-purple-600" />}
                title="Mobile App Development"
                description="Native and cross-platform mobile applications that deliver exceptional user experiences across all devices."
                features={["iOS & Android Apps", "Cross-Platform Solutions", "App Store Optimization"]}
              />
              <ServiceCard
                icon={<Megaphone className="h-10 w-10 text-purple-600" />}
                title="Digital Marketing"
                description="Data-driven marketing strategies that increase visibility, drive traffic, and convert visitors into customers."
                features={["SEO & Content Marketing", "PPC Advertising", "Social Media Management"]}
              />
              <ServiceCard
                icon={<LineChart className="h-10 w-10 text-purple-600" />}
                title="Analytics & Optimization"
                description="In-depth analysis and continuous optimization to maximize your digital performance and ROI."
                features={["Conversion Rate Optimization", "User Behavior Analysis", "Performance Tracking"]}
              />
              <ServiceCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-purple-600"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                }
                title="UI/UX Design"
                description="User-centered design that creates intuitive, engaging, and visually stunning digital experiences."
                features={["User Research", "Wireframing & Prototyping", "Visual Design"]}
              />
              <ServiceCard
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-10 w-10 text-purple-600"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                }
                title="Cybersecurity"
                description="Comprehensive security solutions to protect your digital assets and customer data from threats."
                features={["Security Audits", "Vulnerability Testing", "Compliance Solutions"]}
              />
            </div>
            <div className="mt-16 text-center">
              <Button
                size="lg"
                variant="outline"
                className="text-black"
                onClick={() => {
                  const contactSection = document.getElementById("contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Discuss Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-purple-600 py-16 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <StatsCard value="10+" label="Years of Experience" />
              <StatsCard value="250+" label="Projects Completed" />
              <StatsCard value="50+" label="Team Members" />
              <StatsCard value="98%" label="Client Satisfaction" />
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-20 bg-gradient-to-b from-white to-purple-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Us</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our expertise and approach set us apart from the competition
              </p>
            </div>
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="relative">
                <Image
                  src="/images/team-img.jpg"
                  alt="Team collaboration"
                  width={1200}
                  height={800}
                  quality={100}
                  className="rounded-xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 rounded-lg bg-white p-6 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-purple-600" />
                    <span className="text-sm font-medium">Industry Recognition</span>
                  </div>
                  <div className="mt-2 text-xl font-bold">15+ Awards</div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Expert Team</h3>
                  <p className="text-muted-foreground">
                    Our team consists of industry veterans with specialized expertise across all digital disciplines.
                    We're passionate about staying at the forefront of technology and design trends.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Proven Process</h3>
                  <p className="text-muted-foreground">
                    Our refined, transparent process ensures efficient delivery and exceptional results. We collaborate
                    closely with you at every stage, from discovery to launch and beyond.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Results-Driven Approach</h3>
                  <p className="text-muted-foreground">
                    We focus on measurable outcomes that align with your business goals. Our solutions are designed to
                    drive growth, increase engagement, and maximize ROI.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                    <span>Agile Methodology</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                    <span>Transparent Communication</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                    <span>Continuous Learning</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                    <span>Quality Assurance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section id="success-stories" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Success Stories</h2>
              <p className="mt-4 text-lg text-muted-foreground">Real results for real businesses just like yours</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              <CaseStudyCard
                image="/images/case-studies/ecommerce-fashion.jpg"
                title="E-commerce Transformation"
                client="Fashion Retailer"
                stats={[
                  { label: "Conversion Rate", value: "+120%" },
                  { label: "Revenue Growth", value: "+85%" },
                ]}
                description="Redesigned the entire shopping experience, implemented advanced product filtering, and optimized the checkout process."
              />
              <CaseStudyCard
                image="/images/case-studies/saas-dashboard.jpg"
                title="SaaS Platform Redesign"
                client="Tech Startup"
                stats={[
                  { label: "User Engagement", value: "+65%" },
                  { label: "Customer Retention", value: "+40%" },
                ]}
                description="Simplified complex workflows, improved UI/UX, and implemented a responsive design that works seamlessly across all devices."
              />
              <CaseStudyCard
                image="/images/case-studies/marketing-campaign.jpg"
                title="Digital Marketing Campaign"
                client="Hospitality Brand"
                stats={[
                  { label: "Organic Traffic", value: "+210%" },
                  { label: "Lead Generation", value: "+150%" },
                ]}
                description="Developed a comprehensive digital marketing strategy including SEO, content marketing, and paid advertising campaigns."
              />
            </div>
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-10">What Our Clients Say</h3>
              <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <TestimonialCard
                  quote="Working with Cogniva Creative transformed our online presence. Their team delivered beyond our expectations and the results speak for themselves."
                  author="Sarah Johnson"
                  role="CEO, Fashion Forward"
                  image="/images/clients/user3.jpg"
                />
                <TestimonialCard
                  quote="The team's expertise in both design and development is exceptional. They understood our vision and brought it to life beautifully."
                  author="Michael Chen"
                  role="Founder, TechNova"
                  image="/images/clients/user4.jpg"
                />
                <TestimonialCard
                  quote="Their strategic approach to our marketing challenges resulted in immediate improvements to our bottom line. Highly recommended!"
                  author="Jessica Williams"
                  role="Marketing Director, Luxury Hotels"
                  image="/images/clients/user2.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Process</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A streamlined approach to delivering exceptional results
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-purple-100 md:block hidden"></div>
              <div className="space-y-16">
                {[
                  {
                    number: "01",
                    title: "Discovery",
                    description:
                      "We start by understanding your business, goals, and challenges through in-depth consultations.",
                  },
                  {
                    number: "02",
                    title: "Strategy",
                    description:
                      "Based on our findings, we develop a comprehensive strategy tailored to your specific needs and objectives.",
                  },
                  {
                    number: "03",
                    title: "Design & Development",
                    description:
                      "Our creative and technical teams collaborate to bring the strategy to life with cutting-edge design and development.",
                  },
                  {
                    number: "04",
                    title: "Testing & Launch",
                    description:
                      "Rigorous testing ensures everything works flawlessly before we launch your project to the world.",
                  },
                  {
                    number: "05",
                    title: "Ongoing Support",
                    description:
                      'We provide continuous support and optimization to ensure long-term "We provide continuous support and optimization to ensure long-term success and growth.',
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8`}
                  >
                    <div className="md:w-1/2 flex justify-center">
                      <div className="relative">
                        <div className="absolute left-1/2 top-1/2 -z-10 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-100"></div>
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-600 text-2xl font-bold text-white">
                          {step.number}
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 text-center md:text-left">
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                      <p className="mt-2 text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Now before Contact */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Answers to common questions about our services and process
              </p>
            </div>
            <div className="mx-auto max-w-3xl">
              <FaqAccordion />
            </div>
          </div>
        </section>

        {/* CTA Section - Now after FAQ */}
        <section id="contact" className="py-20 bg-purple-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready to transform your digital presence?
                </h2>
                <p className="text-lg text-purple-100">
                  Let's discuss how we can help you achieve your business goals with our expert digital solutions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-purple-200 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-medium">Free Consultation</h4>
                      <p className="text-purple-200">Get expert advice with no obligation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-purple-200 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-medium">Tailored Solutions</h4>
                      <p className="text-purple-200">Customized to your specific business needs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-purple-200 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-medium">Ongoing Support</h4>
                      <p className="text-purple-200">We're with you every step of the way</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white text-foreground p-6 sm:p-8 rounded-xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient">
                  Cogniva Creative
                </span>
              </div>
              <p className="text-gray-400 mb-4">Creating exceptional digital experiences that drive business growth.</p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Mobile App Development
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    E-commerce Solutions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Our Work
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 shrink-0"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>(123) 456-7890</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 shrink-0"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="m22 6-10 7L2 6" />
                  </svg>
                  <span>hello@cognivacreative.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 shrink-0"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>123 Design Street, Creative City, 12345</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Cogniva Creative Digital Agency. All rights reserved.</p>
            <div className="mt-2 flex flex-wrap justify-center gap-4">
              <Dialog>
                <DialogTrigger className="hover:text-white text-gray-400 text-sm transition-colors">Privacy Policy</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Privacy Policy</DialogTitle>
                  </DialogHeader>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p>
                      We respect your privacy. Your personal information is collected only when necessary and with your consent. This data is used solely to provide and improve our services.
                    </p>
                    <p>
                      We do not share your data with third parties without your explicit permission, except where required by law.
                    </p>
                    <p>
                      By using our service, you agree to our privacy practices as described in this policy.
                    </p>
                    <p className="text-gray-500">Last updated: April 2025</p>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger className="hover:text-white text-gray-400 text-sm transition-colors">Terms of Service</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Terms of Service</DialogTitle>
                  </DialogHeader>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p>
                      By accessing or using this service, you agree to be bound by these terms. Please read them carefully.
                    </p>
                    <p>
                      You may not use our service for any illegal or unauthorized purpose. We reserve the right to suspend or terminate your access if you violate these terms.
                    </p>
                    <p>
                      We may modify these terms at any time. Continued use of the service implies acceptance of the updated terms.
                    </p>
                    <p className="text-gray-500">Last updated: April 2025</p>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger className="hover:text-white text-gray-400 text-sm transition-colors">Sitemap</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Sitemap</DialogTitle>
                  </DialogHeader>
                  <div className="text-sm text-gray-600">
                    <ul className="list-disc pl-4">
                      <li>Home</li>
                      <li>Services</li>
                      <li>Expertise</li>
                      <li>Success Stories</li>
                      <li>Contact</li>
                      <li>About Us</li>
                      <li>Our Work</li>
                      <li>Careers</li>
                      <li>Blog</li>
                    </ul>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </footer>

      {/* Live Chat */}
      <LiveChat />
    </div>
  )
}

