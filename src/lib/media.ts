export const getYouTubeIDFromURL = (url: string) => {
  let regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  let match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : undefined;
};

export const getVideoThumbnail = (videoUrl: string) => {
  return `https://img.youtube.com/vi/${getYouTubeIDFromURL(
    videoUrl
  )}/maxresdefault.jpg`;
};
