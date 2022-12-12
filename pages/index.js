import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'

// Utilities
import axios from 'axios'
import { useNotesContext } from '../hooks/useNotesContext'

// Components
import TodoCard from '../components/TodoCard'
import CreateToDo from '../components/CreateToDo'

export default function Home() {

  // Notes
  const {notes, dispatch} = useNotesContext(); 

  // Open CreateToDo
  const [isOpenCreateToDo, setIsOpenCreateToDo] = useState(false);

  useEffect(() => {
    GetAllNotes();
  }, []);

  async function GetAllNotes() {
    try {
      const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + 'note/getallnote');
      const result = response.data.data;
      dispatch({type: 'SET_NOTES', payload: result})
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Head>
        <title>To-Do App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="#"></link>
      </Head>

      <div className='flex mb-4'>
        <button className='bg-[#6B728E] p-1 rounded-md hover:bg-[#474E68]'
                onClick={()=> setIsOpenCreateToDo(true)}>
          <h1 className='font-Montserrat text-sm px-1 text-white'>+ New Note</h1>
        </button>
      </div>

      <div className='flex gap-4 flex-wrap'>
        {
          notes && notes.map((item) => {
            return <TodoCard key={item._id} title={item.title} name={item.name} description={item.description} date={item.createdAt} id={item._id}/>
          })
        }
      </div>

      {isOpenCreateToDo && (
        <CreateToDo closePopUp={() =>setIsOpenCreateToDo(false)}/>
      )}

    </>
  )
}