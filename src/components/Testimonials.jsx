import { testimonials } from "../constants";
import React from 'react';

const Testimonials = () => {
  return (
    <div id="Testimonials" className=" tracking-wide pl-1 pr-1 pt-4 pb-4 font-bold mt-0 sm:mt-4">
    <h2 className="text-2xl sm:text-3xl lg:text-5xl text-center my-10 lg:my-20 ">
        What  
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text"> 
                {" "}  People
            </span> {" "}are saying
      </h2>
      <div className="flex flex-wrap justify-center ">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2"> 
            <div className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 shadow-lg font-thin text-white">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start font-normal">
                <img
                  className="w-12 h-12 mr-6  rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm  italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;