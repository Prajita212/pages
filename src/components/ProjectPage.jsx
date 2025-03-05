import React from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import pic from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic4 from "../assets/pic4.jpg";

const projects = [
  {
    img: pic,
    title: "WEB DEVELOPMENT",
    description: "Scalable and modern websites for businesses.",
  },
  {
    img: pic2,
    title: "UI/UX DESIGN",
    description:
      "Emphasize creating engaging, user-friendly digital experiences.",
  },
  {
    img: pic4,
    title: "APP DEVELOPMENT",
    description: "Seamless mobile and web applications.",
  },
];

function ProjectPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#4735AC] to-[#1D1646] py-8">
      <div>
        <header className="hidden lg:block ml-20 mt-15">
          <h1 className="text-white lg:text-4xl md:text-3xl text-2xl font-bold">
            Our Latest Projects
          </h1>
          <p className="text-white lg:text-2xl text-lg mt-2">
            Delivering innovative solutions across industries
          </p>
        </header>
        <header className="block lg:hidden text-center">
          <h1 className="text-white lg:text-4xl md:text-3xl text-2xl font-bold">
            Our Latest Projects
          </h1>
          <p className="text-white lg:text-2xl text-lg mt-2">
            Delivering innovative solutions across industries
          </p>
        </header>
        <div className="mt-10 flex lg:flex-row flex-col md:gap-20 gap-10 items-center justify-center">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-white w-70 h-110 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-70 h-60 rounded-t-lg object-cover p-1"
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
          ))}

          <article className="bg-white rounded-lg shadow-lg overflow-hidden w-70 h-110">
            <div className="relative">
              <img
                src={pic}
                alt="Explore more projects"
                className="w-70 h-60 rounded-t-lg object-cover p-1 opacity-20"
              />
              <div className="absolute inset-0 flex flex-col items-start justify-center p-4">
                <p className="text-black text-2xl font-semibold">
                  EXPLORE
                  <br />
                  MORE
                  <br />
                  PROJECTS
                </p>
                <FaCircleArrowRight className="mt-4 text-[#27C53A] hover:text-green-700 cursor-pointer text-3xl md:text-3xl" />
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-center opacity-40 bg-gradient-to-r text-transparent bg-clip-text from-lime-800 to-cyan-500 text-xl font-semibold">
                DIGITAL MARKETING & SEO
              </h2>
              <p className="mt-3 mx-auto w-40 text-center text-lg opacity-40">
                Boosting visibility with data-driven marketing.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ProjectPage;
