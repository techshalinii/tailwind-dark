import { checklistItems } from "../constants";
import image from "../assets/image.png";
import React from 'react';

const Workflow = () => {
  return (
    <div className="container mx-auto pt-4 pb-4 ">
      <h2 className="text-2xl sm:text-3xl lg:text-5xl text-center tracking-wide font-bold my-10 lg:my-20">
        How it 
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "} Works
        </span>?
      </h2>
      
      <div className="flex flex-wrap justify-center items-start mt-8">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="ml-4">
                <h5 className="text-xl lg:text-2xl font-semibold mt-8">
                  {item.title}
                </h5>
                <p className="text-md text-neutral-500 mt-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-start">
          <img 
            src={image} 
            alt="Image" 
            className="max-h-full h-auto lg:h-[300px] object-contain sm:h-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Workflow;
