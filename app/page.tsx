import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import QuickFacts from "@/components/QuickFacts";
import ContactCard from "@/components/ContactCard";

export default function HomePage() {
  return (
    <div>
      <section className="container-pad pt-10 sm:pt-14">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-widest text-blue-700">
              ACTOR PORTFOLIO • PLAYING AGE 8–12
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              <span className="gradient-text">Jayden E.</span>
            </h1>
            <p className="mt-4 text-lg text-slate-700">
              Bright, expressive, and highly directable—trained through the Florida Academy of
              Performing Arts (FAOPA). Great fit for TV/film youth roles, commercials, and stage.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/media" className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800">
                View Photos
              </Link>
              <Link href="/resume" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50">
                View Resume
              </Link>
              <a href="#contact" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">
                Book Jayden
              </a>
            </div>

            <div className="mt-6 text-sm text-slate-600">
              Booking:{" "}
              <a className="underline" href="mailto:michael.eligon@icloud.com">michael.eligon@icloud.com</a>{" "}
              • <a className="underline" href="tel:18134554441">813-455-4441</a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="card overflow-hidden">
              <div className="relative aspect-[4/5] w-full">
                <Image src="/images/hero.jpg" alt="Jayden E. hero portrait" fill priority
                  sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
              </div>
              <div className="px-6 py-5">
                <p className="text-sm font-medium">Reel coming soon</p>
                <p className="mt-1 text-sm text-slate-600">
                  In the meantime, view photos + resume and reach out to book Jayden.
                </p>
              </div>
            </div>
            <div className="mt-4"><QuickFacts /></div>
          </div>
        </div>
      </section>

      <section className="container-pad mt-14 pb-6">
        <SectionTitle kicker="Why Jayden" title="Professional, kid-real performances"
          subtitle="Casting-friendly presentation: quick facts, clear media, and easy booking contact." />
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="card p-6">
            <h3 className="text-base font-semibold">Directable & consistent</h3>
            <p className="mt-2 text-sm text-slate-600">Comfortable taking notes, repeating action for multiple takes, and staying focused.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-base font-semibold">Expressive & natural</h3>
            <p className="mt-2 text-sm text-slate-600">Strong listening, authentic reactions, and clear emotional readability—great for TV/film.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-base font-semibold">Performance trained</h3>
            <p className="mt-2 text-sm text-slate-600">Extensive musical theatre training and live production experience through FAOPA since 2022.</p>
          </div>
        </div>
      </section>

      <section className="container-pad mt-10 pb-14">
        <ContactCard />
      </section>
    </div>
  );
}
