export const calculateInterval = (bpm) => {
  return (60 / bpm) * 1000 * 8;
};

export const getVideoId = (videoUrl) => {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = videoUrl.match(regExp);
  console.log("match: " + match);
  const videoShortCode = match && match[7].length === 11 ? match[7] : false;
  return videoShortCode;
};
