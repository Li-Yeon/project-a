import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'

// Utilities
import axios from 'axios'

// Components
import TodoCard from '../components/TodoCard'

export default function Home() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // Call the GetAllNotes function to fetch the notes
    GetAllNotes();
  }, []);

  async function GetAllNotes() {
    try {
      const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + 'note/getallnote');
      const result = response.data.data;
      setNotes(result);
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
      <div className='flex gap-4 flex-wrap'>
        {
          notes.map((item) => {
            return <TodoCard key={item._id} title={item.title} name={item.name} description={item.description} date={item.createdAt} />
          })
        }
      </div>
    </>
  )
}