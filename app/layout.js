// import { Description, Title } from "@mui/icons-material"
import Logo from "./_components/Logo"
import Navigation from "./_components/navigation"

import {Josefin_Sans} from "next/font/google"

const josefin = Josefin_Sans({
  subsets:["latin"],
  display:"swap"
})

console.log(josefin)
import '@/app/_styles/globals.css'
import Header from "./_components/Header"
import { ReservationProvider } from "./_components/ReservationContext"


export const metadata = {
  // title:"The wild Oasis"
  title:{
    template:" %s / The Naran Hotel",
    default:'The Naran Hotel ',

  },
  description:'Luxrious Cabin hotel,loacated in the heart of Naran Kagan surrounded by beautiful mountains and dark forest '
}

export default function RootLayout({children}){
  return(
    <html lang="en">
      <body className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col`}>
       <Header/>
       <div className="flex-1 px-8 py-12 grid">
       <main className=" max-w-7xl mx-auto w-full">
        <ReservationProvider>
        {children}

        </ReservationProvider>
        </main>
       </div> 
       {/* <footer>copyright by wild oasis</footer> */}
      </body>
    </html>
  )
}