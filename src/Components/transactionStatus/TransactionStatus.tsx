import { useState } from 'react';
import { Box, Typography, TextField, RadioGroup, FormControlLabel, Radio, Button, AppBar, Toolbar, Card, Stepper, Step, StepLabel, StepIconProps, StepConnector, stepConnectorClasses } from '@mui/material';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import "./TransactionStatus.css";
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DoneIcon from '@mui/icons-material/Done';

// Custom theme to match the orange gradient background and other styles
const theme = createTheme({
    palette: {
        primary: {
            main: '#ff5722',
        },
    },
    typography: {
        h6: {
            fontWeight: 600,
        },
        body1: {
            fontSize: '14px',
            color: '#ff5722',
        },
    },
});
const CalendarTextField = styled(TextField)(() => ({
    "& .MuiInputBase-input": {
        padding: "24px 14px  10px 10px", // Customize padding
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

const ColorlibStepIconRoot = styled('div')<{
    ownerState: { completed?: boolean; active?: boolean };
}>(({ theme }) => ({
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 30,
    height: 30,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    ...theme.applyStyles('dark', {
        backgroundColor: theme.palette.grey[700],
    }),
    variants: [
        {
            props: ({ ownerState }) => ownerState.active,
            style: {
                background: 'green',
                boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
            },
        },
        {
            props: ({ ownerState }) => ownerState.completed,
            style: {
                background: 'green',
            },
        },
    ],
}));

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 15
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            background: 'green',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            background: 'green',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
        ...theme.applyStyles('dark', {
            backgroundColor: theme.palette.grey[800],
        }),
    },
}));

function ColorlibStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    const icons: { [index: string]: React.ReactElement<any> } = {
        1: <DoneIcon />,
        2: <DoneIcon />,
        3: <DoneIcon />,
        4: <DoneIcon />,

    };

    return (
        <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

const TransactionStatus = () => {
    const date = new Date().toISOString().split('T')[0];
    const [fromDate, setFromDate] = useState(date);
    const [toDate, setToDate] = useState(date);
    const [transactionType, setTransactionType] = useState('All');

    return (
        <ThemeProvider theme={theme}>
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
                        Transaction Status
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className="cardBody">
                <div className="top">
                    <img src="/ticket_white_uts.png" width={30} height={28} />
                    <p>TRANSACTION STATUS</p>
                </div>
            </div>
            <Box
                sx={{
                    padding: '16px 20px',
                    textAlign: 'center'
                }}
            >

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '8px', mt: -3 }}>
                    <CalendarTextField
                        type='date'
                        fullWidth
                        variant="filled"
                        label="From Date"
                        value={fromDate}
                        placeholder=""
                        onChange={(e: any) => setFromDate(e.target.value)}
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
                                paddingBottom: "40px"
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#fd5948", // Label color when focused
                                paddingBottom: "40px"
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
                    <CalendarTextField
                        fullWidth
                        type='date'
                        variant="filled"
                        label="To Date"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
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
                                paddingBottom: "40px"
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#fd5948", // Label color when focused
                                paddingBottom: "40px"
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
                </Box>

                <Typography variant="body1" sx={{ marginBottom: '16px' }}>
                    For Transactions status. Please select From Date <br /> and To Date.
                </Typography>
                <RadioGroup
                    value={transactionType}
                    onChange={(e) => setTransactionType(e.target.value)}
                    sx={{
                        '& .MuiFormControlLabel-label': { color: '#000' }, // Change label color to black
                        mb: 4
                    }}
                >
                    <div className='radioBorder'>
                        <FormControlLabel value="All" control={<Radio color="primary" />} label="All" />
                        <FormControlLabel value="Recharges" control={<Radio color="primary" />} label="Recharges" />
                        <FormControlLabel value="Bookings" control={<Radio color="primary" />} label="Bookings" />
                    </div>
                </RadioGroup>
                <Card sx={{ borderRadius: '22px', p: 1, mx: -1.2, boxShadow: '2px 2px 5px 3px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)' }}>
                    <Stepper alternativeLabel activeStep={2} connector={<ColorlibConnector />}>
                        <Step>
                            <StepLabel StepIconComponent={ColorlibStepIcon}>{"Initialize Payment"}</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel StepIconComponent={ColorlibStepIcon}>{"Payment Progress"}</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel StepIconComponent={ColorlibStepIcon}>{"Payment Success"}</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel StepIconComponent={ColorlibStepIcon}>{"RWallet Recharge"}</StepLabel>
                        </Step>
                    </Stepper>
                </Card>
                {/* <Typography variant="body1" sx={{ color: '#fd5948', fontWeight: 'bold', mt: "12rem" }}>
                    NO TRANSACTION FOUND
                </Typography> */}
            </Box>
        </ThemeProvider>
    );
};

export default TransactionStatus;
