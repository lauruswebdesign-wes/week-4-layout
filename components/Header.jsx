export default function Header() {
  return (
    <header className="bg-[#100F2D] text-white py-4 px-6 md:px-12 flex justify-between items-center border-b border-white/10">
      <div className="text-xl font-bold tracking-wider">
        LAURUS DESIGNS
      </div>
      <nav>
        <ul className="flex gap-6 md:gap-8 text-sm font-medium">
          <li><a href="#" className="hover:text-white/80 transition-colors">Home</a></li>
          <li><a href="#" className="hover:text-white/80 transition-colors">Portfolio</a></li>
          <li><a href="#" className="hover:text-white/80 transition-colors">Services</a></li>
          <li><a href="#" className="hover:text-white/80 transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}