import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinkClass =
    "rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary text-foreground/80";
  const activeClass = "text-primary";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center group" aria-label="Bone Physiotherapy Clinic">
          <img
            src={logo}
            alt="Bone Physiotherapy Clinic logo"
            className="h-20 w-auto transition-transform group-hover:scale-105"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <Link to="/" activeOptions={{ exact: true }} className={navLinkClass} activeProps={{ className: activeClass }}>
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/services"
              className={`flex items-center gap-1 ${navLinkClass}`}
              activeProps={{ className: activeClass }}
            >
              Services
              <ChevronDown
                className="h-4 w-4 transition-transform"
                style={{ transform: servicesOpen ? "rotate(180deg)" : undefined }}
              />
            </Link>
            <div
              className={cn(
                "absolute left-1/2 top-full -translate-x-1/2 pt-2 transition-all duration-200",
                servicesOpen ? "visible opacity-100" : "invisible opacity-0",
              )}
            >
              <div className="w-[340px] rounded-2xl border border-border bg-popover p-3 shadow-[var(--shadow-elegant)]">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="block rounded-md px-3 py-2 text-sm text-foreground/85 transition-colors hover:bg-medical-light hover:text-primary"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/about" className={navLinkClass} activeProps={{ className: activeClass }}>
            About
          </Link>
          <Link to="/contact" className={navLinkClass} activeProps={{ className: activeClass }}>
            Contact
          </Link>

          <Link
            to="/contact"
            className="ml-3 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow-elegant)] hover:-translate-y-0.5"
          >
            Book Appointment
          </Link>
        </nav>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-muted"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="space-y-1 px-4 py-4">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
            >
              Home
            </Link>

            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted">
                Services
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-1 space-y-1 px-2 py-2">
                <Link
                  to="/services"
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-semibold text-primary hover:bg-medical-light"
                >
                  All Services →
                </Link>
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-primary"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </details>

            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted"
            >
              Contact
            </Link>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
