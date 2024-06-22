import React from "react";

const HeroSetion = () => {
  return (
    <>
      <section id="hero" className=" relative py-5">
        {/* blur */}
        <div className=" absolute right-0 top-[20%] w-80 h-80 bg-PrimaryColorLight mix-blend-screen rounded-full blur-[150px] opacity-50 "></div>

        <div className="container">
          {/* bg-image */}
          <div className="hidden md:block absolute top-0 left-[30%] animate-scaleAnimation lg:left-[35%] ">
            <p className=" font-Londrina text-[400px] text-PrimaryColorLight uppercase -z-10 opacity-5  lg:text-[450px]">hi</p>
          </div>
          {/* hero content */}
          <div className="flex  items-center gap-5">
            <div className="hero_content space-y-2 md:w-1/2">
              <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">I am Shreeniwash</h3>
              <h1>
                <span className="tittle">Web Developer</span>
              </h1>

              <div className="relative justify-center flex  md:hidden">
                {/* blob */}
                <div className=" absolute right-0 top-[-20%] bottom-0 w-80 h-80 bg-PrimaryColorLight mix-blend-screen rounded-full blur-[150px] opacity-50 "></div>
                <img src="person.jpg" alt="person" className="my-10 max-w-[90%] h-80  duration-300 origin-center rotate-[4.5deg] border-2 border-PrimaryColor rounded-[30px] hover:rotate-0 hover:border-PrimaryColorLight"></img>
              </div>
              <p className=" max-w-xl text-xl pb-5"> 
                I dissect intricate user experiance issues to craft solutions
                focused on intergrity, link-warning billions of individuals.{" "}
              </p>

              <div className="flex items-center flex-wrap gap-5">
                <button className="btn-outline">
                  Download CV <i class="ri-download-fill"></i>
                </button>
                <div className="flex items-center gap-5">
                  <div className="social-icon ">
                    <i class="ri-twitter-fill"></i>
                  </div>
                  <div className="social-icon">
                    <i class="ri-linkedin-fill"></i>
                  </div>
                  <div className="social-icon">
                    <i class="ri-github-fill"></i>
                  </div>
                </div>
              </div>
            </div>
           
           {/* hero image */}
           <div className="hero_image relative hidden md:w-1/2 md:flex justify-center ">
                {/* blob */}
                <div className=" absolute right-52 top-[40%] bottom-0 w-80 h-80 bg-PrimaryColorLight mix-blend-screen rounded-full blur-[150px] opacity-50 "></div>
                <img src="person.jpg" alt="person" className="my-10 md:w-full lg:max-w-[80%] h-96  duration-300 origin-center rotate-[4.5deg] border-2 border-PrimaryColor rounded-[30px] hover:rotate-0 hover:border-PrimaryColorLight"></img>
              </div>

          </div>
          
        {/* hero footer */}
       
       

<div className=" py-10">
      <h1 className="container hero_experiance subtitle text-center " id="experiance">EXPERIENCE</h1>
      <div className="flex flex-wrap items-center justify-center gap-10 py-10">
        <div className="exp_card bg-PrimaryColor p-6 rounded-xl shadow-lg max-w-xs transform transition duration-500 hover:scale-105">
          <img src="Vardaam.jpg" alt="Vardaam Web Solutions" className="rounded-t-xl h-20 w-full object-cover mb-4" />
          <h2 className="text-xl font-semibold mb-2 dark:text-[#DDD] text-[#DDD]">Vardaam Web Solutions Pvt. Ltd.</h2>
          <h3 className="text-lg mb-2 dark:text-[#DDD] text-[#DDD]">Frontend Developer Intern <span className="text-sm text-gray-200">2024</span></h3>
          <p className="text-sm dark:text-[#DDD] text-[#DDD]">Contributed to the development of client-side web applications using modern JavaScript frameworks.</p>
        </div>
        <div className="exp_card bg-PrimaryColor p-6 rounded-xl shadow-lg max-w-xs transform transition duration-500 hover:scale-105">
          <img src="getmeonline.png" alt="Getmeonline Internet Excellency" className="rounded-t-xl h-20 w-full object-cover mb-4" />
          <h2 className="text-xl font-semibold mb-2 dark:text-[#DDD] text-[#DDD]">Getmeonline Internet Excellency Pvt. Ltd.</h2>
          <h3 className="text-lg mb-2 dark:text-[#DDD] text-[#DDD]">Frontend Developer Intern <span className="text-sm text-gray-200">2023</span></h3>
          <p className="text-sm dark:text-[#DDD]  text-[#DDD]">Assisted in designing and implementing user interfaces and enhancing user experience.</p>
        </div>
      </div>
    </div>


        </div>
      </section>
    </>
  );
};

export default HeroSetion;
