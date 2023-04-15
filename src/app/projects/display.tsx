import Link from "next/link";

export type ProjectDisplayProps = {
  className?: string;
};

export const ProjectDisplay = (props: ProjectDisplayProps) => {
  const { className } = props;

  return (
    <div
      className={`drop-shadow-md bg-primary-800 p-5 rounded-md bg-opacity-30 hover:bg-opacity-50 transition-colors ${className}`}
    >
      <p className="text-lg">Project title</p>
      <p className="text-secondary-text">2020</p>
      <Link href={"https://github.com/alexrajo"} className="text-link underline">
        GitHub
      </Link>
      <p>
        Proin pulvinar tincidunt vulputate. Cras sed dictum ante, eget bibendum mi. Vestibulum vitae elementum odio.
        Cras pulvinar commodo urna sit amet imperdiet. Vivamus suscipit arcu et iaculis eleifend.
      </p>
    </div>
  );
};
