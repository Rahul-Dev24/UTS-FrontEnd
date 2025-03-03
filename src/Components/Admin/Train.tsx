import Add_Train from "./Add_Train"
import Nav from "./Nav"
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { Card, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import TripCard from "./TripInfo";
import { useEffect, useState } from "react";
import { getTrain } from "../../API/train.api";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const Train = () => {
    const [open, setOpen] = React.useState(false);
    const [train, setTrain] = useState<any>([]);
    useEffect(() => {
        getTrain().then((res) => {
            setTrain(res);
        })

    }, [open])

    return (
        <div>
            <Nav headerText={"Trains"} />
            <Card sx={{ padding: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#ececec" }}>

                <Button variant="outlined" onClick={() => setOpen(true)}>
                    + New
                </Button>
            </Card>
            <React.Fragment >
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => setOpen(false)}
                    aria-describedby="alert-dialog-slide-description"
                    sx={{ '& .MuiDialog-paper': { width: '100%' } }}
                >
                    <DialogTitle>{"Add Train & Route"}</DialogTitle>
                    <IconButton
                        aria-label="close"
                        onClick={() => setOpen(false)}
                        sx={(theme) => ({
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: theme.palette.grey[500],
                        })}
                    >
                        <CloseIcon />
                    </IconButton>
                    <DialogContent>
                        <Add_Train handleClose={() => setOpen(false)} />
                    </DialogContent>
                </Dialog>
            </React.Fragment>
            {train?.map((data: any, index: number) => (
                <TripCard
                    key={index}
                    source={data.origin}
                    destination={data.destination}
                    fare={data.fare}
                    distance={data.distance}
                />
            ))}
        </div>
    )
}

export default Train
