import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Check,
  CircleDollarSign,
  FileCheck2,
  Landmark,
  Lock,
  MessageSquareText,
  Receipt,
  ScanLine,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Wallet,
} from "lucide-react";

import logoUrl from "@/assets/alpigen-logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import dashboardShot from "@/assets/dashboard-shot.jpg";
import receiptScan from "@/assets/receipt-scan.jpg";
import personaCreator from "@/assets/persona-creator.jpg";
import personaBudgeter from "@/assets/persona-budgeter.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "Alpigen AI — Receipts, taxes and Safe-to-Spend, automated" },
      {
        name: "description",
        content:
          "Alpigen AI scans receipts into IRS Schedule C or Income Tax Act categories and tells you exactly what is safe to spend today. Built for freelancers and budgeters in India and the US.",
      },
      {
        property: "og:title",
        content: "Alpigen AI — Receipts, taxes and Safe-to-Spend, automated",
      },
      {
        property: "og:description",
        content:
          "Zero-consulting AI finance utility: automatic receipt categorisation and real-time Safe-to-Spend answers across India and the US.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      {
        name: "twitter:description",
        content:
          "Automatic receipt categorisation and real-time Safe-to-Spend answers across India and the US.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const heading = { fontFamily: '"Space Grotesk", system-ui, sans-serif' };
const body = { fontFamily: '"DM Sans", system-ui, sans-serif' };

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground" style={body}>
      <Nav />
      <main>
        <Hero />
        <Metrics />
        <Features />
        <HowItWorks />
        <Personas />
        <Pricing />
        <Compliance />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <img
      src={logoUrl}
      alt="Alpigen AI"
      className={`${className} w-auto object-contain`}
    />
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
      <span className="h-px w-8 bg-accent/60" />
      {children}
    </span>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Logo className="h-12 md:h-14" />
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {[
            ["Product", "#product"],
            ["How it works", "#how"],
            ["Pricing", "#pricing"],
          ].map(([label, href]) => (
            <a
              key={href}
              className="relative py-1 transition-colors hover:text-foreground after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:after:scale-x-100"
              href={href}
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#pricing"
          className="rounded-full px-5 py-2 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
          style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-soft)" }}
        >
          Start free
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <img
        src={heroBg}
        alt=""
        aria-hidden
        width={1920}
        height={1088}
        className="absolute inset-0 size-full object-cover opacity-40 mix-blend-screen"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(1 0 0 / 0.5) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at 30% 20%, black, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -left-32 top-10 size-[28rem] rounded-full blur-3xl"
        style={{ background: "oklch(0.74 0.128 196 / 0.22)" }}
      />
      <div
        aria-hidden
        className="absolute -right-24 bottom-[-10rem] size-[32rem] rounded-full blur-3xl"
        style={{ background: "oklch(0.45 0.1 250 / 0.35)" }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-32"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--background))",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-16 px-5 py-20 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-28">
        <div className="text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-accent backdrop-blur">
            <Sparkles className="size-3.5" />
            India + United States
          </span>
          <h1
            className="mt-6 text-4xl leading-[1.08] font-semibold md:text-6xl"
            style={heading}
          >
            Your receipts filed.
            <br className="hidden md:block" />{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-accent)" }}
            >
              Your spending answered.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-primary-foreground/75 md:text-lg">
            Alpigen AI reads every receipt, maps it to IRS Schedule C or the Income
            Tax Act, and turns your live bank balance into one honest answer:
            <span className="text-accent"> yes, no, or wait.</span> No spreadsheets,
            no accountants, no monthly ledger chores.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-glow)" }}
            >
              Scan your first receipt
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-6 py-3 text-sm font-medium text-primary-foreground/85 transition-colors hover:border-accent/60 hover:text-accent"
            >
              See how it works
            </a>
          </div>
          <p className="mt-4 flex items-center gap-2 text-sm text-primary-foreground/55">
            <Lock className="size-3.5" />
            Value in under 2 minutes · 5 free scans a month · read-only access
          </p>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-6">
            {[
              ["2 min", "To first value"],
              ["2 regimes", "US + India tax codes"],
              ["Bank-grade", "Encrypted, read-only"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="text-xl font-semibold text-accent" style={heading}>
                  {value}
                </dt>
                <dd className="mt-1 text-xs text-primary-foreground/60">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-6 rounded-[2rem] opacity-40 blur-2xl"
            style={{ background: "var(--gradient-accent)" }}
          />
          <div className="relative z-10">
            <HeroCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroCard() {
  return (
    <div
      className="rounded-2xl border border-border/40 p-6"
      style={{ background: "var(--gradient-surface)", boxShadow: "var(--shadow-elevated)" }}
    >
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">Safe to spend today</p>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-1 text-xs font-medium text-accent-foreground">
          <span className="size-1.5 animate-pulse rounded-full bg-accent" />
          Live
        </span>
      </div>
      <p className="mt-2 text-5xl font-semibold text-foreground" style={heading}>
        ₹4,820
      </p>
      <p className="mt-1 text-sm text-muted-foreground">
        After ₹18,400 of bills due in the next 12 days and your ₹6,000 savings
        target.
      </p>

      <div className="mt-6 space-y-3 rounded-xl bg-secondary/70 p-4 text-sm">
        <p className="text-slate-mid">“Can I buy a ₹7,200 monitor tonight?”</p>
        <div className="rounded-lg bg-card p-3" style={{ boxShadow: "var(--shadow-soft)" }}>
          <p className="font-medium text-foreground">Wait 4 days.</p>
          <p className="mt-1 text-muted-foreground">
            Your electricity and rent clear on the 3rd. After that inflow, this
            purchase keeps your savings target intact.
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3 border-t border-border pt-4 text-sm">
        <Receipt className="size-4 text-accent" />
        <span className="text-muted-foreground">
          Blue Bottle · $18.40 → <span className="text-foreground">Schedule C, Meals</span>
        </span>
      </div>
    </div>
  );
}

function Metrics() {
  const items = [
    [ScanLine, "98%", "Line-item extraction accuracy"],
    [TrendingUp, "40+", "Deduction categories mapped"],
    [Lock, "AES-256", "Encryption at rest and in transit"],
    [Wallet, "0", "Accountant invoices required"],
  ] as const;
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-px overflow-hidden px-5 py-10 sm:grid-cols-2 md:grid-cols-4">
        {items.map(([Icon, value, label]) => (
          <div key={label} className="px-2 py-4">
            <Icon className="size-5 text-accent" />
            <p className="mt-3 text-2xl font-semibold" style={heading}>
              {value}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const features = [
  {
    icon: ScanLine,
    title: "AI receipt & expense categorizer",
    copy: "Snap it, drop it in the browser, or forward it to your private inbox. Vision models pull vendor, line items and totals, then tag each one to the right deduction code.",
    points: [
      "Camera, file drop and email-in ingestion",
      "IRS Schedule C for US, Sections 30–37 for India",
      "Audit-ready exports with the image attached",
    ],
  },
  {
    icon: MessageSquareText,
    title: "Safe-to-Spend predictor",
    copy: "Balances, upcoming bills and savings targets are computed deterministically in the database — the AI only explains the number, it never invents it.",
    points: [
      "Plaid for US feeds, Sahamati AA for India",
      "Bill-aware daily spendable figure",
      "Conversational yes / no / wait verdicts",
    ],
  },
];

function Features() {
  return (
    <section id="product" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <Eyebrow>The product</Eyebrow>
      <h2 className="mt-5 max-w-2xl text-3xl font-semibold md:text-4xl" style={heading}>
        Two jobs, done without you touching a spreadsheet.
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {features.map((f) => (
          <article
            key={f.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <div
              aria-hidden
              className="absolute -right-16 -top-16 size-40 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-40"
              style={{ background: "var(--gradient-accent)" }}
            />
            <span className="relative inline-flex size-12 items-center justify-center rounded-xl bg-accent/12 text-accent">
              <f.icon className="size-6" />
            </span>
            <h3 className="relative mt-5 text-xl font-semibold" style={heading}>
              {f.title}
            </h3>
            <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
              {f.copy}
            </p>
            <ul className="relative mt-6 space-y-2.5 text-sm">
              {f.points.map((p) => (
                <li key={p} className="flex gap-2.5">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                  <span className="text-foreground/85">{p}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

const steps = [
  {
    icon: Landmark,
    title: "Link your accounts",
    copy: "Connect US banks through Plaid or Indian accounts through the Sahamati Account Aggregator in a few taps.",
  },
  {
    icon: FileCheck2,
    title: "Send receipts any way you like",
    copy: "Camera, drag-and-drop or your personal forwarding address. Categorisation happens the moment it lands.",
  },
  {
    icon: Wallet,
    title: "Ask before you spend",
    copy: "Open the chat, name the purchase, get a definitive verdict backed by your real cash position.",
  },
];

function HowItWorks() {
  return (
    <section id="how" className="border-y border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <Eyebrow>Onboarding</Eyebrow>
        <h2 className="mt-5 text-3xl font-semibold md:text-4xl" style={heading}>
          Live in two minutes.
        </h2>
        <ol className="relative mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-2xl border border-border/70 bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex size-9 items-center justify-center rounded-full text-sm font-semibold text-accent-foreground"
                  style={{ background: "var(--gradient-accent)", ...heading }}
                >
                  {i + 1}
                </span>
                <s.icon className="size-5 text-accent" />
              </div>
              <h3 className="mt-4 text-lg font-semibold" style={heading}>
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.copy}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Personas() {
  const personas = [
    {
      icon: Building2,
      name: "The solo creator",
      copy: "Freelance devs, creators and gig drivers who dread tax season. Every deductible rupee or dollar gets caught, with the receipt attached and no CPA invoice.",
    },
    {
      icon: CircleDollarSign,
      name: "The mindful budgeter",
      copy: "Salaried Gen Z and millennials in expensive cities who want guard rails, not ledgers. One number, updated live, that already accounts for what's due.",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <Eyebrow>Who it's for</Eyebrow>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {personas.map((p) => (
          <div
            key={p.name}
            className="rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent/50"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent/12 text-accent">
              <p.icon className="size-5" />
            </span>
            <h3 className="mt-4 text-xl font-semibold" style={heading}>
              {p.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {p.copy}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Free",
      price: "₹0 / $0",
      note: "For trying the loop",
      features: [
        "5 receipt scans per month",
        "Daily ledger lookups",
        "One linked bank account",
      ],
      cta: "Start free",
      highlight: false,
    },
    {
      name: "Premium",
      price: "₹499 / $9",
      note: "per month, billed via Razorpay",
      features: [
        "Unlimited vision processing",
        "Conversational Safe-to-Spend agent",
        "Audit-ready tax exports",
        "UPI, cards and international payments",
      ],
      cta: "Go premium",
      highlight: true,
    },
  ];
  return (
    <section id="pricing" className="border-y border-border bg-secondary/50">
      <div className="mx-auto max-w-4xl px-5 py-20 md:py-24">
        <Eyebrow>Pricing</Eyebrow>
        <h2 className="mt-5 text-3xl font-semibold md:text-4xl" style={heading}>
          Self-serve pricing. No sales calls.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border p-7 transition-transform hover:-translate-y-1 ${
                t.highlight ? "border-accent/60 bg-card" : "border-border bg-card/70"
              }`}
              style={
                t.highlight
                  ? { boxShadow: "var(--shadow-elevated)" }
                  : { boxShadow: "var(--shadow-soft)" }
              }
            >
              {t.highlight && (
                <span
                  className="absolute -top-3 right-6 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground"
                  style={{ background: "var(--gradient-accent)" }}
                >
                  Most popular
                </span>
              )}
              <p className="text-sm uppercase tracking-[0.14em] text-muted-foreground">
                {t.name}
              </p>
              <p className="mt-3 text-3xl font-semibold" style={heading}>
                {t.price}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{t.note}</p>
              <ul className="mt-6 space-y-2.5 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span className="text-foreground/85">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-90 ${
                  t.highlight
                    ? "text-accent-foreground"
                    : "bg-primary text-primary-foreground"
                }`}
                style={t.highlight ? { background: "var(--gradient-accent)" } : undefined}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Compliance() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-20 md:py-24">
      <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 md:flex-row md:items-start"
        style={{ boxShadow: "var(--shadow-soft)" }}
      >
        <ShieldCheck className="size-6 shrink-0 text-accent" />
        <div>
          <h2 className="text-lg font-semibold" style={heading}>
            An analytical tool, not an advisor
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Alpigen AI provides informational analysis of your own financial data.
            It is not a certified accounting, audit or wealth advisory service.
            Cross-border invoices are processed through Razorpay with signature
            verification, and every tenant's data is isolated so no account can
            reach another's records.
          </p>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-24">
      <div
        className="relative overflow-hidden rounded-3xl px-8 py-16 text-center text-primary-foreground"
        style={{ background: "var(--gradient-hero)", boxShadow: "var(--shadow-elevated)" }}
      >
        <div
          aria-hidden
          className="absolute -right-20 -top-24 size-72 rounded-full blur-3xl"
          style={{ background: "oklch(0.74 0.128 196 / 0.3)" }}
        />
        <h2 className="relative text-3xl font-semibold md:text-4xl" style={heading}>
          Stop guessing what you can afford.
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/75">
          Five free scans a month, no card required. Link an account and get your
          first Safe-to-Spend answer in under two minutes.
        </p>
        <a
          href="#pricing"
          className="group relative mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
          style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-glow)" }}
        >
          Get started free
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 md:flex-row md:items-center md:justify-between">
        <Logo className="h-12" />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Alpigen AI · India & United States
        </p>
      </div>
    </footer>
  );
}
