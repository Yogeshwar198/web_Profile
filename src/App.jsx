import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import ExperianceEducation from './components/ExperianceEducation'
import Skills from './components/Skills'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollUp from './components/ScrollUp'

const App = () => {

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
      // reset: true,
    });
    sr.reveal(".hero__img");
    sr.reveal(".hero__content", { origin: "bottom" });
    sr.reveal(".hero__footer", { origin: "bottom", delay: 1200 });

    sr.reveal(".service_top", { origin: "bottom" });
    sr.reveal(".service_item", { origin: "bottom", delay: 300 });

    sr.reveal(".recent_work_top", { origin: "bottom" });
    sr.reveal(".recent_work_tabs", { origin: "bottom", delay: 800 });
    sr.reveal(".work_card", { origin: "bottom", delay: 1200 });

    sr.reveal(".exp_top", { origin: "top" });
    sr.reveal(".exp_card", { origin: "left", interval: 300 });

    sr.reveal(".edu_top", { origin: "top" });
    sr.reveal(".edu_card", { origin: "right", interval: 300 });


    sr.reveal(".skills_top", { origin: "bottom" });
    sr.reveal(".skills_card", { origin: "bottom", interval: 300 });

    sr.reveal(".blog_top", { origin: "top" });
    sr.reveal(".blog_card", { origin: "top", interval: 300 });

    sr.reveal(".contact_form", { origin: "left" });
    sr.reveal(".contact_item", { origin: "right", interval: 300 });
  },[])
  
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <ExperianceEducation />
      <Skills />
      <Blogs />
      <Contact />
      <Footer />
      <ScrollUp />
    </div>
  )
}

export default App