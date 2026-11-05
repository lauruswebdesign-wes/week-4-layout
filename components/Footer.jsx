export default function Footer() {
  return (
    <footer className="bg-[#100F2D] text-white/60 py-8 px-6 md:px-12 border-t border-white/10 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Laurus Designs. All rights reserved.</p>
    </footer>
  );
}