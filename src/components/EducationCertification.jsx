import React from 'react'

const EducationCertification = () => {
  return (
    <>
    <section id='exp_edu' className=' bg-sectionColor dark:bg-darkSectionColor' >
        <div className=' container w-full grid grid-cols-1 md:grid-cols-2 gap-10'>

            {/* educations */}
            <div>
                <div className='edu_top flex items-center gap-3'>
                    <div className='text-2xl text-PrimaryColorLight md:text-3xl lg:text-4xl'>
                    <i class="ri-graduation-cap-fill"></i>                    </div>
                    <h2 className='subtitle'>Education</h2>
                </div>
                <div className=' my-10 space-y-5 md:space-y-10'>
                    {/* card-1 */}
                    <div className='edu_card exp_edu_card bg-whiteColor dark:bg-darkBodyColor p-5 rounded-2xl hover:bg-PrimaryColorLight dark:hover:bg-PrimaryColorLight duration-300 shadow' >
                        <p className=' text-sm text-PrimaryColorLight pb-3 font-bold'>2017</p>
                        <p className='text-xl font-bold uppercase lg:text-2xl xl:text-3xl'>school</p>
                        <p className='text-sm  font-bold uppercase'>SHREE BHANGI HIGHER SECONDRY SCHOOL (SEE BOARD)</p>
                        <p className='font-bold'>Gpa: 6.8</p>
                    </div>
                     {/* card-2 */}
                     <div className='edu_card exp_edu_card bg-whiteColor dark:bg-darkBodyColor p-5 rounded-2xl hover:bg-PrimaryColorLight dark:hover:bg-PrimaryColorLight duration-300 shadow' >
                        <p className=' text-sm text-PrimaryColorLight pb-3 font-bold'>2020</p>
                        <p className='text-xl font-bold uppercase lg:text-2xl xl:text-3xl'>diploma in computer science</p>
                        <p className='text-sm  font-bold uppercase'>jai polytech haryana (hsbte BOARD)</p>
                        <p className='font-bold'>Gpa: 7.0</p>
                    </div>
                     {/* card-2 */}
                     <div className='edu_card exp_edu_card bg-whiteColor dark:bg-darkBodyColor p-5 rounded-2xl hover:bg-PrimaryColorLight dark:hover:bg-PrimaryColorLight duration-300 shadow' >
                        <p className=' text-sm text-PrimaryColorLight pb-3 font-bold'>2024</p>
                        <p className='text-xl font-bold uppercase lg:text-2xl xl:text-3xl'>bachelor in computer science</p>
                        <p className='text-sm  font-bold uppercase'>parul university (gtu BOARD)</p>
                        <p className='font-bold'>Gpa: 6.9</p>
                    </div>
                </div>
            </div>

             {/* certification */}
             <div>
                <div className='certi_top flex items-center gap-3'>
                    <div className='text-2xl text-PrimaryColorLight md:text-3xl lg:text-4xl'>
                    <i class="ri-award-fill"></i>
                    </div>
                    <h2 className='subtitle'>Certifications</h2>
                </div>
                <div className=' my-10 space-y-5 md:space-y-10'>
                    {/* card-1 */}
                    <div className='exp_card exp_edu_card bg-whiteColor dark:bg-darkBodyColor p-5 rounded-2xl hover:bg-PrimaryColorLight dark:hover:bg-PrimaryColorLight duration-300 shadow' >
                        <p className=' text-sm text-PrimaryColorLight pb-3 font-bold'>2023</p>
                        <p className='text-xl font-bold uppercase lg:text-2xl xl:text-3xl'>Meta's Frontend Development</p>
                        <p>Coursera</p>
                    </div>
                     {/* card-2 */}
                     <div className='exp_card exp_edu_card bg-whiteColor dark:bg-darkBodyColor p-5 rounded-2xl hover:bg-PrimaryColorLight dark:hover:bg-PrimaryColorLight duration-300 shadow' >
                        <p className=' text-sm text-PrimaryColorLight pb-3 font-bold'>2021</p>
                        <p className='text-xl font-bold uppercase lg:text-2xl xl:text-3xl'>Python Bootcamp Development</p>
                        <p>Udemy</p>
                    </div>
                     {/* card-2 */}
                     <div className='exp_card exp_edu_card bg-whiteColor dark:bg-darkBodyColor p-5 rounded-2xl hover:bg-PrimaryColorLight dark:hover:bg-PrimaryColorLight duration-300 shadow' >
                        <p className=' text-sm text-PrimaryColorLight pb-3 font-bold'>2023</p>
                        <p className='text-xl font-bold uppercase lg:text-2xl xl:text-3xl'>Azure FUNDAMENTAL</p>
                        <p>Coursera</p>
                    </div>
                </div>
            </div>

        </div>

    </section>
    
    
    
    </>
  )
}

export default EducationCertification