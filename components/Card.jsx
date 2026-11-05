export default function Card({ project }) {
  // Destructure your project data fields for easy use
  const { title, category, client } = project;

  return (
    <div className="bg-white border border-[#100F2D]/10 rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-h-[180px]">
      <div>
        <span className="inline-block text-xs font-semibold tracking-wider text-[#100F2D]/60 uppercase mb-2">
          {category}
        </span>
        <h3 className="text-xl font-bold text-[#100F2D] mb-1">
          {title}
        </h3>
      </div>
      <div className="pt-4 border-t border-[#100F2D]/5 flex justify-between items-center text-sm">
        <span className="text-gray-500">Client:</span>
        <span className="font-medium text-[#100F2D]">{client}</span>
      </div>
    </div>
  );
}
