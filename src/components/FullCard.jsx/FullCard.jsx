import React from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

export default function FullCard({ data }) {
    const { title } = useParams()
    console.log(title)
    return (
        <>
            {data.filter((card) => card.title === title).map((card, index) => (
                <div className="flex flex-col justify-center items-center ">
                    <div className="w-[30rem] h-[30rem] bg-gray-900 text-white px-5 py-10">
                        <h1 className="font-bold my-2">{card.title}</h1>
                        <p className="my-2 mb-10">{card.description}</p>
                        <Link className="p-2 mt-10 bg-slate-500" to={'/'}>View More</Link>
                    </div>
                </div>
            ))}
        </>
    )
}