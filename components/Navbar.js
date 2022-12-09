import React from 'react'

function Navbar({children}) {
  return (
    <>

    <div className='fixed w-full bg-indigo-600 h-14 shadow-md top-0'>

        <div className="mx-8 flex items-center h-14">
            <h1 className='font-Montserrat text-white mr-auto font-bold text-lg'>To-Do</h1>
            <h1 className='font-Montserrat text-white ml-auto text-lg cursor-pointer'>Log Out</h1>

        </div>

    </div>

    {children}
    
    </>
  )
}

export default Navbar