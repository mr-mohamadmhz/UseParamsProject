import React from "react"
import Card from "../Card/Card"
export default function Hero( {data} ) {
   
    return (
        <>
            <div className="flex flex-row gap-x-2 gap-y-2 items-center justify-around flex-wrap m-0 px-[20%] py-[5%]">
                <Card data={data}/>
            </div>
        </>
    )
}