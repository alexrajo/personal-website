import PageWrapper from "@/components/pagewrapper";
import Link from "next/link";
import licenses, { License } from "./licenses";

export const metadata = {
  title: "Licenses - Alexander RJ",
  description: "The licenses for packages and assets used in this project.",
};

const LicenseDisplay = (props: License) => {
  const { name, content, link } = props;

  return (
    <div>
      <p className="font-bold">{name}</p>
      <p>{content}</p>
      {link && (
        <Link href={link.href} target="_blank">
          {link.name}
        </Link>
      )}
    </div>
  );
};

export default function LicensesPage() {
  return (
    <PageWrapper currentPage="licenses">
      <h1 className="xs:invisible xs:absolute sm:visible sm:relative">
        Licenses
      </h1>
      <div className="flex flex-col space-y-5">
        {licenses.map((license) => (
          <LicenseDisplay key={license.name} {...license} />
        ))}
        <div>
          <Link
            href="https://iconscout.com/icons/email"
            target="_blank"
            className="text-link underline"
          >
            Email Icon
          </Link>{" "}
          by{" "}
          <Link
            href="https://iconscout.com/contributors/google-inc"
            target="_blank"
            className="text-link underline"
          >
            Google Inc.
          </Link>{" "}
          on{" "}
          <Link
            href="https://iconscout.com"
            target="_blank"
            className="text-link underline"
          >
            IconScout
          </Link>
        </div>
        <div>
          <Link
            href={"https://lottiefiles.com/37799-starry-background"}
            className="text-link underline"
            target="_blank"
          >
            37799-starry-background animation
          </Link>{" "}
          by{" "}
          <Link
            href={"https://lottiefiles.com/ashleycmy"}
            className="text-link underline"
            target="_blank"
          >
            ashleycmy
          </Link>{" "}
          from{" "}
          <Link
            href={"https://lottiefiles.com"}
            className="text-link underline"
            target="_blank"
          >
            LottieFiles
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
