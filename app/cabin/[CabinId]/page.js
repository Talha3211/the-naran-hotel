
import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins, getSettings } from "@/app/_lib/data-service";
import { Suspense } from "react";

// export const revalidate = 5;

// export async function generateMetadata({params}){
//     const {name} = await  getCabin(params.cabinId)
//     return {title: `Cabin ${name}`}
// }

// export async function generateStaticParams(){

//     const cabins = await getCabins()
   

// // console.log(cabins)
//     const ids = cabins.map((cabin)=>({cabinId: String(cabin.id)}))
//     // console.log(ids)
//   return ids
// }


export default async function Page({params:{cabinId}}) {
  console.log(cabinId)

    const cabin = await getCabin(cabinId)
   

    console.log(cabin)
    // console.log(params)
//   const { id, name, maxCapacity, regularPrice, discount, image, description } =
//     cabin;
// console.log(description)

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />

      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  )
}