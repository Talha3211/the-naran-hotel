import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-10 text-lg md:text-xl">
      <ul className="flex flex-row gap-6 md:gap-16 items-center">
        <li>
          <Link
            href="/cabin"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        {session?.user ? (
          <li>
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex gap-4 items-center"
            >
              <div className="hidden sm:block">
                <img
                  className="h-8 rounded-full"
                  src={session.user.image}
                  alt={session.user.name}
                />
              </div>
              <span>Guest area</span>
            </Link>
          </li>
        ) : (
          <li>
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors px-[0.5]"
            >
              Guest area
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
