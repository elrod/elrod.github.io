import React, { useState } from "react";
import { Box } from "@mui/material";

const ProjectMediaCarousel = ({ media }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = media[activeIndex];

  return (
    <Box sx={{ position: "relative", width: "100%", maxHeight: "600px" }}>
      {/* Media principale */}
      {activeItem.type === "video" ? (
        <video
          key={activeItem.src} // forza il restart quando cambio
          src={activeItem.src}
          style={{ width: "100%", maxHeight: "600px", objectFit: "cover" }}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <img
          src={activeItem.src}
          alt={`media-${activeIndex}`}
          style={{ width: "100%", maxHeight: "600px", objectFit: "cover" }}
        />
      )}

      {/* Thumbnails in overlay */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          position: "absolute",
          bottom: 8,
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "rgba(0,0,0,0.6)",
          padding: "4px 8px",
          borderRadius: "8px",
        }}
      >
        {media.map((item, index) => (
          <Box
            key={index}
            component="button"
            onClick={() => setActiveIndex(index)}
            sx={{
              border: activeIndex === index ? "2px solid #5FB49C" : "2px solid transparent",
              padding: 0,
              background: "none",
              cursor: "pointer",
            }}
          >
            {item.type === "video" ? (
              <video
                src={item.src}
                muted
                playsInline
                style={{
                  width: "80px",
                  height: "45px",
                  objectFit: "cover",
                  pointerEvents: "none",
                }}
              />
            ) : (
              <img
                src={item.src}
                alt={`thumb-${index}`}
                style={{
                  width: "80px",
                  height: "45px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProjectMediaCarousel;