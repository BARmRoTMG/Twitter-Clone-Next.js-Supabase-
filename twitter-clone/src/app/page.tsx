import LeftSidebar from '0/components/LeftSidebar'
import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-full flex justify-center items-center bg-black'>
      <div className='max-w-screen-xl w-full h-full flex relative'>
        <LeftSidebar />
        
        {/* home timeline */}
        <main className='ml-[275px] p-6  flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600'>
          <h1 className='text-xl font-bold'>Home</h1>
          <div className='border-t-[0.5px] border-b-[0.5px] border-gray-600 h-32'>

          </div>
        </main>
        {/* right section */}
        <section>

        </section>
      </div>
    </div>
  )
}

export default Home