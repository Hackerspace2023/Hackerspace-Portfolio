import React from "react";
import "../../css/membersSection.css";
import { Button } from "../../components";

const MembersSection = () => {
    return (
        <section className="members">
            <div className="titleContainer">
                <span className="tagAbout tagAbout1">{`<h2>`}</span>
                <h1 className="title">Our Members</h1>
                <span className="tagAbout tagAbout2">{`</h2>`}</span>
            </div>
            <div className="membersContainer">
                <div className="membersProfile">
                    <img src="https://as1.ftcdn.net/v2/jpg/05/16/27/58/1000_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg" alt="" />
                </div>
                <div className="membersContenet">
                    <div className="membersContenetAbout">
                        <h2>Lorem Ipsam</h2>
                        <h3>DESIGN AND DEVELOPMET</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been
                        </p>
                    </div>
                    <div className="membersConteneLinks">
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MembersSection;
