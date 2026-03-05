export default function ContactCard() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="card p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-widest text-blue-700">BOOKING CONTACT</p>
            <h3 className="mt-2 text-xl font-semibold">Michael Eligon</h3>
            <p className="mt-1 text-slate-600">Parent/Guardian • Based in Florida • Open to out-of-state work</p>
          </div>
          <div className="flex flex-col gap-2 sm:items-end">
            <a className="rounded-xl bg-slate-900 px-5 py-3 text-center text-sm font-medium text-white hover:bg-slate-800"
              href="mailto:michael.eligon@icloud.com?subject=Booking%20Inquiry%20for%20Jayden%20E.">
              Email Booking
            </a>
            <a className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-center text-sm font-medium text-slate-800 hover:bg-slate-50"
              href="tel:18134554441">
              Call / Text: 813-455-4441
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
