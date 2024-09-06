import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import "./LocationPopup.css";
import RoomIcon from '@mui/icons-material/Room';
import axios from 'axios';
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
                axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${position?.coords?.latitude}&lon=${position?.coords?.longitude}&format=json`).then((res) => {
                    sessionStorage.setItem('location', JSON.stringify(res?.data?.address));
                });
            },
            (error) => {
                console.log('Location permission denied', error);
                setOpen(false);
            }
        );
    };
    useEffect(() => {
        const location = sessionStorage.getItem('location');
        console.log(location);

        if (!location) {
            handleClickOpen();
        }
    }, [])
    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <div className='locationContiner'>
                    <RoomIcon />
                    <DialogTitle sx={{ textAlign: "center", fontSize: "0.9rem" }}>Allow UTS to access this device's location?</DialogTitle>
                    <DialogContent>
                        <img src="/location_prev.png" alt="" width={80} height={50} />
                    </DialogContent>
                    <DialogActions sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <Button onClick={handleAllowLocation} sx={{ color: "#fff", textAlign: "center" }} >
                            Allow
                        </Button>
                        <Button onClick={handleClose} sx={{ color: "#fff", textAlign: "center" }} >
                            Deny
                        </Button>
                    </DialogActions>
                </div>
            </Dialog>
        </>
    );
};

export default LocationPopup;
