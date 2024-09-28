import React from 'react'
import{contactDetails} from "../constants"

const ContactUs = () => {
  return (
    <div id='ContactUs' className="relative min-h-[50px] mt-10">
    <div className="text-center">
    <h2 className="text-2xl sm:text-3xl lg:text-5xl text-center mt-6 tracking-wide font-bold">
        Contact
        <span className="bg-gradient-to-r from-orange-500 to-orange-800  text-transparent bg-clip-text"> 
                {" "}  Us
            </span>
      </h2>
    </div>
    <div className=" mt-10 lg:mt-20">
      {contactDetails.map((contactDetails, index) => (
        <div key={index} className="w-full sm:w-full lg:w-1/2">
          <div className="flex">
            <div className="flex mx-6 h-10 w-10 p-2 justify-center  bg-neutral-900 text-orange-700 items-center rounded-full">
              {contactDetails.icons}
            </div>
            <div>
              <h5 className="mt-1 mb-6 text-xl text-white">{contactDetails.description}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default ContactUs
