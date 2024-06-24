import React from "react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative py-5">
      {/* Blur effect */}
      <div className="absolute right-0 top-[20%] w-80 h-80 bg-PrimaryColorLight mix-blend-screen rounded-full blur-[150px] opacity-50"></div>

      <div className="container">
        {/* Background image */}
        <div className="hidden md:block absolute top-0 left-[30%] animate-scaleAnimation lg:left-[35%]">
          <p className="font-Londrina text-[400px] text-PrimaryColorLight uppercase -z-10 opacity-5 lg:text-[450px]">hi</p>
        </div>

        {/* Hero content */}
        <div className="flex items-center gap-5">
          <div className="space-y-2 hero_content md:w-1/2">
            <h3 className="text-2xl font-bold md:text-2xl lg:text-2xl">I am Shreeniwash</h3>
            <h1>
              <span className="tittle">Front-End Developer</span>
            </h1>

            <div className="relative flex justify-center md:hidden">
              {/* Blob */}
              <div className="absolute right-0 top-[-20%] bottom-0 w-80 h-80 bg-PrimaryColorLight mix-blend-screen rounded-full blur-[150px] opacity-50"></div>
              <img
                src="person.jpg"
                alt="person"
                className="my-10 max-w-[90%] h-80 duration-300 origin-center rotate-[4.5deg] border-2 border-PrimaryColor rounded-[30px] hover:rotate-0 hover:border-PrimaryColorLight"
              />
            </div>

            <p className="max-w-xl pb-5 text-xl">
              I dissect intricate user experience issues to craft solutions focused on integrity, warning billions of individuals.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a href="/Entry-Level-Developer_Shreeniwash_Yadav.pdf" download="Entry-Level-Developer_Shreeniwash_Yadav.pdf" className="btn-outline">
                Download CV <i className="ri-download-fill"></i>
              </a>
              <div className="flex items-center gap-5">
                <a href="https://www.linkedin.com/in/shreeniwash-yadav-7377a11a5/" className="social-icon">
                  <i className="ri-linkedin-fill"></i>
                </a>
                <a href="https://github.com/shreeniwash/" className="social-icon">
                  <i className="ri-github-fill "></i>
                </a>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative justify-center hidden hero_image md:w-1/2 md:flex">
            {/* Blob */}
            <div className="absolute right-52 top-[40%] bottom-0 w-80 h-80 bg-PrimaryColorLight mix-blend-screen rounded-full blur-[150px] opacity-50"></div>
            <img
              src="person.jpg"
              alt="person"
              className="my-10 md:w-full lg:max-w-[80%] h-96 duration-300 origin-center rotate-[4.5deg] border-2 border-PrimaryColor rounded-[30px] hover:rotate-0 hover:border-PrimaryColorLight"
            />
          </div>
        </div>

        {/* Hero footer */}
        <section id="experiance">
          <div className="py-10">
            <h1 className="container text-center hero_experience subtitle">
              EXPERIENCE
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-10 py-10">
              <div className="max-w-xs p-6 transition duration-500 transform shadow-lg exp_card bg-PrimaryColor rounded-xl hover:scale-105">
                <img src="Vardaam.jpg" alt="Vardaam Web Solutions" className="object-cover w-full h-20 mb-4 rounded-t-xl" />
                <h2 className="text-xl font-semibold mb-2 dark:text-[#DDD] text-[#DDD]">Vardaam Web Solutions Pvt. Ltd.</h2>
                <h3 className="text-lg mb-2 dark:text-[#DDD] text-[#DDD]">
                  Frontend Developer Intern <span className="text-sm text-gray-200">2024</span>
                </h3>
                <p className="text-sm dark:text-[#DDD] text-[#DDD]">
                  Contributed to the development of client-side web applications using modern JavaScript frameworks.
                </p>
              </div>
              <div className="max-w-xs p-6 transition duration-500 transform shadow-lg exp_card bg-PrimaryColor rounded-xl hover:scale-105">
                <img src="getmeonline.png" alt="Getmeonline Internet Excellency" className="object-cover w-full h-20 mb-4 rounded-t-xl" />
                <h2 className="text-xl font-semibold mb-2 dark:text-[#DDD] text-[#DDD]">Getmeonline Internet Excellency Pvt. Ltd.</h2>
                <h3 className="text-lg mb-2 dark:text-[#DDD] text-[#DDD]">
                  Frontend Developer Intern <span className="text-sm text-gray-200">2023</span>
                </h3>
                <p className="text-sm dark:text-[#DDD] text-[#DDD]">
                  Assisted in designing and implementing user interfaces and enhancing user experience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HeroSection;
