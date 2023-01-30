import React from 'react';

const About = () => {
    return (
        <div  name="about" className='w-full h-screen pt-1 text-white backdrop-blur-md'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold text-transparent bg-gradient-to-b from-orange-500 to-yellow-300 bg-clip-text '>About</p>
                </div>
                <p className='text-xl mt-20 italic'> An enthusiastic Full Stack Web Developer with  knowledge in Data Structure & Algorithms and working across the full stack. Adaptive to all kinds of people, and surroundings and always appreciate constructive criticism to improve my performance. A highly self-motivated person with good  team management skills. A good learner with a problem-solving mindset.</p>
                <br />
                <p className='text-xl'></p>
            </div>
        </div>
        
    );
}

export default About;
