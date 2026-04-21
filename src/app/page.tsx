import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default function Home() {
  return (
    <div className="min-h-full bg-white text-zinc-950">
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(16,185,129,0.22),transparent_60%),radial-gradient(60%_40%_at_80%_20%,rgba(59,130,246,0.10),transparent_60%)]"
        />

        <header className="relative border-b border-zinc-200/60 bg-white/70 backdrop-blur">
          <Container className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B7B44]"
            >
              <Logo />
              <span className="sr-only">Home</span>
            </Link>

            <nav className="hidden items-center gap-6 text-sm text-zinc-700 md:flex">
              <a className="hover:text-zinc-950" href="#partners">
                Partners
              </a>
              <a className="hover:text-zinc-950" href="#solutions">
                Solutions
              </a>
              <a className="hover:text-zinc-950" href="#impact">
                Impact
              </a>
              <a className="hover:text-zinc-950" href="#about">
                About
              </a>
              <a className="hover:text-zinc-950" href="#contact">
                Contact
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <ButtonLink
                variant="secondary"
                href="#partners"
                className="hidden sm:inline-flex"
              >
                Explore partners
              </ButtonLink>
              <ButtonLink href="#contact">Talk to us</ButtonLink>
            </div>
          </Container>
        </header>

        <main className="relative">
          <section className="py-16 sm:py-20">
            <Container>
              <div className="grid gap-10 md:grid-cols-12 md:items-center">
                <div className="md:col-span-7">
                  <p className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">
                    Agrotech enablement • 3× faster ops • Reporting you can
                    trust
                  </p>
                  <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                    From farm registration to verified lot — faster. We help
                    Agrotech teams build field systems that scale.
                  </h1>
                  <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-zinc-700">
                    We help Agrotech teams build systems that streamline
                    operations, improve team execution, and deliver
                    decision-ready reporting—so you ship faster and scale with
                    confidence.
                  </p>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <ButtonLink href="#contact">Talk to us</ButtonLink>
                    <ButtonLink variant="secondary" href="#solutions">
                      See what we deliver
                    </ButtonLink>
                  </div>

                  <dl className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="rounded-2xl border border-zinc-200 bg-white/70 p-4 shadow-sm">
                      <dt className="text-xs text-zinc-600">
                        Farmer-first rollout
                      </dt>
                      <dd className="mt-1 text-lg font-semibold">
                        Mobile & offline
                      </dd>
                    </div>
                    <div className="rounded-2xl border border-zinc-200 bg-white/70 p-4 shadow-sm">
                      <dt className="text-xs text-zinc-600">
                        Compliance ready
                      </dt>
                      <dd className="mt-1 text-lg font-semibold">
                        Audit trails
                      </dd>
                    </div>
                    <div className="rounded-2xl border border-zinc-200 bg-white/70 p-4 shadow-sm">
                      <dt className="text-xs text-zinc-600">
                        Partner ecosystem
                      </dt>
                      <dd className="mt-1 text-lg font-semibold">
                        Open integrations
                      </dd>
                      <dd className="mt-1 text-lg font-semibold">
                        We facilitate commodity trading within the country.
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="md:col-span-5">
                  <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-medium text-zinc-950">
                          Partner dashboard
                        </p>
                        <p className="mt-1 text-sm text-zinc-600">
                          A single view of farms, lots, and verified data
                          signals.
                        </p>
                      </div>
                      <div className="rounded-2xl bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
                        Live
                      </div>
                    </div>

                    <div className="mt-6 grid gap-3">
                      <div className="rounded-2xl bg-zinc-50 p-4 ring-1 ring-zinc-200">
                        <p className="text-xs text-zinc-600">
                          Traceability coverage
                        </p>
                        <div className="mt-2 h-2 w-full rounded-full bg-zinc-200">
                          <div className="h-2 w-[86%] rounded-full bg-emerald-600" />
                        </div>
                        <p className="mt-2 text-sm font-semibold">
                          86% verified lots
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-2xl bg-zinc-50 p-4 ring-1 ring-zinc-200">
                          <p className="text-xs text-zinc-600">Field visits</p>
                          <p className="mt-2 text-xl font-semibold">+32%</p>
                          <p className="mt-1 text-xs text-zinc-600">
                            reported on time
                          </p>
                        </div>
                        <div className="rounded-2xl bg-zinc-50 p-4 ring-1 ring-zinc-200">
                          <p className="text-xs text-zinc-600">
                            Farmer adoption
                          </p>
                          <p className="mt-2 text-xl font-semibold">4.7/5</p>
                          <p className="mt-1 text-xs text-zinc-600">
                            ease of use
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="mt-5 text-xs text-zinc-500">
                      Example metrics shown for illustration.
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section
            id="partners"
            className="border-y border-zinc-200/70 bg-zinc-50 py-14"
          >
            <Container>
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-balance text-2xl font-semibold tracking-tight">
                    Built with and for partners
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-700">
                    We collaborate with buyers, NGOs, input providers, lenders,
                    and software teams to deliver programs that farmers adopt
                    and auditors can verify.
                  </p>
                </div>
                <ButtonLink
                  variant="secondary"
                  href="#contact"
                  className="w-fit"
                >
                  Become a partner
                </ButtonLink>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  {
                    name: "Opex Consulting",
                    src: "/assets/partners/opex-logo.webp",
                    alt: "Opex Consulting",
                  },
                  {
                    name: "Placom",
                    src: "/assets/partners/placom.png",
                    alt: "Placom",
                  },
                  {
                    name: "Ohuru DioPalm",
                    src: "/assets/partners/ohuru-diopalm.webp",
                    alt: "Ohuru DioPalm",
                  },
                  {
                    name: "PlateauAgric",
                    src: "/assets/partners/plateauagric.png",
                    alt: "PlateauAgric",
                  },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="flex h-18 items-center justify-center rounded-2xl px-4 "
                  >
                    <Image
                      src={p.src}
                      alt={p.name}
                      width={240}
                      height={86}
                      className="h-18 w-auto max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <PartnerCard
                  title="Integrate fast"
                  body="Use flexible exports and partner-friendly workflows to connect with ERPs, CRMs, and traceability tools."
                />
                <PartnerCard
                  title="Deliver measurable outcomes"
                  body="Track adoption, training, and verified farm activity with clear metrics for reporting and audits."
                />
                <PartnerCard
                  title="Co-design field success"
                  body="We align agronomy, incentives, and UX so farmers see value on day one—online or offline."
                />
              </div>
            </Container>
          </section>

          <section id="solutions" className="py-16">
            <Container>
              <div className="grid gap-10 md:grid-cols-12 md:items-start">
                <div className="md:col-span-5">
                  <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                    What FarmsAgora delivers
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-zinc-700">
                    Systems that speed up execution and deliver clear reporting
                    across your operations.
                  </p>
                </div>
                <div className="md:col-span-7">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Feature
                      title="ERP implementation"
                      body="Configure core workflows (inventory, procurement, sales, finance) with the right controls and reporting."
                    />
                    <Feature
                      title="Farmer onboarding & profiling"
                      body="Capture farm IDs, plots, household details, and consent—built for scale and privacy."
                    />
                    <Feature
                      title="Field activity & training"
                      body="Record visits, inputs, and good agricultural practices with offline-first flows."
                    />
                    <Feature
                      title="Traceability & lot management"
                      body="Link harvest lots to farms and buyers with verifiable event history."
                    />
                    <Feature
                      title="Dashboards & reporting"
                      body="Partner-ready metrics for program performance, compliance, and impact storytelling."
                    />
                    <Feature
                      title="Data quality signals"
                      body="Flags for missing fields, suspicious patterns, and audit readiness checks."
                    />
                    <Feature
                      title="Partner operations support"
                      body="We help design rollout playbooks, training materials, and partner comms."
                    />
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section
            id="impact"
            className="border-y border-zinc-200/70 bg-white py-16"
          >
            <Container>
              <div className="grid gap-10 md:grid-cols-12 md:items-center">
                <div className="md:col-span-5">
                  <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                    Designed for impact, built for operations
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-zinc-700">
                    Whether you’re running a sustainability program or scaling
                    procurement, we make field execution visible, measurable,
                    and partner-friendly.
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-zinc-700">
                    <li className="flex gap-3">
                      <span
                        className="mt-1 h-2 w-2 rounded-full bg-emerald-600"
                        aria-hidden="true"
                      />
                      Faster audits with clearer provenance and supporting
                      evidence.
                    </li>
                    <li className="flex gap-3">
                      <span
                        className="mt-1 h-2 w-2 rounded-full bg-emerald-600"
                        aria-hidden="true"
                      />
                      Better adoption by focusing on farmer value and simple
                      workflows.
                    </li>
                    <li className="flex gap-3">
                      <span
                        className="mt-1 h-2 w-2 rounded-full bg-emerald-600"
                        aria-hidden="true"
                      />
                      Shared success metrics across implementers and partners.
                    </li>
                  </ul>
                </div>
                <div className="md:col-span-7">
                  <div className="grid gap-4 sm:grid-cols-3">
                    <Stat
                      label="Onboarding time"
                      value="↓ 40%"
                      note="with guided flows"
                    />
                    <Stat
                      label="Verified lots"
                      value="↑ 2.1×"
                      note="over manual tracking"
                    />
                    <Stat
                      label="Reporting cycles"
                      value="Days"
                      note="instead of weeks"
                    />
                  </div>
                  <div className="mt-4 rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
                    <p className="text-sm font-medium">
                      Typical partner use cases
                    </p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <UseCase
                        title="Sustainable sourcing"
                        body="Proof of origin, GAP adoption, and supplier performance."
                      />
                      <UseCase
                        title="Program implementation"
                        body="Farmer training, monitoring, and M&E reporting."
                      />
                      <UseCase
                        title="Financing enablement"
                        body="Validated farm profiles and activity-based risk signals."
                      />
                      <UseCase
                        title="Input distribution"
                        body="Targeted outreach and redemption tracking at scale."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section id="about" className="py-16">
            <Container>
              <div className="grid gap-10 md:grid-cols-12 md:items-center">
                <div className="md:col-span-6">
                  <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                    A practical Agrotech team
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-zinc-700">
                    We’ve worked across agronomy, program delivery, and product
                    engineering. Our approach is simple: co-design with
                    partners, deploy with field teams, and iterate with real
                    farmer feedback.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <Pill
                      title="Privacy & consent"
                      body="Clear data collection, consent flows, and role-based access."
                    />
                    <Pill
                      title="Offline-first"
                      body="Reliable in low-connectivity environments."
                    />
                    <Pill
                      title="Interoperable"
                      body="Exports and integrations that fit partner systems."
                    />
                    <Pill
                      title="Evidence-driven"
                      body="Audit-friendly logs and verifiable events."
                    />
                  </div>
                </div>

                <div className="md:col-span-6">
                  <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
                    <p className="text-sm font-semibold">What partners say</p>
                    <div className="mt-5 space-y-6">
                      <Quote
                        quote="“The platform exceeded my expectations. From the workflows to the seamless interaction between system components, everything aligns perfectly with our project needs. It’s clear that this solution was built with a deep understanding of operational efficiency.
