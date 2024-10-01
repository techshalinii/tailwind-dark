import { checklistItems } from "../constants";
import image from "../assets/image.png";
import React from 'react';

const Workflow = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl sm:text-3xl lg:text-5xl text-center tracking-wide font-bold my-10 lg:my-20">
        How it 
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "} Works
        </span>?
      </h2>
      
      <div className="flex flex-wrap justify-center items-start">
        <div className="w-full lg:w-1/2 md:w-1/2 flex flex-col justify-center text-left">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="ml-0 lg:ml-16">
                <h5 className="text-xl lg:text-2xl font-semibold mt-4">
                  {item.title}
                </h5>
                <p className="text-md text-neutral-500 mt-4 ml-8">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/2 flex justify-center items-start pt-4 lg:pt-0">
          <img 
            src={image} 
            alt="Image" 
            className="max-h-full h-auto lg:h-[300px] !sm:h-[150px] md:h-[300px] object-contain"
          />
        </div>

      </div>
    </div>
  );
};

export default Workflow;
