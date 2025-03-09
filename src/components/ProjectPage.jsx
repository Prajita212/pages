import React, { useRef, useState } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import pic from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic4 from "../assets/pic4.jpg";

const projects = [
  { img: pic, title: "WEB DEVELOPMENT", description: "Scalable and modern websites for businesses." },
  { img: pic2, title: "UI/UX DESIGN", description: "Creating engaging digital experiences." },
  { img: pic4, title: "APP DEVELOPMENT", description: "Seamless mobile and web applications." },
  { img: pic2, title: "DIGITAL MARKETING & SEO", description: "Boosting visibility with marketing." },
  { img: pic2, title: "AI Solutions", description: "AI-driven automation and analytics." },
  { img: pic4, title: "Blockchain Development", description: "Secure and transparent solutions." },
  { img: pic, title: "Cloud Computing", description: "Scalable cloud services." },
  { img: pic2, title: "E-commerce Solutions", description: "Next-gen online stores." },
  { img: pic4, title: "Cybersecurity", description: "Protecting digital assets." },
];

function ProjectPage() {
  const [startIndex, setStartIndex] = useState(0);
  const elementRef = useRef(null);

  const sliderRight = () => {
    setStartIndex((prevIndex) => (prevIndex + 3) % projects.length);
  };

  const visibleProjects = projects.slice(startIndex, startIndex + 3);

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#4735AC] to-[#1D1646] py-8">
    
      <header className="lg:ml-60 md:ml-20 ml-3 mb-10">
        <h1 className="text-white lg:text-4xl md:text-3xl text-2xl font-bold">
          Our Latest Projects
        </h1>
        <p className="text-white lg:text-2xl text-lg mt-2">
          Delivering innovative solutions across industries
        </p>
      </header>

    
      <div className="flex items-center justify-center lg:gap-25 md:gap-15 gap-2">
        {visibleProjects.map((project, index) => (
          <div
            key={startIndex + index}
            className={`lg:flex-shrink-0 w-70 ${
              index === 1 ? "hidden sm:hidden md:hidden lg:block" : "" 
            }`}
          >
            {index === 2 ? ( 
              <article className="bg-white rounded-lg shadow-lg overflow-hidden h-110 md:w-auto w-55">
                <div className="relative">
                  <img
                    src={pic}
                    alt="Explore more projects"
                    className="w-full h-60 rounded-t-lg object-cover p-1 opacity-20"
                  />
                  <div className="absolute inset-0 flex flex-col items-start justify-center p-4">
                    <p className="text-black text-2xl font-semibold">
                      EXPLORE
                      <br />
                      MORE
                      <br />
                      PROJECTS
                    </p>
                    <FaCircleArrowRight
                      className="mt-4 text-[#27C53A] hover:text-green-700 cursor-pointer text-3xl"
                      onClick={sliderRight}
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="text-center opacity-40 bg-gradient-to-r text-transparent bg-clip-text from-lime-800 to-cyan-500 text-xl font-semibold">
                    {project.title}
                  </h2>
                  <p className="mt-3 mx-auto w-40 text-center text-lg opacity-40">
                    {project.description}
                  </p>
                </div>
              </article>
            ) : ( 
              <article className="bg-white rounded-lg shadow-lg h-110  md:ml-0 ml-3 md:w-auto w-55">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-60 rounded-t-lg object-cover p-1"
                />
                <div className="p-4">
                  <h2 className="text-center bg-gradient-to-r text-transparent bg-clip-text from-lime-800 to-cyan-500 text-xl font-semibold">
                    {project.title}
                  </h2>
                  <p className="mt-3 mx-auto w-40 text-center text-lg">
                    {project.description}
                  </p>
                </div>
              </article>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectPage;