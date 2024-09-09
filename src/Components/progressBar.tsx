import React, { useState, useEffect } from "react";
import { Card, CircularProgress, Typography } from "@mui/material";

// Define the type for the component props
interface ProgressBarProps {
  message: string;
  isLoad: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ message, isLoad }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isLoad) setLoading(true);
    else setLoading(false);
  }, [isLoad]);

  return (
    <>
      {loading && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%", // Full width
            position: "fixed",
            zIndex: "999",
            height: "100vh",
            backgroundColor: "#dadada20",
          }}
        >
          <Card
            sx={{
              width: "75%",
              boxShadow: "8px 8px 18px #dadada",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              padding: "1rem",
            }}
          >
            <CircularProgress
              disableShrink
              sx={{
                color: "#ff6f00", // Change this to match your theme color
              }}
            />

            <Typography
              variant="body2"
              sx={{
                color: "#000", // Change this to match your theme color
              }}
            >
              {message}
            </Typography>
          </Card>
        </div>
      )}
    </>
  );
};

export default ProgressBar;
