import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <footer id='footer' className='bg-sectionColor dark:bg-darkSectionColor py-10'>
            <div className='container flex flex-col items-center gap-5'>
                <div className='py-5'>
                    <img src={logo} alt="footer logo" className='w-32' />
                </div>

                <div>
                    <ul className='flex flex-wrap justify-center items-center space-x-3 '>
                        <li>
                            <a href="#quality_services" className="nav-link"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#recent_works" className="nav-link">
                                Works
                            </a>
                        </li>
                        <li>
                            <a href="#exp_edu" className="nav-link">
                                Resume
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="nav-link">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#blogs" className="nav-link">
                                Blogs
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="nav-link">
                                Contact
                            </a>
                        </li>

                    </ul>
                </div>

                <div className='text-primaryColorLight'>
                    <p>&copy; 2024 All rights reserved by <span className='font-bold'>YogeshwarSingh</span></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer