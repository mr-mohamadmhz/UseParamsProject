import React from "react"
import { Link } from "react-router-dom"
export default function Card({ data }) {
    
    return (
        
        <>
            {data.map((card, index) => {
                return (
                <div key={index} className="w-[15rem] h-[15rem] bg-gray-900 text-white shadow rounded py-7 px-4">
                    <h1 className="font-bold my-2">{card.title}</h1>
                    <p className="my-2">{card.description}</p>
                    <Link className="p-2 bg-slate-500" to={`/${card.title}`}>View More</Link>
                </div>)
            })}
        </>
    )
}