"use server"

import { revalidatePath } from "next/cache"
import { auth, signIn,signOut } from "./auth"
import { supabase } from "./supabase"
import { getBookings } from "./data-service"
import { redirect } from "next/navigation";


export async function createBooking(bookingData,formData){
console.log(formData,'klkl;')
const session = await auth()
if(!session) throw new Error('you must login')

    const newBooking ={
        ...bookingData,
        guestId:session.user.guestId,
        numGuests:Number(formData.get('numGuests')),
        observations:formData.get('observations').slice(0,1000),
        extrasPrice:0,
        totalPrice:bookingData.cabinPrice,
        isPaid:false,
        hasBreakfast:false,
        status:"unconfirmed"
    }
 console.log(newBooking)

 const {  error } = await supabase
 .from('bookingg')
 .insert([newBooking])
 
 
 

if (error) {
 console.error(error);
 throw new Error('Booking could not be created');
}

revalidatePath(`/cabin/${bookingData.cabinId}`);

redirect("/cabin/thankyou");
}

////delete booking
export async function deletaReservation(bookingId) {
    console.log(bookingId)
    const session = await auth()
if(!session) throw new Error('you must login')

    const guestBookings = await getBookings(session.user.guestId);
    const gusetBookingIds = guestBookings.map((booking)=>booking.id)

    if(!gusetBookingIds.includes(bookingId)) throw new Error('you cannot delete this booking')

    const { data, error } = await supabase.from('bookingg').delete().eq('id', bookingId);
    if (error) {
      console.error(error);
      throw new Error('Booking could not be deleted');
    }
    // return data;
  
  revalidatePath('/account/reservations')

}


export async  function updateProfile(formData){
    console.log(formData)
const session = await auth()
if(!session) throw new Error('you must login')

const nationalID = formData.get('nationalID') 

const [nationality,countryFlag] = formData.get('nationality').split('%')

const regex = /^[a-zA-Z0-9]{6,15}$/
if (!regex.test(nationalID)) throw new Error('please provide valid nationalId')



   
const updateData = {nationality,countryFlag,nationalID}
// console.log(updateData)

const { data, error } = await supabase
.from('guests')
.update(updateData)
.eq('id', session.user.guestId)
.select()
.single();

if (error) {
console.error(error);
throw new Error('Guest could not be updated');
 }
revalidatePath('/account/profile')

}


export async function signInAction(){
    await signIn('google',{redirectTo:['/account']})
}

export async function signOutAction(){
    await signOut({redirectTo:['/']})
}

