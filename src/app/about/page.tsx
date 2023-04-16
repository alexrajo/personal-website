import PageWrapper from "@/components/pagewrapper";
import Image from "next/image";

type TechDisplayProps = {
  name: string;
  imageUrl: string;
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
      <div className="lg:px-40 xl:px-64">
        <p className="text-heading">About me</p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus sapien a pharetra iaculis. Vivamus ut
          lacus eu magna dictum efficitur a et mi. Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Aenean at nibh non nisi porttitor imperdiet. Nullam nulla mi, cursus ut nulla sit
          amet, rutrum sagittis nisl.
        </p>
        <div className="xs:mt-10 sm:mt-20">
          <p className="text-subheading">Technologies</p>
          <br />
          <div className="grid xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5">
            <TechDisplay name="React" imageUrl="/images/react-icon.svg" />
            <TechDisplay name="React" imageUrl="/images/react-icon.svg" />
            <TechDisplay name="React" imageUrl="/images/react-icon.svg" />
            <TechDisplay name="React" imageUrl="/images/react-icon.svg" />
            <TechDisplay name="React" imageUrl="/images/react-icon.svg" />
            <TechDisplay name="React" imageUrl="/images/react-icon.svg" />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
