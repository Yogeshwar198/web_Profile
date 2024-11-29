import React from 'react'
import react from '../assets/react.svg'
import js from '../assets/js.svg'
import node from '../assets/node.png'
import express from '../assets/express.png'
import mongodb from '../assets/mongodb.png'
import tailwind from '../assets/tailwind.png'
import bootstrap from '../assets/bootstrap.png'
import redux from '../assets/redux.png'

const Skills = () => {
    return (
        <section className='container' id="skills">

            <div className='skills_top flex flex-col items-center gap-5 text-center'>
                <h2 className='subtitle'>My Skills</h2>
                <p className='max-w-2xl'>We transform your ideas and desires into a distinctive web project that inspires both you and your customers.</p>
            </div>

            <div className='flex flex-wrap justify-center gap-5 md:gap-10 mt-10'>

                {/* react icon  */}
                <div className='skills_card max-w-44 w-full'>
                    <div className='bg-sectionColor dark:bg-darkSectionColor grid
                    place-items-center px-4 py-7 rounded-3xl space-y-5 grayscale-[85%]
                    hover:grayscale-0 hover:bg-primaryColor border border-transparent
                     hover:border-primaryColorLight duration-300'>
                        <img src={react} alt="react" className='max-w-16' />
                        <p className='text-2xl font-bold text-primaryColorLight'>92%</p>
                    </div>
                    <p className='text-center text-primaryColorLight mt-3 capitalize'>react</p>
                </div>

                {/* tailwind icon */}
                <div className='skills_card max-w-44 w-full'>
                    <div className='bg-sectionColor dark:bg-darkSectionColor grid
                    place-items-center px-4 py-7 rounded-3xl space-y-5 grayscale-[85%]
                    hover:grayscale-0 hover:bg-primaryColor border border-transparent
                     hover:border-primaryColorLight duration-300'>
                        <img src={tailwind} alt="tailwind" className='max-w-16' />
                        <p className='text-2xl font-bold text-primaryColorLight'>92%</p>
                    </div>
                    <p className='text-center text-primaryColorLight mt-3 capitalize'>tailwind css</p>
                </div>

                {/* Bootstrap */}
                <div className='skills_card max-w-44 w-full'>
                    <div className='bg-sectionColor dark:bg-darkSectionColor grid
                    place-items-center px-4 py-7 rounded-3xl space-y-5 grayscale-[85%]
                    hover:grayscale-0 hover:bg-primaryColor border border-transparent
                     hover:border-primaryColorLight duration-300'>
                        <img src={bootstrap} alt="bootstrap" className='max-w-16' />
                        <p className='text-2xl font-bold text-primaryColorLight'>92%</p>
                    </div>
                    <p className='text-center text-primaryColorLight mt-3 capitalize'>bootstrap</p>
                </div>

                {/* javascript icon */}
                <div className='skills_card max-w-44 w-full'>
                    <div className='bg-sectionColor dark:bg-darkSectionColor grid
                    place-items-center px-4 py-7 rounded-3xl space-y-5 grayscale-[85%]
                    hover:grayscale-0 hover:bg-primaryColor border border-transparent
                     hover:border-primaryColorLight duration-300'>
                        <img src={js} alt="js" className='max-w-16' />
                        <p className='text-2xl font-bold text-primaryColorLight'>92%</p>
                    </div>
                    <p className='text-center text-primaryColorLight mt-3 capitalize'>javascript</p>
                </div>

                {/* node icon */}
                <div className='skills_card max-w-44 w-full'>
                    <div className='bg-sectionColor dark:bg-darkSectionColor grid
                    place-items-center px-4 py-7 rounded-3xl space-y-5 grayscale-[85%]
                    hover:grayscale-0 hover:bg-primaryColor border border-transparent
                     hover:border-primaryColorLight duration-300'>
                        <img src={node} alt="node" className='max-w-16' />
                        <p className='text-2xl font-bold text-primaryColorLight'>92%</p>
                    </div>
                    <p className='text-center text-primaryColorLight mt-3 capitalize'>node</p>
                </div>

                {/* express icon  */}
                <div className='skills_card max-w-44 w-full'>
                    <div className='bg-sectionColor dark:bg-darkSectionColor grid
                    place-items-center px-4 py-7 rounded-3xl space-y-5 grayscale-[85%]
                    hover:grayscale-0 hover:bg-primaryColor border border-transparent
                     hover:border-primaryColorLight duration-300'>
                        <img src={express} alt="express" className='max-w-16' />
                        <p className='text-2xl font-bold text-primaryColorLight'>92%</p>
                    </div>
                    <p className='text-center text-primaryColorLight mt-3 capitalize'>express</p>
                </div>


                {/* mongodb icon */}
                <div className='skills_card max-w-44 w-full'>
                    <div className='bg-sectionColor dark:bg-darkSectionColor grid
                    place-items-center px-4 py-7 rounded-3xl space-y-5 grayscale-[85%]
                    hover:grayscale-0 hover:bg-primaryColor border border-transparent
                     hover:border-primaryColorLight duration-300'>
                        <img src={mongodb} alt="mongodb" className='max-w-16' />
                        <p className='text-2xl font-bold text-primaryColorLight'>92%</p>
                    </div>
                    <p className='text-center text-primaryColorLight mt-3 capitalize'>mongodb</p>
                </div>


                {/* redux */}
                <div className='skills_card max-w-44 w-full'>
                    <div className='bg-sectionColor dark:bg-darkSectionColor grid
                    place-items-center px-4 py-7 rounded-3xl space-y-5 grayscale-[85%]
                    hover:grayscale-0 hover:bg-primaryColor border border-transparent
                     hover:border-primaryColorLight duration-300'>
                        <img src={redux} alt="redux" className='max-w-16' />
                        <p className='text-2xl font-bold text-primaryColorLight'>92%</p>
                    </div>
                    <p className='text-center text-primaryColorLight mt-3 capitalize'>redux toolkit</p>
                </div>   

            </div>
        </section>
    )
}

export default Skills