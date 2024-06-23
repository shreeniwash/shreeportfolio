
  
import React, { useEffect, useState } from "react";
import ScrollReveal from 'scrollreveal';

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 250) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const activeLink = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav_links");

    let current = "hero";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;

      if (window.scrollY >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((item) => {
      item.classList.remove("active");
      if (item.href.includes(current)) {
        item.classList.add("active");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", activeLink);

    // Initialize ScrollReveal
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
    });

    sr.reveal(".hero_image");
    sr.reveal(".hero_content",{origin:"bottom"});
    sr.reveal(".hero_experiance", {origin:"bottom", delay:500});

    sr.reveal(".recent_works_top", { origin: "bottom"});
    sr.reveal(".recent_works_tabs", { origin: "bottom", delay:300});
    sr.reveal(".work_card", { origin: "bottom", delay:500});

    sr.reveal(".edu_top", { origin: "top"});
    sr.reveal(".edu_card", { origin: "right", interval:300});
    
    sr.reveal(".certi_top", { origin: "top"});
    sr.reveal(".exp_card", { origin: "bottom", interval:300});

    sr.reveal(".skills_top", { origin: "bottom"});
    sr.reveal(".skills_card", { origin: "bottom", interval:300});
    
    sr.reveal(".contact_form", { origin: "bottom"});
    sr.reveal(".contact_item", { origin: "bottom", interval:300});




    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", activeLink);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      href="#"
      id="scroll-up"
      onClick={scrollToTop}
      className={`fixed right-10 ${
        isVisible ? "bottom-4" : "-bottom-1/3"
      } bg-PrimaryColor px-4 py-2 rounded-full text-lg text-whiteColor z-50 hover:translate-y-1 ease-in duration-200`}
    >
      <i className="fa-solid fa-arrow-up" />
    </a>
  );
};

export default ScrollUp;



//     //     const  scrollupbtn =document.getElementById("scroll-up");

//     //     if(this.scrollY >=250){
//     //         scrollupbtn.classList.remove("-bottom-1/2")
//     //         scrollupbtn.classList.add("bottom-4")

//     //     }else{
//     //         scrollupbtn.classList.add("-bottom-1/2")
//     //         scrollupbtn.classList.rmove("bottom-4")
//     //     }
//     // }
//     // window.addEventListener("scroll",scrollUP);
