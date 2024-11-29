import React from 'react'

const Contact = () => {
    return (
        <section className='container' id='contact'>
            <div className='flex flex-col md:flex-row-reverse gap-16 md:gap-5 md:items-center'>
                {/* contant  */}
                <div className='flex-1 space-y-7 md:space-y-10 lg:pl-20 xl:pl-40'>
                    <div className='flex items-start gap-4 '>
                        <div className='text-whiteColor bg-gradient-to-b from-primaryColor to-primaryColorLight 
                        h-10 w-10 lg:h-14 lg:w-14 rounded-full grid place-items-center'>
                            <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className='space-y-1'>
                            <p className='text-sm'>Phone</p>
                            <p className='font-bold hover:text-primaryColorLight duration-300 cursor-pointer'>
                                +91-6386049286</p>
                        </div>
                    </div>

                    <div className='contact_item flex items-start gap-4 '>
                        <div className='text-whiteColor bg-gradient-to-b from-primaryColor to-primaryColorLight 
                        h-10 w-10 lg:h-14 lg:w-14 rounded-full grid place-items-center'>
                            <i className="fa-regular fa-envelope"></i>
                        </div>
                        <div className='space-y-1'>
                            <p className='text-sm'>Email</p>
                            <p className='font-bold hover:text-primaryColorLight duration-300 cursor-pointer'>
                                yogeshwaredu198@gmail.com</p>
                        </div>
                    </div>

                    <div className='contact_item flex items-start gap-4 '>
                        <div className='text-whiteColor bg-gradient-to-b from-primaryColor to-primaryColorLight 
                        h-10 w-10 lg:h-14 lg:w-14 rounded-full grid place-items-center'>
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className='contact_item space-y-1'>
                            <p className='text-sm'>Address</p>
                            <p className='font-bold hover:text-primaryColorLight duration-300 cursor-pointer'>
                                India</p>
                        </div>
                    </div>


                </div>

                {/* contact form  */}
                <form className='contact_form flex-1 bg-sectionColor dark:bg-darkSectionColor border border-primaryColor px-5 
                py-10 rounded-3xl space-y-3'>
                    {/* subtitle & description  */}
                    <div className='flex flex-col'>
                        <h2 className='subtitle'>Let’s work together!</h2>
                        <p className='max-w-2xl py-3'>I create elegantly simple designs and code with passion. It's as straightforward as that!</p>
                    </div>

                    <div className="space-y-3 mt-7">
                        <div className='flex flex-col md:flex-row items-center gap-3'>
                            <input type="text" placeholder='First name' name='firstname' autoComplete='off' />
                            <input type="text" placeholder='Last name' name='lastname' autoComplete='off' />
                        </div>
                        <div className='flex flex-col md:flex-row items-center gap-3'>
                            <input type="email" placeholder='Email Address' name='email' autoComplete='off' />
                            <input type="phone" placeholder='Phone nunber' name='phone' autoComplete='off' />
                        </div>
                    </div>

                    <select>
                        <option selected>Choose a service</option>
                        <option value="Branding">MERN Developer</option>
                        <option value="Web">React Developer</option>
                        <option value="UIUX">UI/UX Design</option>
                        <option value="App">Frontend Development</option>
                    </select>

                    <div className='space-y-3'>
                        <textarea name="message" rows="5" placeholder='Message'></textarea>
                        <button className='btn'>
                            <span className='z-10'>send message</span>
                        </button>
                    </div>

                </form>
            </div>
        </section>
    )
}

export default Contact