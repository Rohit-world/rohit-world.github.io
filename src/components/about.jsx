import React from 'react';

const About = () => {
    return (
        <div  className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>About</p>
                </div>
                <p className='text-xl mt-20'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad placeat repellat aliquid dicta illo dolor. Doloremque quibusdam molestias tempore hic cumque dolorum, asperiores fugit laboriosam nisi fugiat quisquam maiores ipsam!</p>
                <br />
                <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis porro vel obcaecati neque, dicta eveniet ducimus ad dolorem recusandae nihil, quis modi! Est officiis dolorem quos amet ea beatae praesentium?</p>
            </div>
        </div>
    );
}

export default About;
