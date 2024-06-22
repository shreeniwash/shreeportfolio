import React, { useState } from 'react';
import emailjs from 'emailjs-com';

emailjs.init('ASe6o7aV2D3A2ZoDt'); // Initialize EmailJS with your Public Key

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstname) tempErrors.firstname = 'First name is required';
    if (!formData.lastname) tempErrors.lastname = 'Last name is required';
    if (!formData.email) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email address is invalid';
    }
    if (!formData.phone) tempErrors.phone = 'Phone number is required';
    if (!formData.service) tempErrors.service = 'Service selection is required';
    if (!formData.message) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    console.log('Sending email with the following data:', formData);

    emailjs.send(
      'service_t35atwj', // Replace with your actual service ID
      'template_avzeif3', // Replace with your actual template ID
      formData,
      'ASe6o7aV2D3A2ZoDt' // Replace with your actual public key
    ).then((result) => {
      console.log('Email successfully sent:', result);
      alert('Message sent successfully!');
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      setIsSubmitting(false);
    }).catch((error) => {
      console.error('EmailJS error:', error); // Log the error details
      alert('An error occurred, please try again');
      setIsSubmitting(false);
    });
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${formData.email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${formData.phone}`;
  };

  return (
    <section className='container' id='contact'>
      <div className='flex flex-col gap-16 md:flex-row-reverse md:gap-5 md:items-center'>
        {/* Contact Info */}
        <div className='flex-1 space-y-7 md:space-y-10 lg:pl-20 xl:pl-40'>
          <div className='flex items-start gap-4 contact_item'>
            <div className='grid w-10 h-10 rounded-full text-whiteColor bg-gradient-to-b from-PrimaryColor to-PrimaryColorLight lg:h-14 lg:w-14 place-items-center'>
              <i className='fa-solid fa-phone' />
            </div>
            <div className='space-y-1'>
              <p className='text-sm'>Phone</p>
              <p className='font-bold duration-300 cursor-pointer hover:text-PrimaryColor' onClick={handlePhoneClick}>+91-8154857962</p>
            </div>
          </div>

          <div className='flex items-start gap-4 contact_item'>
            <div className='grid w-10 h-10 rounded-full text-whiteColor bg-gradient-to-b from-PrimaryColor to-PrimaryColorLight lg:h-14 lg:w-14 place-items-center'>
              <i className='fa-regular fa-envelope' />
            </div>
            <div className='space-y-1'>
              <p className='text-sm'>Email</p>
              <p className='font-bold duration-300 cursor-pointer hover:text-PrimaryColor' onClick={handleEmailClick}>yadavshreeniwash22@gmail.com</p>
            </div>
          </div>

          <div className='flex items-start gap-4 contact_item'>
            <div className='grid w-10 h-10 rounded-full text-whiteColor bg-gradient-to-b from-PrimaryColor to-PrimaryColorLight lg:h-14 lg:w-14 place-items-center'>
              <i className='fa-solid fa-location-dot' />
            </div>
            <div className='space-y-1'>
              <p className='text-sm'>Address</p>
              <p className='font-bold duration-300 cursor-pointer hover:text-PrimaryColor'>Vadodara, Gujarat</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className='flex-1 px-5 py-10 space-y-3 border contact_form bg-sectionColor dark:bg-darkSectionColor border-PrimaryColorLight rounded-3xl' onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <h2 className='subtitle'>Let's work together</h2>
            <p className='max-w-2xl py-3'>I create elegantly simple design and code with passion. It's as straightforward as that</p>
          </div>

          <div className='space-y-3 mt-7'>
            <div className='flex flex-col items-center gap-3 md:flex-row'>
              <input type='text' placeholder='First Name' name='firstname' value={formData.firstname} onChange={handleChange} autoComplete='off' aria-label='First Name' />
              {errors.firstname && <p className='error'>{errors.firstname}</p>}
              <input type='text' placeholder='Last Name' name='lastname' value={formData.lastname} onChange={handleChange} autoComplete='off' aria-label='Last Name' />
              {errors.lastname && <p className='error'>{errors.lastname}</p>}
            </div>

            <div className='flex flex-col items-center gap-3 md:flex-row'>
              <input type='email' placeholder='Email Address' name='email' value={formData.email} onChange={handleChange} autoComplete='off' aria-label='Email Address' />
              {errors.email && <p className='error'>{errors.email}</p>}
              <input type='tel' placeholder='Phone Number' name='phone' value={formData.phone} onChange={handleChange} autoComplete='off' aria-label='Phone Number' />
              {errors.phone && <p className='error'>{errors.phone}</p>}
            </div>
          </div>

          <select name='service' value={formData.service} onChange={handleChange} aria-label='Service'>
            <option value='' disabled>Choose a web service</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Clone">Clone</option>
            <option value="Company">Company</option>
          </select>
          {errors.service && <p className='error'>{errors.service}</p>}

          <div className='space-y-3'>
            <textarea name='message' rows="5" placeholder='Message' value={formData.message} onChange={handleChange} aria-label='Message'></textarea>
            {errors.message && <p className='error'>{errors.message}</p>}
            <button className='btn' type='submit' disabled={isSubmitting}>
              <span className='z-10'>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
