import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react'

// Utilities
import { useNotesContext } from '../hooks/useNotesContext'


function CreateToDo(props) {

  const {dispatch} = useNotesContext();
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault();

    const newNote = { title, name, description };
    const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + 'note/createnote', newNote);

    console.log(response)

    if (response.data.status == 201) {
      setTitle('');
      setName('');
      setDescription('');
      setError(false);
      dispatch({type: 'CREATE_NOTES', payload: response.data.data})
    }
    else {
      setError(true);
    }

  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">

      <div className='w-[90%] md:max-w-[500px] h-[310px] bg-[#50577A] border border-[#404258] shadow-md rounded-md relative'>

        <div className="absolute top-3 right-8">
          <button className='bg-[#6B728E] p-1 rounded-md hover:bg-[#474E68]'
            onClick={() => props.closePopUp()}>
            <h1 className='font-Montserrat text-white text-sm px-1'>Close</h1>
          </button>
        </div>

        <div className='flex flex-col py-6 px-8'>
          <form action="" onSubmit={handleSubmit}>
            {/* Title */}
            <div className='flex flex-col gap-1 mt-4'>
              <h1 className='font-Montserrat text-md text-white'>Title</h1>
              <input type="text" className='w-full rounded-sm px-2 font-Montserrat text-md'
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title} />
            </div>

            {/* Name */}
            <div className='flex flex-col gap-1 mt-2'>
              <h1 className='font-Montserrat text-md text-white'>Name</h1>
              <input type="text" className='w-full rounded-sm px-2 font-Montserrat text-md'
                onChange={(e) => setName(e.target.value)}
                value={name} />
            </div>

            {/* Description */}
            <div className='flex flex-col gap-1 mt-2'>
              <h1 className='font-Montserrat text-md text-white'>Description</h1>
              <textarea type="text" className='w-full rounded-sm px-2 font-Montserrat text-md resize-none'
                onChange={(e) => setDescription(e.target.value)}
                value={description} />
            </div>

            <button className='bg-[#6B728E] p-1 mt-4 rounded-md hover:bg-[#474E68]'>
              <h1 className='font-Montserrat text-sm px-1 text-white'>Create Note</h1>
            </button>

            {/* Error Handling */}
            {error && (
              <h1 className='font-Montserrat text-xs text-red-500 italic mt-1'>* An error has occured.</h1>
            )}

          </form>

        </div>

      </div>

    </div>
  )
}

export default CreateToDo