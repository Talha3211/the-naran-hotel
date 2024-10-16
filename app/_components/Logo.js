import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={logo}
        quality={100}
        height="50"
        width="50"
        alt="The Naran Hotel"
        className="w-10 md:w-12"
      />
      <span className="text-lg md:text-xl font-semibold text-primary-100">
        The Naran Hotel
      </span>
    </Link>
  );
}

export default Logo;
