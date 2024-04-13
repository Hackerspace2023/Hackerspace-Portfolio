import { Divider, ProjectCategory } from "../../components";
import { projects } from "../../data";
import EventsCard from "../Events/EventsCard";
import "../../css/Projects.css";
import ProjectCard from "./ProjectCard";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Projects = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    // <section className="px-4 md:px-6 lg:px-8 py-4 sm:py-8 lg:py-24 space-y-10 relative z-1">
    //   <div className="flex flex-col gap-4 sm:gap-2 mx-auto text-2xl [&>code]:text-txt-secondary w-fit sm:px-24">
    //     <code className="text-left sm:-ml-16">{`<h2>`}</code>
    //     <h1 className="font-audiowide text-center text-5xl">Our Projects</h1>
    //     <code className="text-right sm:-mr-24">{`</h2>`}</code>
    //   </div>
    //   <p className="sm:text-center text-xl md:mx-auto max-w-screen-xl">
    //     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat unde
    //     suscipit sit corrupti, eligendi esse repudiandae, minima enim
    //     dignissimos molestias iste veritatis, praesentium necessitatibus
    //     asperiores quia quae inventore voluptatum voluptatem? Maiores deserunt
    //     eaque odit voluptatem magnam perspiciatis, dolores dolorem dicta alias
    //     asperiores sunt incidunt magni consequatur! Sequi excepturi accusantium
    //     esse!
    //   </p>

    //   <Divider />

    //   <div className="flex flex-col gap-4 sm:gap-2 mx-auto text-2xl [&>code]:text-txt-secondary w-fit sm:px-24">
    //     <code className="text-left sm:-ml-16">{`<h2>`}</code>
    //     <h1 className="font-audiowide text-center text-5xl">Web Projects</h1>
    //     <code className="text-right sm:-mr-24">{`</h2>`}</code>
    //   </div>
    //   {projects
    //     .filter(
    //       (project) =>
    //         project.domain.toLowerCase() === "web development" &&
    //         project.showOnHighlights === true
    //     )
    //     .map((proj, index) => (
    //       <div
    //         key={index}
    //         className="bg-[url('/static/projectCard.png')] flex items-center p-8 gap-8 md:mx-auto max-w-screen-md bg-center bg-contain bg-no-repeat"
    //       >
    //         <div className="w-1/2 space-y-2 sm:space-y-4">
    //           <h2 className="text-3xl font-audiowide">{proj.name}</h2>
    //           <h3 className="text-lg text-primary uppercase">{proj.domain}</h3>
    //           <p className="text-lg text-txt-secondary">{proj.description}</p>
    //         </div>
    //         <div
    //           className="w-1/2 bg-primary p-1"
    //           style={{
    //             clipPath:
    //               "polygon(16% 0, 100% 0, 100% 88%, 85% 100%, 0 100%, 0 14%)",
    //           }}
    //         >
    //           <img
    //             src={proj.image}
    //             alt={proj.name}
    //             className="object-cover w-full h-full select-none pointer-events-none"
    //             style={{
    //               clipPath:
    //                 "polygon(16% 0, 100% 0, 100% 88%, 85% 100%, 0 100%, 0 14%)",
    //             }}
    //           />
    //         </div>
    //       </div>
    //     ))}

    //   <Divider />

    //   <div className="flex flex-col gap-4 sm:gap-2 mx-auto text-2xl [&>code]:text-txt-secondary w-fit sm:px-24">
    //     <code className="text-left sm:-ml-16">{`<h2>`}</code>
    //     <h1 className="font-audiowide text-center text-5xl">Python Projects</h1>
    //     <code className="text-right sm:-mr-24">{`</h2>`}</code>
    //   </div>
    //   {projects
    //     .filter(
    //       (project) =>
    //         project.domain.toLowerCase() === "python projects" &&
    //         project.showOnHighlights === true
    //     )
    //     .map((proj, index) => (
    //       <div
    //         key={index}
    //         className="bg-[url('/static/projectCard.png')] flex items-center p-8 gap-8 md:mx-auto max-w-screen-md bg-center bg-contain bg-no-repeat"
    //       >
    //         <div className="w-1/2 space-y-2 sm:space-y-4">
    //           <h2 className="text-3xl font-audiowide">{proj.name}</h2>
    //           <h3 className="text-lg text-primary uppercase">{proj.domain}</h3>
    //           <p className="text-lg text-txt-secondary">{proj.description}</p>
    //         </div>
    //         <div
    //           className="w-1/2 bg-primary p-1"
    //           style={{
    //             clipPath:
    //               "polygon(16% 0, 100% 0, 100% 88%, 85% 100%, 0 100%, 0 14%)",
    //           }}
    //         >
    //           <img
    //             src={proj.image}
    //             alt={proj.name}
    //             className="object-cover w-full h-full select-none pointer-events-none"
    //             style={{
    //               clipPath:
    //                 "polygon(16% 0, 100% 0, 100% 88%, 85% 100%, 0 100%, 0 14%)",
    //             }}
    //           />
    //         </div>
    //       </div>
    //     ))}

    //   <Divider />

    //   <div className="flex flex-col gap-4 sm:gap-2 mx-auto text-2xl [&>code]:text-txt-secondary w-fit sm:px-24">
    //     <code className="text-left sm:-ml-16">{`<h2>`}</code>
    //     <h1 className="font-audiowide text-center text-5xl">Other Projects</h1>
    //     <code className="text-right sm:-mr-24">{`</h2>`}</code>
    //   </div>
    //   {projects
    //     .filter(
    //       (project) =>
    //         !["web development", "python projects"].includes(
    //           project.domain.toLowerCase()
    //         ) && project.showOnHighlights === true
    //     )
    //     .map((proj, index) => (
    //       <div
    //         key={index}
    //         className="bg-[url('/static/projectCard.png')] flex items-center p-8 gap-8 md:mx-auto max-w-screen-md bg-center bg-contain bg-no-repeat"
    //       >
    //         <div className="w-1/2 space-y-2 sm:space-y-4">
    //           <h2 className="text-3xl font-audiowide">{proj.name}</h2>
    //           <h3 className="text-lg text-primary uppercase">{proj.domain}</h3>
    //           <p className="text-lg text-txt-secondary">{proj.description}</p>
    //         </div>
    //         <div
    //           className="w-1/2 bg-primary p-1"
    //           style={{
    //             clipPath:
    //               "polygon(16% 0, 100% 0, 100% 88%, 85% 100%, 0 100%, 0 14%)",
    //           }}
    //         >
    //           <img
    //             src={proj.image}
    //             alt={proj.name}
    //             className="object-cover w-full h-full select-none pointer-events-none"
    //             style={{
    //               clipPath:
    //                 "polygon(16% 0, 100% 0, 100% 88%, 85% 100%, 0 100%, 0 14%)",
    //             }}
    //           />
    //         </div>
    //       </div>
    //     ))}
    // </section>
    <section className="Projects">
      <div className="titleContainer">
        <span className="tagAbout tagAbout1">{`<h2>`}</span>
        <h1 className="title">Our Projects</h1>
        <span className="tagAbout tagAbout2">{`</h2>`}</span>
      </div>
      <div className="aboutDescription">
        Step into our Project Section, a dynamic showcase of the innovative and
        groundbreaking work being done at Hackerspace. This is where ideas come
        to life, transformed from mere concepts into tangible projects through
        the power of code.
        <br />
        We invite you to explore these projects, learn from them, and perhaps
        even find inspiration for your next coding endeavor.
      </div>
      <ProjectCategory
        category="tag"
        domain="domain"
        data={projects}
        renderComponet={(ele) => <ProjectCard data={ele} />}
      />
      {/* <EventsCard/> */}
    </section>
  );
};

export default Projects;
