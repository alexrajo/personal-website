import Link from "next/link";

export type Project = {
  title: string;
  year: string;
  link?: LinkType;
  description?: string;
};

export type ProjectDisplayProps = {
  className?: string;
  children?: React.ReactNode;
} & Project;

export const ProjectDisplay = (props: ProjectDisplayProps) => {
  const { className, title, year, link, description, children } = props;

  return (
    <div
      className={`drop-shadow-md bg-primary-800 p-5 rounded-md bg-opacity-30 ${className}`}
    >
      <p className="text-lg">{title}</p>
      <p className="text-secondary-text">{year}</p>
      {link !== undefined && (
        <Link href={link.href} className="text-link underline" target="_blank">
          {link.name}
        </Link>
      )}
      <div className="mt-5">
        {description !== undefined && <p>{description}</p>}
        {children}
      </div>
    </div>
  );
};
