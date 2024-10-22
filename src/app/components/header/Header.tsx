// components/Header.tsx
'use client'
import React, { useState } from 'react';
import AppointmentModal from '../apointment/AppointmnetForm';
import FloatingChat from '../floatingChat';
import SignUpForm from '../SignUp/SignUpForm';
 


export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);

  const handleOpenSignUpModal = () => {
    setSignUpModalOpen(true);
  };

  const handleCloseSignUpModal = () => {
    setSignUpModalOpen(false);
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);


  const handleOpenModal = () => {
    console.log("Opening modal");
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    console.log("Closing modal");
    setIsModalOpen(false);
  };

  return (
    <>
       <div className="bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700">
      <nav className="section__container nav__container flex justify-between items-center p-4">
        <div className="nav__logo text-4xl">Delta Dev <span>Care</span></div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? '✖' : '☰'}
        </button>

        {/* Navbar Links */}
        <ul className={`nav__links font-bold flex-col md:flex-row items-center md:space-x-8 absolute md:static bg-white md:bg-transparent w-full md:w-auto transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'top-14' : 'top-[-100%]'}`}>
          <li className="link">
            <a href="#home" className="relative text-xl hover:text-pink-200 transition duration-300 ease-in-out before:absolute before:content-[''] before:w-0 before:h-[2px] before:bg-pink-300 before:left-0 before:bottom-[-4px] hover:before:w-full before:transition-all before:duration-300">Home</a>
          </li>
          <li className="link">
            <a href="#about" className="relative text-xl hover:text-pink-200 transition duration-300 ease-in-out before:absolute before:content-[''] before:w-0 before:h-[2px] before:bg-pink-300 before:left-0 before:bottom-[-4px] hover:before:w-full before:transition-all before:duration-300">About Us</a>
          </li>
          <li className="link">
            <a href="#service" className="relative text-xl hover:text-pink-200 transition duration-300 ease-in-out before:absolute before:content-[''] before:w-0 before:h-[2px] before:bg-pink-300 before:left-0 before:bottom-[-4px] hover:before:w-full before:transition-all before:duration-300">Services</a>
          </li>
          <li className="link relative">
            <a
              href="#"
              className="relative text-xl hover:text-pink-200 transition duration-300 ease-in-out before:absolute before:content-[''] before:w-0 before:h-[2px] before:bg-pink-300 before:left-0 before:bottom-[-4px] hover:before:w-full before:transition-all before:duration-300"
              onClick={toggleDropdown}
            >
              Pages
            </a>
            {isDropdownOpen && (
              <ul className="absolute mt-3 border border-white-80 rounded-lg shadow-lg">
                <li className="py-2 hover:bg-pink-100 transition duration-200">
                  <a href="#page2" className="text-pink-500 hover:bg-gradient-to-r bg-indigo-500 from-pink-400 to-pink-500 hover:text-white border rounded-t-lg border-white">Page 2</a>
                </li>
                <li className="py-2 hover:bg-pink-100 transition duration-200">
                  <a href="#page2" className="text-pink-500 hover:bg-gradient-to-r bg-indigo-500 from-pink-400 to-pink-500 hover:text-white borde border-white">Page 2</a>
                </li>
                <li className="py-2 hover:bg-pink-100 transition duration-200">
                  <a href="#page3" className="text-pink-500 hover:bg-gradient-to-r bg-indigo-500 from-pink-400 to-pink-500 hover:text-white border rounded-b-lg border-white">Page 3</a>
                </li>
              </ul>
            )}
          </li>
          <li className="link">
            <a href="#blog" className="relative text-xl hover:text-pink-200 transition duration-300 ease-in-out before:absolute before:content-[''] before:w-0 before:h-[2px] before:bg-pink-300 before:left-0 before:bottom-[-4px] hover:before:w-full before:transition-all before:duration-300">Blog</a>
          </li>
        </ul>

        <div>
      {/* Sign Up Button */}
      <button
        onClick={handleOpenSignUpModal}
        className="btn bg-pink-500 text-white font-semibold text-lg py-2 px-4 rounded-md transition-transform hover:scale-105"
      >
        Sign Up
      </button>

      {/* SignUpForm Modal */}
      <SignUpForm isOpen={isSignUpModalOpen} onClose={handleCloseSignUpModal} />
    </div>
          
      </nav>

      <header>
        <div className="section__container header__container flex flex-col md:flex-row items-center justify-between p-4 py-14 px-17" id="home">
          <div className="header__content md:w-1/2">
            <div className="flex justify-center items-center relative text-4xl font-bold text-white py-4">
              <span className="block overflow-hidden whitespace-nowrap border-r-4 border-white w-[40ch] animate-typing">
                Providing an Exceptional Patient Experience
              </span>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Welcome, where exceptional patient experiences are our priority. With compassionate care,
              state-of-the-art facilities, and a patient-centered approach, we're dedicated to your well-being.
              Trust us with your health and experience the difference.
            </p>
            <button
              onClick={handleOpenModal}
              className="btn bg-pink-500 text-white font-bold py-2 px-4 rounded-md transition-transform hover:scale-105"
            >
              Book Appointment
            </button>
          </div>

          <div className="header__image md:w-1/2 mt-6 md:mt-0">
            <img
              src="../img/doctors_team.png"
              alt="Healthcare"
              className="w-full h-auto rounded-md shadow-lg"
              width={100}
              height={100}
            />
          </div>
        </div>
      </header>
    </div>


      <FloatingChat />


      {/* Render the Appointment Modal */}
      <AppointmentModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}
