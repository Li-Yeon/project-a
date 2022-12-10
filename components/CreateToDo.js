import React from 'react'

function CreateToDo(props) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">

      <div className='w-[90%] md:max-w-[500px] h-[300px] bg-[#50577A] border border-[#404258] shadow-md rounded-md relative'>

        <div className="absolute top-3 right-8">
          <button className='bg-[#6B728E] p-1 rounded-md hover:bg-[#474E68]'
            onClick={() => props.closePopUp()}>
            <h1 className='font-Montserrat text-white text-sm px-1'>Close</h1>
          </button>
        </div>

        <div className='flex flex-col py-6 px-8'>

          {/* Title */}
          <div className='flex flex-col gap-1 mt-4'>
            <h1 className='font-Montserrat text-md text-white'>Title</h1>
            <input required type="text" className='w-full rounded-sm px-2 font-Montserrat text-md' />
          </div>

          {/* Title */}
          <div className='flex flex-col gap-1 mt-2'>
            <h1 className='font-Montserrat text-md text-white'>Name</h1>
            <input required type="text" className='w-full rounded-sm px-2 font-Montserrat text-md' />
          </div>

          {/* Description */}
          <div className='flex flex-col gap-1 mt-2'>
            <h1 className='font-Montserrat text-md text-white'>Description</h1>
            <textarea type="text" className='w-full rounded-sm px-2 font-Montserrat text-md resize-none' />
          </div>

          <button className='bg-[#6B728E] p-1 mt-4 rounded-md hover:bg-[#474E68]'>
            <h1 className='font-Montserrat text-sm px-1 text-white'>Create Note</h1>
          </button>

        </div>

      </div>

    </div>
  )
}

export default CreateToDo