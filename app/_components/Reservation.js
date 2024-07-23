import { auth } from "../_lib/auth"
import { getBookedDatesByCabinId, getCabin, getSettings } from "../_lib/data-service"
import DateSelector from "./DateSelector"
import LoginMessage from "./LoginMessage"
import ReservationForm from "./ReservationForm"


export default async function Reservation({cabin}) {
    const session = await auth()
    const settings = await getSettings()
    const bookingDate = await getBookedDatesByCabinId(cabin.id)
    console.log(bookingDate,'khkijoijo')
  return (
    <div>
            <div className="grid grid-cols-2 border boeder-primary-800 min-h-[400px]">
        <DateSelector settings={settings} bookedDates={bookingDate} cabin={cabin} />
       {
        session?.user?
        <ReservationForm cabin={cabin} user={session.user}/> :
        <LoginMessage />
    }
      </div>
    </div>
  )
}
