import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

/**
 * Design System: Modern Institutional with Navy Accents
 * Color: Navy Blue (#2C4A7C), Cream Background (#F9F7F4)
 * Typography: Georgia serif for headlines, Segoe UI for body
 */

export default function Contact() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // For now, just show success message
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-0 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/ltp-logo.png" alt="Legacy Transition Partners" className="h-20 md:h-28 w-auto" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors font-semibold">About Us</a>
            <a href="/" className="text-foreground hover:text-primary transition-colors font-semibold">Our Focus</a>
            <a href="/" className="text-foreground hover:text-primary transition-colors font-semibold">Core Values</a>
            <a href="/" className="text-foreground hover:text-primary transition-colors font-semibold">Team</a>
          </div>
          <a href="/" className="inline-block">
            <Button className="btn-primary font-semibold">Contact Us</Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative mt-20 overflow-hidden">
        <div className="relative h-96 md:h-[500px] w-full">
          <img
            src="/images/contact-hero.jpg"
            alt="Get in Touch"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-3xl mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Get in Touch</h1>
              <div className="accent-divider mx-auto mb-6"></div>
              <p className="text-lg text-white/90">
                Ready to explore a partnership? We'd love to hear from you. Fill out the form below or reach out directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info and Form Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Email Card - Left Side */}
            <div className="flex items-start">
              <div className="bg-background rounded-lg p-8 shadow-sm border border-border text-center w-full">
                <div className="flex justify-center mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-3">Email</h3>
                <a
                  href="mailto:info@legacytransitionpartners.com"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  info@legacytransitionpartners.com
                </a>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="bg-white rounded-lg p-8 shadow-sm border border-border">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-foreground/80 mb-6">
                    We've received your message and will get back to you soon.
                  </p>
                  <Button
                    onClick={() => setLocation("/")}
                    className="btn-primary font-semibold"
                  >
                    Back to Home
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Company Field */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      placeholder="Tell us about your business and what you're looking for..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-4 pt-4">
                    <Button type="submit" className="btn-primary font-semibold px-8 py-3">
                      Send Message
                    </Button>
                    <p className="text-sm text-foreground/60 flex items-center">
                      * Required fields
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-8">
            <img src="/images/ltp-logo.png" alt="Legacy Transition Partners" className="h-32 w-auto mb-6" />
            <div>
              <h4 className="font-bold mb-2">Contact</h4>
              <p className="text-sm">
                <a href="mailto:info@legacytransitionpartners.com" className="hover:opacity-80 transition-opacity">
                  info@legacytransitionpartners.com
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
