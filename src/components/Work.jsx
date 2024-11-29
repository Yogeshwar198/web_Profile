import React, { useEffect, useRef, useState } from 'react';
import project1 from '../assets/project-1.jpg';
import project2 from '../assets/project-2.jpg';
import project3 from '../assets/project-3.jpg';
import project4 from '../assets/project-4.jpg';
import project5 from '../assets/project-5.jpg';

const Work = () => {
  const tabsRef = useRef([]);
  const indicatorRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  const works = [
    { id: 1, category: 'uiux', image: project1 },
    { id: 2, category: 'uiux', image: project2 },
    { id: 3, category: 'uiux', image: project3 },
    { id: 4, category: 'branding', image: project4 },
    { id: 5, category: 'app', image: project5 },
  ];

  const categories = ['all', 'uiux', 'branding', 'app'];

  useEffect(() => {
    // Update indicator position and size
    const updateIndicator = () => {
      const tab = tabsRef.current[activeTab];
      const indicator = indicatorRef.current;

      if (tab && indicator) {
        const tabRect = tab.getBoundingClientRect();
        const parentRect = tab.parentElement.getBoundingClientRect();

        indicator.style.width = `${tabRect.width}px`;
        indicator.style.left = `${tabRect.left - parentRect.left}px`;
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);

    return () => {
      window.removeEventListener('resize', updateIndicator);
    };
  }, [activeTab]);

  // Filter works based on the active tab
  const filteredWorks =
    activeTab === 0
      ? works // Show all works for "All" tab
      : works.filter((work) => work.category === categories[activeTab]);

  return (
    <section id='recent_works' className='container'>
      <div className='recent_work_top flex flex-col items-center gap-5 text-center'>
        <h2 className='subtitle'>My Recent Works</h2>
        <p className='max-w-2xl'>
          We transform your ideas and desires into a distinctive web project that inspires both you and your customers.
        </p>
      </div>

      <div
        className='recent_work_tabs relative w-max mx-auto my-10 h-10 text-xs grid grid-cols-4
        items-center px-[3px] rounded-full bg-sectionColor dark:bg-darkSectionColor 
        border border-primaryColor overflow-hidden transition md:h-12 md:text-base'
      >
        {/* Indicator */}
        <div
          ref={indicatorRef}
          className='indicator absolute h-9 my-auto top-0 bottom-0
          left-0 rounded-full bg-primaryColorLight md:h-11'
        ></div>

        {['All', 'MERN', 'React','UX/UI'].map((label, index) => (
          <button
            key={index}
            ref={(el) => (tabsRef.current[index] = el)}
            className={`tab relative block h-8 px-3 rounded-full md:h-10 md:px-6 ${activeTab === index ? 'text-whiteColor' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className='mt-6 relative rounded-3xl'>
        {/* Blob effect */}
        <div
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          w-80 h-80 bg-primaryColorLight mix-blend-screen rounded-full blur-[150px] opacity-50'
        ></div>

        <ul className='grid grid-cols-1 gap-5 lg:gap-10 md:grid-cols-2'>
          {filteredWorks.map((work) => (
            <li
              key={work.id}
              className={`work_card ${work.category} relative bg-sectionColor dark:bg-darkSectionColor p-5
              rounded-2xl border border-transparent hover:border-primaryColor duration-300 overflow-hidden lg:p-8`}
            >
              <img src={work.image} alt="recent works" className='w-full' />

              <div
                className='absolute left-0 right-0 bottom-[-100%] p-5 lg:p-8 transition-all duration-300 hover:bottom-0'
              >
                <div
                  className='flex items-center justify-between bg-gradient-to-r from-primaryColor
                  to-primaryColor text-whiteColor p-5 rounded-t-2xl'
                >
                  <div>
                    <p className='text-2xl font-bold lg:text-3xl'>Design</p>
                    <p>I analyze intricate user experience</p>
                  </div>

                  <div className='text-2xl rotate-45'>
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Work;






// let tabs = document.querySelectorAll('.tab');
// let indicator = document.querySelector('.indicator');
// const all = document.querySelectorAll(".work_card");
// const uiux = document.querySelectorAll(".uiux");
// const apps = document.querySelectorAll(".app");
// const brandings = document.querySelectorAll(".branding");

// indicator.style.width = tabs[0].getBoundingClientRect().width + "px";
// indicator.style.left = tabs[0].getBoundingClientRect().left + tabs[0].parentElement.getBoundingClientRect().left + "px";

// tabs.forEach((tab) => {
//     tab.addEventListener("click", () => {
//         indicator.style.width = tab.getBoundingClientRect().width + "px";
//         indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + "px";
//         tabs.forEach(t => t.classList.remove("text-whiteColor"));
//         tab.classList.add("text-whiteColor");


//         const tabval = tab.getAttribute("data-tab");

//         all.forEach(item => {
//             item.style.display = "none"
//         });

//         if (tabval == "uiux") {
//             uiux.forEach(item => {
//                 item.style.display = "block"
//             });
//         } else if (tabval == "branding") {
//             brandings.forEach(item => {
//                 item.style.display = "block"
//             });
//         } else if (tabval == "app") {

//             apps.forEach(item => {
//                 item.style.display = "block"
//             });
//         }else{
//             all.forEach(item => {
//                 item.style.display = "block"
//             });
//         }
//     })
// })