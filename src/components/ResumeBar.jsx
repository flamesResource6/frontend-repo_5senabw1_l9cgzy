export default function ResumeBar() {
  const handleExport = () => {
    window.print();
  };

  return (
    <div className="sticky bottom-4 z-40 flex justify-center">
      <button
        onClick={handleExport}
        className="px-4 py-2 rounded-full bg-white text-slate-900 font-medium shadow-lg hover:shadow-xl transition"
      >
        Export as PDF
      </button>
    </div>
  );
}
