export default function Header() {
  return (
    <header className="bg-studio-dark text-white px-8 py-4 flex justify-between items-center">
      {/* Site Title in Genos Font */}
      <h1 className="font-genos text-3xl font-bold tracking-wider">
        Laurus Designs
      </h1>
      
      {/* Placeholder Buttons */}
      <div className="flex gap-4">
        <button className="px-4 py-2 text-sm font-medium hover:text-gray-300 transition-colors">
          Login
        </button>
        <button className="bg-white text-studio-dark px-4 py-2 rounded text-sm font-semibold hover:bg-gray-200 transition-colors">
          Register
        </button>
      </div>
    </header>
  );
}
