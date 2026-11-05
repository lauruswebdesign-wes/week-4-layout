import CardGrid from "../components/CardGrid";

export default function Page() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#100F2D] text-white py-20 px-6 md:px-12 text-center md:text-left flex flex-col justify-center min-h-[60vh]">
        <div className="max-w-4xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 leading-tight">
            Be Found. Be First. <br className="hidden md:inline" />Be the Solution.
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed">
            We build high-performance, precision-crafted web experiences that ensure your brand makes an unforgettable first impression.
          </p>
          <button className="bg-white text-[#100F2D] font-semibold px-8 py-3 rounded-md hover:bg-white/90 transition-all cursor-pointer inline-block shadow-lg">
            Book Free Consultation
          </button>
        </div>
      </section>

      {/* Projects Grid Container (Where the cards will go next) */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-[#100F2D]">Our Featured Work</h2>
        <CardGrid />
      </section>
    </div>
  );
}