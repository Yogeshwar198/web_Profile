import React from 'react'

const ExperianceEducation = () => {
    return (
        <section id='exp_edu' className='bg-sectionColor dark:bg-darkSectionColor'>
            <div className='container w-full grid grid-cols-1 md:grid-cols-2 gap-10'>
                {/* experiance  */}
                <div>
                    <div className='exp_top flex items-center gap-3'>
                        <div className='text-2xl text-primaryColorLight md:text-3xl lg:text-4xl'>
                            <i className="fa-solid fa-medal"></i>
                        </div>

                        <h2 className='subtitle'>Experience</h2>
                    </div>

                    <div className='my-10 space-y-5 md:space-y-10 '>
                        {/* card 1  */}
                        <div className='exp_card exp_edu_card bg-whiteColor
                         dark:bg-darkBodyColor p-5 rounded-2xl hover:bg-primaryColorLight 
                         dark:hover:bg-primaryColorLight duration-300'>
                            <p className='text-primaryColorLight text-sm font-bold pb-3'>2023-2024</p>
                            <p className='text-xl font-bold uppercase lg:text-2xl xl:text-3xl'>full stack web developer</p>
                            <p>UIETH</p>
                        </div>

                        {/* card 2  */}
                        <div className='exp_card exp_edu_card bg-whiteColor
                         dark:bg-darkBodyColor p-5 rounded-2xl hover:bg-primaryColorLight 
                         dark:hover:bg-primaryColorLight duration-300'>
                            <p className='text-primaryColorLight text-sm font-bold pb-3'>Jan-present</p>
                            <p className='text-xl font-bold uppercase lg:text-2xl xl:text-3xl'>MERN Developer</p>
                            <p>Mohali</p>
                        </div>

                        {/* card 3  */}
                        <div className='exp_card exp_edu_card bg-whiteColor
                         dark:bg-darkBodyColor p-5 rounded-2xl hover:bg-primaryColorLight 
                         dark:hover:bg-primaryColorLight duration-300'>
                            <p className='text-primaryColorLight text-sm font-bold pb-3'>Jan-Present</p>
                            <p className='text-xl font-bold uppercase lg:text-2xl xl:text-3xl'>React Developer</p>
                            <p>Personal Projects</p>
                        </div>

                        {/* card 4  */}
                        <div className='exp_card exp_edu_card bg-whiteColor
                         dark:bg-darkBodyColor p-5 rounded-2xl hover:bg-primaryColorLight 
                         dark:hover:bg-primaryColorLight duration-300'>
                            <p className='text-primaryColorLight text-sm font-bold pb-3'>2023-Present</p>
                            <p className='text-xl font-bold uppercase lg:text-2xl xl:text-3xl'>Frontend Developer</p>
                            <p>Virtual Training</p>
                        </div>

                        {/* card 5  */}

                        <div className='exp_card exp_edu_card bg-whiteColor
                         dark:bg-darkBodyColor p-5 rounded-2xl hover:bg-primaryColorLight 
                         dark:hover:bg-primaryColorLight duration-300'>
                            <p className='text-primaryColorLight text-sm font-bold pb-3'>2023-present</p>
                            <p className='text-xl font-bold uppercase lg:text-2xl xl:text-3xl'>ui designer</p>
                            <p>Remote Learning</p>
                        </div>


                    </div>
                </div>


                {/* education */}
                <div>
                    <div className='edu_top flex items-center gap-3'>
                        <div className='text-2xl text-primaryColorLight md:text-3xl lg:text-4xl'>
                            <i className="fa-solid fa-graduation-cap"></i>
                        </div>

                        <h2 className='subtitle'>Education</h2>
                    </div>

                    <div className='my-10 space-y-5 md:space-y-10 '>
                        {/* card 1  */}
                        <div className='edu_card exp_edu_card bg-whiteColor
                         dark:bg-darkBodyColor p-5 rounded-2xl hover:bg-primaryColorLight 
                         dark:hover:bg-primaryColorLight duration-300'>
                            <p className='text-primaryColorLight text-sm font-bold pb-3'>2020-2024</p>
                            <p className='text-xl font-bold uppercase lg:text-2xl xl:text-3xl'>bachelor of engineering(IT)</p>
                            <p>UIETH</p>
                        </div>

                        {/* card 2  */}
                        <div className='edu_card exp_edu_card bg-whiteColor
                         dark:bg-darkBodyColor p-5 rounded-2xl hover:bg-primaryColorLight 
                         dark:hover:bg-primaryColorLight duration-300'>
                            <p className='text-primaryColorLight text-sm font-bold pb-3'>2020-2024</p>
                            <p className='text-xl font-bold uppercase lg:text-2xl xl:text-3xl'>bachelor of engineering(IT)</p>
                            <p>UIETH</p>
                        </div>

                        {/* card 3  */}
                        <div className='edu_card exp_edu_card bg-whiteColor
                         dark:bg-darkBodyColor p-5 rounded-2xl hover:bg-primaryColorLight 
                         dark:hover:bg-primaryColorLight duration-300'>
                            <p className='text-primaryColorLight text-sm font-bold pb-3'>2020-2024</p>
                            <p className='text-xl font-bold uppercase lg:text-2xl xl:text-3xl'>bachelor of engineering(IT)</p>
                            <p>UIETH</p>
                        </div>

                        {/* card 4  */}
                        <div className='edu_card exp_edu_card bg-whiteColor
                         dark:bg-darkBodyColor p-5 rounded-2xl hover:bg-primaryColorLight 
                         dark:hover:bg-primaryColorLight duration-300'>
                            <p className='text-primaryColorLight text-sm font-bold pb-3'>2020-2024</p>
                            <p className='text-xl font-bold uppercase lg:text-2xl xl:text-3xl'>bachelor of engineering(IT)</p>
                            <p>UIETH</p>
                        </div>

                        {/* card 5  */}
                        <div className='edu_card exp_edu_card bg-whiteColor
                         dark:bg-darkBodyColor p-5 rounded-2xl hover:bg-primaryColorLight 
                         dark:hover:bg-primaryColorLight duration-300'>
                            <p className='text-primaryColorLight text-sm font-bold pb-3'>2020-2024</p>
                            <p className='text-xl font-bold uppercase lg:text-2xl xl:text-3xl'>bachelor of engineering(IT)</p>
                            <p>UIETH</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExperianceEducation