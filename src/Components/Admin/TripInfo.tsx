import React from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";

interface TripInfo {
    source: string;
    destination: string;
    fare: string;
    distance: string;
}

const TripCard: React.FC<TripInfo> = ({ source, destination, fare, distance }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: 2 }}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="body1">Source:</Typography>
                            <Typography variant="body1">{source}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sx={{ marginTop: -1, marginBottom: -1 }}>
                        <Box display="flex" justifyContent="space-between">
                            <Typography variant="body1">Destination:</Typography>
                            <Typography variant="body1">{destination}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={8} sx={{ marginBottom: -1 }}>
                        <Box display="flex">
                            <Typography variant="body1">Fare:</Typography>&nbsp;
                            <Typography variant="body1">{fare}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sx={{ marginBottom: -1 }}>
                        <Box display="flex" >
                            <Typography variant="body1">Distance:</Typography>&nbsp;
                            <Typography variant="body1">{distance}</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default TripCard;
