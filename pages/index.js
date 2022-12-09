import Head from 'next/head'
import Image from 'next/image'

// Components
import TodoCard from '../components/TodoCard'

export default function Home() {
  return (
    <>
      <Head>
        <title>To-Do App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='flex gap-4 flex-wrap'>
        <TodoCard owner={"Leon"} title={"Project-A"} desc={"Make a To-Do App using NextJS and NodeJS (MongoDB)"} date={"8.05PM - 9/12/2022"} />
      </div>
    </>
  )
}