import LeftSidebar from '0/components/LeftSidebar'
import MainComponent from '0/components/MainComponent'
import RightSection from '0/components/RightSection'
import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-full flex justify-center items-center text-white relative bg-black'>
      <div className='max-w-[70vw] w-full h-full flex relative'>
        <LeftSidebar />
        <MainComponent />
        <RightSection />
      </div>
    </div>
  )
}

export default Home