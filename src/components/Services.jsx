import React from 'react';
import { services } from '../constants';

const Services = () => {
  return (
    <div id='Services' className="flex flex-col items-center p-4">
      <p className="text-2xl sm:text-3xl lg:text-5xl text-center tracking-wide font-bold my-10 lg:my-20">
        What We 
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "} Offer
        </span>
      </p>
      
      <div className="flex flex-wrap">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 mb-8 sm:mb-10 lg:mb-0 "
          >
            <div className="flex flex-col items-start">
              <h5 className="text-xl font-semibold">{service.title}</h5>
              <p className="text-md text-neutral-500 mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