What stands out most is its ability to simplify processes and save valuable time. I can already see how this will help us achieve our vision of onboarding and managing up to 1,000 farmers effectively on the platform.
I’m genuinely impressed with the level of thought and execution that has gone into this product.”"
                        by="— Mr. Ebere, Project Manager & CEO, Ohuru Diopalm Project"
                      />
                      {/* <Quote
                        quote="“We finally have a reliable, auditable view of farm activity that our compliance team trusts.”"
                        by="Sourcing Manager"
                      />
                      <Quote
                        quote="“Farmers adopted it quickly because it respects their time and works offline.”"
                        by="Field Supervisor"
                      /> */}
                    </div>
                    {/* <p className="mt-6 text-xs text-zinc-500">
                      Testimonials are illustrative and can be replaced with
                      real quotes and names.
                    </p> */}
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section id="contact" className="pb-16">
            <Container>
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 sm:p-10">
                <div className="grid gap-8 md:grid-cols-12 md:items-center">
                  <div className="md:col-span-7">
                    <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                      Contact us
                    </h2>
                    <div className="mt-4 grid gap-6 sm:grid-cols-2">
                      <div className="rounded-2xl bg-white/70 p-5 ring-1 ring-emerald-200">
                        <p className="text-sm font-semibold text-emerald-950">
                          Email
                        </p>
                        <p className="mt-1 text-sm text-emerald-900/80">
                          Our friendly team is here to help.
                        </p>
                        <p className="mt-3 text-sm font-medium text-emerald-950">
                          info@farmsagora.com
                        </p>
                        <p className="mt-3 text-sm font-medium text-emerald-950">
                          +234 813 722 6474
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white/70 p-5 ring-1 ring-emerald-200">
                        <p className="text-sm font-semibold text-emerald-950">
                          Office
                        </p>
                        <p className="mt-1 text-sm text-emerald-900/80">
                          Come say hello at our office HQ.
                        </p>
                        <p className="mt-3 text-sm font-medium leading-6 text-emerald-950">
                          7 Ibeju Lekki Street, Dolphin Estate, Ikoyi Lagos
                          101283, Nigeria.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <div className="grid gap-3">
                      <a
                        className="inline-flex items-center justify-center rounded-full bg-[#1B7B44] px-5 py-3 text-sm font-medium text-white hover:bg-[#16643A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B7B44] focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-50"
                        href="mailto:info@farmsagora.com?subject=Inquiry"
                      >
                        Email info@farmsagora.com
                      </a>
                      <p className="text-center text-xs text-emerald-900/70">
                        We typically respond within 1–2 business days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </main>

        <footer className="border-t border-zinc-200/70 bg-white py-10">
          <Container>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <Logo />
              <div className="flex flex-col gap-4 md:items-end">
                <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-700">
                  <a className="hover:text-zinc-950" href="#partners">
                    Partners
                  </a>
                  <a className="hover:text-zinc-950" href="#solutions">
                    Solutions
                  </a>
                  <a className="hover:text-zinc-950" href="#impact">
                    Impact
                  </a>
                  <a className="hover:text-zinc-950" href="#contact">
                    Contact
                  </a>
                  <Link className="hover:text-zinc-950" href="/privacy-policy">
                    Privacy Policy
                  </Link>
                </div>

                <div className="flex items-center gap-3 text-zinc-600">
                  <span className="text-xs font-medium text-zinc-600">
                    Follow us
                  </span>
                  <SocialIcon
                    label="Instagram"
                    href="https://instagram.com/farms.agora?igshid=NTc4MTIwNjQ2YQ=="
                  >
                    <InstagramIcon />
                  </SocialIcon>
                  <SocialIcon
                    label="LinkedIn"
                    href="https://www.linkedin.com/company/farmsagora/"
                  >
                    <LinkedInIcon />
                  </SocialIcon>
                  <SocialIcon
                    label="Facebook"
                    href="https://www.facebook.com/profile.php?id=100093462253898&mibextid=ZbWKwL"
                  >
                    <FacebookIcon />
                  </SocialIcon>
                  <SocialIcon
                    label="Twitter"
                    href="https://twitter.com/FarmsAgora?t=CMN13RzcQeh6t3g1hagt3g&s=09"
                  >
                    <TwitterIcon />
                  </SocialIcon>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-2 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
              <p>
                © {new Date().getFullYear()} FarmsAgora. All rights reserved.
              </p>
            </div>
          </Container>
        </footer>
      </div>
    </div>
  );
}

function PartnerCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-2 text-sm leading-6 text-zinc-700">{body}</p>
    </div>
  );
}

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-2 text-sm leading-6 text-zinc-700">{body}</p>
    </div>
  );
}

function Stat({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <p className="text-xs text-zinc-600">{label}</p>
      <p className="mt-2 text-2xl font-semibold tracking-tight">{value}</p>
      <p className="mt-1 text-xs text-zinc-600">{note}</p>
    </div>
  );
}

function UseCase({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl bg-white p-4 ring-1 ring-zinc-200">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-1 text-sm leading-6 text-zinc-700">{body}</p>
    </div>
  );
}

function Pill({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl bg-zinc-50 p-4 ring-1 ring-zinc-200">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-1 text-sm leading-6 text-zinc-700">{body}</p>
    </div>
  );
}

function Quote({ quote, by }: { quote: string; by: string }) {
  return (
    <figure className="rounded-2xl bg-zinc-50 p-5 ring-1 ring-zinc-200">
      <blockquote className="text-sm leading-6 text-zinc-800">
        {quote}
      </blockquote>
      <figcaption className="mt-3 text-xs font-medium text-zinc-600">
        {by}
      </figcaption>
    </figure>
  );
}

function SocialIcon({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-zinc-200 transition-colors hover:bg-zinc-50 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B7B44]"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
    >
      <span className="h-4 w-4">{children}</span>
    </a>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Z" />
      <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      <path d="M17.6 6.4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.5 6.5A1.9 1.9 0 1 1 6.5 2.7a1.9 1.9 0 0 1 0 3.8ZM3.9 8.2H9V21H3.9V8.2Z" />
      <path d="M11 8.2h4.9v1.8h.1c.7-1.2 2.3-2.1 4.2-2.1 4.5 0 5.3 2.9 5.3 6.6V21H20.4v-5.7c0-1.4 0-3.2-2.1-3.2-2.1 0-2.4 1.5-2.4 3.1V21H11V8.2Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6H16.7V4.8c-.3 0-1.5-.1-2.8-.1-2.8 0-4.7 1.7-4.7 4.8V11H6.5v3h2.7v8h4.3Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 2H22l-6.8 7.8L23.5 22h-6.6l-5.2-6.8L5.8 22H2.5l7.3-8.4L.6 2h6.8l4.7 6.2L18.9 2Zm-1.2 18h1.9L6.4 3.9H4.3L17.7 20Z" />
    </svg>
  );
}
