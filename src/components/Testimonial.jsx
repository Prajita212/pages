import React from "react";
import { GoCommentDiscussion } from "react-icons/go";
import pic from "../assets/pic.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const clients = [
  {
    description:
      "Exceptional Service and Support. From the initial consultation to the final delivery, Tech Matrix exceeded our expectations. The software they built for us has significantly improved our workflow efficiency.",
    image: pic,
    name: "Sarah Carter",
    post: "COO of Carter",
  },
  {
    description:
      "Exceptional Service and Support. From the initial consultation to the final delivery, Tech Matrix exceeded our expectations. The software they built for us has significantly improved our workflow efficiency.",
    image: pic,
    name: "Sarah Carter",
    post: "COO of Carter",
  },
  {
    description:
      "Exceptional Service and Support. From the initial consultation to the final delivery, Tech Matrix exceeded our expectations. The software they built for us has significantly improved our workflow efficiency.",
    image: pic,
    name: "Sarah Carter",
    post: "COO of Carter",
  },
  {
    description:
      "Exceptional Service and Support. From the initial consultation to the final delivery, Tech Matrix exceeded our expectations. The software they built for us has significantly improved our workflow efficiency.",
    image: pic,
    name: "Sarah Carter",
    post: "COO of Carter",
  },
  {
    description:
      "Exceptional Service and Support. From the initial consultation to the final delivery, Tech Matrix exceeded our expectations. The software they built for us has significantly improved our workflow efficiency.",
    image: pic,
    name: "Sarah Carter",
    post: "COO of Carter",
  },
];

function Testimonial() {
  return (
    <div className="bg-gray-300 min-h-screen">
      <div className="absolute bg-blue-950 h-[50vh] w-full">
        <h1 className="relative mt-18 lg:ml-45 ml-25 md:text-4xl text-3xl text-white font-semibold">
          What clients say
        </h1>
        <div className="flex md:flex-row shrink-0 items-center justify-center mt-5 text-[#35314C] gap-15 ">
          <Carousel className="lg:w-5xl md:w-xl w-2xs">
            <CarouselContent>
              {clients.map((client, index) => (
                <CarouselItem
                  key={index}
                  className="lg:basis-1/3 md:basis-1/2 basis-full "
                >
                  <div className="relative bg-white rounded-2xl p-8 w-70 h-130 shadow-lg shadow-blue-950 mb-6">
                    <GoCommentDiscussion className="md:text-3xl text-lg mb-4 text-blue-950" />
                    <p className="mb-4 text-lg text-justify text-gray-700">
                      {client.description}
                    </p>
                    <div className="flex flex-col ">
                      <img
                        src={client.image}
                        className="w-25 h-25 rounded-full object-cover"
                        alt={client.name}
                      />
                      <div className="ml-4">
                        <p className="font-bold text-gray-900 mt-3">
                          {client.name}
                        </p>
                        <p className="md:text-sm text-xs text-gray-600">{client.post}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;