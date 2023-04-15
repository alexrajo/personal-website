import Link from "next/link";

export type FooterProps = {
  className?: string;
};

const Footer: React.FC<FooterProps> = (props) => {
  const { className } = props;

  return (
    <div
      className={`bg-secondary-400 relative drop-shadow-md -z-50 ${className}`}
    >
      <img
        src={"/images/BottomWave.svg"}
        alt="Bottom wave"
        className="-z-10 w-full h-auto absolute bottom-0"
      />
      <div className="w-full flex justify-center items-center flex-col py-2">
        <p>2023 - Alexander Rathke Johansen</p>
        <Link href={"/licenses"}>Licenses</Link>
      </div>
    </div>
  );
};

export default Footer;
