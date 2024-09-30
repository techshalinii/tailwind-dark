import React from 'react';
import { contactDetails } from "../constants";
import Swal from 'sweetalert2';

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "508f071c-ccc9-4264-96b0-4abb94cb8cac");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Message sent",
        icon: "success",
      });
    }
  };

  return (
    <div id='ContactUs' className="relative flex flex-col items-center p-4">
      <div className=" text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold my-10 lg:my-20">
          Contact
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            {" "} Us
          </span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center w-full">
        <div className="flex flex-col justify-center w-full lg:w-1/2 h-full mb-10 lg:mb-0">
          {contactDetails.map((item, index) => (
            <div key={index} className="mb-6">
              <div className="flex items-center">
                <div className="flex h-10 w-10 p-2 justify-center bg-neutral-900 text-orange-700 items-center rounded-full">
                  {item.icons}
                </div>
                <div className="ml-4">
                  <h5 className="mt-1 mb-2 text-xl text-white">
                    {item.description}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <section className="w-full max-w-[600px]">
            <form
              onSubmit={onSubmit}
              className='w-full p-6 shadow-lg bg-neutral-900 rounded-lg'
            >
              <div>
                <label className="block text-white">Full Name</label>
                <input
                  type="text"
                  className='w-full h-[50px] rounded-sm p-4 mt-2'
                  placeholder='Enter your name'
                  name='name'
                  required
                />
              </div>
              <div className='mt-6'>
                <label className="block text-white">Email Address</label>
                <input
                  type="email"
                  className='w-full h-[50px]  rounded-sm p-4 mt-2'
                  placeholder='Enter your email id'
                  name='email'
                  required
                />
              </div>
              <div className='mt-6'>
                <label className="block text-white">Your Message</label>
                <textarea
                  name="message"
                  className='w-full h-[100px] rounded-sm p-4 mt-2 '
                  placeholder='Enter your message'
                  required
                ></textarea>
              </div>
              <button
                type='submit'
                className='mt-6 w-full h-[55px] bg-orange-600 rounded-lg shadow-sm text-white hover:bg-orange-500'
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
