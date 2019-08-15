import React, { useState } from "react";

const Player = ({
  video,
  autoplay,
  rel,
  modest,
  placeholder,
  height,
  tittle,
  style,
  controls
}) => {
  const [status, setStatus] = useState("idle");

  return (
    <div
      style={{
        width: "100%",
        height: height || "100%",
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
            onClick={e => setStatus("playing")}
            style={{
              height: height || "100%",
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
          title={tittle || "My super video"}
          src={`https://www.youtube.com/embed/${video}?autoplay=${autoplay ||
            1}&rel=${rel}&modestbranding=${modest}&controls=${controls || 0}&showinfo=${controls || 0}`}
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