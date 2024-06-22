


// import React, { useEffect } from 'react';

// const Navbar = ({ darkMode, toggleDarkMode }) => {
//   useEffect(() => {
//     const navMenu = document.getElementById("nav-menu");
//     const navLinks = document.querySelectorAll(".nav_link");
//     const closeIcon = document.getElementById("nav-close");
//     const hamburger = document.getElementById("hamburger");

//     const handleNavLinkClick = () => {
//       if (navMenu) {
//         navMenu.classList.add("hidden");
//       }
//     };

//     const handleNavClose = () => {
//       if (navMenu) {
//         navMenu.classList.add("hidden");
//       }
//     };

//     const handleHamburgerClick = () => {
//       if (navMenu) {
//         navMenu.classList.remove("hidden");
//       }
//     };

//     navLinks.forEach((link) => {
//       link.addEventListener("click", handleNavLinkClick);
//     });

//     if (closeIcon) {
//       closeIcon.addEventListener('click', handleNavClose);
//     }

//     if (hamburger) {
//       hamburger.addEventListener('click', handleHamburgerClick);
//     }

//     return () => {
//       navLinks.forEach((link) => {
//         link.removeEventListener("click", handleNavLinkClick);
//       });

//       if (closeIcon) {
//         closeIcon.removeEventListener('click', handleNavClose);
//       }

//       if (hamburger) {
//         hamburger.removeEventListener('click', handleHamburgerClick);
//       }
//     };
//   }, []);

//   // Change background color of navbar on scroll
//   const scrollHeader = () => {
//     const navbar = document.getElementById("navbar");
//     const aTags = document.querySelectorAll("nav ul li a");
//     const themeToggle = document.getElementById("theme-toggle");
//     const hamburger = document.getElementById("hamburger");
//     const logo = document.getElementById("logo");

//     if (window.scrollY >= 200) {
//       navbar.classList.add("bg-PrimaryColor");
//       aTags.forEach((aTag) => {
//         aTag.classList.add("text-white");
//       });

//       if (themeToggle) {
//         themeToggle.classList.add("text-PrimaryColor");
//       };

//      if(hamburger){
//       hamburger.classList.add("text-whiteColor");
//      };

//     } else {
//       navbar.classList.remove("bg-PrimaryColor");
//       aTags.forEach((aTag) => {
//         aTag.classList.remove("text-white");
//       });
//       if (themeToggle) {
//         themeToggle.classList.remove("text-PrimaryColor");
//       };

//       if (hamburger){
//         hamburger.classList.remove("text-whiteColor");
//        };
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', scrollHeader);

//     return () => {
//       window.removeEventListener('scroll', scrollHeader);
//     };
//   }, []);

//   return (
//     <header id="navbar" className="sticky top-0 z-50 duration-300">
//       <nav className="container relative flex items-center justify-between">
//         <div className='py-5'>
//           <img src="white-logo1.png" alt="logo" className="w-14" />
//           <img src="white-logo.jpg" alt="logo" className="hidden w-10 md:w-14" />
//         </div>

//         <div id="nav-menu" className="absolute top-0 left-0 hidden w-full py-24 bg-PrimaryColor lg:block lg:static lg:ml-auto lg:w-auto lg:py-0 lg:border-none lg:bg-transparent">
//           <ul className="flex flex-col items-center gap-8 text-center lg:flex-row lg:gap-5">
//             <li>
//               <a href="#recent_works" className="nav_link">Works</a>
//             </li>
//             <li>
//               <a href="#exp_edu" className="nav_link">Resume</a>
//             </li>
//             <li>
//               <a href="#skills" className="nav_link">Skills</a>
//             </li>
//             <li>
//               <a href="#blogs" className="nav_link">Blogs</a>
//             </li>
//             <li>
//               <a href="#contact" className="nav_link">Contact</a>
//             </li>
//             <li>
//               <button className="ml-10 btn">
//                 <span className='z-10'>Hire Me</span>
//               </button>
//             </li>
//           </ul>
//           <div id="nav-close" className="absolute text-3xl cursor-pointer text-whiteColor right-3 top-6 md:right-8">
//             <i className="ri-close-fill lg:hidden"></i>
//           </div>
//         </div>

