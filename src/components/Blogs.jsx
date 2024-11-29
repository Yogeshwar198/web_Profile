import React from 'react'
import blog1 from '../assets/blog-1.jpg'
import blog2 from '../assets/blog-2.jpg'
import blog3 from '../assets/blog-3.jpg'

const Blogs = () => {
    return (
        <section id='blogs' className="bg-sectionColor dark:bg-darkSectionColor">
            <div className='container'>
                <div className='blog_top flex flex-col items-center gap-5 text-center'>
                    <h2 className='subtitle'>Recent Blogs</h2>
                    <p className='max-w-2xl'>We transform your ideas and desires into a distinctive web project that inspires both you and your customers.</p>
                </div>

                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 px-5'>

                    {/* blog card 1  */}
                    <div className='blog_card relative overflow-hidden rounded-3xl cursor-pointer'>
                        <img src={blog1} alt="recent-blog" />
                        <p className='absolute top-3 left-3 uppercase text-sm bg-primaryColorLight
                        text-whiteColor py-1 px-3 rounded-full'>tutorial</p>

                        <div className='blog_card_info absolute left-0 right-0 bottom-0 bg-whiteColor
                         dark:bg-primaryColor mx-4 my-3 rounded-2xl space-y-1 p-3'>
                            <div className='text-primaryColorLight flex items-center gap-3 text-sm'>
                                <p>Oct 01, 2022</p>
                                <p><i className="fa-regular fa-calendar-days"></i> Comment (0)</p>
                            </div>

                            <p className='text-xl font-bold capitalize'>top 10 ui ux designers</p>
                        </div>
                    </div>

                    {/* blog card 2  */}
                    <div className='blog_card relative overflow-hidden rounded-3xl cursor-pointer'>
                        <img src={blog2} alt="recent-blog" />
                        <p className='absolute top-3 left-3 uppercase text-sm bg-primaryColorLight
                        text-whiteColor py-1 px-3 rounded-full'>tips</p>

                        <div className='blog_card_info absolute left-0 right-0 bottom-0 bg-whiteColor
                         dark:bg-primaryColor mx-4 my-3 rounded-2xl space-y-1 p-3'>
                            <div className='text-primaryColorLight flex items-center gap-3 text-sm'>
                                <p>Oct 01, 2022</p>
                                <p><i className="fa-regular fa-calendar-days"></i> Comment (0)</p>
                            </div>

                            <p className='text-xl font-bold capitalize'>Mern Development Guides</p>
                        </div>
                    </div>

                    {/* blog card 3  */}
                    <div className='blog_card relative overflow-hidden rounded-3xl cursor-pointer'>
                        <img src={blog3} alt="recent-blog" />
                        <p className='absolute top-3 left-3 uppercase text-sm bg-primaryColorLight
                        text-whiteColor py-1 px-3 rounded-full'>freebies</p>

                        <div className='blog_card_info absolute left-0 right-0 bottom-0 bg-whiteColor
                         dark:bg-primaryColor mx-4 my-3 rounded-2xl space-y-1 p-3'>
                            <div className='text-primaryColorLight flex items-center gap-3 text-sm'>
                                <p>Oct 01, 2022</p>
                                <p><i className="fa-regular fa-calendar-days"></i> Comment (0)</p>
                            </div>

                            <p className='text-xl font-bold capitalize'>Learn Frontend Development Free</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Blogs