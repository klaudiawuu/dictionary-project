import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div class="Phonetic">
      <a href={props.phonetic.audio} rel="noreferrer" target="_blank">
        Listen
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
