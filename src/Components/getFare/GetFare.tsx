import { useState } from 'react';
import {
    Box,
    Typography,
    Grid,
    Select,
    MenuItem,
    FormControl,
    Button,
    Checkbox,
    FormControlLabel,
    InputLabel,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FF6F00',
        },
        secondary: {
            main: '#FF6F00',
        },
    },
    typography: {
        fontSize: 12,
    },
});

const GetFare = () => {
    const [adult, setAdult] = useState('ONE (1)');
    const [child, setChild] = useState('ZERO (0)');
    const [ticketType, setTicketType] = useState('JOURNEY (J)');
    const [trainType, setTrainType] = useState('ORDINARY (O)');
    const [trainClass, setTrainClass] = useState('SECOND (II)');
    const [paymentType, setPaymentType] = useState('RWALLET');
    const [availConcession, setAvailConcession] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    backgroundColor: '#FFF',
                    borderRadius: 2,
                    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
                    p: 2,
                    mt: 2,
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#FF6F00' }}>
                    NORMAL BOOKING
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel>Adult</InputLabel>
                            <Select value={adult} onChange={(e) => setAdult(e.target.value)}>
                                <MenuItem value="ONE (1)">ONE (1)</MenuItem>
                                <MenuItem value="TWO (2)">TWO (2)</MenuItem>
                                {/* Add more options as needed */}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel>Child</InputLabel>
                            <Select value={child} onChange={(e) => setChild(e.target.value)}>
                                <MenuItem value="ZERO (0)">ZERO (0)</MenuItem>
                                <MenuItem value="ONE (1)">ONE (1)</MenuItem>
                                {/* Add more options as needed */}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel>Ticket Type</InputLabel>
                            <Select value={ticketType} onChange={(e) => setTicketType(e.target.value)}>
                                <MenuItem value="JOURNEY (J)">JOURNEY (J)</MenuItem>
                                {/* Add more options as needed */}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel>Train Type</InputLabel>
                            <Select value={trainType} onChange={(e) => setTrainType(e.target.value)}>
                                <MenuItem value="ORDINARY (O)">ORDINARY (O)</MenuItem>
                                {/* Add more options as needed */}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel>Class</InputLabel>
                            <Select value={trainClass} onChange={(e) => setTrainClass(e.target.value)}>
                                <MenuItem value="SECOND (II)">SECOND (II)</MenuItem>
                                {/* Add more options as needed */}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <InputLabel>Payment Type</InputLabel>
                            <Select value={paymentType} onChange={(e) => setPaymentType(e.target.value)}>
                                <MenuItem value="RWALLET">RWALLET</MenuItem>
                                {/* Add more options as needed */}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={availConcession}
                            onChange={(e) => setAvailConcession(e.target.checked)}
                        />
                    }
                    label="Avail concession"
                    sx={{ mt: 2 }}
                />
                <Box sx={{ mt: 2, p: 1, backgroundColor: '#f8f8f8', borderRadius: 1 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                        TICKET SUMMARY
                    </Typography>
                    <Typography variant="body2">Source Station: GUMMIDIPUNDI</Typography>
                    <Typography variant="body2">Destination Station: CHENNAI CENTRAL SUBU</Typography>
                    <Typography variant="body2">Via: TVT-BBQ</Typography>
                    <Typography variant="body2">Adult: 1 Child: 0 Escort: 0</Typography>
                    <Typography variant="body2">Class Type: SECOND</Typography>
                    <Typography variant="body2">Ticket Type: JOURNEY</Typography>
                    <Typography variant="body2">Train Type: ORDINARY</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#FF6F00', mt: 1 }}>
                        Total Fare: ₹15/-
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'red', display: 'block', mt: 1 }}>
                        Kindly check Next Upcoming trains for your selected journey before Ticket Booking.
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'red', fontWeight: 'bold', mt: 1, display: 'block' }}>
                        JOURNEY SHOULD COMMENCE WITHIN 1 HOUR
                    </Typography>
                </Box>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{
                        mt: 2,
                        background: 'linear-gradient(45deg, #FF6F00, #FF8E53)',
                        color: '#fff',
                    }}
                >
                    BOOK TICKET
                </Button>
            </Box>
        </ThemeProvider>
    );
}

export default GetFare
