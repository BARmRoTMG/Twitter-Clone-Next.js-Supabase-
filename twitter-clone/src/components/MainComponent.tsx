import { BsChat, BsDot, BsThreeDots } from 'react-icons/bs'
import { AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai'
import { IoShareOutline, IoStatsChart } from 'react-icons/io5'


const MainComponent = () => {
    return (
        <main className='ml-[275px] flex w-full h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600'>
            <h1 className='text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0'>Home</h1>
            <div className='border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-6 space-x-2 border-gray-600 relative'>
                <div className='w-11 h-11 bg-slate-400 rounded-full flex-none'></div>
                <div className='flex flex-col w-full h-full'>
                    <input
                        className='w-full h-full text-2xl placeholder:text-gray-600 bg-transparent border-b-[0.5] border-gray-600 p-4 outline-none border-none '
                        type="text"
                        placeholder="What's happening?" />
                    <div className='w-full justify-between items-center flex'>
                        <div></div>
                        <div className='w-full max-w-[100px]'>
                            <button className='rounded-full bg-primary px-4 py-2 w-full text-lg text-center hover:opacity-70 transition duration-200 font-bold'>Tweet</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                {
                    Array.from({ length: 5 }).map((_, i) => (
                        <div className='border-t-[0.5px] px-4 border-b-[0.5px] flex space-x-4'>
                            <div
                                key={i}
                                className='border-b-[0.5px] border-gray-600 p-2 flex space-x-4'>
                                <div>
                                    <div className='w-10 h-10 bg-slate-200 rounded-full'></div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex items-center w-full justify-between'>
                                        <div className='flex items-center space-x-1 w-full'>
                                            <div className='font-bold'>Bar Mashiach</div>
                                            <div className='text-gray-500'>@barmashiach</div>
                                            <div className=' text-gray-500'>
                                                <BsDot />
                                            </div>
                                            <div className=' text-gray-500'>1 hour ago</div>
                                        </div>
                                        <div>
                                            <BsThreeDots />
                                        </div>
                                    </div>
                                    <div className=' text-white text-base'>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                    </div>
                                    <div className=' bg-slate-400 aspect-square w-full h-80 rounded-xl mt-2'></div>
                                    <div className='flex items-center justify-start space-x-20 mt-2 w-full'>
                                        <div className='rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer'>
                                            <BsChat />
                                        </div>
                                        <div className='rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer'>
                                            <AiOutlineRetweet />
                                        </div>
                                        <div className='rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer'>
                                            <AiOutlineHeart />
                                        </div>
                                        <div className='rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer'>
                                            <IoStatsChart />
                                        </div>
                                        <div className='rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer'>
                                            <IoShareOutline />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </main>
    )
}

export default MainComponent