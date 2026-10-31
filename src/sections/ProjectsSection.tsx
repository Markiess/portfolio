import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, type CSSProperties } from "react";
import { LiveProjectButton } from "../components/LiveProjectButton";
import { projects, type Project } from "../data/content";

const imageRadius =
  "rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]";

type ProjectCardProps = {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
};

function ProjectCard({ project, index, total, progress }: ProjectCardProps) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const range: [number, number] = [index / total, 1];
  const scale = useTransform(progress, range, [1, targetScale]);
  const [leftTop, leftBottom, right] = project.images;

  return (
    <div
      className="h-[85vh]"
      style={{ "--stack-index": index } as CSSProperties}
    >
      <motion.div
        style={{ scale }}
        className="project-sticky sticky flex h-[85vh] origin-top flex-col overflow-hidden rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-4 sm:gap-6">
            <span
              className="shrink-0 font-black leading-none text-[#D7E2EA]"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {project.number}
            </span>
            <div className="min-w-0">
              <p className="font-light uppercase tracking-widest text-[#D7E2EA] opacity-60 text-xs sm:text-sm">
                {project.category}
              </p>
              <h3
                className="font-medium uppercase leading-tight text-[#D7E2EA]"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>
        <div className="mt-4 grid min-h-0 flex-1 grid-cols-[40%_60%] gap-3 md:mt-6">
          <div className="flex min-h-0 flex-col gap-3">
            <img
              src={leftTop}
              alt={`${project.name} preview 1`}
              className={`w-full ${imageRadius}`}
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            <img
              src={leftBottom}
              alt={`${project.name} preview 2`}
              className={`w-full ${imageRadius}`}
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            />
          </div>
          <img
            src={right}
            alt={`${project.name} preview 3`}
            className={`h-full w-full ${imageRadius}`}
          />
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const stackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-16 pt-16 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-20 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-24"
    >
      <h2
        className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Project
      </h2>
      <div ref={stackRef}>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            total={projects.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
