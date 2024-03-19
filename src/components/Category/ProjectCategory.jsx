import React, { Fragment, useState } from "react";
import "../../css/eventsCategory.css";

const ProjectCategory = ({ data, category, renderComponet }) => {
  const uniqueCategory = [...new Set(data.map((item) => item[category]))];
  const [selectedId, setSelectedId] = useState(uniqueCategory[0]);
  
  return (
    <>
      <section className="categorySecion">
        <div className="categoryOptions">
          {uniqueCategory.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedId(item)}
              className="categoryOptionItem"
            >
              {item}
            </div>
          ))}
        </div>
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
