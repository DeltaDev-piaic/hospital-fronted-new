// components/SignUpModal.tsx
'use client';
import React, { useState } from 'react';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignUpForm: React.FC<SignUpModalProps> = ({ isOpen, onClose }) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    privacyChecked: false
  });

  const [isSignIn, setIsSignIn] = useState(false); // Toggle between SignUp and SignIn forms
  const [submissionMessage, setSubmissionMessage] = useState('');

  // Function to handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate passwords only in the sign-up form
    if (!isSignIn && formData.password !== formData.confirmPassword) {
      setSubmissionMessage('Passwords do not match.');
      return;
    }

    setSubmissionMessage(isSignIn ? 'Sign-in successful!' : `Sign-up successful! Welcome, ${formData.firstName} ${formData.lastName}`);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      privacyChecked: false
    });
    onClose(); // Optional: Close the modal after form submission
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>

          {/* Modal content */}
          <div className="bg-white rounded-lg shadow-lg p-8 z-10 max-w-md w-full">
            <h2 className="text-lg font-bold mb-4">{isSignIn ? 'Sign In' : 'Sign Up'}</h2>

            <form onSubmit={handleSubmit}>
              {!isSignIn && (
                <>
                  {/* First Name */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                      required
                    />
                  </div>

                  {/* Last Name */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                      required
                    />
                  </div>
                </>
              )}

              {/* Email */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  required
                />
              </div>

              {!isSignIn && (
                <>
                  {/* Confirm Password */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                      required
                    />
                  </div>

                  {/* Privacy Policy Checkbox */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      <input
                        type="checkbox"
                        name="privacyChecked"
                        checked={formData.privacyChecked}
                        onChange={handleInputChange}
                        className="mr-2"
                        required
                      />
                      I agree to the <a href="#" className="text-pink-500 underline">Privacy Policy</a>
                    </label>
                  </div>
                </>
              )}

              {/* Submit Button */}
              <button type="submit" className="w-full bg-pink-500 text-white font-bold py-2 rounded-md mb-4">
                {isSignIn ? 'Sign In' : 'Sign Up'}
              </button>

              {/* Error or Success Message */}
              {submissionMessage && (
                <div className={`mt-2 ${submissionMessage.includes('successful') ? 'text-green-500' : 'text-red-500'} font-bold`}>
                  {submissionMessage}
                </div>
              )}

              {/* Divider */}
              <div className="flex items-center justify-between mb-4">
                <hr className="w-full border-t border-gray-300" />
                <span className="px-2 text-gray-500">or</span>
                <hr className="w-full border-t border-gray-300" />
              </div>

              {/* Sign in with Google */}
              <button
                type="button"
                className="w-full bg-white text-gray-700 border border-gray-300 py-2 rounded-md flex items-center justify-center mb-2 hover:bg-gray-100"
              >
                <img src="/google-icon.svg" alt="Google" className="h-5 w-5 mr-2" />
                {isSignIn ? 'Sign in with Google' : 'Sign up with Google'}
              </button>

              {/* Sign in with GitHub */}
              <button
                type="button"
                className="w-full bg-white text-gray-700 border border-gray-300 py-2 rounded-md flex items-center justify-center hover:bg-gray-100"
              >
                <img src="/github-icon.svg" alt="GitHub" className="h-5 w-5 mr-2" />
                {isSignIn ? 'Sign in with GitHub' : 'Sign up with GitHub'}
              </button>

              {/* Toggle between Sign Up and Sign In */}
              <p className="text-sm text-gray-600 mt-4 text-center">
                {isSignIn ? (
                  <>
                    Don’t have an account?{' '}
                    <span className="text-pink-500 underline cursor-pointer" onClick={() => setIsSignIn(false)}>
                      Sign up
                    </span>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <span className="text-pink-500 underline cursor-pointer" onClick={() => setIsSignIn(true)}>
                      Sign in
                    </span>
                  </>
                )}
              </p>

              {/* Cancel Button */}
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

export default SignUpForm;
