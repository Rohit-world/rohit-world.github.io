import React from 'react';
import GitHubCalender from "react-github-calendar"
import ReactTooltip from "react-tooltip"

const Github = () => {
    return (
        <div  className='w-full h-screen bg-black text-white pt-20'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold  text-red-600  p-b '>GitHub </p>
                <p className="py-6">Here is my GitHub stats and Calender</p>
           
           
            </div>

            <div className='pt-24 flex justify-center items-center'>

                <GitHubCalender blockSize={20} fontSize={20} username='Rohit-world' hideColorLegend="true" hideTotalCount='true'>
                <ReactTooltip delayShow={30} backgroundColor="black" textColor='white'  type='dark'  />
                </GitHubCalender>
                
            </div>

            <div className=' grid mt-10  justify-between items-center gap-x-20 gap-y-5 lg:flex '>
                <img  src="https://github-readme-streak-stats.herokuapp.com?user=Rohit-world&hide_border=true&background=66000000&ring=FFFFFF&fire=FFFFFF&dates=FFFFFF&sideLabels=FFFFFF&currStreakLabel=FFFFFF&sideNums=FFFFFF&currStreakNum=FFFFFF&stroke=66000000"></img> 
          
            <img src="https://github-readme-stats.vercel.app/api?username=Rohit-world&show_icons=true&theme=transparent&text_color=FFFFFF&title_color=FFFFFF&icon_color=FFFFFF&border=true&count_private=true&hide_border=true" alt="" /></div>
          
            </div>

            
    </div>
    );
}

export default Github;
