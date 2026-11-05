import { projects } from "../data/projects";
import Card from "./Card";

export default function CardGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {projects.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </div>
  );
}
