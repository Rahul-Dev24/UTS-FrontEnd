import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import "./LocationPopup.css";
import axios from "axios";
const LocationPopup: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleAllowLocation = () => {
    // Ask for location permission
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setOpen(false);
        axios
          .get(
            `https://nominatim.openstreetmap.org/reverse?lat=${position?.coords?.latitude}&lon=${position?.coords?.longitude}&format=json`
          )
          .then((res) => {
            sessionStorage.setItem(
              "location",
              JSON.stringify(res?.data?.address)
            );
          });
      },
      (error) => {
        console.log("Location permission denied", error);
        setOpen(false);
      }
    );
  };
  useEffect(() => {
    const location = sessionStorage.getItem("location");
    console.log(location);

    if (!location) {
      handleClickOpen();
    }
  }, []);
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <div className="locationContiner">
          <DialogTitle sx={{ textAlign: "center", fontSize: "0.9rem" }}>
            Allow UTS to access this device's location?
          </DialogTitle>
          <DialogActions
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Button onClick={handleAllowLocation}>Allow</Button>
          </DialogActions>
        </div>
      </Dialog>
    </>
  );
};

export default LocationPopup;
