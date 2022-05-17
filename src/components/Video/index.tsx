import * as React from "react";
import cn from "classnames";

const Video = ({ videoSrcURL, className, videoTitle, ...props }: any) => (
  <div className={cn(className, "")}>
    <iframe
      width={"100%"}
      height={"450px"}
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      {...props}
    ></iframe>
  </div>
);
export default Video;
