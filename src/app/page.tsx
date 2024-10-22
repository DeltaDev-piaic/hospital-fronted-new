'use client'
import React, { useState } from 'react';
import Header from './components/header/Header';
import { AppleCardsCarouselDemo } from './components/AppleCardsCarouselDemo';
import { CardHoverEffectDemo } from './components/CardHoverEffectDemo';
import { ThreeDCard } from './components/ThreeDCard';

export default function page() {
  const [isFormVisible, setFormVisible] = useState(false);

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  return (
    <main>
      {/* Header */}
      <div>
        <Header />
      </div>


      {/* <div>
      <nav className="section__container nav__container">
        <div className="nav__logo">Health<span>Care</span></div>
        <ul className="nav__links">
          <li className="link"><a href="#home">Home</a></li>
          <li className="link"><a href="#about">About Us</a></li>
          <li className="link"><a href="#service">Services</a></li>
          <li className="link"><a href="#pages">Pages</a></li>
          <li className="link"><a href="#blog">Blog</a></li>
        </ul>
        <button className="btn" onClick={toggleForm}>Contact Us</button>
      </nav>
      <header>
     
      <div className="section__container header__container" id="home">
        <div className="header__content">
          <h1>Providing an Exceptional Patient Experience</h1>
          <p>
            Welcome, where exceptional patient experiences are our priority.
            With compassionate care, state-of-the-art facilities, and a
            patient-centered approach, we're dedicated to your well-being. Trust
            us with your health and experience the difference.
          </p> */}
      {/* Button to show the booking form */}
      <button className="btn" onClick={toggleForm}>Book Appointment</button>
      {/* </div>
      </div>
      {isFormVisible && (
        <div className="popup-form">
          <div className="popup-content">
            <h4>Book Now</h4>
            <form>
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
              <input type="text" placeholder="Address" required />
              <input type="text" placeholder="Phone No." required />
              <button type="submit" className="btn form__btn">Submit</button>
            </form>
            <button className="close-btn" onClick={toggleForm}>Close</button>
          </div>
        </div>
      )}
    </header>
    </div> */}


   {/* SERVICES */}
   <section className="service__container mx-36 my-8" id="service">
  {/* Service Header */}
  <div className='service__header flex flex-col md:flex-row justify-center items-center mb-12'>
  <div className="service__header__content text-center md:textcenter">
      <h2 className="section__header text-5xl font-bold text-gray-800 mb-4">
        Our Special Service
      </h2>
      <p className="text-gray-600 max-w-2xl">
        Beyond simply providing medical care, our commitment lies in delivering
        unparalleled service tailored to your unique needs.
      </p>
    </div>
  </div>

  {/* Service Grid */}
  <div className="service__grid grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Card 1: Laboratory Test */}
    <div className="service__card p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      <div className="flex items-center justify-center mb-4 text-pink-500 text-5xl">
        <i className="ri-microscope-line"></i>
      </div>
      <h4 className="text-xl font-semibold text-gray-800 mb-2">Laboratory Test</h4>
      <p className="text-gray-600 mb-4">
        Accurate Diagnostics, Swift Results: Experience top-notch Laboratory Testing at our facility.
      </p>
      <a href="#" className="text-pink-500 hover:text-pink-600 font-medium transition-colors">
        Learn More &rarr;
      </a>
    </div>

    {/* Card 2: Health Check */}
    <div className="service__card p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      <div className="flex items-center justify-center mb-4 text-blue-500 text-5xl">
        <i className="ri-mental-health-line"></i>
      </div>
      <h4 className="text-xl font-semibold text-gray-800 mb-2">Health Check</h4>
      <p className="text-gray-600 mb-4">
        Our thorough assessments and expert evaluations help you stay proactive about your health.
      </p>
      <a href="#" className="text-blue-500 hover:text-blue-600 font-medium transition-colors">
        Learn More &rarr;
      </a>
    </div>

    {/* Card 3: General Dentistry */}
    <div className="service__card p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      <div className="flex items-center justify-center mb-4 text-yellow-500 text-5xl">
        <i className="ri-hospital-line"></i>
      </div>
      <h4 className="text-xl font-semibold text-gray-800 mb-2">General Dentistry</h4>
      <p className="text-gray-600 mb-4">
        Experience comprehensive oral care with Dentistry. Trust us to keep your smile healthy and bright.
      </p>
      <a href="#" className="text-yellow-500 hover:text-yellow-600 font-medium transition-colors">
        Learn More &rarr;
      </a>
    </div>
  </div>
</section>



      {/* Cards */}

      {/* <section className='h-[940.67] w-full bg-[#de699e]'>
      <header className='w-full h-[318px] py-[50px] px-[124px] bg-[#FFD4D0]'>
        <div className='h-[126px] gap-[24px] flex flex-col justify-center items-center'>
          <h1 className="w-[230px] h-[54px] text-4xl font-bold text-[#1F1F1F]">My Portfolio</h1>
          <p className='w-full h-[48px] text-base font-normal font-Montserrat text-center'>Explore my design services, from user interface and experience to prototyping and testing. Let's craft <br /> exceptional digital experiences together.</p>
        </div>
        <div className='flex justify-between flex-wrap w-full px-[124px] gap-[64px] py-16'> */}
      {/* 1st Card */}
      {/* <div className = "hover:scale-105 duration-200 ease-in-out">
          <Image src={img} alt="card 1" className="w-[354.67px]" />
          <h2 className="text-2xl py-4 font-bold font-Montserrat bg-[1F1F1F]">Educational Platform</h2>
          <p className='text-md font-normal'>Web Design / Usability Testing</p>
          </div> */}
      {/* 2nd card */}
      {/* <div className = "hover:scale-105 duration-200 ease-in-out">
          <Image src={img1} alt="card 1" className="w-[354.67px]" />
          <h2 className="text-2xl py-4 font-bold font-Montserrat bg-[1F1F1F]">Travel App Design</h2>
          <p className='text-md font-normal'>UX Research / Web Design</p>
          </div> */}
      {/* 3rd card */}
      {/* <div className = "hover:scale-105 duration-200 ease-in-out">
          <Image src={img2} alt="card 1" className="w-[354.67px]" />
          <h2 className="text-2xl py-4 font-bold font-Montserrat bg-[1F1F1F]">Personal Page</h2>
          <p className='text-md font-normal'>Web Design</p>
          </div> */}
      {/* 4th card */}
      {/* <div className = "hover:scale-105 duration-200 ease-in-out">
          <Image src={img2} alt="card 1" className="w-[354.67px]" />
          <h2 className="text-2xl py-4 font-bold font-Montserrat bg-[1F1F1F]">Personal Page</h2>
          <p className='text-md font-normal'>Web Design</p>
          </div> */}
      {/* 5th card */}
      {/* <div className = "hover:scale-105 duration-200 ease-in-out">
          <Image src={img2} alt="card 1" className="w-[354.67px]" />
          <h2 className="text-2xl py-4 font-bold font-Montserrat bg-[1F1F1F]">Personal Page</h2>
          <p className='text-md font-normal'>Web Design</p>
          </div> */}
      {/* 6th card */}
      {/* <div className = "hover:scale-105 duration-200 ease-in-out">
          <Image src={img2} alt="card 1" className="w-[354.67px]" />
          <h2 className="text-2xl py-4 font-bold font-Montserrat bg-[1F1F1F]">Personal Page</h2>
          <p className='text-md font-normal'>Web Design</p>
          </div> */}
      {/* End */}
      {/* </div> */}
      {/* // </header> */}
      {/* // </section> */}

    {/* ABOUT US  */}
<section className="about__container mx-6 md:mx-36 flex flex-col md:flex-row items-center pt-12" id="about">
  {/* Content Section */}
  <div className="about__content md:w-1/2 transition-transform transform hover:scale-105 duration-300">
  <h2 className="section__header text-5xl font-bold text-gray-800 mb-4 transition-colors hover:text-pink-500">
    About Us
  </h2>
  <p className="text-gray-600 mb-4 transition-transform hover:scale-105">
    Welcome to our healthcare website, your one-stop destination for reliable and comprehensive health care information. We are committed to promoting wellness and providing valuable resources to empower you on your health journey.
  </p>
  <p className="text-gray-600 mb-4 transition-transform hover:scale-105">
    Explore our extensive collection of expertly written articles and guides covering a wide range of health topics. From understanding common medical conditions to tips for maintaining a healthy lifestyle, our content is designed to educate, inspire, and support you in making informed choices for your health.
  </p>
  <p className="text-gray-600 mb-4 transition-transform hover:scale-105">
    Discover practical health tips and lifestyle advice to optimize your physical and mental well-being. We believe that small changes can lead to significant improvements in your quality of life, and we're here to guide you on your path to a healthier and happier you.
  </p>
  
</div>

  {/* Video Section */}
  <div className="about__video md:w-1/2 flex justify-center">
    <div className="relative overflow-hidden transition-transform transform hover:scale-105 duration-300">
      <video
        className="w-full h-80 md:h-96 object-cover rounded-lg shadow-lg" // Increased height
        controls
        autoPlay // Add autoPlay attribute
        muted // Optional: Add muted attribute to allow autoPlay in most browsers
      >
        <source src="/videos/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</section>

{/* Choose Us */}
<section className=" why__container mx-6 md:mx-36 py-" id="blog">
  <div className="why__image flex justify-center mb-6">
    <ThreeDCard />
  </div>
  <div className="why__content text-center">
  <div className="text-center mb-12">
    <h2 className="section__header text-5xl font-bold text-gray-800 mb-4 transition-transform duration-300 transform hover:scale-105">
      Why Choose Us
    </h2>
    <p className="text-gray-600 mb-8 px-4 md:px-16 leading-relaxed transition duration-300 hover:text-gray-800 hover:shadow-md p-4 bg-white rounded-lg shadow-lg">
      With a steadfast commitment to your well-being, our team of highly trained healthcare professionals ensures that you receive nothing short of exceptional patient experiences.
    </p>
  </div>
  <div className="why__grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {/* Card 1: Intensive Care */}
    <div className="why__card flex flex-col items-center p-6 bg-gradient-to-r from-pink-200 to-pink-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 ease-in-out hover:translate-y-[-5px]">
      <span className="text-pink-600 text-6xl mb-4 transition-transform duration-300 transform hover:scale-125">
        <i className="ri-hand-heart-line"></i>
      </span>
      <h4 className="font-semibold text-xl text-gray-800 mb-2">Intensive Care</h4>
      <p className="text-gray-600 text-center">
        Our Intensive Care Unit is equipped with advanced technology and staffed by a team of professionals.
      </p>
    </div>

    {/* Card 2: Free Ambulance Car */}
    <div className="why__card flex flex-col items-center p-6 bg-gradient-to-r from-blue-200 to-blue-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 ease-in-out hover:translate-y-[-5px]">
      <span className="text-blue-600 text-6xl mb-4 transition-transform duration-300 transform hover:scale-125">
        <i className="ri-truck-line"></i>
      </span>
      <h4 className="font-semibold text-xl text-gray-800 mb-2">Free Ambulance Car</h4>
      <p className="text-gray-600 text-center">
        A compassionate initiative to prioritize your health and well-being without any financial burden.
      </p>
    </div>

    {/* Card 3: Medical and Surgical */}
    <div className="why__card flex flex-col items-center p-6 bg-gradient-to-r from-yellow-200 to-yellow-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 ease-in-out hover:translate-y-[-5px]">
      <span className="text-yellow-600 text-6xl mb-4 transition-transform duration-300 transform hover:scale-125">
        <i className="ri-hospital-line"></i>
      </span>
      <h4 className="font-semibold text-xl text-gray-800 mb-2">Medical and Surgical</h4>
      <p className="text-gray-600 text-center">
        Our Medical and Surgical services offer advanced healthcare solutions to address medical needs.
      </p>
    </div>
  </div>
</div>

</section>


      {/* Carouser of Special Doctors */}
      <section className="doctors__container px-32" id="pages">
        <div className="doctors__header">
          <div className="doctors__header__content">
            <h2 className="section__header text-5xl font-bold">Our Special Doctors</h2>
            <p className='text-lg'>
            We take immense pride in our exceptional team of doctors, each a highly trained specialist in their fields. With a commitment to excellence and compassionate care, they ensure patients receive the most innovative treatments available. Their expertise and dedication foster a supportive environment, prioritizing your health and well-being.
            </p>
          </div>
          <div className="doctors__nav">
            <span><i className="ri-arrow-left-line"></i></span>
            <span><i className="ri-arrow-right-line"></i></span>
          </div>
        </div>
      <AppleCardsCarouselDemo/>
      </section>
 
      {/*  Special Doctors*/}

      {/* <section className="section__container doctors__container" id="pages">
        <div className="doctors__header">
          <div className="doctors__header__content">
            <h2 className="section__header">Our Special Doctors</h2>
            <p>
              We take pride in our exceptional team of doctors, each a specialist
              in their respective fields.
            </p>
          </div>
          <div className="doctors__nav">
            <span><i className="ri-arrow-left-line"></i></span>
            <span><i className="ri-arrow-right-line"></i></span>
          </div>
        </div>
        <div className="doctors__grid">
          {[
            {
              name: 'Dr. Emily Smith',
              specialty: 'Cardiologist',
              image: '/img/doctor-1.jpg',
            },
            {
              name: 'Dr. James Anderson',
              specialty: 'Neurosurgeon',
              image: '/img/doctor-2.jpg',
            },
            {
              name: 'Dr. Michael Lee',
              specialty: 'Dermatologist',
              image: '/img/doctor-3.jpg',
            },
          ].map((doctor, index) => (
            <div className="doctors__card" key={index}>
              <div className="doctors__card__image">
                <img src={doctor.image} alt={doctor.name} />
                <div className="doctors__socials">
                  <span><i className="ri-instagram-line"></i></span>
                  <span><i className="ri-facebook-fill"></i></span>
                  <span><i className="ri-heart-fill"></i></span>
                  <span><i className="ri-twitter-fill"></i></span>
                </div>
              </div>
              <h4>{doctor.name}</h4>
              <p>{doctor.specialty}</p>
            </div>
          ))}
        </div>
      </section> */}

{/* Footer section */}
<footer className="footer text-white py-10">
  <div className="section__container footer__container mx-auto px-6 md:px-12 lg:px-24">
    <div className="footer__col mb-8">
      <h3 className="text-5xl font-bold mb-4">
        Health<span className="text-pink-500">Care</span>
      </h3>
      <p className="leading-relaxed mb-4 text-white text-xl">
        We are honored to be a part of your healthcare journey and committed to delivering compassionate, personalized, and top-notch care every step of the way.
      </p>
      <p className="leading-relaxed text-gray-300 text-lg">
        Trust us with your health, and let us work together to achieve the best possible outcomes for you and your loved ones.
      </p>
    </div>
    <div className="footer__col mb-8">
      <h4 className="font-semibold text-2xl mb-2 text-pink-500">About Us</h4>
      <p className="text-lg hover:text-pink-400 transition duration-300">Home</p>
      <p className="text-lg hover:text-pink-400 transition duration-300">About Us</p>
      <p className="text-lg hover:text-pink-400 transition duration-300">Work With Us</p>
      <p className="text-lg hover:text-pink-400 transition duration-300">Our Blog</p>
      <p className="text-lg hover:text-pink-400 transition duration-300">Terms & Conditions</p>
    </div>
    <div className="footer__col mb-8">
      <h4 className="font-semibold text-2xl mb-2 text-pink-500">Services</h4>
      <p className="text-lg hover:text-pink-400 transition duration-300">Search Terms</p>
      <p className="text-lg hover:text-pink-400 transition duration-300">Advance Search</p>
      <p className="text-lg hover:text-pink-400 transition duration-300">Privacy Policy</p>
      <p className="text-lg hover:text-pink-400 transition duration-300">Suppliers</p>
      <p className="text-lg hover:text-pink-400 transition duration-300">Our Stores</p>
    </div>
    <div className="footer__col mb-8">
      <h4 className="font-semibold text-2xl mb-2 text-pink-500">Contact Us</h4>
      <p className="flex items-center mb-2 text-lg">
        <i className="ri-map-pin-2-fill mr-2 text-pink-400 text-3xl"></i>
        123, London Bridge Street, London
      </p>
      <p className="flex items-center mb-2 text-lg">
        <i className="ri-mail-fill mr-2 text-pink-400 text-3xl"></i>
        support@care.com
      </p>
      <p className="flex items-center text-lg">
        <i className="ri-phone-fill mr-2 text-pink-400 text-3xl"></i>
        (+012) 3456 789
      </p>
    </div>
  </div>
  <div className="footer__bar bg-gray-800 py-4">
    <div className="footer__bar__content flex justify-between items-center mx-auto px-6 md:px-12 lg:px-24">
      <p className="text-sm text-gray-300">Copyright © 2023 Web Design Mastery. All rights reserved.</p>
      <div className="footer__socials space-x-6">
        <span className="hover:text-pink-400 transition duration-300 text-3xl">
          <i className="ri-instagram-line"></i>
        </span>
        <span className="hover:text-pink-400 transition duration-300 text-3xl">
          <i className="ri-facebook-fill"></i>
        </span>
        <span className="hover:text-pink-400 transition duration-300 text-3xl">
          <i className="ri-heart-fill"></i>
        </span>
        <span className="hover:text-pink-400 transition duration-300 text-3xl">
          <i className="ri-twitter-fill"></i>
        </span>
      </div>
    </div>
  </div>
</footer>

    </main>
  )
}
