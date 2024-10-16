"use client";
import Image from "next/image";
import TextExpander from "@/app/_components/TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";

function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[3fr_4fr] gap-10 sm:gap-20 border border-primary-800 py-5 px-5 sm:py-10 sm:px-10 mb-12 sm:mb-24">
      {/* Image container */}
      <div className="relative h-60 sm:h-auto scale-100 sm:scale-[1.15] -translate-x-0 sm:-translate-x-3">
        <Image
          src={image}
          fill
          className="object-cover rounded-lg"
          alt={`Cabin ${name}`}
        />
      </div>

      {/* Cabin details */}
      <div>
        {/* Cabin name */}
        <h3 className="text-accent-100 font-black text-4xl sm:text-6xl lg:text-7xl mb-5 translate-x-0 sm:translate-x-[-254px] bg-primary-950 p-4 sm:p-6 pb-1 w-full sm:w-[150%]">
          Cabin {name}
        </h3>

        {/* Description */}
        <p className="text-base sm:text-lg text-primary-300 mb-6 sm:mb-10">
          <TextExpander>{description}</TextExpander>
        </p>

        {/* Cabin details list */}
        <ul className="flex flex-col gap-3 sm:gap-4 mb-5 sm:mb-7">
          <li className="flex gap-2 sm:gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-base sm:text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex gap-2 sm:gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-base sm:text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex gap-2 sm:gap-3 items-center">
            <EyeSlashIcon className="h-5 w-5 text-primary-600" />
            <span className="text-base sm:text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
