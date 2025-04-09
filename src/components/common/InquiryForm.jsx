"use client";

import { useState } from 'react';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    language: 'english',
    useCase: '',
    phoneCallVolume: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-4 border border-green-500 overflow-hidden">
      <div className="relative w-full sm:w-4/5 md:w-3/5 lg:w-2/3 bg-white rounded-2xl shadow-lg p-6 mt-[-20rem]">
        <h1 className="text-2xl font-bold text-center mb-6"></h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              What's your name? *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Type here"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              What's your email? *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Type here"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
              What's your company's website? *
            </label>
            <input
              type="url"
              id="website"
              name="website"
              placeholder="Type here"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
              value={formData.website}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <p className="block text-sm font-medium text-gray-700 mb-2">Region and languages *</p>
            <p className="text-xs text-gray-500 mb-2">Note: our speech-to-text agents do not work for your use case. Please let your preferred language and region in the other row.</p>

            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="english"
                  name="language"
                  value="english"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                  checked={formData.language === 'english'}
                  onChange={handleChange}
                />
                <label htmlFor="english" className="ml-2 text-sm text-gray-700">
                  Primarily English & English-speaking region(s)
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  id="mixed"
                  name="language"
                  value="mixed"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                  checked={formData.language === 'mixed'}
                  onChange={handleChange}
                />
                <label htmlFor="mixed" className="ml-2 text-sm text-gray-700">
                  Could use English-speaking regions mostly - but other language preferred
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  id="other"
                  name="language"
                  value="other"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                  checked={formData.language === 'other'}
                  onChange={handleChange}
                />
                <label htmlFor="other" className="ml-2 text-sm text-gray-700">
                  CANNOT USE ENGLISH. Must be other language
                </label>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="useCase" className="block text-sm font-medium text-gray-700 mb-1">
              What's your use case? *
            </label>
            <select
              id="useCase"
              name="useCase"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
              value={formData.useCase}
              onChange={handleChange}
            >
              <option value="" disabled selected>Popular cases</option>
              <option value="sales">Sales</option>
              <option value="support">Customer Support</option>
              <option value="marketing">Marketing</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How many phone calls would you like to dispatch or receive per month? *
            </label>

            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="volume1"
                  name="phoneCallVolume"
                  value="less5000"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                  checked={formData.phoneCallVolume === 'less5000'}
                  onChange={handleChange}
                />
                <label htmlFor="volume1" className="ml-2 text-sm text-gray-700">
                  less than 5,000
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  id="volume2"
                  name="phoneCallVolume"
                  value="5000-10000"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                  checked={formData.phoneCallVolume === '5000-10000'}
                  onChange={handleChange}
                />
                <label htmlFor="volume2" className="ml-2 text-sm text-gray-700">
                  5,000 - 10,000
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  id="volume3"
                  name="phoneCallVolume"
                  value="10000-50000"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                  checked={formData.phoneCallVolume === '10000-50000'}
                  onChange={handleChange}
                />
                <label htmlFor="volume3" className="ml-2 text-sm text-gray-700">
                  10,000 - 50,000
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  id="volume4"
                  name="phoneCallVolume"
                  value="50000-250000"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                  checked={formData.phoneCallVolume === '50000-250000'}
                  onChange={handleChange}
                />
                <label htmlFor="volume4" className="ml-2 text-sm text-gray-700">
                  50,000 - 250,000
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="radio"
                  id="volume5"
                  name="phoneCallVolume"
                  value="250000+"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                  checked={formData.phoneCallVolume === '250000+'}
                  onChange={handleChange}
                />
                <label htmlFor="volume5" className="ml-2 text-sm text-gray-700">
                  250,000+
                </label>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <div className="flex">
              <div className="w-16 flex items-center justify-center px-3 border border-r-0 border-gray-300 bg-gray-50 rounded-l-md">
                <span className="flex items-center">
                  <img src="/api/placeholder/20/15" alt="USA flag" className="h-4 w-6 mr-1" />
                  USA
                </span>
              </div>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Type here"
                className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}