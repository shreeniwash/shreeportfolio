import React from 'react'

const Skills = () => {
  return (
    <>
    <section className='container mt-[-100px]' id='skills'>
     <div className='skills_top flex flex-col items-center gap-5 text-center '>
        <h2 className='subtitle'>My Skills</h2>
        <p className=' max-w-2xl '>We transform your ideas and desires into a distinctive web project that inspires both you and your customers.</p>
     </div>

     <div className='flex flex-wrap gap-5 md:gap-10 mt-10 items-center justify-center'>
        {/* html icon */}
        <div className='skills_card max-w-44 w-full'>
            <div className=' bg-sectionColor dark:bg-darkSectionColor grid place-items-center px-4 py-7 rounded-3xl space-y-5  hover:grayscale-0 hover:bg-PrimaryColor border border-transparent hover:border-PrimaryColorLight duration-300'>
                <img src=' html.svg' alt='figma' className='max-w-16'/>
                <p className=' text-PrimaryColorLight font-bold text-2xl'>92%</p>
            </div>
            <p className=' text-center text-PrimaryColorLight font-bold capitalize mt-3'>html</p>
        </div>

         {/* css icon */}
         <div className='skills_card max-w-44 w-full'>
            <div className=' bg-sectionColor dark:bg-darkSectionColor grid place-items-center px-4 py-7 rounded-3xl space-y-5  hover:grayscale-0 hover:bg-PrimaryColor border border-transparent hover:border-PrimaryColorLight duration-300'>
                <img src='css.svg' alt='css' className='max-w-16'/>
                <p className=' text-PrimaryColorLight font-bold text-2xl'>72%</p>
            </div>
            <p className=' text-center text-PrimaryColorLight font-bold capitalize mt-3'>css</p>
        </div>
         {/* javascript icon */}
         <div className='skills_card max-w-44 w-full'>
            <div className=' bg-sectionColor dark:bg-darkSectionColor grid place-items-center px-4 py-7 rounded-3xl space-y-5  hover:grayscale-0 hover:bg-PrimaryColor border border-transparent hover:border-PrimaryColorLight duration-300'>
                <img src='javascript.svg' alt='javascript' className='max-w-16'/>
                <p className=' text-PrimaryColorLight font-bold text-2xl'>70%</p>
            </div>
            <p className=' text-center text-PrimaryColorLight font-bold capitalize mt-3'>javascript</p>
        </div>
         {/* tailwind icon */}
         <div className='skills_card max-w-44 w-full'>
            <div className=' bg-sectionColor dark:bg-darkSectionColor grid place-items-center px-4 py-7 rounded-3xl space-y-5  hover:grayscale-0 hover:bg-PrimaryColor border border-transparent hover:border-PrimaryColorLight duration-300'>
                <img src='tailwind.svg' alt='tailwind' className='max-w-16'/>
                <p className=' text-PrimaryColorLight font-bold text-2xl'>80%</p>
            </div>
            <p className=' text-center text-PrimaryColorLight font-bold capitalize mt-3'>tailwindcss</p>
        </div>


         {/* bootstrap icon */}
         <div className='skills_card max-w-44 w-full'>
            <div className=' bg-sectionColor dark:bg-darkSectionColor grid place-items-center px-4 py-7 rounded-3xl space-y-5  hover:grayscale-0 hover:bg-PrimaryColor border border-transparent hover:border-PrimaryColorLight duration-300'>
                <img src=' bootstrap.svg' alt='figma' className='max-w-16'/>
                <p className=' text-PrimaryColorLight font-bold text-2xl'>70%</p>
            </div>
            <p className=' text-center text-PrimaryColorLight font-bold capitalize mt-3'>bootstrap</p>
        </div>

         {/* ajax icon */}
         <div className='skills_card max-w-44 w-full'>
            <div className=' bg-sectionColor dark:bg-darkSectionColor grid place-items-center px-4 py-7 rounded-3xl space-y-5  hover:grayscale-0 hover:bg-PrimaryColor border border-transparent hover:border-PrimaryColorLight duration-300'>
                <img src='jquery.svg' alt='jquery' className='max-w-16'/>
                <p className=' text-PrimaryColorLight font-bold text-2xl'>72%</p>
            </div>
            <p className=' text-center text-PrimaryColorLight font-bold capitalize mt-3'>ajax</p>
        </div>
         {/* react icon */}
         <div className='skills_card max-w-44 w-full'>
            <div className=' bg-sectionColor dark:bg-darkSectionColor grid place-items-center px-4 py-7 rounded-3xl space-y-5  hover:grayscale-0 hover:bg-PrimaryColor border border-transparent hover:border-PrimaryColorLight duration-300'>
                <img src='react.svg' alt='react' className='max-w-16'/>
                <p className=' text-PrimaryColorLight font-bold text-2xl'>70%</p>
            </div>
            <p className=' text-center text-PrimaryColorLight font-bold capitalize mt-3'>React</p>
        </div>
         {/* tailwind icon */}
         <div className='skills_card max-w-44 w-full'>
            <div className=' bg-sectionColor dark:bg-darkSectionColor grid place-items-center px-4 py-7 rounded-3xl space-y-5  hover:grayscale-0 hover:bg-PrimaryColor border border-transparent hover:border-PrimaryColorLight duration-300'>
                <img src='git.svg' alt='tailwind' className='max-w-16'/>
                <p className=' text-PrimaryColorLight font-bold text-2xl'>80%</p>
            </div>
            <p className=' text-center text-PrimaryColorLight font-bold capitalize mt-3'>git</p>
        </div>
     </div>
    </section>
    
    
    
    
    </>
  )
}

export default Skills