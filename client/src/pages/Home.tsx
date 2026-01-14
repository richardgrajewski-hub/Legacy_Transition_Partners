import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Briefcase, TrendingUp, Building2, Zap, Users, Handshake } from "lucide-react";
import { useState, useEffect } from "react";
import TeamSection from "./TeamSection";
import { MobileMenu } from "../components/MobileMenu";


/**
 * Design System: Modern Institutional with Warm Accents
 * Color: Deep Charcoal (#2C3E50), Warm Terracotta (#C85A3A), Cream (#F9F7F4)
 * Typography: Georgia serif for headlines, Segoe UI sans-serif for body
 * Layout: Asymmetric with generous whitespace and geometric accents
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all ${isScrolled ? "bg-white shadow-md" : "bg-white"}`}>
        <div className="container mx-auto px-4 py-0 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/ltp-logo.png" alt="Legacy Transition Partners" className="h-32 md:h-40 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-semibold">Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-semibold">About Us</a>
            <a href="#focus" className="text-foreground hover:text-primary transition-colors font-semibold">Our Focus</a>
            <a href="#values" className="text-foreground hover:text-primary transition-colors font-semibold">Core Values</a>
            <a href="#team" className="text-foreground hover:text-primary transition-colors font-semibold">Team</a>
          </div>
          <MobileMenu />
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/michigan-hero.jpg')",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/35"></div>
        </div>

        {/* Curved bottom edge */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q300,100 600,100 T1200,50 L1200,120 L0,120 Z"
            fill="#F9F7F4"
          ></path>
        </svg>

        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Partnering with Founders to Build Legacies that Last
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 opacity-95">
            
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-spacing bg-slate-700 pb-48">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Legacy Transition Partners</h2>
              <div className="accent-divider mb-6"></div>
              <p className="text-lg text-white/90 mb-4">
                We founded LTP to provide exceptional stewardship for great businesses. We are long-term thinkers, operators, and investors who combine deep experience in private equity and growth operations with a hands-on, collaborative approach. Guided by our core values, we partner with lower middle-market companies to protect their legacy and unlock the next chapter of transformational growth.
              </p>
              <p className="text-lg text-white/90 mb-6">
                With a proven track record in operational excellence, growth strategy, and founder transitions, we bring the expertise and perspective to help businesses thrive for the long term.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/hero-business-landscape.jpg"
                alt="Business landscape"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Companies Section */}
      <section id="focus" className="section-spacing bg-white pb-64">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Focus</h2>
            <div className="accent-divider mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Target Companies */}
            <div className="card-elevated">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold">Target Criteria</h3>
              </div>
              <p className="text-foreground font-semibold text-lg mb-2">$1-$5M EBITDA</p>
              <p className="text-muted-foreground">
                Founder-owned businesses based in the U.S. providing essential services with consistent performance, strong growth potential, and operating in highly fragmented sectors.
              </p>
            </div>

            {/* Industries */}
            <div className="card-elevated">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold">Industries</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Commercial, Facility, & Residential Services</li>
                <li>• Infrastructure & Industrial Services</li>
                <li>• Professional Services</li>
                <li>• Specialty Distribution</li>
              </ul>
            </div>

            {/* Strategy */}
            <div className="card-elevated">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold">Strategy</h3>
              </div>
              <p className="text-muted-foreground">
                Generate transformational growth through a hands on partnership approach with founders and management teams focused on operational excellence and executing a disciplined value creation plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="values" className="section-spacing bg-slate-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Core Values</h2>
            <div className="accent-divider mx-auto mb-6"></div>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Legacy, integrity, humility, and unwavering passion to implement clear, actionable strategies to deliver measurable and enduring growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Value Cards */}
            {[
              {
                title: "Legacy",
                description: "Preserve and honor the founder's vision and accomplishments while strategically building on their life's work for enduring success.",
              },
              {
                title: "Integrity",
                description: "Operate with transparent stewardship, aligning founder's and investor's objectives ensuring actions match commitments.",
              },
              {
                title: "Humility",
                description: "Approach every partnership with humility, recognizing the founder's deep knowledge of their business is invaluable and the investor's role is to collaborate and enhance what they have built.",
              },
              {
                title: "Operational Excellence",
                description: "Drive operational excellence by identifying inefficiencies, implementing proven best practices, and delivering measurable improvements that strengthen the business and unlock sustainable growth.",
              },
              {
                title: "Long-Term Value Creation",
                description: "Focus on building sustainable, fundamental strength in the business rather than pursuing short-term gains, ensuring lasting value for founders and stakeholders.",
              },
              {
                title: "Transparency",
                description: "Open, honest, candid communication about opportunities, challenges, and strategic decisions.",
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 text-center shadow-md">
                <h3 className="text-xl font-bold mb-3 text-slate-700">{value.title}</h3>
                <p className="text-slate-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />



      {/* Footer */}
      <footer className="bg-slate-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-8">
            <img src="/images/ltp-logo.png" alt="Legacy Transition Partners" className="h-32 w-auto mb-6" />
            <div>
              <h4 className="text-white font-bold mb-2">Contact</h4>
              <p className="text-sm text-white">
                <a href="mailto:info@legacytransitionpartners.com" className="text-white hover:opacity-80 transition-opacity">
                  info@legacytransitionpartners.com
                </a>
              </p>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-80">
            <p style={{color: '#ffffff'}}>&copy; 2025 Legacy Transition Partners. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
