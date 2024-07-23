"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Children } from "react"

export default function Filter() {
    const searchParams = useSearchParams()
    const activeFilter = searchParams.get('capacity') ??'all'
    console.log(activeFilter)
    const router = useRouter()
    const pathName = usePathname()
    // console.log(router,pathName)

function handelFilter(filter){
    const params = new URLSearchParams(searchParams)
    params.set('capacity',filter);
    
    console.log(params)
    router.replace(`${pathName}?${params.toString()}`, {scroll:false})

}

  return (
    <div className="border border-primary-900 flex ">
      <button className={`px-5 py-2 hover:bg-primary-700 ${activeFilter==='all'?'bg-primary-700 text-primary-50':''}`} onClick={()=>handelFilter('all')}>All Cabins</button>
      <button className={`px-5 py-2 hover:bg-primary-700" ${activeFilter==='small'?'bg-primary-700 text-primary-50':''}`} onClick={()=>handelFilter('small')}>1&mdash;3 guest</button>
      <button className={`px-5 py-2 hover:bg-primary-700" ${activeFilter==='medium'?'bg-primary-700 text-primary-50':''}`} onClick={()=>handelFilter('medium')}>4&mdash;7 guest</button>
      <button className={`px-5 py-2 hover:bg-primary-700" ${activeFilter==='large'?'bg-primary-700 text-primary-50':''}`} onClick={()=>handelFilter('large')}>8&mdash;12 guest</button>
    </div>
  )
}
