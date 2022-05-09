import "./src/styles/index.css";

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image-es5 (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`);
    console.log(`# IntersectionObserver is polyfilled!`);
  }
};
