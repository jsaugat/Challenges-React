import React, {useRef} from "react";
import Card from "./Card";

function Foreground() {
  const reference = useRef(null)

  const data = [
    {
      desc: "Redux streamlines state management in React applications.",
      docSize: "128kb",
      downloaded: "false",
      hasRectangle: true,
      cta: "Explore"
    },
    {
      desc: "React Router enables seamless navigation within applications.",
      docSize: "205kb",
      downloaded: "false",
      hasRectangle: false
    },
    {
      desc: "Virtual DOM optimizes rendering for efficient performance.",
      docSize: "69kb",
      downloaded: "true",
      hasRectangle: false
    },
  ];

  return (
    <div ref={reference} className="Foreground absolute h-full w-full flex flex-wrap p-2">
      {data.map((item) => (
        <Card cardInfo={item} foregroundConstraint={reference}/>
      ))}
    </div>
  );
}

export default Foreground;
