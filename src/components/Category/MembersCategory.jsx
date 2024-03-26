import { Fragment, useState } from "react";
import "../../css/category.css";

const MembersCategory = ({ data, renderComponet }) => {
  // console.log("from membersCategory",data);
  const infoData = data.map((ele) => ele.info);
  const members = data.map((ele) => ele.data);
  const [infoTitle, setInfoTitle] = useState(infoData[0]);
  const [selectedOption, setSelectedOption] = useState(infoData[0].title);
  const [selectedMembers, setSelectedMembers] = useState(members[0]);

  const handleOptionClick = (ele,index) => {
    console.log(ele);
    setInfoTitle(ele);
    setSelectedOption(ele.title);
    setSelectedMembers(members[index])
  };
  // console.log(members);

  // console.log(members);
  return (
    <>
      <section className="categorySecion">
        <div className="categoryOptions membersOptions">
          {infoData.map((ele, index) => (
            <div className={`categoryOptionItem membersCategory ${ele.title === selectedOption ? 'active' : ''}`} key={index} onClick={()=>handleOptionClick(ele,index)}>
              {ele.shortForm}
            </div>
          ))}
        </div>
        <h2 className="categoryTitle">{infoTitle.title}</h2>
        <div className="categoryCardSection">
          {
            selectedMembers.map((ele,index)=>(<Fragment key={index}>{renderComponet(ele)}</Fragment>))
          }
          
        </div>
      </section>
    </>
  );
};

export default MembersCategory;
