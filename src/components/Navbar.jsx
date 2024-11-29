import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import logo_white from '../assets/logo_white.png'

const Navbar = () => {

  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("mode") === "dark";
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("mode", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <header id="navbar" className="sticky top-0 z-50 duration-300">
      <nav className="relative container flex justify-between items-center">
        <div className="py-5">
          {/* <img src={logo} alt="logo" id="logo" className="w-10 md:w-14" />
          <img src={logo_white} alt="white-logo" className="w-10 hidden md:w-14" /> */}
           <img
            src={isDarkMode ? logo : logo_white}
            alt="logo"
            className="w-10 md:w-14"
          />
        </div>


        <div
          id="nav-menu"
          className={`absolute top-0 left-0 bg-primaryColor w-full py-24 transition-transform 
            lg:bg-transparent lg:static lg:py-0 lg:border-none lg:w-auto lg:ml-auto
            ${menuOpen ? "translate-x-0" : "-translate-x-[100vw] lg:translate-x-0"
            }`}
        >
          <ul onClick={() => setMenuOpen(false)} className="flex flex-col items-center text-center gap-8 lg:flex-row lg:gap-5">
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
            <li>
              <a href="#contact" className="btn ml-10">
                <span className="z-10">Hire Me!</span>
              </a>
            </li>
          </ul>
          <div onClick={() => setMenuOpen(false)} id="nav-close" className="absolute top-6 right-3 md:right-8 text-whiteColor
           text-3xl cursor-pointer lg:hidden">
            <i className="ri-close-line"></i>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme}>
            <i className={`ri-${isDarkMode ? "sun" : "moon"}-line ml-4 text-2xl`} id="theme-toggle"></i>
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
            <i className="ri-menu-2-line text-2xl" id="hamburger"></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;



// const scrollHeader = () => {
//   const navbar = document.getElementById("navbar");
//   const aTag = document.querySelectorAll("nav ul li a");
//   const themeToggle = document.getElementById("theme-toggle");
//   const hamburger = document.getElementById("hamburger");
//   const logo = document.getElementById("logo");
//   const whiteLogo = document.getElementById("white-logo");

//   if (this.scrollY >= 200) {
//     navbar.classList.add("bg-primaryColor")
//     aTag.forEach((item) => {
//       item.classList.add("text-whiteColor")
//     })

//     themeToggle.classList.add("text-whiteColor")
//     hamburger.classList.add("text-whiteColor")
//   } else {
//     navbar.classList.remove("bg-primaryColor")
//     aTag.forEach((item) => {
//       item.classList.remove("text-whiteColor")
//     })
//     themeToggle.classList.remove("text-whiteColor")
//     hamburger.classList.remove("text-whiteColor")
//   }
// }

// window.addEventListener("scroll", scrollHeader);

// const activeLink = () => {
//   const sections = document.querySelectorAll("section");
//   const navLinks = document.querySelectorAll(".nav_link");

//   let current = "hero";
//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;

//     if (this.scrollY >= sectionTop - 60) {
//       current = section.getAttribute("id");

//     }
//   });
//   navLinks.forEach(item => {
//     item.classList.remove('active');
//     if (item.href.includes(current)) {
//       item.classList.add('active')
//     }
//   })
// }

// window.addEventListener("scroll", activeLink)


// const html = document.querySelector("html");
// const themeBtn = document.getElementById("theme-toggle");

// if(localStorage.getItem("mode") == "dark"){
//   darkMode();
// }else{
//   lightMode();
// }

// themeBtn.addEventListener("click",(e)=>{
//   if (localStorage.getItem("mode")=="light") {
//     darkMode()
//   }else{
//     lightMode()
//   }
// })

// function darkMode(){
//   html.classList.add("dark")
//   themeBtn.classList.replace("ri-moon-line","ri-sun-line");
//   localStorage.setItem("mode","dark")
// }

// function lightMode(){
//   html.classList.add("dark")
//   themeBtn.classList.replace("ri-sun-line","ri-moon-line");
//   localStorage.setItem("dark","mode")
// }