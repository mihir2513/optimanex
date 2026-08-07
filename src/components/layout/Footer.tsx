import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";
import { Logo } from "@/components/ui/Logo";

const FooterLogo = () => (
  <Link href="/" className="flex items-center gap-2 mb-6">
    <Logo className="w-10 h-10" />
    <span className="font-montserrat font-bold text-xl text-white tracking-tight">
      OPTIMANEX
    </span>
  </Link>
);

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Contact */}
          <div>
            <FooterLogo />
            <p className="text-sm text-secondary-foreground/80 mb-6 leading-relaxed">
              Engineering scalable, AI-powered software solutions for global businesses across Healthcare, FinTech, SaaS, and more — for over 12 years.
            </p>
            <div className="space-y-3 text-sm text-secondary-foreground/80">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:sales@optimanex.com" className="hover:text-white transition-colors">sales@optimanex.com</a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+918141004777" className="hover:text-white transition-colors">+91 81410 04777</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>E 610, PNTC Tower, Ahmedabad, Gujarat, India</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span>Mon – Fri, 10:00 AM – 7:00 PM IST</span>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-montserrat font-bold text-white mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/80">
              <li><Link href="/services/digital-product-engineering" className="hover:text-white hover:pl-2 transition-all">Digital Product Engineering</Link></li>
              <li><Link href="/services/cloud-devops-engineering" className="hover:text-white hover:pl-2 transition-all">Cloud & DevOps</Link></li>
              <li><Link href="/services/data-engineering" className="hover:text-white hover:pl-2 transition-all">Data Engineering</Link></li>
              <li><Link href="/services/ai-ml-development" className="hover:text-white hover:pl-2 transition-all">AI/ML Development</Link></li>
              <li><Link href="/services/mobile-app-development" className="hover:text-white hover:pl-2 transition-all">Mobile App Development</Link></li>
              <li><Link href="/services/ui-ux-design" className="hover:text-white hover:pl-2 transition-all">UI/UX Design</Link></li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h4 className="font-montserrat font-bold text-white mb-6 uppercase tracking-wider text-sm">Industries</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/80">
              <li><Link href="/industries/healthcare" className="hover:text-white hover:pl-2 transition-all">Healthcare</Link></li>
              <li><Link href="/industries/fintech" className="hover:text-white hover:pl-2 transition-all">FinTech</Link></li>
              <li><Link href="/industries/real-estate" className="hover:text-white hover:pl-2 transition-all">Real Estate</Link></li>
              <li><Link href="/industries/saas" className="hover:text-white hover:pl-2 transition-all">SaaS & Enterprise</Link></li>
              <li><Link href="/industries/oil-gas" className="hover:text-white hover:pl-2 transition-all">Oil & Gas</Link></li>
              <li><Link href="/industries/tourism" className="hover:text-white hover:pl-2 transition-all">Tourism</Link></li>
              <li><Link href="/industries/telecom" className="hover:text-white hover:pl-2 transition-all">Telecom</Link></li>
              <li><Link href="/industries/logistics" className="hover:text-white hover:pl-2 transition-all">Logistics</Link></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="font-montserrat font-bold text-white mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/80">
              <li><Link href="/about" className="hover:text-white hover:pl-2 transition-all">About Us</Link></li>
              <li><Link href="/career" className="hover:text-white hover:pl-2 transition-all">Career</Link></li>
              <li><Link href="/contact" className="hover:text-white hover:pl-2 transition-all">Contact</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Banner Strip */}
      <div className="bg-gradient-blue py-8 mt-12 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-white text-center md:text-left">
            Have a project in mind? Let&apos;s talk.
          </h3>
          <MagneticWrapper>
            <Button asChild size="lg" variant="secondary" className="rounded-full shadow-elevated font-semibold hover:-translate-y-0.5 transition-transform text-secondary bg-white hover:bg-gray-100">
              <Link href="/contact">
                Get a Free Quote <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </MagneticWrapper>
        </div>
        {/* Abstract pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1a202c] py-6 text-center text-sm text-secondary-foreground/60 border-t border-white/5">
        <div className="container mx-auto px-4">
          © {new Date().getFullYear()} Optimanex LLP. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
