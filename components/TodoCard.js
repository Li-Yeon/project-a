import React from 'react'

function TodoCard(props) {

    let readableDate = new Date(props.date);
    let modifiedName

    if(props.name != '') {
        modifiedName = '[' + props.name + ']';
    } else
    {
        modifiedName = '[N/A]'
    }

    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'GMT'
    }

    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit'
    }

    return (
        <div className="min-h-[100px] md:min-w-[15%] md:max-w-[270px] md:min-h-[150px] 
        shadow-sm md:hover:shadow-lg p-4 rounded-md md:hover:scale-105 cursor-pointer w-full bg-[#6B728E] text-white">

            <h1 className='font-Montserrat font-bold text-ellipsis md:max-w-[270px] whitespace-nowrap overflow-hidden'>{props.title}</h1>
            <h1 className='font-Montserrat text-sm'>{modifiedName}</h1>
            <h1 className='font-Montserrat mt-4 text-sm'>{props.description}</h1>
            <h1 className='font-Montserrat mt-4 text-xs font-bold'>{readableDate.toLocaleTimeString([], timeOptions)} - 
            {readableDate.toLocaleDateString('en-MY', options)}</h1>

        </div>
    )
}

export default TodoCard