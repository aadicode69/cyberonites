export default function TitleCard({ label = "Team members" }) {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 mt-8 mb-6">
      <h2 className="text-sm font-semibold tracking-wider uppercase text-slate-400 font-sans">
        {label}
      </h2>
    </div>
  );
}