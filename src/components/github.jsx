import React from 'react';
import GitHubCalender from "react-github-calendar"
import ReactTooltip from "react-tooltip"

const Github = () => {
    return (
        <div  className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 p-b '>GitHub Calender</p>
           
           
           
            </div>

            <div className='pt-24 flex justify-center items-center'>

                <GitHubCalender blockSize={20} fontSize={20} username='xxRohitxx' hideColorLegend="true">
                <ReactTooltip delayShow={30} backgroundColor="black" textColor='white'  type='dark' />
                </GitHubCalender>
            </div>
            
            </div>
    </div>
    );
}

export default Github;
