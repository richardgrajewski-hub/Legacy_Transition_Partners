import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Briefcase, TrendingUp, Building2, Zap, Users, Handshake } from "lucide-react";
import { useState, useEffect, useRef } from "react";
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
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [coreValuesVisible, setCoreValuesVisible] = useState(false);
  const coreValuesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setParallaxOffset(window.scrollY * 0.5);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCoreValuesVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (coreValuesRef.current) {
      observer.observe(coreValuesRef.current);
    }

    return () => {
      if (coreValuesRef.current) {
        observer.unobserve(coreValuesRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all ${isScrolled ? "bg-white shadow-md" : "bg-white"}`} style={{height: '127px'}}>
        <div className="container mx-auto px-4 py-0 flex items-center justify-between" style={{height: '114px'}}>
          <div className="flex items-center gap-3">
            <img src="/images/ltp-logo-header.jpg" alt="Legacy Transition Partners" className="h-24 md:h-32 w-auto" style={{height: '70px'}} />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-semibold link-underline" style={{fontSize: '20px'}}>Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-semibold link-underline" style={{fontSize: '20px'}}>About Us</a>
            <a href="#focus" className="text-foreground hover:text-primary transition-colors font-semibold link-underline" style={{fontSize: '20px'}}>Our Focus</a>
            <a href="#values" className="text-foreground hover:text-primary transition-colors font-semibold link-underline" style={{fontSize: '20px'}}>Core Values</a>
            <a href="#team" className="text-foreground hover:text-primary transition-colors font-semibold link-underline" style={{fontSize: '20px'}}>Team</a>
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
            transform: `translateY(${parallaxOffset}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
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

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-12 leading-tight" style={{paddingTop: '480px', paddingBottom: '60px', textShadow: '0 2px 8px rgba(0,0,0,0.3)'}}>
            Partnering with Founders to Build Enduring Legacies
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 opacity-95">
            
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-spacing bg-slate-700 pattern-diagonal">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gridAutoRows: '1fr'}}>
            {/* About Us Column */}
            <div className="text-center" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">About Us</h3>
              <div className="bg-slate-50 rounded-lg p-6 shadow-sm" style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flex: 1, minHeight: '280px', paddingTop: '24px'}}>
                <p className="text-muted-foreground leading-relaxed" style={{fontSize: '20px'}}>
                  Legacy Transition Partners is an independent investment firm partnering with founder-owned and entrepreneur-led businesses at critical moments of transition. We acquire a majority stake and provide capital, strategic leadership, and operational support to help companies preserve what makes them special while building a strong foundation for their next phase of growth.
                </p>
              </div>
            </div>

            {/* What We Do Column */}
            <div className="text-center" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Our Expertise</h3>
              <div className="bg-slate-50 rounded-lg p-6 shadow-sm" style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flex: 1, minHeight: '280px', paddingTop: '24px'}}>
                <p className="text-muted-foreground leading-relaxed" style={{fontSize: '20px'}}>
                  Our team brings deep operational experience and disciplined investing to help founder-led businesses grow stronger over time. We work alongside management teams to improve systems, develop leaders, and build more resilient organizations capable of supporting sustainable, long-term growth.
                </p>
              </div>
            </div>

            {/* Why We Are Different Column */}
            <div className="text-center" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Our Difference</h3>
              <div className="bg-slate-50 rounded-lg p-6 shadow-sm" style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flex: 1, minHeight: '280px', paddingTop: '24px'}}>
                <p className="text-muted-foreground leading-relaxed" style={{fontSize: '20px'}}>
                  We invest our own capital and take responsibility as majority owners, working side-by-side with founders and management teams. Our approach is hands-on, long-term, and built on trust. We focus on creating lasting value and guiding each business through its next chapter while honoring the legacy that came before.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Companies Section */}
      <section id="focus" className="section-spacing bg-white pb-64 pattern-diagonal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{color: '#2c4a7c'}}>Our Focus</h2>
            <div className="accent-divider mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* What We Look For */}
            <div className="card-elevated" style={{borderLeft: '4px solid #D4A574'}}>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl font-bold" style={{color: '#2c4a7c', fontSize: '30px'}}>What We Look For</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li style={{fontSize: '20px'}}><span style={{color: '#D4A574', fontWeight: 'bold'}}>•</span> Mature lower middle market businesses</li>
                <li style={{fontSize: '20px'}}><span style={{color: '#D4A574', fontWeight: 'bold'}}>•</span> Founder-led companies in essential, resilient industries</li>
                <li style={{fontSize: '20px'}}><span style={{color: '#D4A574', fontWeight: 'bold'}}>•</span> Consistent profitability and revenue stability</li>
                <li style={{fontSize: '20px'}}><span style={{color: '#D4A574', fontWeight: 'bold'}}>•</span> Predictable, repeat revenue streams</li>
                <li style={{fontSize: '20px'}}><span style={{color: '#D4A574', fontWeight: 'bold'}}>•</span> Attractive margins and capital-efficient operations</li>
                <li style={{fontSize: '20px'}}><span style={{color: '#D4A574', fontWeight: 'bold'}}>•</span> Opportunities to grow through thoughtful expansion and selective acquisitions</li>

              </ul>
            </div>

            {/* Investment Parameters */}
            <div className="card-elevated" style={{borderLeft: '4px solid #D4A574'}}>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl font-bold" style={{color: '#2c4a7c', fontSize: '30px'}}>Investment Parameters</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li style={{fontSize: '20px'}}><span style={{color: '#D4A574', fontWeight: 'bold'}}>•</span> Platform companies: $1–5M EBITDA (add-ons acquisitions of any size)</li>
                <li style={{fontSize: '20px'}}><span style={{color: '#D4A574', fontWeight: 'bold'}}>•</span> Majority stake, with meaningful founder or management rollover</li>
                <li style={{fontSize: '20px'}}><span style={{color: '#D4A574', fontWeight: 'bold'}}>•</span> Geography: United States</li>
                <li style={{fontSize: '20px'}}><span style={{color: '#D4A574', fontWeight: 'bold'}}>•</span> Leadership transitions or established management partnerships</li>
                <li style={{fontSize: '20px'}}><span style={{color: '#D4A574', fontWeight: 'bold'}}>•</span> Conservative, long-term oriented capital structures</li>
              </ul>
            </div>
          </div>

          {/* Industry Focus Section */}
          <div className="mt-16 pt-0">
            {/* Wave Divider */}
            <svg
              className="w-full h-20 md:h-24"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              style={{marginBottom: '-1px'}}
            >
              <path
                d="M0,60 Q300,20 600,60 T1200,60 L1200,0 L0,0 Z"
                fill="#E5E7EB"
              ></path>
              <path
                d="M0,70 Q300,40 600,70 T1200,70 L1200,120 L0,120 Z"
                fill="#FAFBFC"
              ></path>
            </svg>
            <div className="pt-12">
            <div className="text-center mb-12">
              <p className="text-lg font-semibold mb-4" style={{fontSize: '30px', color: '#2c4a7c', fontWeight: '700', fontFamily: 'Georgia, serif'}}>
                Investing in lower middle market essential service sectors, including but not limited to:
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {/* Industry Category 1 */}
              <div className="text-center">
                <div className="bg-white mb-4 h-64 flex items-center justify-center">
                  <img src="/images/commercial-facility-icon.png" alt="Commercial & Facility Services Icon" className="h-full object-contain" style={{maxWidth: '240px'}} />
                </div>
                <h4 className="text-lg font-semibold" style={{color: '#2c4a7c', fontSize: '30px'}}>Commercial & Facility Services</h4>
              </div>

              {/* Industry Category 2 */}
              <div className="text-center">
                <div className="bg-white mb-4 h-64 flex items-center justify-center">
                  <img src="/images/industrial-services-icon.png" alt="Industrial Services Icon" className="h-full object-contain" style={{maxWidth: '240px'}} />
                </div>
                <h4 className="text-lg font-semibold" style={{color: '#2c4a7c', fontSize: '30px'}}>Industrial Services</h4>
              </div>

              {/* Industry Category 3 */}
              <div className="text-center">
                <div className="bg-white mb-4 h-64 flex items-center justify-center">
                  <img src="/images/residential-services-icon.png" alt="Residential Services Icon" className="h-full object-contain" style={{maxWidth: '200px'}} />
                </div>
                <h4 className="text-lg font-semibold" style={{color: '#2c4a7c', fontSize: '30px'}}>Residential Services</h4>
              </div>

              {/* Industry Category 4 */}
              <div className="text-center">
                <div className="bg-white mb-4 h-64 flex items-center justify-center">
                  <img src="/images/specialty-distribution-icon.png" alt="Specialty Distribution Icon" className="h-full object-contain" style={{maxWidth: '200px'}} />
                </div>
                <h4 className="text-lg font-semibold" style={{color: '#2c4a7c', fontSize: '30px'}}>Specialty Distribution</h4>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="values" ref={coreValuesRef} className={`section-spacing bg-slate-700 pattern-diagonal fade-in-section ${coreValuesVisible ? 'visible' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Core Values</h2>
            <div className="accent-divider mx-auto mb-6"></div>
            <p className="text-lg text-white/90 max-w-2xl mx-auto" style={{fontSize: '20px', fontWeight: '700'}}>
              Legacy, integrity, collaborative leadership, and unwavering passion to implement clear, actionable strategies to deliver measurable and enduring growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Value Cards */}
            {[
              {
                title: "Legacy",
                description: "We honor what founders have built and take responsibility for carrying it forward. We protect the reputation, culture, and relationships that define the business.",
              },
              {
                title: "Integrity",
                description: "We operate with the highest standards of honesty and accountability. Our actions match our words, and we build lasting partnerships through fairness, consistency, and follow-through.",
              },
              {
                title: "Collaborative Leadership",
                description: "We value the people who built and run the business. Our goal is not to replace teams, but to support them - giving leaders the tools, resources, and structure they need to perform at their best.",
              },
              {
                title: "Operational Discipline",
                description: "We bring rigor, structure, and accountability to help businesses run better, scale more efficiently, and make better decisions.",
              },
              {
                title: "Stewardship",
                description: "We are long-term owners who actively lead and support our businesses. By providing strategic guidance, operational discipline, and the right tools and resources, we help companies build lasting strength and enduring success.",
              },
              {
                title: "Candor and Trust",
                description: "We are open and straightforward in how we operate. Founders and leadership teams always know what we're thinking, what we're working on, and how the business is performing.",
              },

            ].map((value, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 text-center shadow-md">
                <h3 className="text-xl font-bold mb-3" style={{color: '#2c4a7c', fontSize: '26px'}}>{value.title}</h3>
                <p className="text-slate-600 text-sm" style={{fontSize: '20px'}}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />



      {/* Footer */}
      <footer className="bg-slate-700 text-white py-12 pattern-diagonal">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-8">
            <img src="/images/ltp-logo-footer.png" alt="Legacy Transition Partners" className="h-40 w-auto mb-8" style={{filter: 'brightness(0) invert(1)'}} />
            <div>
              <h4 className="text-white font-bold mb-2">Contact</h4>
              <p className="text-sm text-white">
                <a href="mailto:info@legacytransitionpartners.com" className="text-white hover:opacity-80 transition-opacity link-underline" style={{fontSize: '20px'}}>
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

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
}
