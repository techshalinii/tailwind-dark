import React from 'react'
import { services } from '../constants'

const Services = () => {
  return (
    <div id='Services' className="flex flex-col items-center p-4 ">
    <p className="text-2xl sm:text-3xl lg:text-5xl text-center tracking-wide mt-5 font-bold">
    What We 
    <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text"> 
                {" "}  Offer
            </span>
    </p>
    <div className="flex flex-wrap mt-10 lg:mt-20">
      {services.map((services, index) => (
        <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
          <div className="flex">
            <div>
              <h5 className="mt-1 mb-6 text-2xl font-semibold">{services.title}</h5>
              <p className="text-md p-2 mb-10 lg:mb-20 text-neutral-500">
                {services.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default Services