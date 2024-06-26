import { Divider, EventsCategory } from "../../components";
import { events } from "../../data";
import "../../css/Events.css";
import EventsCard from "./EventsCard";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Events = () => {
  // console.log(events);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    // <section className="px-4 md:px-6 lg:px-8 py-4 sm:py-8 lg:py-24 space-y-10">
    //   <div className="flex flex-col gap-4 sm:gap-2 mx-auto text-2xl [&>code]:text-txt-secondary w-fit sm:px-24">
    //     <code className="text-left sm:-ml-16">{`<h2>`}</code>
    //     <h1 className="font-audiowide text-center text-5xl">Our Events</h1>
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

    //   <div className="flex flex-col gap-4 sm:gap-2 mx-auto text-2xl [&>code]:text-txt-secondary w-fit sm:px-24">
    //     <code className="text-left sm:-ml-16">{`<h2>`}</code>
    //     <h1 className="font-audiowide text-center text-5xl">Upcoming Events</h1>
    //     <code className="text-right sm:-mr-24">{`</h2>`}</code>
    //   </div>
    //   {events
    //     .filter((allEvent) => new Date(allEvent.date) >= Date.now())
    //     .map((eve, index) => (
    //       <div
    //         key={index}
    //         className="bg-[url('/static/projectCard.png')] flex items-center p-8 gap-8 md:mx-auto max-w-screen-md bg-center bg-contain bg-no-repeat"
    //       >
    //         <div className="w-1/2 space-y-2 sm:space-y-4">
    //           <h2 className="text-3xl font-audiowide">{eve.name}</h2>
    //           <h3 className="text-lg text-primary uppercase">{eve.location}</h3>
    //           <p className="text-lg text-txt-secondary">{eve.description}</p>
    //         </div>
    //         <div
    //           className="w-1/2 bg-primary p-1"
    //           style={{
    //             clipPath:
    //               "polygon(16% 0, 100% 0, 100% 88%, 85% 100%, 0 100%, 0 14%)",
    //           }}
    //         >
    //           <img
    //             src={eve.image}
    //             alt={eve.name}
    //             className="object-cover w-full h-96 select-none pointer-events-none"
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
    //     <h1 className="font-audiowide text-center text-5xl">Past Events</h1>
    //     <code className="text-right sm:-mr-24">{`</h2>`}</code>
    //   </div>
    //   {events
    //     .filter((allEvent) => new Date(allEvent.date) < Date.now())
    //     .map((eve, index) => (
    //       <div
    //         key={index}
    //         className="bg-[url('/static/projectCard.png')] flex items-center p-8 gap-8 md:mx-auto max-w-screen-md bg-center bg-contain bg-no-repeat"
    //       >
    //         <div className="w-1/2 space-y-2 sm:space-y-4">
    //           <h2 className="text-3xl font-audiowide">{eve.name}</h2>
    //           <h3 className="text-lg text-primary uppercase">{eve.location}</h3>
    //           <p className="text-lg text-txt-secondary">{eve.description}</p>
    //         </div>
    //         <div
    //           className="w-1/2 bg-primary p-1"
    //           style={{
    //             clipPath:
    //               "polygon(16% 0, 100% 0, 100% 88%, 85% 100%, 0 100%, 0 14%)",
    //           }}
    //         >
    //           <img
    //             src={eve.image}
    //             alt={eve.name}
    //             className="object-cover w-full h-96 select-none pointer-events-none"
    //             style={{
    //               clipPath:
    //                 "polygon(16% 0, 100% 0, 100% 88%, 85% 100%, 0 100%, 0 14%)",
    //             }}
    //           />
    //         </div>
    //       </div>
    //     ))}
    // </section>
    <section className="Events">
      <div className="titleContainer">
        <span className="tagAbout tagAbout1">{`<h2>`}</span>
        <h1 className="title">Our Events</h1>
        <span className="tagAbout tagAbout2">{`</h2>`}</span>
      </div>
      <div className="aboutDescription">
        Hackerspace keenly engages in hosting various hackathons, coding
        contests, and workshops to engage students in coding projects, skill
        development, and networking opportunities.
      </div>
      <EventsCategory
        category="category"
        data={events}
        renderComponet={(ele) => <EventsCard data={ele} />}
      />
    </section>
  );
};

export default Events;
