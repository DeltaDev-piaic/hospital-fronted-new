import Image from 'next/image'
import React from 'react'
import img from "../../../../public/img/card1.png"
import img1 from "../../../../public/img/card2.png"
import img2 from "../../../../public/img/card3.png"

function Portfolio() {
  return (
    <section className='h-[940.67] w-full bg-[#de699e]'>
      <header className='w-full h-[318px] py-[50px] px-[124px] bg-[#FFD4D0]'>
        <div className='h-[126px] gap-[24px] flex flex-col justify-center items-center'>
          <h1 className="w-[230px] h-[54px] text-4xl font-bold text-[#1F1F1F]">My Portfolio</h1>
          <p className='w-full h-[48px] text-base font-normal font-Montserrat text-center'>Explore my design services, from user interface and experience to prototyping and testing. Let's craft <br /> exceptional digital experiences together.</p>
        </div>
        <div className='flex justify-between flex-wrap w-full px-[124px] gap-[64px] py-16'>
        {/* 1st Card */}
        <div className = "hover:scale-105 duration-200 ease-in-out">
          <Image src={img} alt="card 1" className="w-[354.67px]" />
          <h2 className="text-2xl py-4 font-bold font-Montserrat bg-[1F1F1F]">Educational Platform</h2>
          <p className='text-md font-normal'>Web Design / Usability Testing</p>
          </div>
          {/* 2nd card */}
          <div className = "hover:scale-105 duration-200 ease-in-out">
          <Image src={img1} alt="card 1" className="w-[354.67px]" />
          <h2 className="text-2xl py-4 font-bold font-Montserrat bg-[1F1F1F]">Travel App Design</h2>
          <p className='text-md font-normal'>UX Research / Web Design</p>
          </div>
          {/* 3rd card */}
          <div className = "hover:scale-105 duration-200 ease-in-out">
          <Image src={img2} alt="card 1" className="w-[354.67px]" />
          <h2 className="text-2xl py-4 font-bold font-Montserrat bg-[1F1F1F]">Personal Page</h2>
          <p className='text-md font-normal'>Web Design</p>
          </div>
          {/* 4th card */}
          <div className = "hover:scale-105 duration-200 ease-in-out">
          <Image src={img2} alt="card 1" className="w-[354.67px]" />
          <h2 className="text-2xl py-4 font-bold font-Montserrat bg-[1F1F1F]">Personal Page</h2>
          <p className='text-md font-normal'>Web Design</p>
          </div>
          {/* 5th card */}
          <div className = "hover:scale-105 duration-200 ease-in-out">
          <Image src={img2} alt="card 1" className="w-[354.67px]" />
          <h2 className="text-2xl py-4 font-bold font-Montserrat bg-[1F1F1F]">Personal Page</h2>
          <p className='text-md font-normal'>Web Design</p>
          </div>
          {/* 6th card */}
          <div className = "hover:scale-105 duration-200 ease-in-out">
          <Image src={img2} alt="card 1" className="w-[354.67px]" />
          <h2 className="text-2xl py-4 font-bold font-Montserrat bg-[1F1F1F]">Personal Page</h2>
          <p className='text-md font-normal'>Web Design</p>
          </div>
          {/* End */}
        </div>
      </header>
    </section>
  )
}

export default Portfolio