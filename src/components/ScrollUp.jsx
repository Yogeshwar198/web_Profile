import React, { useEffect, useState } from 'react';

const ScrollUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 250) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <a
            href="#"
            id="scroll-up"
            className={`fixed right-10 ${
                isVisible ? 'bottom-4' : '-bottom-1/2'
            } bg-primaryColor px-4 py-2 rounded-full text-lg text-whiteColor z-50 hover:-translate-y-1 ease-in duration-200`}
        >
            <i className="fa-solid fa-arrow-up"></i>
        </a>
    );
};

export default ScrollUp;




// const scrollUp = () => {
//     const scrollUpBtn = document.getElementById('sroll-up')
//     if (this.scrollY >= 250) {
//         scrollUpBtn.classList.remove("-bottom-1/2");
//         scrollUpBtn.classList.add("bottom-4");
//     } else {
//         scrollUpBtn.classList.add("-bottom-1/2");
//         scrollUpBtn.classList.remove("bottom-4");
//     }
// };

// window.addEventListener("scroll", scrollUp)