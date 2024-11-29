import React from 'react'

const Services = () => {
    return (
        <section id='quality_services' className='bg-sectionColor dark:bg-darkSectionColor'>
            <div className='container'>
                <div className='service_top flex flex-col items-center gap-5 text-center'>
                    <h2 className='subtitle'>My Quality Services</h2>
                    <p className='max-w-2xl'>We transform your ideas and desires into a distinctive web project that inspires both you and your customers.</p>
                </div>

                {/* list section  */}
                <div className='my-10'>

                    {/* item - 1  */}
                    <div className='service__item'>
                        <div className='text-xl font-bold flex items-center gap-3 md:text-2xl md:w-[40%]'>
                            <p className='text-primaryColorLight  hover:text-whiteColor'>01</p>
                            <p>MERN Development</p>
                        </div>

                        <div className='ml-auto text-2xl origin-center rotate-45 md:order-last'>
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </div>

                        <div className='md:max-w-[330px] lg:max-w-md xl:max-w-lg'>
                            <p>I dissect complex user experience challenges to devise solutions that prioritize integrity.</p>
                        </div>


                    </div>

                    {/* item - 2  */}
                    <div className='service__item'>
                        <div className='text-xl font-bold flex items-center gap-3 md:text-2xl md:w-[40%]'>
                            <p className='text-primaryColorLight  hover:text-whiteColor'>02</p>
                            <p>Web Design</p>
                        </div>

                        <div className='ml-auto text-2xl origin-center rotate-45 md:order-last'>
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </div>

                        <div className='md:max-w-[330px] lg:max-w-md xl:max-w-lg'>
                            <p>I dissect complex user experience challenges to devise solutions that prioritize integrity.</p>
                        </div>


                    </div>

                    {/* item - 3  */}
                    <div className='service__item'>
                        <div className='text-xl font-bold flex items-center gap-3 md:text-2xl md:w-[40%]'>
                            <p className='text-primaryColorLight  hover:text-whiteColor'>03</p>
                            <p>UI/UX Design</p>
                        </div>

                        <div className='ml-auto text-2xl origin-center rotate-45 md:order-last'>
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </div>

                        <div className='md:max-w-[330px] lg:max-w-md xl:max-w-lg'>
                            <p>I dissect complex user experience challenges to devise solutions that prioritize integrity.</p>
                        </div>


                    </div>

                    {/* item - 4  */}
                    <div className='service__item'>
                        <div className='text-xl font-bold flex items-center gap-3 md:text-2xl md:w-[40%]'>
                            <p className='text-primaryColorLight  hover:text-whiteColor'>04</p>
                            <p>Frontend Development</p>
                        </div>

                        <div className='ml-auto text-2xl origin-center rotate-45 md:order-last'>
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </div>

                        <div className='md:max-w-[330px] lg:max-w-md xl:max-w-lg'>
                            <p>I dissect complex user experience challenges to devise solutions that prioritize integrity.</p>
                        </div>


                    </div>

                </div>
            </div>

        </section>
    )
}

export default Services