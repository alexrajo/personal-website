import Link from "next/link";

export type FooterProps = {
  className?: string;
};

const Footer: React.FC<FooterProps> = (props) => {
  const { className } = props;

  return (
    <div className={`bg-secondary-400 absolute bottom-0 left-0 right-0 drop-shadow-md py-2 ${className}`}>
      <div className="w-full flex justify-center items-center flex-col">
        <p>2023 - Alexander Rathke Johansen</p>
        <Link href={"/licenses"}>Licenses</Link>
      </div>
    </div>
  );
};

export default Footer;
