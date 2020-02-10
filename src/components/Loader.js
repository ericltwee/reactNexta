import React from "react";

const Loader = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ margin: "auto" }}
      width="200"
      height="200"
      display="block"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
    >
      <circle
        cx="50"
        cy="50"
        r="39.029"
        fill="none"
        stroke="#0b3b7f"
        strokeWidth="3"
      >
        <animate
          attributeName="r"
          begin="-0.23809523809523814s"
          calcMode="spline"
          dur="0.4761904761904763s"
          keySplines="0 0.2 0.8 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="0;40"
        ></animate>
        <animate
          attributeName="opacity"
          begin="-0.23809523809523814s"
          calcMode="spline"
          dur="0.4761904761904763s"
          keySplines="0.2 0 0.8 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        ></animate>
      </circle>
      <circle
        cx="50"
        cy="50"
        r="22.797"
        fill="none"
        stroke="#14c9e1"
        strokeWidth="3"
      >
        <animate
          attributeName="r"
          calcMode="spline"
          dur="0.4761904761904763s"
          keySplines="0 0.2 0.8 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="0;40"
        ></animate>
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="0.4761904761904763s"
          keySplines="0.2 0 0.8 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        ></animate>
      </circle>
    </svg>
  );
};

export default Loader;
