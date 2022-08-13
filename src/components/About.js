import React from "react";
import Links from "./Links"

function About(props) {
  const printBio = props.bio;
  return (
    <div id="about">
      <h2>About Me</h2>
      {printBio ? <p>{props.bio}</p> : ""}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links 
        links={props.links}//.github}
        //linkedin={props.links.linkedin}
      />
    </div>
  );
}

export default About;
