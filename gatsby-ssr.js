import * as React from "react";
import {Layout} from "./src/components";

export const onRenderBody = ({setBodyAttributes, setHtmlAttributes}) => {
    setBodyAttributes({
        className: "relative",
    });

    setHtmlAttributes({
        lang: "en",
    });
};

export const wrapPageElement = ({element, props}) => {

    return <Layout {...props}>{element}</Layout>;
};
