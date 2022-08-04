import React, { useState, useEffect } from 'react';
import { client } from '../client';
import ContactBtns from '../components/ContactBtns';


const Contact = () => {
  const rowsResize = () => {
    if(window.innerWidth < 450) return "3";
    if(window.innerWidth > 450) return "10";
  };   

  const initialForm = { name: '', email: '', message: '' };

  const [formData, setFormData] = useState(initialForm);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsFormSubmitted(false);
      setFormData(initialForm);
    }, 5000);

    return () => clearTimeout(timeout);

  }, [isFormSubmitted])
  

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };
  
  return (
    <section className='w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center p-4'>
        <div className='flex flex-col items-center mt-11'>
          {!isFormSubmitted ? (
            <>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 pt-8'>
                Contact              
              </p>
              <p className='text-gray-300 py-4 text-center'>
                Submit the form below or shoot me an email - charchula@gmail.com
              </p>
            </>
          ) : (
            ''
          )
            
          }
        </div>
        {/* button container */}
        <ContactBtns />
        {!isFormSubmitted ? (          
          <form className='flex flex-col max-w-[900px] w-full' onSubmit={handleSubmit} >
            <input 
              className='bg-[#ccd6f6] p-2' 
              type="text" 
              placeholder='Name' 
              name='name' 
              onChange={handleChangeInput}
              value={name}
              required               
            />
            <input 
              className='my-4 p-2 bg-[#ccd6f6]' 
              type="email" 
              placeholder='Email' 
              name='email' 
              onChange={handleChangeInput}
              value={email}
              required               
            />
            <textarea 
              className='bg-[#ccd6f6] p-2' 
              name="message"
              value={message}
              onChange={handleChangeInput} 
              rows={rowsResize()}  
              placeholder='Message'
              required                 
            />
            <button 
              type="submit"                          
              className='
                text-white 
                border-2
                hover:bg-pink-600
                hover:border-pink-600 
                hover:scale-110 
                duration-200 
                px-4 
                py-3 
                my-8 
                mx-auto 
                flex 
                items-center 
                rounded-sm' 
            >
              {!loading ? "Let's Collaborate" : "Sending..."}            
            </button>
          </form>          
        ) : (
          <div>
            <p className="text-white mt-3 text-2xl lg:text-4xl font-bold">
              Thank you for getting in touch!
            </p>
          </div>
        )}
    </section>
  )
}

export default Contact