//         <div className="flex items-center gap-5 cursor-pointer">
//           <div className="items-center"   id='theme-toggle' onClick={toggleDarkMode}>
//             <i className={`ri-${darkMode ? 'sun' : 'moon'}-line text-2xl ml-4 cursor-pointer`}></i>
//           </div>
//           <div id="hamburger">
//             <i className="text-2xl cursor-pointer ri-menu-2-fill lg:hidden"></i>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;


import React, { useEffect } from 'react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  useEffect(() => {
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav_link");
    const closeIcon = document.getElementById("nav-close");
    const hamburger = document.getElementById("hamburger");

    const handleNavLinkClick = () => {
      if (navMenu) {
        navMenu.classList.add("hidden");
      }
    };

    const handleNavClose = () => {
      if (navMenu) {
        navMenu.classList.add("hidden");
      }
    };

    const handleHamburgerClick = () => {
      if (navMenu) {
        navMenu.classList.remove("hidden");
      }
    };

    navLinks.forEach((link) => {
      link.addEventListener("click", handleNavLinkClick);
    });

    if (closeIcon) {
      closeIcon.addEventListener('click', handleNavClose);
    }

    if (hamburger) {
      hamburger.addEventListener('click', handleHamburgerClick);
    }

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleNavLinkClick);
      });

      if (closeIcon) {
        closeIcon.removeEventListener('click', handleNavClose);
      }

      if (hamburger) {
        hamburger.removeEventListener('click', handleHamburgerClick);
      }
    };
  }, []);

  // Change background color of navbar on scroll
  const scrollHeader = () => {
    const navbar = document.getElementById("navbar");
    const aTags = document.querySelectorAll("nav ul li a");
    const themeToggle = document.getElementById("theme-toggle");
    const hamburger = document.getElementById("hamburger");

    if (window.scrollY >= 200) {
      navbar.classList.add("bg-PrimaryColor");
      aTags.forEach((aTag) => {
        aTag.classList.add("text-white");
      });

      if (themeToggle) {
        themeToggle.classList.add("text-white");
      }

      if (hamburger) {
        hamburger.classList.add("text-white");
      }

    } else {
      navbar.classList.remove("bg-PrimaryColor");
      aTags.forEach((aTag) => {
        aTag.classList.remove("text-white");
      });

      if (themeToggle) {
        themeToggle.classList.remove("text-white");
      }

      if (hamburger) {
        hamburger.classList.remove("text-white");
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader);

    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, []);

  return (
    <header id="navbar" className="sticky top-0 z-50 duration-300">
      <nav className="container relative flex items-center justify-between">
        <div className='py-5'>
          <img src="white-logo1.png" alt="logo" className="w-14" />
          <img src="white-logo.jpg" alt="logo" className="hidden w-10 md:w-14" />
        </div>

        <div id="nav-menu" className="absolute top-0 left-0 hidden w-full py-24 bg-PrimaryColor lg:block lg:static lg:ml-auto lg:w-auto lg:py-0 lg:border-none lg:bg-transparent">
          <ul className="flex flex-col items-center gap-8 text-center lg:flex-row lg:gap-5">
            <li>
              <a href="#experiance" className="nav_link">Experiance</a>
            </li>
            <li>
              <a href="#skills" className="nav_link">Skills</a>
            </li>
            <li>
              <a href="#recent_works" className="nav_link">Works</a>
            </li>
            <li>
              <a href="#exp_edu" className="nav_link">Education</a>
            </li>
            <li>
              <a href="#contact" className="nav_link">Contact</a>
            </li>
            <li>
              <button className="ml-10 btn">
                <span className='z-10'>Hire Me</span>
              </button>
            </li>
          </ul>
          <div id="nav-close" className="absolute text-3xl cursor-pointer text-whiteColor right-3 top-6 md:right-8">
            <i className="ri-close-fill lg:hidden"></i>
          </div>
        </div>

        <div className="flex items-center gap-5 cursor-pointer">
          <div className="items-center" id="theme-toggle" onClick={toggleDarkMode}>
            <i className={`ri-${darkMode ? 'sun' : 'moon'}-line text-2xl ml-4 cursor-pointer`}></i>
          </div>
          <div id="hamburger">
            <i className="text-2xl cursor-pointer ri-menu-2-fill lg:hidden"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
