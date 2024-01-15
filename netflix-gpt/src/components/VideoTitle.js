import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold ">{title}</h1>
      <p className="py-6 w-1/4 text-lg">{overview}</p>
      <div>
        <button className="px-6 py-2 text-black bg-white hover:bg-opacity-60 rounded-lg">
          Play
        </button>
        <button className="px-6 py-2 bg-gray-700 text-white hover:bg-opacity-60 rounded-lg mx-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
