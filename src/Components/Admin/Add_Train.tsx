import { TextField, MenuItem, Select, InputLabel, FormControl, Checkbox, ListItemText, Button, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { addTrain, getStation } from '../../API/train.api';


// Define the type for the form data
interface FormData {
    sourceStation: string;
    destinationStation: string;
    fare: string;
    distance: string;
    zone: string;
    trainNumber: string;
    stops: string[];
}

const Add_Train = ({ handleClose }: { handleClose: () => void }) => {
    const [formData, setFormData] = useState<FormData>({
        sourceStation: '',
        destinationStation: '',
        fare: '',
        distance: '',
        zone: '',
        trainNumber: '',
        stops: [],
    });

    const [stations, setStations] = useState<any>([]);

    // Handle change for input fields
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle change for multi-select field (stops)
    const handleStopChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const { value } = event.target;
        setFormData({ ...formData, stops: typeof value === 'string' ? value.split(',') : value as string[] });
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await addTrain({
            "trainNumber": formData.trainNumber,
            "origin": formData.sourceStation?.split("-")[0],
            "destination": formData.destinationStation?.split("-")[0],
            "stops": formData?.stops,
            "distance": formData?.distance,
            "fare": formData.fare,
            "zone": formData.zone,
            "originCode": formData.sourceStation?.split("-")[1],
            "destinationCode": formData.destinationStation?.split("-")[1]
        });
        if (res?.message?.includes("Successfully")) {
            setFormData({
                sourceStation: '',
                destinationStation: '',
                fare: '',
                distance: '',
                zone: '',
                trainNumber: '',
                stops: [],
            })
            handleClose();
        }
    };
    useEffect(() => {
        getStation(1000, true).then((res) => {
            setStations(res);
        })
    }, []);

    return (
        <div>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {/* Train Number TextField */}
                <TextField
                    fullWidth
                    label="Train Number"
                    name="trainNumber"
                    value={formData.trainNumber}
                    onChange={handleInputChange}
                    required
                />
                {/* Source Station Dropdown */}
                <FormControl fullWidth>
                    <InputLabel>Source Station</InputLabel>
                    <Select
                        value={formData.sourceStation}
                        onChange={(e: any) => handleInputChange(e)}
                        name="sourceStation"
                        label="Source Station"
                    >
                        {stations?.map((station: any, index: number) => (
                            <MenuItem key={index} value={station?.name + '-' + station?.code} >
                                {station?.name} - {station?.code}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {/* Destination Station Dropdown */}
                <FormControl fullWidth>
                    <InputLabel>Destination Station</InputLabel>
                    <Select
                        value={formData.destinationStation}
                        onChange={(e: any) => handleInputChange(e)}
                        name="destinationStation"
                        label="Destination Station"
                    >
                        {stations?.map((station: any, index: number) => (
                            <MenuItem key={index} value={station?.name + '-' + station?.code}>
                                {station?.name}-{station?.code}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {/* Fare TextField */}
                <TextField
                    fullWidth
                    label="Fare"
                    name="fare"
                    type="number"
                    value={formData.fare}
                    onChange={handleInputChange}
                    required
                />


                {/* Distance TextField */}
                <TextField
                    fullWidth
                    label="Distance"
                    name="distance"
                    type="number"
                    value={formData.distance}
                    onChange={handleInputChange}
                    required
                />

                {/* Zone TextField */}
                <TextField
                    fullWidth
                    label="Zone"
                    name="zone"
                    value={formData.zone}
                    onChange={handleInputChange}
                    required
                />

                {/* Stops Multi-Select */}
                <FormControl fullWidth>
                    <InputLabel>Stops</InputLabel>
                    <Select
                        multiple
                        value={formData.stops}
                        onChange={(e: any) => handleStopChange(e)}
                        name="stops"
                        label="Stops"
                        renderValue={(selected) => selected.join(', ')}
                    >
                        {stations?.map((stop: any, index: number) => (
                            <MenuItem key={index} value={stop?.code}>
                                <Checkbox checked={formData.stops.indexOf(stop?.code) > -1} />
                                <ListItemText primary={stop?.name + " - " + stop?.code} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {/* Submit Button */}
                <Button type="submit" variant="contained" sx={{ backgroundColor: '#ff5722' }}>
                    Submit
                </Button>
            </Box>
        </div >
    )
}

export default Add_Train
