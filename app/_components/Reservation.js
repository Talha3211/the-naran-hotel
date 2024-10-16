import { auth } from "../_lib/auth";
import {
  getBookedDatesByCabinId,
  getCabin,
  getSettings,
} from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

export default async function Reservation({ cabin }) {
  const session = await auth();
  const settings = await getSettings();
  const bookingDate = await getBookedDatesByCabinId(cabin.id);
  console.log(bookingDate, "khkijoijo");

  return (
    <div className="px-4 sm:px-8 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border border-primary-800 min-h-[400px] p-4">
        {/* Date Selector */}
        <DateSelector
          settings={settings}
          bookedDates={bookingDate}
          cabin={cabin}
        />

        {/* Conditional Reservation Form or Login Message */}
        {session?.user ? (
          <ReservationForm cabin={cabin} user={session.user} />
        ) : (
          <LoginMessage />
        )}
      </div>
    </div>
  );
}
