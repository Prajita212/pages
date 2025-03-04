import React from "react";
import { GoCommentDiscussion } from "react-icons/go";
import pic1 from "../assets/pic1.jpg";

function Testimonial() {
  return (
    <div className="bg-gray-300 md:min-h-screen">
      <div className="absolute bg-blue-950 h-[50vh] w-full">
        <h1 className="relative md:mt-30 mt-20 md:ml-70 ml-25 md:text-4xl text-3xl text-white font-semibold">What clients say</h1>
    
      <div className="flex lg:flex-row flex-col items-center justify-center mt-10 md:mt-5 text-[#35314C] md:left-70 left-30 bottom-30 gap-15 ">
      <div className=" relative bg-white rounded-2xl shadow-lg shadow-blue-950 p-6 w-70">
          <GoCommentDiscussion className="text-3xl mb-4" />
          <p className="mb-4 text-justify">
            Exceptional Service and Support. From the initial consultation to
            the final delivery, Tech Matrix exceeded our expectations. The
            software they built for us has significantly improved our workflow
            efficiency.
          </p>
         <img
              src={pic1}
              className="w-25 h-25 rounded-full"
              alt="Sarah Carter"
            />
           
              <p className="font-bold mt-2">Sarah Carter</p>
              <p className="text-sm mt-2">COO of Carter</p>
           
        </div>
        <div className=" bg-white rounded-2xl shadow-lg shadow-blue-950 p-6 w-70">
          <GoCommentDiscussion className="text-3xl mb-4" />
          <p className="mb-4 text-justify">
            Exceptional Service and Support. From the initial consultation to
            the final delivery, Tech Matrix exceeded our expectations. The
            software they built for us has significantly improved our workflow
            efficiency.
          </p>
       
            <img
              src={pic1}
              className="w-25 h-25 rounded-full "
              alt="Sarah Carter"
            />
           
              <p className="font-bold mt-2">Sarah Carter</p>
              <p className="text-sm mt-2">COO of Carter</p>
           
        </div>
        <div className=" bg-white rounded-2xl shadow-lg shadow-blue-950 p-6 w-70 md:mb-0 mb-30">
          <GoCommentDiscussion className="text-3xl mb-4" />
          <p className="mb-4 text-justify">
            Exceptional Service and Support. From the initial consultation to
            the final delivery, Tech Matrix exceeded our expectations. The
            software they built for us has significantly improved our workflow
            efficiency.
          </p>
           <img
              src={pic1}
              className="w-25 h-25 rounded-full"
              alt="Sarah Carter"
            />
               <p className="font-bold mt-2">Sarah Carter</p>
              <p className="text-sm mt-2">COO of Carter</p>
             </div>
      </div>  </div>
    </div>
  );
}

export default Testimonial;
