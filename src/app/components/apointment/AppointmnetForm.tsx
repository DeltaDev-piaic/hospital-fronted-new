// components/AppointmentModal.tsx
'use client'
import React, { useState } from 'react';

const AppointmentModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
          <div className="bg-white rounded-lg shadow-lg p-8 z-10 max-w-md w-full">
            <h2 className="text-lg font-bold mb-4">Book Appointment</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md p-2" required />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md p-2" required />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input type="date" className="mt-1 block w-full border border-gray-300 rounded-md p-2" required />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Time</label>
                <input type="time" className="mt-1 block w-full border border-gray-300 rounded-md p-2" required />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold py-2 rounded-md">
                Submit
              </button>
              <button
                type="button"
                className="mt-4 w-full text-gray-700 underline"
                onClick={onClose}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AppointmentModal;
