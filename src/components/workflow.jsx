import { checklistItems } from "../constants";
import img2 from "../assets/img2.png";
import React from 'react';
const Workflow = () => {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl lg:text-5xl text-center mt-6 tracking-wide font-bold">
        How it 
        <span className="bg-gradient-to-r from-orange-500 to-orange-800  text-transparent bg-clip-text"> 
                {" "}  Works
            </span>?
      </h2>
      <div className="flex flex-wrap justify-center align-center">
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12  items-center ">
              <div className="ml-4">
                <h5 className="mt-1 mb-2 text-xl lg:text-3xl  font-semibold ">{item.title} </h5>
                <p className="text-md text-neutral-500 ">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 w-full h-1/2 lg:w-1/2">
          <img src={img2} alt="img"  />
        </div>
      </div>
    </div>
  );
};

export default Workflow;