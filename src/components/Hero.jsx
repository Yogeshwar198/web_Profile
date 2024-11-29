import React from 'react'
import person from '../assets/person.jpg'
import resume from '../assets/Resume.pdf'

const Hero = () => {
    return (
        <main>
            <section id='hero' className='relative py-5'>
                <div className='absolute right-0 top-[-20%] w-80 h-80 bg-primaryColorLight mix-blend-screen 
                rounded-full blur-[150px] opacity-50'></div>

                <div className='container'>
                    <div className='hidden md:block absolute top-0 left-[30%] lg:left-[35%] animation-scaleAnimation'>
                        <p className='font-Londrina text[400px] lg:text-[450px]
                         text-primaryColorLight uppercase -z-10 opacity-5'>hi</p>

                    </div>
                    {/* hero content  */}
                    <div className='hero__content flex items-center gap-5'>
                        <div className='space-y-2 md:w-1/2'>
                            <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold'>I am Yogeshwar Singh</h3>
                            <h1>
                                <span className='title'>Web Developer +</span>
                                <br />
                                <span className='title'>UX Designer</span>
                            </h1>

                            <div className='relative flex justify-center md:hidden'>
                                <div
                                    className='absolute left-0 bottom-0 w-80 h-80 bg-primaryColorLight mix-blend-screen 
                                    rounded-full blur-[150px] opacity-50'
                                ></div>

                                <img src={person} alt="person"
                                    className='my-10 max-w-[90%] duration-300 origin-center rotate-[4.5deg] border-2
                                border-primaryColor rounded-[38px] hover:rotate-0 hover:border-primaryColorLight'
                                />
                            </div>


                            <p className='max-w-xl text-xl pb-5'>I dissect intricate user experience issues to craft solutions focused on integrity, linking billions of individuals.</p>

                            <div className='flex items-center flex-wrap gap-5'>
                                <a href={resume} target="_blank" className='btn_outline'>Download CV
                                    <i className="fa-solid fa-download"></i>
                                </a>

                                <div className='flex items-center gap-5'>
                                    <a href='https://x.com/?lang=en' target="_blank" className='social-icon'>
                                        <i className="fa-brands fa-twitter z-10"></i>
                                    </a>

                                    <a href='https://www.linkedin.com/in/yogeshwar-singh-27a676281' target="_blank" className='social-icon'>
                                        <i className="fa-brands fa-linkedin-in z-10"></i>
                                    </a>

                                    <a href='https://www.youtube.com/' target="_blank" className='social-icon'>
                                        <i className="fa-brands fa-youtube z-10"></i>
                                    </a>

                                    <a href='https://github.com/Yogeshwar198' target="_blank" className='social-icon'>
                                        <i className="fa-brands fa-github z-10"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* hero image  */}
                        <div className='hero__img relative hidden md:w-1/2 md:flex justify-center'>
                            <div
                                className='absolute left-0 bottom-0 w-80 h-80 bg-primaryColorLight mix-blend-screen 
                                    rounded-full blur-[150px] opacity-50'
                            ></div>

                            <img src={person} alt="person"
                                className='my-10 md:w-full lg:max-w-[80%] duration-300 origin-center rotate-[4.5deg] border-2
                                border-primaryColor rounded-[38px] hover:rotate-0 hover:border-primaryColorLight'
                            />
                        </div>
                    </div>

                    {/* hero footer  */}
                    <div className='hero__footer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-10'>
                        <div className='flex items-center gap-3'>
                            <p className='text-5xl lg:text-6xl font-bold'>1.5</p>
                            <p>
                                Years of <br /> Experience
                            </p>
                        </div>

                        <div className='flex items-center gap-3'>
                            <p className='text-5xl lg:text-6xl font-bold'>40+</p>
                            <p>
                                Project <br /> Completed
                            </p>
                        </div>

                        <div className='flex items-center gap-3'>
                            <p className='text-5xl lg:text-6xl font-bold'>15</p>
                            <p>
                                Project <br /> Feedback
                            </p>
                        </div>

                        <div className='flex items-center gap-3'>
                            <p className='text-5xl lg:text-6xl font-bold'>1.5</p>
                            <p>
                                Years of <br /> Experience
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )
}

export default Hero