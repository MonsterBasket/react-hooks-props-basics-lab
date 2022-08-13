import React from "react";

function Links(props) {
  return (
    <>
      <h3>Links</h3>
      <a href={props.links.github}>github</a>
      <a href={props.links.linkedin}>linkedin</a>
    </>
  );
}

export default Links;