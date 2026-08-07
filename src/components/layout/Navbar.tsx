"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";
import { Logo } from "@/components/ui/Logo";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { cn } from "@/lib/utils";

const NavLogo = () => (
  <Link href="/" className="flex items-center gap-2 z-50">
    <Logo className="w-10 h-10" />
    <span className="font-montserrat font-bold text-xl tracking-tight">
      OPTIMANEX
    </span>
  </Link>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const navBg = isScrolled ? "bg-white shadow-soft text-foreground" : (isHome ? "bg-transparent text-white" : "bg-white shadow-soft text-foreground");

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", navBg)}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <NavLogo />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-sm font-semibold hover:text-primary transition-colors">Home</Link>

          <div className="relative group">
            <Link href="/services" className="flex items-center gap-1 text-sm font-semibold hover:text-primary transition-colors py-8">
              Services <ChevronDown className="w-4 h-4" />
            </Link>
            <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-elevated opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0 border border-border overflow-hidden">
              <div className="p-2">
                {services.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`} className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary rounded-md transition-colors">
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group">
            <Link href="/industries" className="flex items-center gap-1 text-sm font-semibold hover:text-primary transition-colors py-8">
              Industries <ChevronDown className="w-4 h-4" />
            </Link>
            <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-elevated opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0 border border-border overflow-hidden">
              <div className="p-2">
                {industries.map((ind) => (
                  <Link key={ind.slug} href={`/industries/${ind.slug}`} className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary rounded-md transition-colors">
                    {ind.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/about" className="text-sm font-semibold hover:text-primary transition-colors">About</Link>
          <Link href="/career" className="text-sm font-semibold hover:text-primary transition-colors">Career</Link>
          <Link href="/contact" className="text-sm font-semibold hover:text-primary transition-colors">Contact</Link>
        </nav>

        <div className="hidden lg:block">
          <MagneticWrapper>
            <Button asChild className="rounded-full shadow-lg hover:-translate-y-0.5 transition-transform bg-[#F05941] hover:bg-[#F05941]/90 text-white border-none">
              <Link href="/contact">
                Get a Free Quote
              </Link>
            </Button>
          </MagneticWrapper>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden z-50 p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn("fixed inset-0 bg-white z-40 transition-transform duration-300 lg:hidden overflow-y-auto pt-24 pb-8 px-4", mobileMenuOpen ? "translate-x-0" : "translate-x-full")}>
        <div className="flex flex-col gap-6 text-foreground">
          <Link href="/" className="text-xl font-bold">Home</Link>

          <div className="flex flex-col gap-2">
            <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-between text-xl font-bold w-full text-left">
              Services <ChevronDown className={cn("w-5 h-5 transition-transform", servicesOpen && "rotate-180")} />
            </button>
            {servicesOpen && (
              <div className="flex flex-col gap-3 pl-4 pt-2 border-l-2 border-primary/20">
                <Link href="/services" className="font-semibold text-primary">All Services</Link>
                {services.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`} className="text-muted-foreground">{service.name}</Link>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <button onClick={() => setIndustriesOpen(!industriesOpen)} className="flex items-center justify-between text-xl font-bold w-full text-left">
              Industries <ChevronDown className={cn("w-5 h-5 transition-transform", industriesOpen && "rotate-180")} />
            </button>
            {industriesOpen && (
              <div className="flex flex-col gap-3 pl-4 pt-2 border-l-2 border-primary/20">
                <Link href="/industries" className="font-semibold text-primary">All Industries</Link>
                {industries.map((ind) => (
                  <Link key={ind.slug} href={`/industries/${ind.slug}`} className="text-muted-foreground">{ind.name}</Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className="text-xl font-bold">About</Link>
          <Link href="/career" className="text-xl font-bold">Career</Link>
          <Link href="/contact" className="text-xl font-bold">Contact</Link>

          <div className="pt-6 mt-6 border-t border-border">
            <Button asChild className="w-full rounded-full shadow-primary" size="lg">
              <Link href="/contact">Get a Free Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
