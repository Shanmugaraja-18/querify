import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Get your doubts by developers across the world</h2>
                <p className='text-3xl py-6 text-gray-500'>Your friends can help you solve your doubts by offering advice, discussing potential solutions, or even helping you research an answer. If your friends are knowledgeable about the subject, they may be able to answer your questions directly. On the other hand, even if your friends may not have the answer, talking through your doubts can help you work out solutions on your own</p>
            </div>

            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>100%</p>
                    <p className='text-gray-400 mt-2'>Accuracy</p>
                </div>
                <div  className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                    <p className='text-gray-400 mt-2'>Doubt Clarification</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl' >
                    <p className='text-6xl font-bold text-indigo-600'>100+</p>
                    <p className='text-gray-400 mt-2'>Questions Solved</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About