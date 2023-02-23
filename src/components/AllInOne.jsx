import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';

const AllInOne = () => {
  return (
    <div name='platforms' className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center'>Say Goodbye to Uncertainty - Get Answers Instantly!</h2>
        <p className='text-2xl py-8 text-gray-500 text-center'>
        Are you tired of feeling uncertain and overwhelmed when faced with a problem? Do you wish
         you could get the answers you need to move forward quickly and confidently?From online research to
          personalized expert advice, you can get the information you need in a matter of minutes.
        Ask your questions and get solved your question answered by the community of experts. Whether
         you need help with a specific problem or general advice,
         you can find it quickly and easily with the help of the right resources.
        </p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>

          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Make learning meaningful</h3>
              <p className='text-lg pt-2 pb-4'>
              Incorporate real-world examples and case studies into your lessons.Give students opportunities to practice what they have learned in the lesson in different contexts.
              Ask students to explain their reasoning and thought process when solving problems.Allow students to collaborate, discuss and share their ideas in the classroom.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Good thinking skills</h3>
              <p className='text-lg pt-2 pb-4'>
              Good thinking skills include the ability to interpret information, make logical connections, 
              analyze problems, make decisions, and come up with creative solutions. Developing good thinking skills also involves being able to think critically and objectively, understand cause and effect,
               recognize patterns, and use imagination and intuition.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Become autonomous learners</h3>
              <p className='text-lg pt-2 pb-4'>
              Autonomous learners are people who are self-motivated, take initiative, and take responsibility for their own learning. To become an autonomous learner,
              Establish personal learning goals and objectives, and plan and prioritize activities to meet those goals.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Develop curiosity</h3>
              <p className='text-lg pt-2 pb-4'>
              Encourage an inquisitive mindset by asking open-ended questions, exploring unfamiliar topics and giving students opportunities to explore and investigate.
               Allow students to be creative in their problem-solving and encourage them to take informed risks
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Understand and then believe</h3>
              <p className='text-lg pt-2 pb-4'>
              Understand first and then believe. We often encounter ideas or concepts that challenge our existing beliefs and can be difficult for us to accept.
               In such cases, it is best to take the time to understand the concept before forming an opinion on it. 
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Good problem solving skills</h3>
              <p className='text-lg pt-2 pb-4'>
              Good problem solving skills involve being able to identify a problem,
              breaking it down into smaller, more manageable parts, and developing a solution that meets the needs of the situation. This includes being able to think creatively and critically
              and using logical reasoning to evaluate potential solutions.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Develop cognitive thinking abilitites</h3>
              <p className='text-lg pt-2 pb-4'>
              Practice problem-solving: Engage in activities that require you to think critically and come to solutions.
              Take on new challenges: Challenge yourself to try new things, 
              even if they seem difficult at first.</p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <CheckIcon className='w-7 mr-4 text-green-600' />
            </div>
            <div>
              <h3 className='font-bold text-lg'>Good learning skills</h3>
              <p className='text-lg pt-2 pb-4'>
              Good learning skills include being organized, staying focused, setting goals, asking questions, taking notes, utilizing technology, using mnemonics and other memory aids,
               breaking down material into manageable chunks, and seeking help when needed.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AllInOne;
