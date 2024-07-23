"use client"

import { useOptimistic } from "react"
import ReservationCard from "./ReservationCard"
import { deletaReservation } from '../_lib/action';


export default function ReservationList({bookings}) {

const [optimisticBooking,optimisticDelete] = useOptimistic(bookings,(curBookings,bookingId)=>{ 
    return curBookings.filter((booking)=> booking.id !==bookingId)
})


async function handelDelete(bookingId){
    // console.log(bookingId,'kjnjlk')
    optimisticDelete(bookingId)
    await deletaReservation(bookingId)
}


  return (
    <div>
        <ul className="space-y-6">
          {optimisticBooking.map((booking) => (
            <ReservationCard booking={booking} key={booking.id} onDelete={handelDelete}/>
          ))}
        </ul>
    </div>
  )
}
