import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Briefcase, TrendingUp, Building2, Zap, Users, Handshake } from "lucide-react";
import { useState, useEffect } from "react";

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
            <img src="/images/ltp-logo.png" alt="Legacy Transition Partners" className="h-20 md:h-28 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-semibold">About Us</a>
            <a href="#approach" className="text-foreground hover:text-primary transition-colors font-semibold">Our Approach</a>
            <a href="#values" className="text-foreground hover:text-primary transition-colors font-semibold">Values</a>
            <a href="https://predeploy-541ca20e-legacytrans-anosv3mn.manus.space/?from_webdev=1#team" className="text-foreground hover:text-primary transition-colors font-semibold">Team</a>
          </div>
          <Button className="btn-primary font-semibold">Contact Us</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
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
          <Button className="btn-primary text-lg px-8 py-4">
            Contact Us <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Target Companies Section */}
      <section className="section-spacing bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Target Companies */}
            <div className="card-elevated">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold">Target Criteria</h3>
              </div>
              <p className="text-foreground font-semibold text-lg mb-2">$1-$5M EBITDA</p>
              <p className="text-muted-foreground">
                Founder-owned businesses providing essential services with consistent performance, strong growth potential, and operating in highly fragmented sectors.
              </p>
            </div>

            {/* Industries */}
            <div className="card-elevated">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold">Industries</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Commercial & Facility Services</li>
                <li>• Infrastructure/Industrial Services</li>
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
                Transformational growth through founder partnership, operational excellence, and disciplined value creation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-spacing bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Legacy Transition Partners</h2>
              <div className="accent-divider mb-6"></div>
              <p className="text-lg text-muted-foreground mb-4">
                We were founded to provide exceptional stewardship for great businesses. We are long-term thinkers, operators, and investors who combine deep experience in private equity and growth operations with a hands-on, collaborative approach. Guided by our core values, we partner with lower middle-market companies to protect their legacy and unlock the next chapter of transformational growth
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                With a proven track record in operational excellence, growth strategy, and founder transitions, we bring the expertise and perspective to help businesses thrive for the long term
              </p>
              <Button className="btn-outline">
                About Us <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
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

      {/* Core Values Section */}
      <section id="values" className="section-spacing bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Values</h2>
            <div className="accent-divider mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Partnering with founders through integrity, humility, and unwavering passion to implement clear, actionable strategies that honor their legacy while delivering measurable and enduring growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Value Cards */}
            {[
            {
              image: "/images/icon-legacy.png",
              title: "Legacy",
              description: "We preserve and honor the founder's vision and accomplishments while strategically building on their life's work for enduring success.",
            },
              {
                image: "/images/icon-integrity.png",
                title: "Integrity",
                description: "We communicate with complete honesty and transparency, ensuring founders always know where we stand and what to expect.",
              },
              {
                image: "/images/icon-humility.png",
                title: "Humility",
                description: "We approach every partnership with humility, recognizing that the founder's deep knowledge of their business is invaluable and that our role is to collaborate and enhance what they have built.",
              },
              {
                image: "/images/icon-operational-excellence.png",
                title: "Operational Excellence",
                description: "We drive operational excellence by identifying inefficiencies, implementing proven best practices, and delivering measurable improvements that strengthen the business and unlock sustainable growth.",
              },
              {
                image: "/images/icon-long-term.png",
                title: "Long-Term Value Creation",
                description: "We focus on building sustainable, fundamental strength in the business rather than pursuing short-term gains, ensuring lasting value for founders and stakeholders.",
              },
              {
                image: "/images/icon-transparency.png",
                title: "Transparency",
                description: "We maintain open, honest communication about opportunities, challenges, and strategic decisions, ensuring founders are informed and confident in our partnership.",
              },
            ].map((value, idx) => (
              <div key={idx} className="card-elevated text-center">
                <div className="flex justify-center mb-4">
                  <img src={value.image} alt={value.title} className="h-32 w-32 object-contain" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-business-landscape.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Scale Your Business?
          </h2>
          <p className="text-white text-lg mb-8 opacity-95">
            Let's explore how Legacy Transition Partners can help your founder-owned business reach its full potential.
          </p>
          <Button className="btn-primary text-lg px-8 py-4">
            Start a Conversation <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src="/images/ltp-logo.png" alt="Legacy Transition Partners" className="h-32 w-auto mb-4" />
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:opacity-80 transition-opacity">About Us</a></li>
                <li><a href="#approach" className="hover:opacity-80 transition-opacity">Our Approach</a></li>
                <li><a href="#values" className="hover:opacity-80 transition-opacity">Values</a></li>
                <li><a href="#contact" className="hover:opacity-80 transition-opacity">Team</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-sm">
                <a href="mailto:info@legacytransitionpartners.com" className="hover:opacity-80 transition-opacity">
                  info@legacytransitionpartners.com
                </a>
              </p>
              <p className="text-sm mt-2">
                <a href="tel:+1-555-123-4567" className="hover:opacity-80 transition-opacity">
                  +1 (248) 974-7463
                </a>
              </p>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm opacity-80">
            <p>&copy; 2025 Legacy Transition Partners. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
