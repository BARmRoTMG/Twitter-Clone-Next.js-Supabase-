import LeftSidebar from '0/components/LeftSidebar'
import MainComponent from '0/components/MainComponent'
import RightSection from '0/components/RightSection'
import React from 'react'

const Home = () => {
  return (
    <div className='w-full h-full flex justify-center items-center bg-black'>
      <div className='max-w-screen-xl w-full h-full flex relative border-4'>
        <LeftSidebar />
        <MainComponent />
        <RightSection />
      </div>
    </div>
  )
}

export default Home