import React from 'react'
import axios from 'axios';
import { useNotesContext } from '../hooks/useNotesContext';

function TodoCard(props) {

    let readableDate = new Date(props.date);
    let modifiedName

    if (props.name != '') {
        modifiedName = '[' + props.name + ']';
    } else {
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

    const {dispatch} = useNotesContext()

    async function deleteNote() {
        const response = await axios.delete(process.env.NEXT_PUBLIC_API_URL + 'note/deletenote/' + props.id);

        if (response.data.status == 200) {
            dispatch({type: 'DELETE_NOTE', payload: response.data.data})
        }
        else {
            console.log(response.data.message)
        }
    }

    return (
        <div className="min-h-[100px] md:min-w-[15%] md:max-w-[270px] md:min-h-[150px] 
        shadow-sm md:hover:shadow-lg p-4 rounded-md cursor-pointer w-full bg-[#6B728E] text-white">

            <h1 className='font-Montserrat font-bold text-ellipsis md:max-w-[270px] whitespace-nowrap overflow-hidden'>{props.title}</h1>
            <h1 className='font-Montserrat text-sm'>{modifiedName}</h1>
            <h1 className='font-Montserrat mt-4 text-sm'>{props.description}</h1>
            <h1 className='font-Montserrat mt-4 text-xs font-bold'>{readableDate.toLocaleTimeString([], timeOptions)} -
                {readableDate.toLocaleDateString('en-MY', options)}</h1>


            <button className='bg-[#404258] p-1 rounded-md hover:bg-[#474E68] mt-2'
                onClick={() => deleteNote()}>
                <h1 className='font-Montserrat text-sm px-1 text-white'>Delete</h1>
            </button>

        </div>
    )
}

export default TodoCard