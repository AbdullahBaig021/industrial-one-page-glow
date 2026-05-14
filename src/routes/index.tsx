import { createFileRoute } from "@tanstack/react-router";
import {
  Cog,
  Cpu,
  Zap,
  CircuitBoard,
  Wrench,
  Bot,
  ShieldCheck,
  Truck,
  Headphones,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import heroImg from "@/assets/hero-cnc.jpg";
import pControlPanel from "@/assets/p-control-panel.jpg";
import pServoDriver from "@/assets/p-servo-driver.jpg";
import pEdmWire from "@/assets/p-edm-wire.jpg";
import pSpindle from "@/assets/p-spindle.jpg";
import pLinearRail from "@/assets/p-linear-rail.jpg";
import pPowerSupply from "@/assets/p-power-supply.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mufaz Impex — CNC Spare Parts & Industrial Automation" },
      {
        name: "description",
        content:
          "Global supplier of CNC spare parts, EDM wire cut parts, servo motors, controllers and industrial automation solutions for manufacturing industries.",
      },
      { property: "og:title", content: "Mufaz Impex — CNC Spare Parts & Industrial Automation" },
      {
        property: "og:description",
        content:
          "Precision CNC components, EDM accessories, servo motors and automation solutions worldwide.",
      },
    ],
  }),
});

const categories = [
  { icon: Cog, title: "CNC Spare Parts", desc: "Genuine replacement components for all major CNC machines." },
  { icon: Zap, title: "EDM Wire Cut Parts", desc: "Wire guides, power feeders, and EDM accessories." },
  { icon: Cpu, title: "Servo Motors & Drivers", desc: "High-torque servo systems and matched drivers." },
  { icon: CircuitBoard, title: "CNC Controllers", desc: "Control units, panels and HMI replacements." },
  { icon: Wrench, title: "Machine Accessories", desc: "Tooling, fixtures and precision accessories." },
  { icon: Bot, title: "Industrial Automation", desc: "PLCs, sensors and complete automation solutions." },
];

const products = [
  { name: "CNC Control Panel Unit", desc: "Industrial-grade control unit with HMI interface and I/O modules.", img: pControlPanel },
  { name: "Servo Motor Driver", desc: "High-precision servo driver with adaptive tuning and feedback loop.", img: pServoDriver },
  { name: "EDM Wire Guide Set", desc: "Diamond-tipped guide assembly for high-accuracy EDM wire cutting.", img: pEdmWire },
  { name: "Spindle Motor Kit", desc: "High-RPM spindle motor with bearings and mounting hardware.", img: pSpindle },
  { name: "Linear Guide Rail System", desc: "Precision-ground linear motion rail for smooth axis travel.", img: pLinearRail },
  { name: "Power Supply Module", desc: "Stable industrial DC power supply for control cabinets.", img: pPowerSupply },
];

