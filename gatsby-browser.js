import React from "react";
import "./src/styles/index.css";
import {Layout} from "./src/components";

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image-es5 (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`);
    import(`react-intersection-observer`)
  }
};

export const wrapPageElement = ({element, props}) => {
  return <Layout {...props}>{element}</Layout>;
};
