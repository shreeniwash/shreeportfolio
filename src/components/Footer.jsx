
// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <>
      <footer id='footer' className='bg-sectionColor dark:bg-darkSectionColor py-10'>
        <div className='container flex flex-col items-center gap-5'>
          <div className='py-5'>
            <img src='white-logo1.png' alt='footer logo' className='w-32' />
          </div>

          <div>
            <ul className='flex flex-wrap space-x-3 items-center justify-center'>
              <li>
                <a href="#recent_works" className="nav_link" style={{ color: 'var(--nav-link-color)' }}>Works</a>
              </li>
              <li>
                <a href="#exp_edu" className="nav_link" style={{ color: 'var(--nav-link-color)' }}>Resume</a>
              </li>
              <li>
                <a href="#skills" className="nav_link" style={{ color: 'var(--nav-link-color)' }}>Skills</a>
              </li>
              <li>
                <a href="#blogs" className="nav_link" style={{ color: 'var(--nav-link-color)' }}>Blogs</a>
              </li>
              <li>
                <a href="#contact" className="nav_link" style={{ color: 'var(--nav-link-color)' }}>Contact</a>
              </li>
            </ul>
          </div>

          <div className=' text-PrimaryColorLight'>
            <p>&copy; 2024 All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;