const reasons = [
  { icon: ShieldCheck, title: "Genuine Industrial Grade Parts", desc: "Sourced from trusted OEMs with full traceability." },
  { icon: Truck, title: "Fast Global Delivery", desc: "Logistics network reaching 40+ countries with tracked shipments." },
  { icon: Headphones, title: "Technical Support", desc: "Engineers on standby for sourcing, specs and integration." },
];

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-primary grid place-items-center">
            <Cog className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl tracking-wide">MUFAZ <span className="text-primary">IMPEX</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#categories" className="hover:text-foreground transition-colors">Categories</a>
          <a href="#products" className="hover:text-foreground transition-colors">Products</a>
          <a href="#why" className="hover:text-foreground transition-colors">Why Us</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition"
        >
          Get Quote <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <img
          src={heroImg}
          alt="Industrial CNC machinery"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 industrial-grid opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Industrial Supplier · Worldwide
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              Precision CNC Spare Parts <br />
              <span className="text-primary">& Industrial Automation</span> Solutions
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              High-quality CNC components, EDM wire cut parts, servo motors, controllers and industrial automation solutions for manufacturing industries worldwide.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-md font-semibold tracking-wide hover:opacity-90 transition"
                style={{ boxShadow: "var(--shadow-glow)" }}
              >
                View Products <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-border bg-surface/60 backdrop-blur px-7 py-3.5 rounded-md font-semibold tracking-wide hover:border-primary hover:text-primary transition"
              >
                Contact Us
              </a>
            </div>
            <div className="mt-16 grid grid-cols-3 max-w-xl gap-6 border-t border-border pt-8">
              {[
                ["40+", "Countries Served"],
                ["1500+", "Industrial SKUs"],
                ["24/7", "Support"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl md:text-4xl font-bold text-primary">{n}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="accent-bar mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-bold">About Mufaz Impex</h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Mufaz Impex is a global supplier of CNC spare parts and industrial automation components. We provide reliable and high-performance solutions including CNC systems, EDM accessories, servo motors, drivers, and machine accessories for manufacturing industries.
            </p>
            <p>
              We focus on quality, durability, and long-term industrial partnerships — working with OEMs, system integrators, and factories to keep production lines running at peak efficiency.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {["ISO Compliant", "OEM Sourced", "Globally Shipped"].map((t) => (
                <div key={t} className="border border-border bg-surface/50 rounded-md px-4 py-3 text-sm font-semibold text-foreground tracking-wide">
                  ✓ {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="py-24 md:py-32 bg-surface/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="accent-bar mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-bold">Industrial Product Categories</h2>
            <p className="mt-4 text-muted-foreground text-lg">Explore our full range of precision-engineered industrial components.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative bg-card border border-border rounded-lg p-7 hover:border-primary hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="h-12 w-12 rounded-md bg-primary/10 border border-primary/30 grid place-items-center text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                <ArrowRight className="absolute top-7 right-7 h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section id="products" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="accent-bar mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-bold">Featured Products</h2>
            <p className="mt-4 text-muted-foreground text-lg">A selection of our most-requested industrial components.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.name}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-background">
                  <img
                    src={p.img}
                    alt={p.name}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[10px] uppercase tracking-widest text-primary font-semibold mb-2">Industrial Grade</div>
                  <h3 className="font-display text-xl font-bold mb-2">{p.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why" className="py-24 md:py-32 bg-surface/40 border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 industrial-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <div className="accent-bar mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-bold">Why Choose Mufaz Impex</h2>
            <p className="mt-4 text-muted-foreground text-lg">Engineered reliability, backed by global logistics and expert support.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card border border-border rounded-lg p-8 hover:border-primary transition">
                <div className="h-14 w-14 rounded-md grid place-items-center mb-6" style={{ background: "var(--gradient-accent)" }}>
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-card border border-border rounded-2xl p-10 md:p-14 relative overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative grid md:grid-cols-2 gap-10">
              <div>
                <div className="accent-bar mb-6" />
                <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">Request a Quote Today</h2>
                <p className="mt-4 text-muted-foreground text-lg">Tell us your requirements and our engineers will respond within one business day.</p>
                <div className="mt-8 space-y-4 text-sm">
                  <a href="mailto:mufazimpex@gmail.com" className="flex items-center gap-3 hover:text-foreground transition-colors"><Mail className="h-5 w-5 text-primary shrink-0" /> mufazimpex@gmail.com</a>
                  <a href="tel:+886972197644" className="flex items-center gap-3 hover:text-foreground transition-colors"><Phone className="h-5 w-5 text-primary shrink-0" /> 0972-197644</a>
                  <div className="flex items-start gap-3"><MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" /> <span>3rd Floor, No.3, Lane 982, Road Xiangxin South, Nantun District, Taichung City, Taiwan (R.O.C)</span></div>
                </div>
              </div>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:border-primary focus:outline-none transition" placeholder="Your name" />
                <input className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:border-primary focus:outline-none transition" placeholder="Email address" type="email" />
                <input className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:border-primary focus:outline-none transition" placeholder="Company" />
                <textarea rows={4} className="w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:border-primary focus:outline-none transition resize-none" placeholder="Tell us what you need..." />
                <button className="w-full bg-primary text-primary-foreground py-3.5 rounded-md font-semibold tracking-wide hover:opacity-90 transition inline-flex items-center justify-center gap-2">
                  Send Inquiry <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-primary grid place-items-center">
              <Cog className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold tracking-wide text-foreground">MUFAZ IMPEX</span>
          </div>
          <p>© {new Date().getFullYear()} Mufaz Impex. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
