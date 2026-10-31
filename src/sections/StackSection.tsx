import { Link } from "react-router-dom";
import { LiveProjectButton } from "../components/LiveProjectButton";
import { WorkVisual } from "../components/WorkVisual";
import type { WorkItem } from "../data/content";

type StackSectionProps = {
  id: string;
  title: string;
  items: readonly WorkItem[];
  overlap?: boolean;
};

const surfaces = ["bg-tile text-white", "bg-white text-ink", "bg-tile-2 text-white"];

function ProjectTile({ item, index, basePath }: { item: WorkItem; index: number; basePath: string }) {
  const onDark = index % 2 === 0;
  const surface = surfaces[index % surfaces.length];

  return (
    <article className={`tile ${surface}`}>
      <div className="mx-auto max-w-[980px]">
        <p className={`text-[14px] tracking-[-0.224px] ${onDark ? "text-[#cccccc]" : "text-[#7a7a7a]"}`}>
          {item.number} · {item.category}
        </p>
        <h3
          className="mt-3 font-display text-[28px] font-semibold leading-[1.14] min-[641px]:text-[34px] min-[641px]:leading-[1.47]"
          style={{ letterSpacing: "-0.374px" }}
        >
          <Link
            to={`${basePath}/${item.slug}`}
            className={`no-underline ${onDark ? "text-white" : "text-ink"}`}
          >
            {item.name}
          </Link>
        </h3>
        <p
          className={`mt-4 max-w-[720px] text-[17px] font-normal leading-[1.47] tracking-[-0.374px] ${
            onDark ? "text-[#cccccc]" : "text-ink"
          }`}
        >
          {item.summary}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {item.paperHref ? <LiveProjectButton href={item.paperHref} label="Read Paper" /> : null}
          {item.href && item.linkLabel ? (
            <LiveProjectButton href={item.href} label={item.linkLabel} variant="secondary" onDark={onDark} />
          ) : null}
          <Link to={`${basePath}/${item.slug}`} className={onDark ? "text-link-on-dark" : "text-link"}>
            Learn more
          </Link>
        </div>
        <WorkVisual item={item} />
      </div>
    </article>
  );
}

export function StackSection({ id, title, items }: StackSectionProps) {
  return (
    <section id={id}>
      <div className="tile bg-parchment text-center">
        <h2 className="font-display text-[40px] font-semibold leading-[1.1] text-ink">{title}</h2>
      </div>
      {items.map((item, index) => (
        <ProjectTile key={item.slug} item={item} index={index} basePath={`/${id}`} />
      ))}
    </section>
  );
}
