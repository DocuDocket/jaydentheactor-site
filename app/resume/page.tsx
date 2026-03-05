import SectionTitle from "@/components/SectionTitle";
import ContactCard from "@/components/ContactCard";

export default function ResumePage() {
  return (
    <div className="container-pad py-10">
      <SectionTitle kicker="Resume" title="Jayden E. Resume" subtitle="Download or view the most up-to-date resume below." />

      <div className="card overflow-hidden">
        <div className="flex flex-col gap-3 border-b border-slate-200 bg-white px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-700">PDF: <span className="font-medium">Jayden_E_Resume.pdf</span></p>
          <a className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800"
             href="/resume/Jayden_E_Resume.pdf" download>
            Download PDF
          </a>
        </div>
        <div className="aspect-[8.5/11] w-full bg-slate-50">
          <iframe title="Jayden E. Resume" src="/resume/Jayden_E_Resume.pdf" className="h-full w-full" />
        </div>
      </div>

      <div className="mt-12"><ContactCard /></div>
    </div>
  );
}
