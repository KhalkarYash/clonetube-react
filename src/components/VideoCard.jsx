const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 hover:scale-101 transition duration-300">
      <img
        className="rounded-lg"
        src={thumbnails.medium.url}
        alt="Thumbnail"
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="shadow-md rounded-lg p-1 m-1 shadow-red-700">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
