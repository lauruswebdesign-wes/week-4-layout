export default function Card({ project }) {
  return (
    <div 
      className="bg-white rounded-lg p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex flex-col justify-between border border-gray-100 transition-transform duration-200 hover:-translate-y-1"
      style={{ width: '356px', height: '270px' }}
    >
      {/* Top Section: Category and Title */}
      <div>
        <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">
          {project.category}
        </span>
        <h3 className="font-oswald text-2xl font-semibold text-gray-900 mt-1">
          {project.title}
        </h3>
      </div>

      {/* Bottom Section: Client Details */}
      <div className="border-t border-gray-100 pt-4 flex justify-between items-center text-sm text-gray-500">
        <span>Client:</span>
        <span className="font-medium text-gray-800">{project.client}</span>
      </div>
    </div>
  );
}
