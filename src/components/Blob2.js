import React from "react";
import styled from "styled-components";

const Shape = styled.svg`
  height: 250px;
  width: 250px;
  z-index: -1;
  position: absolute;
  display: grid;
`;

export default function Blob2() {
  return (
    <Shape
      viewBox="-70 10 230 230"
      xmlns="http://www.w3.org/2000/svg"
      y="1190"
      x="235"
    >
      <defs>
        <radialGradient id="rgrad">
          <stop offset="0%" stopColor="rgb(200,4,105)" stopOpacity="1.00" />
          <stop offset="19%" stopColor="rgb(175,76,113)" stopOpacity="1.00" />
          <stop offset="67%" stopColor="rgb(213,127,213)" stopOpacity="0.67" />
        </radialGradient>
      </defs>
      <path
        style={{ fill: "url(#rgrad)" }}
        d="M46.1,-50.7C55.2,-37,54.8,-18.5,54.1,-0.6C53.5,17.3,52.6,34.5,43.6,43.5C34.5,52.4,17.3,53,3.5,49.5C-10.3,46,-20.5,38.4,-30,29.4C-39.5,20.5,-48.3,10.3,-51.1,-2.8C-53.9,-15.8,-50.7,-31.7,-41.2,-45.3C-31.7,-59,-15.8,-70.5,1.3,-71.8C18.5,-73.2,37,-64.4,46.1,-50.7Z"
        transform="translate(100 100)"
      />
    </Shape>
  );
}
