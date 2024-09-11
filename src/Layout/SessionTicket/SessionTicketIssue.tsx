import React, { useState } from 'react';
import { Typography, Box, TextField, Button, Radio, RadioGroup, FormControlLabel, Grid, FormControl, Card } from '@mui/material';
import Nav from '../../Components/navBar/Nav';

const SessionTicketIssue: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState('nextDate');
    const [radioSelectedValue, setRadioSelectedValue] = useState("");


    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(event.target.value);
    };

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // sessionStorage.setItem("radioValue", JSON.stringify(event.target.value));
        setRadioSelectedValue(event.target.value);
        // sessionStorage.setItem("source", JSON.stringify({}));
        // sessionStorage.setItem("destination", JSON.stringify({}));
    };

    return (
        <>
            <Nav language={false} />
            <Box sx={{ flexGrow: 1, padding: "1rem" }}>

                <Card sx={{ width: "94%", margin: "auto" }}>
                    <div className="top" style={{ display: "flex" , gap:"" }}>
                        <img src="/ticket_white_uts.png" width={30} height={20} />
                        <p>TICKET ISSUE</p>
                    </div>
                    <div className="cardBody">

                        <FormControl className="radioBtn">
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                className="radioGroup"
                                onChange={handleRadioChange}
                            >
                                <FormControlLabel
                                    checked={radioSelectedValue === "paperLess"}
                                    value={"next_date"}
                                    control={
                                        <Radio
                                            sx={{
                                                "& .MuiSvgIcon-root": {
                                                    fontSize: 20,
                                                    color: "#FF6F00",
                                                },
                                            }}
                                        />
                                    }
                                    label={
                                        <span className="radioLabel" style={{ fontSize: "2.6vw" }}>
                                            Next Date
                                        </span>
                                    }
                                />

                                <FormControlLabel
                                    checked={radioSelectedValue === "paper"}
                                    value={"current_date"}
                                    control={
                                        <Radio
                                            sx={{
                                                "& .MuiSvgIcon-root": {
                                                    fontSize: 20,
                                                    color: "#FF6F00",
                                                },
                                            }}
                                        />
                                    }
                                    label={
                                        <span className="radioLabel" style={{ fontSize: "2.6vw" }}>
                                            Current Date
                                        </span>
                                    }
                                />
                            </RadioGroup>
                        </FormControl>



                        <Box sx={{ mb: 2 }}>
                            <TextField
                                fullWidth
                                id="outlined-error"
                                label="Station Name/Code"
                                placeholder="Station Name/Code"
                                type="search"
                                variant="filled"
                                // inputRef={searchInputRef}
                                // value={searchTerm}
                                // onChange={(e: any) =>
                                //     setSearchTerm(e?.target?.value?.trim())
                                // }
                                sx={{
                                    "& .MuiFilledInput-root": {
                                        backgroundColor: "#fff", // Background color of the input field
                                        "&:hover": {
                                            backgroundColor: "#fff", // Background color on hover
                                        },
                                        "&.Mui-focused": {
                                            backgroundColor: "#fff", // Background color when focused
                                        },
                                    },
                                    "& .MuiInputLabel-root": {
                                        color: "#666", // Default label color
                                        fontSize: "1rem",
                                    },
                                    "& .MuiInputLabel-root.Mui-focused": {
                                        color: "#fd5948", // Label color when focused
                                    },
                                    "& .MuiInputLabel-root:hover": {
                                        color: "#fd5948", // Label color on hover
                                    },
                                    "& .MuiFilledInput-underline:before": {
                                        borderBottomColor: "#fd5948", // Default underline color
                                    },
                                    "& .MuiFilledInput-underline:after": {
                                        borderBottomColor: "#ff5722", // Underline color when focused
                                    },
                                }}
                                InputLabelProps={{
                                    style: { color: "#ff5722" }, // Default label color
                                    sx: {
                                        "&.Mui-focused": { color: "#ff5722" }, // Label color when focused
                                        "&:hover": { color: "#ff5722" }, // Label color on hover
                                    },
                                }}
                            />
                        </Box>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                {/* <FormControl fullWidth variant="standard">
                            <InputLabel
                                sx={{ fontSize: "1.1rem", fontWeight: "700" }}
                            >
                                Person (s)
                            </InputLabel>
                            <br></br>
                            <br></br>
                            <Select
                                id="demo-simple-select-standard"
                                value={adult}
                                onChange={(e: any) => setAdult(e?.target?.value)}
                            >
                                {CommonJson?.numberOfPassanger?.map((data, index) => (
                                    <MenuItem
                                        value={data?.value}
                                        key={index}
                                        sx={{ borderBottom: "0.7px solid #FF6F00" }}
                                    >
                                        {data?.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl> */}
                            </Grid>
                            <Grid item xs={6}>
                                {/* <FormControl fullWidth variant="standard">
                            <InputLabel
                                sx={{ fontSize: "1.1rem", fontWeight: "700" }}
                            >
                                Payment Type
                            </InputLabel>
                            <br></br>
                            <br></br>
                            <Select
                                id="demo-simple-select-standard"
                                value={paymentType}
                                onChange={(e) => setPaymentType(e.target.value)}
                            >
                                <MenuItem value="RWALLET">RWALLET</MenuItem>
                            </Select>
                        </FormControl> */}
                            </Grid>
                        </Grid>
                    </div>
                </Card>




                {/* Ticket Issue Section */}
                <Box sx={{ p: 2, backgroundColor: '#ffccbc', textAlign: 'center' }}>
                    <Typography variant="h6">TICKET ISSUE</Typography>
                </Box>

                {/* Date Selection */}
                <Box sx={{ p: 2 }}>
                    <RadioGroup row value={selectedDate} onChange={handleDateChange}>
                        <FormControlLabel value="nextDate" control={<Radio />} label="Next Date" />
                        <FormControlLabel value="currentDate" control={<Radio />} label="Current Date" />
                    </RadioGroup>
                    <Typography variant="body2" sx={{ color: '#757575' }}>
                        * Validity of ticket will start from the next date of booking. <br />
                        * Use show ticket option on mobile as the travel authority.
                    </Typography>
                </Box>

                {/* Station Inputs */}
                <Box sx={{ p: 2 }}>
                    <Typography variant="h6" sx={{ textAlign: 'left', color: '#757575' }}>From Station</Typography>
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Source Station Name/Code"
                        sx={{ my: 2 }}
                    />
                    <Typography variant="h6" sx={{ textAlign: 'left', color: '#757575' }}>To Station</Typography>
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Destination Station Name/Code"
                        sx={{ my: 2 }}
                    />
                </Box>

                {/* Submit Button */}
                <Box sx={{ p: 2, textAlign: 'center' }}>
                    <Button
                        variant="contained"
                        sx={{
                            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                            color: 'white',
                            fontWeight: 'bold',
                        }}
                    >
                        SUBMIT
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default SessionTicketIssue;
