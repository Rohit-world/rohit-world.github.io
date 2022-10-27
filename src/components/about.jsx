import React from 'react';

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>About</p>
                </div>
                <p className='text-xl mt-20'> Hii..   I'am Rohit Kumar an enthusiastic Full Stack Web Developer with  knowledge in Data Structure, Algorithms and working across the full stack. Adaptive to all kinds of people, and surrounding and always appreciate constructive criticism to improve my performance. A highly self-motivated person with good communication skills and effective team management skills. A great learner with a problem-solving mindset.</p>
                <br />
                <p className='text-xl'></p>
            </div>
        </div>
        
    );
}

export default About;
