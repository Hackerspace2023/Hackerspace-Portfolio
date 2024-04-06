import React, { Fragment, useState } from "react";
import "../../css/eventsCategory.css";
import CostumeHeading from "../Heading/CostumeHeading";

const ProjectCategory = ({ data, category, domain, renderComponet }) => {
  const uniqueCategory = [...new Set(data.map((item) => item[category]))];
  const uniqueDomain = [...new Set(data.map((item) => item[domain]))];
  const [selectedId, setSelectedId] = useState(uniqueCategory[0]);
  const [selectedDomain, setSelectedDomain] = useState(uniqueDomain[0]);

  console.log(uniqueCategory);

  const handelClick = (item, index) => {
    setSelectedId(item);
    setSelectedDomain(uniqueDomain[index]);
  };

  return (
    <>
      <section className="categorySecion">
        <div className="categoryOptions projectCategory">
          {uniqueCategory.map((item, index) => (
            <div
              key={index}
              onClick={() => handelClick(item, index)}
              className="categoryOptionItem projectOptionItem"
            >
              {item}
            </div>
          ))}
        </div>
        <h2 className="categoryTitle">{selectedDomain}</h2>
        {/* <div className="categoryTitle">
          <CostumeHeading data={selectedDomain} />
        </div> */}
        <div className="categoryCardSection">
          {data
            .filter((item) => item[category] === selectedId)
            .map((item, index) => (
              <Fragment key={index}>{renderComponet(item)}</Fragment>
            ))}
        </div>
      </section>
    </>
  );
};

export default ProjectCategory;
