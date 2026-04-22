import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "FarmsAgora Limited Privacy Policy.",
};

type Section = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const sections: Section[] = [
  {
    title: "1. Introduction",
    paragraphs: [
      "At FarmsAgora Limited (hereinafter We, Us, Our), we care about your privacy. As the owner of your Personal Information, the purpose of this privacy policy is to notify you about how we treat the information that you may choose to share with us. We keep very high standards of data protection and we take strict measures in line with this privacy policy to ensure that your data remains confidential. We use the most state-of-the-art security technology and systems to protect YOUR data against fraud, unauthorised access or disclosure, alteration and loss.",
    ],
  },
  {
    title: "2. Privacy Policy Coverage Range (Scope)",
    paragraphs: [
      "FarmsAgora Limited collects the minimum amount of Personal Information possible to ensure that we can conduct business with you legally, and in a manner that protects all parties.",
      "This Privacy Policy incorporates all the requirements under the Nigerian Data Protection Act, 2023. In the event of any inconsistency with any law or regulation, please contact us through our website https://www.FarmsAgora.com or email us at info@FarmsAgora.com or through your local FarmsAgora Agent. This policy covers all services that FarmsAgora Limited delivers via any channel in all FarmsAgora Limited subsidiaries.",
    ],
  },
  {
    title: "3. Third-Party Disclosure",
    paragraphs: [
      "FarmsAgora Limited Privacy Policy does not apply where you share information with any third party arising from doing business with FarmsAgora. For example, your bank may contact you because you want a FarmsAgora loan. Should you provide them with information and sell or abuse your Personal Information, FarmsAgora Limited cannot be held accountable. FarmsAgora Limited cannot be held liable for any contract, whether implicit or explicit, that you may have with another party, including guarantees and warranties. Always make sure that you read and understand any third party’s privacy policy and their terms and conditions. Not all companies will provide the same high level of protection that FarmsAgora Limited does!",
    ],
  },
  {
    title: "4. Your Personal Information",
    paragraphs: [
      "Any information that can be used to identify you that we may have on record (including log files) is your Personal Information. Your Personal Information includes information that you supplied when completing forms and facsimiles, photographs, scans, and other reproductions of your information documents. Personal information includes your Name, Identity Information, Passwords, and Contact Details. Your Personal Information also includes quasi-identifiers that can be used to group you in any way like your age, race, sex, medical information, where you shop and where you invest.",
      "At FarmsAgora Limited, we will not collect any information that is not required to do business with you. We will never gather data that is illegal to collect, like medical and genetic information, nor data that has no bearing on business like sexual or political preferences. FarmsAgora will not store any data regarding minors. FarmsAgora also records information about the devices you use to access our systems to prevent fraud.",
      "It does not matter whether you provided the information electronically, verbally or physically. All your Personal Information is classified as confidential and treated with the same respect. All information that third parties like the government, your company or bank may provide about you or on your behalf is treated as strictly confidential for FarmsAgora Limited.",
      "In most countries, the data protection act will allow the client to withdraw consent to store and use information under some circumstances. FarmsAgora Limited endeavours to ensure that your Personal Information is at your fingertips securely via our electronic platforms and our sales agents when you may want to review the information.",
    ],
  },
  {
    title: "5. Why do we need to collect personal information?",
    paragraphs: [
      "We will not collect excessive personal data and your data will be used for specified, explicit, and legitimate purposes and in line with applicable laws. We will not ask our customers, or any third party, for any of your information unless it is to achieve the following:",
    ],
    bullets: [
      "We need your personal information to serve you in your current product needs and related services. We also need your Personal Information to fulfil contractual requirements to help you and communicate with you (either directly or via a third party) using any available medium, e.g. email, electronic messaging, or voice calls.",
      "We need your personal information to provide you with information regarding new offers and services, competitions, great deals or promotions. FarmsAgora Limited will always allow you the ability to opt out of marketing communications whenever you wish.",
      "We will need your personal information to improve our products, services, and statistics.",
      "To manage our relationship with you, we need to use some of your personal information.",
      "We must comply with Laws and Regulations.",
      "We may need to provide your Information to Credit Agencies.",
      "By law, we must keep your records up to date and will require your latest information to do so.",
      "FarmsAgora Limited will need your personal information to prevent or identify potential fraud.",
    ],
  },
  {
    title: "6. Methods we use to collect Personal Information",
    paragraphs: [
      "FarmsAgora Limited collates your personal information into a database to simplify the management and security of your Personal Data. You usually provide your Personal Information in the course of conducting business with FarmsAgora to enable us to provide service via one of the following and could be gathered through:",
    ],
    bullets: [
      "Sales Agent(s) using forms, brochures, or other material at a physical service point.",
      "Call Centre agents who need to verify that they are talking to real customers or need to compare information on record with what you can supply verbally.",
      "FarmsAgora Limited recorded calls in our Call Centers, and these recordings often contain some personal information.",
      "Online forms using any electronic channel including Websites, Applications, USSD and Whatsapp.",
      "Using FarmsAgora free guest wifi, we may also record some personal information.",
      "FarmsAgora monitored emails to prevent phishing and other types of attacks, and these systems record some personal information.",
      "Sent requests or complaints to FarmsAgora Limited.",
      "Updates of the information FarmsAgora has on you by contacting a Sales Agent or using any of our digital channels to do the update.",
      "Third parties like banks and your place of work may need to provide us with some of your information to ensure accuracy, else it will be impossible to do transactions.",
    ],
  },
  {
    title: "7. Change of Personal Information",
    paragraphs: [
      "You can request FarmsAgora to view the data we have for you at any time, and FarmsAgora will provide it in readable format within a reasonable time.",
      "It is law in most territories to keep Personal Information up to date. Should any of your Personal Information change, e.g. your address or telephone number, please contact FarmsAgora Limited immediately to update our files.",
      "You also have the right to be deleted from our records when your record is not required under law in your territory or jurisdiction. FarmsAgora will not store the data longer than required by law.",
    ],
  },
  {
    title: "8. Log Files",
    paragraphs: [
      "All Applications and Web services log information for statistical purposes and ensure that transactions are correct and non-fraudulent. The principle FarmsAgora Limited follows is to exclude Personal Information or to delete and mask wherever personal information is logged unless it can assist in fraud prevention. Log files are typically used by the FarmsAgora security and fraud teams and are meticulously protected to ensure security.",
    ],
  },
  {
    title: "9. Information Access on the Devices",
    paragraphs: [
      "FarmsAgora may access information on your device solely for the transaction. The information will not be stored as part of FarmsAgora data and/or used for marketing purposes. We will always request your consent before accessing data from other applications and inform you of how we intend to use it.",
      "FarmsAgora will request to access the contacts on your device to enable you to transfer money to a FarmsAgora accounts to ensure that the correct person will receive the transfer.",
    ],
  },
  {
    title: "10. Cookies",
    paragraphs: [
      "Cookies are information that any FarmsAgora Website or Application sends on your local hard drive for storage. In this way, the next time you use any of our services, we will know who you are, that you have visited the website and used our Internet Services before.",
      "FarmsAgora Limited ensures that it complies with laws and regulations in all the territories it trades when it comes to cookies. We will always place a Cookie Notice on all sites where we host cookies to comply with territorial laws and regulations.",
      "Rooting (Jailbreaking) are applications that break your mobile device security. No FarmsAgora Application will run on Rooted (Jailbreaked) devices as it potentially exposes our customers to third parties that may want to steal your personal information.",
      "Purpose for Cookies: FarmsAgora Limited uses cookies to ensure that hackers don’t gain access to your information (session management and device identification) and for analytical, routing and classification purposes.",
      "Disablement of Cookies: Clearing and disabling cookies limits the functionality of FarmsAgora Websites and Applications. They could cause erratic behaviour like re-forcing logon, amongst other issues.",
      "Types of Cookies: FarmsAgora Limited uses both session cookies and persistent cookies. Session cookies help the application understand what you are currently busy with. These cookies are short-lived and get deleted when you log out. Persistent cookies are stored over more extended periods and will expire. These cookies will be set up again each time you visit our site. You can delete cookies at any time.",
    ],
  },
  {
    title: "11. Changes to this Privacy Policy",
    paragraphs: [
      "FarmsAgora Limited may UPDATE this Privacy Policy at any time without notice. Policy changes most often happen due to new laws and regulations in the territories WHERE we trade. FarmsAgora Limited will publish all modifications and amendments made to this policy. Our Sales and Call Centre Agents will explain the details to our customers upon request. FarmsAgora Limited ensures that users acknowledge any policy changes and accept policy amendments in their online applications or via the Call Centre before doing further business with FarmsAgora.",
      "For any questions about this Privacy Policy, or any related issues, you may contact us via info@FarmsAgora.com and we will respond as soon as possible.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-full bg-white text-zinc-950">
      <header className="sticky top-0 z-40 border-b border-zinc-200/60 bg-white/70 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B7B44]"
          >
            <Logo />
            <span className="sr-only">Home</span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-zinc-700 md:flex">
            <Link className="hover:text-zinc-950" href="/#partners">
              Partners
            </Link>
            <Link className="hover:text-zinc-950" href="/#solutions">
              Solutions
            </Link>
            <Link className="hover:text-zinc-950" href="/#impact">
              Impact
            </Link>
            <Link className="hover:text-zinc-950" href="/#about">
              About
            </Link>
            <Link className="hover:text-zinc-950" href="/#contact">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <ButtonLink variant="secondary" href="/#partners" className="hidden sm:inline-flex">
              Explore partners
            </ButtonLink>
            <ButtonLink href="/#contact">Talk to us</ButtonLink>
          </div>
        </Container>
      </header>

      <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-semibold tracking-tight">
          FarmsAgora Limited Privacy Policy
        </h1>

        <p className="mt-4 text-sm leading-6 text-zinc-700">
          This Privacy Policy explains what personal data is collected when you
          use the FarmsAgora.com or any FarmsAgora mobile application
          (FarmsAgora) and the services provided through it (together the
          “Service”), how such personal data will be used, shared.
        </p>

        <p className="mt-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-sm leading-6 text-zinc-800">
          <strong>
            BY USING THE SERVICE, YOU PROMISE US THAT (I) YOU HAVE READ,
            UNDERSTAND AND AGREE TO THIS PRIVACY POLICY, AND (II) YOU ARE OVER 16
            YEARS OF AGE (OR HAVE HAD YOUR PARENT OR GUARDIAN READ AND AGREE TO
            THIS PRIVACY POLICY FOR YOU).
          </strong>{" "}
          If you do not agree, or are unable to make this promise, you must not
          use the Service. In such case, you must contact the support team via
          email to request deletion of your account and data.
        </p>

        <p className="mt-6 text-sm text-zinc-700">
          <strong>“Process”</strong>, in respect of personal data, includes to
          collect, store, and disclose to others.
        </p>

        <div className="mt-8 space-y-3">
          {sections.map((s) => (
            <details
              key={s.title}
              className="group rounded-2xl border border-zinc-200 bg-white p-5"
            >
              <summary className="cursor-pointer list-none text-base font-semibold">
                <span className="inline-flex items-center gap-2">
                  <span className="text-zinc-950">{s.title}</span>
                  <span className="text-zinc-400 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </span>
              </summary>

              <div className="mt-4 space-y-4 text-sm leading-6 text-zinc-700">
                {s.paragraphs?.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
                {s.bullets && (
                  <ul className="list-disc space-y-2 pl-5">
                    {s.bullets.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </main>
  );
}

