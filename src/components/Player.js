import React, { useState } from "react";

const Player = ({
  video,
  autoplay=1,
  rel,
  modest,
  placeholder,
  height="100%",
  tittle="My super video",
  style,
  controls=0
}) => {
  const [status, setStatus] = useState("idle");

  return (
    <div
      style={{
        width: "100%",
        height: height,
        display: "inline-block",
        backgroundSize: `cover`,
        textAlign: "center",
        cursor: "pointer",
        backgroundImage: `url('${placeholder}')`,
        ...style
      }}
    >
      {status === "idle" ? (
        <div style={{ display: "inline-block" }}>
          <div
            onClick={() => setStatus("playing")}
            style={{
              height: height,
              display: "table-cell",
              verticalAlign: "middle"
            }}
          >
            <button
              style={{
                borderRadius: "50%",
                width: "80px",
                height: "80px",
                cursor: "pointer",
                fontSize: "20px"
              }}
            >
              ▶
            </button>
          </div>
        </div>
      ) : (
        <iframe
          title={tittle}
          src={`https://www.youtube.com/embed/${video}?autoplay=${autoplay}&rel=${rel}&modestbranding=${modest}&controls=${controls}&showinfo=${controls}`}
          className="player"
          type="text/html"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      )}
    </div>
  );
};

export default Player;