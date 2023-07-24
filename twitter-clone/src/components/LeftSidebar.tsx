import Link from 'next/link'
import React from 'react'
import { BiHomeCircle, BiSolidBell, BiSolidBookmark, BiUser } from 'react-icons/bi'
import { HiOutlineHashtag } from 'react-icons/hi'
import { HiEnvelope } from 'react-icons/hi2'
import { BsThreeDots, BsTwitter } from 'react-icons/bs'

const NAVIGATION_ITEMS = [
  {
    title: 'Twitter',
    icon: BsTwitter
  },
  {
    title: 'Home',
    icon: BiHomeCircle
  },
  {
    title: 'Explore',
    icon: HiOutlineHashtag
  },
  {
    title: 'Notifications',
    icon: BiSolidBell
  },
  {
    title: 'Messages',
    icon: HiEnvelope
  },
  {
    title: 'Bookmarks',
    icon: BiSolidBookmark
  },
  {
    title: 'Profile',
    icon: BiUser
  },
]

const LeftSidebar = () => {
  return (
    <section className="absolute left-0 w-[275px] flex flex-col items-stretch h-screen px-6">
      <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            className="hover:bg-white/10 text-2xl transition duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6"
            href={
              item.title.toLocaleLowerCase() === "home"
                ? "/"
                : `/${item.title.toLowerCase()}`
            }
            key={item.title}
          >
            <div>
              <item.icon />
            </div>
            {item.title !== "Twitter" && <div>{item.title}</div>}
          </Link>
        ))}
        <button className="rounded-full m-4 bg-primary p-4 text-2xl text-center hover:bg-opacity-70 transition duration-200">
          Tweet
        </button>
      </div>
      <button className="rounded-full flex items-center space-x-2 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200 w-full justify-between">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-slate-400 w-10 h-10"></div>
          <div className="text-left text-sm">
            <div className="font-semibold">Bar Mashiach</div>
            <div className="">@barmashiach</div>
          </div>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </button>
    </section>
  )
}

export default LeftSidebar