
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "./Trailer.css";

const Trailer = () => {
  const { ytTrailerId } = useParams();

  return (
    <div className="react-player-container">
      {ytTrailerId && (
        <ReactPlayer
          src={`https://www.youtube.com/watch?v=${ytTrailerId}`}
          controls
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
};

export default Trailer;
