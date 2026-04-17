import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default function Home() {
  return (
    <div className="min-h-full bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(16,185,129,0.22),transparent_60%),radial-gradient(60%_40%_at_80%_20%,rgba(59,130,246,0.10),transparent_60%)]"
        />

        <header className="relative border-b border-zinc-200/60 bg-white/70 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/60">
          <Container className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B7B44]"
            >
              <Logo />
              <span className="sr-only">Home</span>
            </Link>

            <nav className="hidden items-center gap-6 text-sm text-zinc-700 dark:text-zinc-300 md:flex">
              <a
                className="hover:text-zinc-950 dark:hover:text-white"
                href="#partners"
              >
                Partners
              </a>
              <a
                className="hover:text-zinc-950 dark:hover:text-white"
                href="#solutions"
              >
                Solutions
              </a>
              <a
                className="hover:text-zinc-950 dark:hover:text-white"
                href="#impact"
              >
                Impact
              </a>
              <a
                className="hover:text-zinc-950 dark:hover:text-white"
                href="#about"
              >
                About
              </a>
              <a
                className="hover:text-zinc-950 dark:hover:text-white"
                href="#contact"
              >
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
                  <p className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-200 dark:ring-emerald-900">
                    Agrotech enablement • 3× faster ops • Reporting you can
                    trust
                  </p>
                  <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                    Empowering Agrotech businesses to move 3× faster.
                  </h1>
                  <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-zinc-700 dark:text-zinc-300">
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

                  <dl className="mt-10 grid grid-cols-3 gap-6">
                    <div className="rounded-2xl border border-zinc-200 bg-white/70 p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/40">
                      <dt className="text-xs text-zinc-600 dark:text-zinc-400">
                        Farmer-first rollout
                      </dt>
                      <dd className="mt-1 text-lg font-semibold">
                        Mobile & offline
                      </dd>
                    </div>
                    <div className="rounded-2xl border border-zinc-200 bg-white/70 p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/40">
                      <dt className="text-xs text-zinc-600 dark:text-zinc-400">
                        Compliance ready
                      </dt>
                      <dd className="mt-1 text-lg font-semibold">
                        Audit trails
                      </dd>
                    </div>
                    <div className="rounded-2xl border border-zinc-200 bg-white/70 p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/40">
                      <dt className="text-xs text-zinc-600 dark:text-zinc-400">
                        Partner ecosystem
                      </dt>
                      <dd className="mt-1 text-lg font-semibold">
                        Open integrations
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="md:col-span-5">
                  <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
                          Partner dashboard
                        </p>
                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                          A single view of farms, lots, and verified data
                          signals.
                        </p>
                      </div>
                      <div className="rounded-2xl bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-200 dark:ring-emerald-900">
                        Live
                      </div>
                    </div>

                    <div className="mt-6 grid gap-3">
                      <div className="rounded-2xl bg-zinc-50 p-4 ring-1 ring-zinc-200 dark:bg-zinc-900/40 dark:ring-zinc-800">
                        <p className="text-xs text-zinc-600 dark:text-zinc-400">
                          Traceability coverage
                        </p>
                        <div className="mt-2 h-2 w-full rounded-full bg-zinc-200 dark:bg-zinc-800">
                          <div className="h-2 w-[86%] rounded-full bg-emerald-600" />
                        </div>
                        <p className="mt-2 text-sm font-semibold">
                          86% verified lots
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-2xl bg-zinc-50 p-4 ring-1 ring-zinc-200 dark:bg-zinc-900/40 dark:ring-zinc-800">
                          <p className="text-xs text-zinc-600 dark:text-zinc-400">
                            Field visits
                          </p>
                          <p className="mt-2 text-xl font-semibold">+32%</p>
                          <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                            reported on time
                          </p>
                        </div>
                        <div className="rounded-2xl bg-zinc-50 p-4 ring-1 ring-zinc-200 dark:bg-zinc-900/40 dark:ring-zinc-800">
                          <p className="text-xs text-zinc-600 dark:text-zinc-400">
                            Farmer adoption
                          </p>
                          <p className="mt-2 text-xl font-semibold">4.7/5</p>
                          <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
                            ease of use
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="mt-5 text-xs text-zinc-500 dark:text-zinc-400">
                      Example metrics shown for illustration.
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section
            id="partners"
            className="border-y border-zinc-200/70 bg-zinc-50 py-14 dark:border-zinc-800/70 dark:bg-zinc-950/30"
          >
            <Container>
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-balance text-2xl font-semibold tracking-tight">
                    Built with and for partners
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-700 dark:text-zinc-300">
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
                    src: "/assets/partners/opex.webp",
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
                    className="flex h-16 items-center justify-center rounded-2xl bg-white px-4 ring-1 ring-zinc-200 dark:bg-zinc-950 dark:ring-zinc-800"
                  >
                    <Image
                      src={p.src}
                      alt={p.name}
                      width={220}
                      height={56}
                      className="max-h-10 w-auto max-w-full object-contain"
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
                  <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
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
            className="border-y border-zinc-200/70 bg-white py-16 dark:border-zinc-800/70 dark:bg-zinc-950"
          >
            <Container>
              <div className="grid gap-10 md:grid-cols-12 md:items-center">
                <div className="md:col-span-5">
                  <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                    Designed for impact, built for operations
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
                    Whether you’re running a sustainability program or scaling
                    procurement, we make field execution visible, measurable,
                    and partner-friendly.
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
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
                  <div className="mt-4 rounded-3xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/30">
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
                  <p className="mt-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
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
                  <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                    <p className="text-sm font-semibold">What partners say</p>
                    <div className="mt-5 space-y-6">
                      <Quote
                        quote="“The rollout playbook and dashboards made it easy to align implementers and leadership on the same metrics.”"
                        by="Program Lead"
                      />
                      <Quote
                        quote="“We finally have a reliable, auditable view of farm activity that our compliance team trusts.”"
                        by="Sourcing Manager"
                      />
                      <Quote
                        quote="“Farmers adopted it quickly because it respects their time and works offline.”"
                        by="Field Supervisor"
                      />
                    </div>
                    <p className="mt-6 text-xs text-zinc-500 dark:text-zinc-400">
                      Testimonials are illustrative and can be replaced with
                      real quotes and names.
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section id="contact" className="pb-16">
            <Container>
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 dark:border-emerald-900 dark:bg-emerald-950/30 sm:p-10">
                <div className="grid gap-8 md:grid-cols-12 md:items-center">
                  <div className="md:col-span-7">
                    <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                      Contact us
                    </h2>
                    <div className="mt-4 grid gap-6 sm:grid-cols-2">
                      <div className="rounded-2xl bg-white/70 p-5 ring-1 ring-emerald-200 dark:bg-zinc-950/40 dark:ring-emerald-900">
                        <p className="text-sm font-semibold text-emerald-950 dark:text-emerald-50">
                          Email
                        </p>
                        <p className="mt-1 text-sm text-emerald-900/80 dark:text-emerald-100/80">
                          Our friendly team is here to help.
                        </p>
                        <p className="mt-3 text-sm font-medium text-emerald-950 dark:text-emerald-50">
                          info@farmsagora.com
                        </p>
                      </div>

                      <div className="rounded-2xl bg-white/70 p-5 ring-1 ring-emerald-200 dark:bg-zinc-950/40 dark:ring-emerald-900">
                        <p className="text-sm font-semibold text-emerald-950 dark:text-emerald-50">
                          Office
                        </p>
                        <p className="mt-1 text-sm text-emerald-900/80 dark:text-emerald-100/80">
                          Come say hello at our office HQ.
                        </p>
                        <p className="mt-3 text-sm font-medium leading-6 text-emerald-950 dark:text-emerald-50">
                          7 Ibeju Lekki Street, Dolphin Estate, Ikoyi Lagos
                          101283, Nigeria.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <div className="grid gap-3">
                      <a
                        className="inline-flex items-center justify-center rounded-full bg-[#1B7B44] px-5 py-3 text-sm font-medium text-white hover:bg-[#16643A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B7B44] focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-50 dark:focus-visible:ring-offset-emerald-950/20"
                        href="mailto:info@farmsagora.com?subject=Inquiry"
                      >
                        Email info@farmsagora.com
                      </a>
                      <p className="text-center text-xs text-emerald-900/70 dark:text-emerald-100/70">
                        We typically respond within 1–2 business days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </main>

        <footer className="border-t border-zinc-200/70 bg-white py-10 dark:border-zinc-800/70 dark:bg-zinc-950">
          <Container>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <Logo />
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-700 dark:text-zinc-300">
                <a
                  className="hover:text-zinc-950 dark:hover:text-white"
                  href="#partners"
                >
                  Partners
                </a>
                <a
                  className="hover:text-zinc-950 dark:hover:text-white"
                  href="#solutions"
                >
                  Solutions
                </a>
                <a
                  className="hover:text-zinc-950 dark:hover:text-white"
                  href="#impact"
                >
                  Impact
                </a>
                <a
                  className="hover:text-zinc-950 dark:hover:text-white"
                  href="#contact"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-2 text-xs text-zinc-500 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
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
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
        {body}
      </p>
    </div>
  );
}

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-2 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
        {body}
      </p>
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
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <p className="text-xs text-zinc-600 dark:text-zinc-400">{label}</p>
      <p className="mt-2 text-2xl font-semibold tracking-tight">{value}</p>
      <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">{note}</p>
    </div>
  );
}

function UseCase({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl bg-white p-4 ring-1 ring-zinc-200 dark:bg-zinc-950/40 dark:ring-zinc-800">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
        {body}
      </p>
    </div>
  );
}

function Pill({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl bg-zinc-50 p-4 ring-1 ring-zinc-200 dark:bg-zinc-900/40 dark:ring-zinc-800">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-1 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
        {body}
      </p>
    </div>
  );
}

function Quote({ quote, by }: { quote: string; by: string }) {
  return (
    <figure className="rounded-2xl bg-zinc-50 p-5 ring-1 ring-zinc-200 dark:bg-zinc-900/40 dark:ring-zinc-800">
      <blockquote className="text-sm leading-6 text-zinc-800 dark:text-zinc-200">
        {quote}
      </blockquote>
      <figcaption className="mt-3 text-xs font-medium text-zinc-600 dark:text-zinc-400">
        {by}
      </figcaption>
    </figure>
  );
}
