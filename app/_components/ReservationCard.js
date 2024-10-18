import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "@/app/_components/DeleteReservation";
import Image from "next/image";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabinss: { name, image },
  } = booking;

  return (
    <div className="flex flex-col md:flex-row border border-primary-800 rounded-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative h-40 md:h-auto md:w-40 flex-shrink-0">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="object-cover border-b md:border-b-0 md:border-r border-primary-800"
        />
      </div>

      {/* Information Section */}
      <div className="flex-grow px-4 md:px-6 py-3 flex flex-col">
        {/* Title and Status */}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg md:text-xl font-semibold">
            {numNights} nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="bg-yellow-800 text-yellow-200 px-2 py-1 md:h-7 uppercase text-xs font-bold flex items-center rounded-sm">
              Past
            </span>
          ) : (
            <span className="bg-green-800 text-green-200 px-2 py-1 md:h-7 uppercase text-xs font-bold flex items-center rounded-sm">
              Upcoming
            </span>
          )}
        </div>

        {/* Date Range */}
        <p className="text-sm md:text-lg text-primary-300 mb-2">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        {/* Price, Guests, and Booking Info */}
        <div className="flex flex-wrap gap-4 mt-auto items-baseline">
          <p className="text-lg md:text-xl font-semibold text-accent-400">
            ${totalPrice}
          </p>
          <p className="hidden md:block text-primary-300">&bull;</p>
          <p className="text-sm md:text-lg text-primary-300">
            {numGuests} guest{numGuests > 1 && "s"}
          </p>
          <p className="ml-auto text-xs md:text-sm text-primary-400">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      {/* Action Section */}
      <div className="flex flex-row md:flex-col border-t md:border-l border-primary-800">
        {!isPast(new Date(startDate)) ? (
          <>
            {/* Edit Link */}
            {/* <Link
              href={`/account/reservations/edit/${id}`}
              className="group flex items-center justify-center gap-2 py-2 px-3 uppercase text-xs font-bold text-primary-300 hover:bg-accent-600 hover:text-primary-900 transition-colors"
            >
              <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
              {/* <span>Edit</span> */}
            </Link> */}

            {/* Delete Button */}
            <DeleteReservation bookingId={id} onDelete={onDelete} />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default ReservationCard;
