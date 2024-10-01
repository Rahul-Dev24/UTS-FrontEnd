import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Card, Button, MenuItem, Select, TextField, InputLabel, FormControl, styled, Menu } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import "./profile.css";
import * as CommonJson from "../../assets/Common.json";

const cardData: Array<any> = [
    {
        img: "/personal_details_uts.png",
        name: "CHANGE PERSONAL DETAILS"
    },
    {
        img: "/change_password_uts.png",
        name: "CHANGE PASSWORD"
    },
    {
        img: "/sync_uts.png",
        name: "SYNC TICKET"
    },
    {
        img: "/change_route_uts.png",
        name: "CHANGE FREQUENT TRAVEL ROUTE"
    },
    {
        img: "/history_uts.png",
        name: "CHANGE JOURNEY DETAILS"
    }, {
        img: "/change_handset_uts.png",
        name: "CHANGE HANDSET"
    },
];

const CalendarTextField = styled(TextField)(() => ({
    "& .MuiInputBase-input": {
        padding: "10px 14px", // Customize padding
    },
    "& .MuiInputLabel-root": {
        color: "#000", // Default label color
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: "#ff5722", // Label color when focused
    },
    "& .MuiInput-underline:before": {
        borderBottomColor: "#ff5722", // Default underline color
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#ff5722", // Underline color when focused
    },
    "& .MuiFilledInput-root": {
        backgroundColor: "transparent", // Background color of the input field
        "&:hover": {
            backgroundColor: "transparent", // Background color on hover
        },
        "&.Mui-focused": {
            backgroundColor: "transparent", // Background color when focused
        },
    },
}));

const Profile: React.FC = () => {
    const [idCardType, setIdCardType] = useState('STUDENT ICARD');
    const [gender, setGender] = useState('MALE');
    const [idCardNumber, setIdCardNumber] = useState("2435MCA0030");
    const [dob, setDob] = useState('24/10/2002');

    const [menu, setMenu] = useState<null | HTMLElement>(null);


    return (
        <Box>
            <Menu
                id="basic-menu"
                anchorEl={menu}
                open={Boolean(menu)}
                onClose={() => setMenu(null)}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
                sx={{ borderRadius: 0 }}
            >
                <MenuItem>
                    Close Account
                </MenuItem>
            </Menu>
            {/* Header */}
            <AppBar position="static" style={{ background: 'linear-gradient(to right, #ff6b6b, #ff8e53)' }}>
                <Toolbar>
                    <Link to="/home">
                        <Button sx={{ ml: -3, color: "#fff" }}>
                            <ArrowBackIcon />
                        </Button>
                    </Link>
                    <Typography
                        variant="h6"
                        sx={{ flexGrow: 1, textAlign: "left", color: "#fff" }}
                    >
                        Pofile
                    </Typography>
                    <IconButton edge="end" color="inherit">
                        <MoreVertIcon onClick={(e: any) => setMenu(e.currentTarget)} />
                    </IconButton>
                </Toolbar>
            </AppBar>


            <div className="profileRow">
                {cardData?.map((data, index) => (
                    <Card key={index}
                        sx={{ borderRadius: 0, paddingTop: "5px", minHeight: "4.5rem" }}
                    >
                        <img src={data?.img} width={20} height={20} style={{ margin: "5px" }} />
                        <p style={{ color: " #fd5948" }} >{data?.name}</p>
                    </Card>
                ))}
            </div>

            <Card sx={{ width: "96%", margin: "auto" }}>
                <div className="top">
                    <p>CHANGE PERSONAL DETAILS</p>
                </div>
                <div className="cardBody">
                    <FormControl fullWidth variant="standard">
                        <InputLabel
                            sx={{ fontSize: "1rem", fontWeight: "400", color: "#ff5722", ml: 1 }}
                        >
                            Select ID Card Type
                        </InputLabel>
                        <br></br>
                        <Select
                            id="demo-simple-select-standard"
                            value={idCardType}
                            onChange={(e) => setIdCardType(e.target.value)}
                            sx={{
                                "& .MuiSelect-select": {
                                    borderBottom: `1px solid #ff5722`, // Underline color
                                    fontSize: "0.8rem",
                                    backgroundColor: "transparent",
                                    ml: 1,
                                },
                                "&:before": {
                                    borderBottom: `1px solid #ff5722`, // Underline color before focus
                                },
                                "&:after": {
                                    borderBottom: `1px solid #ff5722`, // Underline color after focus
                                },
                            }}
                        >
                            {CommonJson?.idCardType?.map((data, index) => (
                                <MenuItem
                                    value={data?.value}
                                    key={index}
                                    sx={{ borderBottom: "0.7px solid #ff5722" }}
                                >
                                    {data?.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <br />
                    <TextField
                        fullWidth
                        id="outlined-error"
                        label="Station Name/Code"
                        placeholder="Station Name/Code"
                        type="search"
                        variant="filled"
                        value={idCardNumber}
                        onChange={(e) => setIdCardNumber(e.target.value)}

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
                    <br />
                    <FormControl fullWidth variant="standard">
                        <InputLabel
                            sx={{ fontSize: "1rem", fontWeight: "400", color: "#ff5722", ml: 1 }}
                        >
                            Gender
                        </InputLabel>
                        <br></br>
                        <Select
                            id="demo-simple-select-standard"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            sx={{
                                "& .MuiSelect-select": {
                                    borderBottom: `1px solid #ff5722`, // Underline color
                                    fontSize: "0.8rem",
                                    backgroundColor: "transparent",
                                    ml: 1,
                                },
                                "&:before": {
                                    borderBottom: `1px solid #ff5722`, // Underline color before focus
                                },
                                "&:after": {
                                    borderBottom: `1px solid #ff5722`, // Underline color after focus
                                },
                            }}
                        >
                            {CommonJson?.gender?.map((data, index) => (
                                <MenuItem
                                    value={data?.value}
                                    key={index}
                                    sx={{ borderBottom: "0.7px solid #ff5722" }}
                                >
                                    {data?.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <br />
                    <CalendarTextField
                        fullWidth
                        id="dob"
                        label="Date of Birth"
                        type="date"
                        variant="filled"
                        value={dob}
                        // placeholder=""
                        onChange={(e: any) => setDob(e?.target?.value)}
                        InputLabelProps={{
                            shrink: true, // Ensures the label is always visible
                        }}
                        sx={{
                            "& .MuiFilledInput-root": {
                                backgroundColor: "transparent", // Background color of the input field
                                "&:hover": {
                                    backgroundColor: "transparent", // Background color on hover
                                },
                                "&.Mui-focused": {
                                    backgroundColor: "transparent", // Background color when focused
                                },
                            },
                            "& .MuiInputLabel-root": {
                                color: "#fd5948", // Default label color
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
                    />
                    <br />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{
                            my: 2,
                            background: "linear-gradient(45deg, #ff5722, #FF8E53)",
                            color: "#fff",
                            borderRadius: 21,
                            width: "50%",
                        }}
                    >
                        PROCEED
                    </Button>
                </div>
            </Card>
        </Box >
    );
};

export default Profile;
