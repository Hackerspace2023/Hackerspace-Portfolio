import { Card, MembersCategory } from "../../components";
import { membersData, membersNew } from "../../data";
import "../../css/Members.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Members = () => {
  // console.log(memberNew);
  // console.log(membersData);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <section className="Members">
        <div className="titleContainer">
          <span className="tagAbout tagAbout1">{`<h2>`}</span>
          <h1 className="title">Members</h1>
          <span className="tagAbout tagAbout2">{`</h2>`}</span>
        </div>
        <div className="aboutDescription">
          Our members actively participate in discussions, forums, and events
          fostering a vibrant teaching and learning environment.
        </div>
        <MembersCategory
          data={membersData}
          renderComponet={(ele) => <Card data={ele} data-aos="fade-up" />}
        />
      </section>
    </>
  );
};

export default Members;
