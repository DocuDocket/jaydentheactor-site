export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-white/70 backdrop-blur">
      <div className="container-pad py-10 text-sm text-slate-600">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Jayden E. • Portfolio site</p>
          <p className="text-slate-500">
            Booking Contact: Michael Eligon •{" "}
            <a className="underline" href="mailto:michael.eligon@icloud.com">michael.eligon@icloud.com</a>{" "}
            • <a className="underline" href="tel:18134554441">813-455-4441</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
