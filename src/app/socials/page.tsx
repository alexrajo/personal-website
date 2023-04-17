import PageWrapper from "@/components/pagewrapper";
import Image from "next/image";

export const metadata = {
  title: "Socials - Alexander RJ",
  description: "This page shows my different socials and how you can reach me. LinkedIn, GitHub and email.",
};

export default function ContactPage() {
  return (
    <PageWrapper currentPage="socials" className="flex flex-1">
      <div className="flex justify-center items-center flex-1">
        <div>
          <h1>Socials</h1>
          <div className="flex flex-col gap-5 text-left">
            <div className="flex justify-between gap-5 items-center">
              <div className="relative w-10 aspect-square">
                <Image src="/images/linkedin-icon.svg" fill alt="linkedin" className="invert" />
              </div>
              <p className="flex-grow">linkedin.com/in/alexanderrajo</p>
            </div>
            <div className="flex justify-between gap-5 items-center">
              <div className="relative w-10 aspect-square">
                <Image src="/images/github-mark-white.svg" fill alt="github" />
              </div>
              <p className="flex-grow">github.com/alexrajo</p>
            </div>
            <div className="flex justify-between gap-5 items-center">
              <div className="relative w-10 aspect-square">
                <Image src="/images/email.svg" fill alt="email" className="invert" />
              </div>
              <p className="flex-grow">alexarj@ntnu.no</p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
