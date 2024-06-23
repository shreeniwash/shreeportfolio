

import React, { useState, useEffect, useRef } from "react";

const RecentWork = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsRef = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      if (tabsRef.current[0]) {
        const tab = tabsRef.current.find((tab) => tab.dataset.tabs === activeTab);
        if (tab) {
          const rect = tab.getBoundingClientRect();
          const parentRect = tab.parentElement.getBoundingClientRect();
          setIndicatorStyle({
            width: rect.width + "px",
            left: rect.left - parentRect.left + "px",
          });
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeTab]);

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  const renderWorkCards = (category) => {
    const works = [
     
      {
        category: "restaurant",
        imgSrc: "project-2.jpg",
        title: "The Restaurant Website",
        description: "The website for a restaurant where people can buy online and book a table.",
        sourceCodeLink: "https://github.com/shreeniwash/burger-site",
        liveDemoLink: "https://github.com/shreeniwash/burger-site",
      },
      // Add more projects here with appropriate category, image source, title, description, and links
      {
        category: "clone",
        imgSrc: "netflix.png",
        title: "Netflix-clone",
        description: "A clone website example.",
        sourceCodeLink: "https://github.com/shreeniwash/Netflix-clone",
        liveDemoLink: "#",
      },
      {
        category: "company",
        imgSrc: "img1.jpeg",
        title: "Company Website",
        description: "A website for a security company.",
        sourceCodeLink: "https://github.com/shreeniwash/react-havok",
        liveDemoLink: "https://react-havok.vercel.app/",
      },
      {
        category: "company",
        imgSrc: "wowsite.png",
        title: "Company Website",
        description: "A website for a Startup company.",
        sourceCodeLink: "https://github.com/shreeniwash/Wowsite-getmeonline",
        liveDemoLink: "https://wowsite-getmeonline.vercel.app/",
      },
    ];

    return works
      .filter((work) => activeTab === "all" || work.category === activeTab)
      .map((work, index) => (
        <li
          key={index}
          className={`work_card ${work.category} h-auto relative bg-sectionColor dark:bg-darkSectionColor p-5 rounded-2xl border border-transparent hover:border-PrimaryColorLight overflow-hidden lg:p-8 duration-300`}
        >
          <img src={work.imgSrc} alt="recent-works" className="w-auto" />
          <div className="left-0 right-0 pt-10 bottom-3">
            <div className="container">
              <h1 className="text-3xl font-semibold">{work.title}</h1>
              <p className="mb-4 text-sm">{work.description}</p>
            </div>
            <div className="flex items-center justify-center p-2 bg-gradient-to-r from-PrimaryColorLight to-PrimaryColor text-whiteColor rounded-2xl">
              <div className="flex items-center justify-center gap-5">
                <a href={work.sourceCodeLink}>
                  <button className="work">Source Code</button>
                </a>
                <a href={work.liveDemoLink}>
                  <button className="work">Live Demo</button>
                </a>
              </div>
            </div>
          </div>
        </li>
      ));
  };

  return (
    <section id="recent_works" className="container ">
      <div className="flex flex-col items-center gap-5 text-center recent_works_top">
        <h2 className="subtitle">My Recent Works</h2>
        <p className="max-w-2xl">
          We transform your ideas and desires into a distinctive web project that inspires both you and your customers.
        </p>
      </div>

      <div className=" recent_works_tabs relative max-w mx-auto my-10 h-10 text-xs grid grid-cols-4 items-center px-[30px] rounded-full bg-sectionColor dark:bg-darkSectionColor border border-PrimaryColor overflow-hidden transition md:h-12 md:text-base">
        <div
          className="absolute top-0 bottom-0 left-0 my-auto transition-all duration-300 rounded-full indicator h-9 bg-PrimaryColorLight md:h-11"
          style={indicatorStyle}
        ></div>

        <button
          ref={(el) => (tabsRef.current[0] = el)}
          className={`tab relative block px-3 h-8 rounded-full ${activeTab === "all" ? "text-whiteColor" : ""} md:h-10 md:px-6`}
          data-tabs="all"
          onClick={() => handleClick("all")}
        >
          All
        </button>
        <button
          ref={(el) => (tabsRef.current[1] = el)}
          className={`tab relative block px-3 h-8 rounded-full ${activeTab === "restaurant" ? "text-whiteColor" : ""}`}
          data-tabs="restaurant"
          onClick={() => handleClick("restaurant")}
        >
          Restaurant
        </button>
        <button
          ref={(el) => (tabsRef.current[2] = el)}
          className={`tab relative block px-3 h-8 rounded-full ${activeTab === "clone" ? "text-whiteColor" : ""}`}
          data-tabs="clone"
          onClick={() => handleClick("clone")}
        >
          Clone
        </button>
        <button
          ref={(el) => (tabsRef.current[3] = el)}
          className={`tab relative block px-3 h-8 rounded-full ${activeTab === "company" ? "text-whiteColor" : ""}`}
          data-tabs="company"
          onClick={() => handleClick("company")}
        >
          Company
        </button>
      </div>

      <div className="relative mt-6 recent_works_tabs rounded-3xl">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-PrimaryColorLight mix-blend-screen blur-[150px] opacity-50"></div>
        <ul className="grid grid-cols-1 gap-5 lg:gap-10 md:grid-cols-2">{renderWorkCards()}</ul>
      </div>
    </section>
  );
};

export default RecentWork;
