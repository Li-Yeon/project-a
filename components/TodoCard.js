import React from 'react'

function TodoCard(props) {
    return (
        <div className="min-h-[100px] md:min-w-[15%] md:max-w-[270px] md:min-h-[150px] 
        shadow-sm md:hover:shadow-lg p-4 rounded-md md:hover:scale-105 cursor-pointer w-full bg-[#6B728E] text-white">

            <h1 className='font-Montserrat font-bold text-ellipsis md:max-w-[270px] whitespace-nowrap overflow-hidden'>{props.title}</h1>
            <h1 className='font-Montserrat text-sm'>[{props.owner}]</h1>
            <h1 className='font-Montserrat mt-4 text-sm'>{props.desc}</h1>
            <h1 className='font-Montserrat mt-4 text-xs font-bold'>{props.date}</h1>

        </div>
    )
}

export default TodoCard