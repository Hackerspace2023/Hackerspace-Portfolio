import React from "react";

const CostumeHeading = ({ data }) => {
  return (
    <>
      <div className="titleContainer">
        <span className="tagAbout tagAbout1">{`<h2>`}</span>
        <h1 className="title">{data}</h1>
        <span className="tagAbout tagAbout2">{`</h2>`}</span>
      </div>
    </>
  );
};

export default CostumeHeading;
