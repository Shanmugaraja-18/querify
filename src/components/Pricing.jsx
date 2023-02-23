import React from 'react';

import { CheckIcon } from '@heroicons/react/solid';

const Pricing = () => {
  return (
    <div name='pricing' className='w-full text-white my-24'>
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-12'>

        <div className='text-center py-8 text-slate-300'>
          <h2 className='text-3xl uppercase'>Pricing</h2>
          <h3 className='text-5xl font-bold text-white py-8'>Get our premium version to get your doubts solved quickly</h3>
          <p className='text-3xl'>
          Our premium version offers you a range of benefits.We hope that you find our premium
           version helpful and we wish you all the best!.We offer you a range of premium services and features which are not available in the basic version.
            This includes enhanced security, additional customer support and an improved user experience.

          </p>
        </div>

        <div className='grid md:grid-cols-2'>

          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>Rs.99<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>Our premium version offers you extra features:</p>
            <div className='text-2xl'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Access to exclusive content</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Discounts on products and services</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Priority updates and support</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Ability to customize your experience</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  /> Early access to new features</p>
                <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>RS.599<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>Our premium version offers you extra features:</p>
            <div className='text-2xl'>
            <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Access to exclusive content</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Discounts on products and services</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Priority updates and support</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Ability to customize your experience</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  /> Early access to new features</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Support for additional devices</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Regular updates and upgrades</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Access to a wide range of tutorials and support material</p>
                <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
