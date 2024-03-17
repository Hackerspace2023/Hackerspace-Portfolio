import React, { Fragment, useState } from "react";
import "../../css/category.css";

const Category = ({ data, category, renderComponet }) => {
  const uniqueCategory = [...new Set(data.map((item) => item[category]))];
  const trimmedCategories = uniqueCategory.reduce((acc, item) => {
    const trimmedItems = item
      .split(",")
      .map((trimmedItem) => trimmedItem.trim());
    return [...acc, ...trimmedItems];
  }, []);
  const filteredCategories = [...new Set(trimmedCategories)];
  const [selectedId, setSelectedId] = useState(uniqueCategory[0]);
  // const separatedCategories = selectedId.split(",").map((category) => category.trim());
  return (
    <>
      <section className="categorySecion">
        <div className="categoryOptions">
          {filteredCategories.map((item, index) => (
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
          {/* {data
            .filter((item) => item[category] === selectedId)
            .map((item, index) => (
              <Fragment key={index}>{renderComponet(item)}</Fragment>
            ))} */}
          {data
            .filter((item) =>
              item[category]
                .split(",")
                .map((category) => category.trim())
                .includes(selectedId)
            )
            .map((item, index) => (
              <Fragment key={index}>{renderComponet(item)}</Fragment>
            ))}
        </div>
      </section>
    </>
  );
};

export default Category;
