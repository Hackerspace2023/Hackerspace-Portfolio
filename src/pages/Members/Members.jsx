import React, { useState } from "react";
import { Button, Card, Category } from "../../components";
import { members2 } from "../../data";
import "../../css/Members.css";

const Members = () => {
  // console.log(members2);
  return (
    <>
      <section className="Members">
        <div className="titleContainer">
          <span className="tagAbout tagAbout1">{`<h2>`}</span>
          <h1 className="title">Members</h1>
          <span className="tagAbout tagAbout2">{`</h2>`}</span>
        </div>
        <div className="aboutDescription">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been
        </div>
        <Category
          category="domain"
          data={members2}
          renderComponet={(ele) => <Card data={ele} />}
        />
      </section>
    </>
  );
};

export default Members;
