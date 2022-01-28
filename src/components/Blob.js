import React from "react";
import styled from "styled-components";

const Shape = styled.svg`
  height: 250px;
  width: 250px;
  z-index: -1;
  position: absolute;
  display: grid;
`;

export default function Blob() {
  return (
    <Shape
      viewBox="-20 60 200 170"
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
        d="M48.4,-39.9C62.3,-34.4,73.1,-17.2,74.7,1.7C76.4,20.6,69,41.1,55.1,55.4C41.1,69.7,20.6,77.7,6.6,71.2C-7.4,64.6,-14.9,43.4,-23.9,29.1C-33,14.9,-43.7,7.4,-46.4,-2.7C-49.1,-12.9,-43.9,-25.8,-34.8,-31.3C-25.8,-36.8,-12.9,-34.9,2.2,-37.1C17.2,-39.2,34.4,-45.4,48.4,-39.9Z"
        transform="translate(100 100)"
      />
    </Shape>
  );
}
