import React from "react";
import { Layout } from "./src/components/layout";

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
export const onRenderBody = ({ setBodyAttributes, setHtmlAttributes }) => {
  setBodyAttributes({
    className: "relative",
  });

  setHtmlAttributes({
    lang: "en",
  });
};
