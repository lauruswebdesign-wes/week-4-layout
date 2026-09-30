import { projects } from '../data/projects';
import Card from '../components/Card'; // 👈 Importing your new Card component

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="bg-studio-hero text-white h-[330px] flex flex-col justify-center items-center text-center px-4">
        <h2 className="font-oswald text-4xl md:text-5xl font-bold mb-3 tracking-wide uppercase">
          We Craft Digital Experiences
        </h2>
        <p className="max-w-xl text-lg opacity-90 mb-6 font-roboto">
          A fictional web design studio blending beautiful UI elements with bulletproof layout structures.
        </p>
        <button className="bg-white text-studio-hero font-bold px-6 py-3 rounded shadow-md hover:bg-opacity-90 transition-all cursor-pointer">
          Explore Our Work
        </button>
      </section>

      {/* 2. Main Project Grid Section */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project) => (
            /* 👈 We pass the single project data object into the Card component as a prop */
            <Card key={project.id} project={project} />
          ))}
        </div>
      </main>
    </>
  );
}
