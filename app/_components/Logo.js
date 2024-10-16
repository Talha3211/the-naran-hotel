import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  // console.log('logo')
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image src="/logo.png" height="60" width="60" alt="The Naran Hotel" /> */}
      <Image
        src={logo}
        quality={100}
        height="60"
        width="60"
        alt="The Naran Hotel"
      />
      <span className="text-xl font-semibold text-primary-100">
        The Naran Hotel
      </span>
    </Link>
  );
}

export default Logo;
