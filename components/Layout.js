import React from 'react'

function Layout({children}) {
  return (  
    <div className='mt-[68px] md:mx-8 mx-4 h-screen'>
        {children}
    </div>
  )
}

export default Layout