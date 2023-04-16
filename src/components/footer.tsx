import Link from "next/link";

export type FooterProps = {
  className?: string;
};

const Footer: React.FC<FooterProps> = (props) => {
  const { className } = props;

  return (
    <div className={`${className}`}>
      <img
        src={"/images/BottomWave.svg"}
        alt="Footer wave"
        className="-z-10 w-full h-auto"
      />
      <div className="w-full flex justify-center items-center flex-col py-2 bg-secondary-400 drop-shadow-md xs:pb-8 sm:pb-3">
        <p>2023 - Alexander Rathke Johansen</p>
        <Link
          href={"/licenses"}
          className="xs:invisible xs:absolute sm:visible sm:relative"
        >
          Licenses
        </Link>
      </div>
    </div>
  );
};

export default Footer;
