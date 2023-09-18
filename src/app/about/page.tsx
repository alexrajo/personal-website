import PageWrapper from "@/components/pagewrapper";
import Image from "next/image";

type TechDisplayProps = {
  name: string;
  imageUrl: string;
};

export const metadata = {
  title: "About me - Alexander RJ",
  description:
    "Information about me, along with the technologies and programming languages I use the most.",
};

const TechDisplay = (props: TechDisplayProps) => {
  const { name, imageUrl } = props;

  return (
    <div>
      <div className="bg-black bg-opacity-30 w-full aspect-square rounded-md p-5">
        <div className="relative w-full h-full">
          <Image src={imageUrl} fill alt={name} className="drop-shadow-md" />
        </div>
      </div>
      <p className="text-lg text-center">{name}</p>
    </div>
  );
};

export default function AboutPage() {
  return (
    <PageWrapper currentPage="about">
      <div className="lg:px-40 xl:px-64 2xl:px-96">
        <h1>About me</h1>
        <p>
          I am Alexander, a 21 year old student from Norway. I am currently
          studying for a M. Sc. in Computer Science at NTNU in Trondheim,
          Norway. My interests involve game development and web development.
        </p>
        <div className="xs:mt-10 sm:mt-20">
          <h2>Technologies & languages</h2>
          <br />
          <div className="grid xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-7 gap-5">
            <TechDisplay name="React" imageUrl="/images/react-icon.svg" />
            <TechDisplay name="NodeJS" imageUrl="/images/nodejs-icon.svg" />
            <TechDisplay
              name="TypeScript"
              imageUrl="/images/typescript-icon.svg"
            />
            <TechDisplay
              name="Microsoft Azure"
              imageUrl="/images/microsoft-azure-icon.svg"
            />
            <TechDisplay
              name="ExpressJS"
              imageUrl="/images/expressjs-icon.svg"
            />
            <TechDisplay name="Lua" imageUrl="/images/lua-logo.svg" />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
