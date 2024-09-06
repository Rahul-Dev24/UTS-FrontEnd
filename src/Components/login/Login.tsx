import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  TextField,
  Button,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography,
  Box,
  Card,
} from "@mui/material";
import { styled } from "@mui/system";
import Nav from "../navBar/Nav";
import "./Login.css"


const LoginContainer = styled(Container)({
  backgroundColor: "#f9f9f9",
  padding: "40px",
  borderRadius: "8px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  maxWidth: "400px",
});

const Login: React.FC = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [number, setNumber] = useState<number>();
  const [password, setPassword] = useState<string>('');
  // const [radioVal, setRadioVal] = useState<string>();



  const handleNumber = (event: any) => {
    setNumber(event.target.value);
  }

  const handlePassword = (event: any) => {
    setPassword(event?.target?.value);
  }

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Nav language={false} />
        <Card sx={{ width: "80%", marginTop: "2rem" }}>
          <LoginContainer>
            <Typography variant="h5" sx={{ color: "#ff7e5f", marginTop: "-1rem", marginBottom: "1rem" }}>
              LOGIN WITH
            </Typography>

            <FormControl component="fieldset">
              <RadioGroup row defaultValue="password" name="login-method">
                <FormControlLabel
                  // checked={true}
                  value={'password'}
                  control={
                    <Radio
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 25,
                          color: "#FF6F00",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="radioLabel" style={{ fontSize: "1rem" }}>
                      Password
                    </span>
                  }
                />
                <FormControlLabel
                  // checked={false}
                  value={'otp'}
                  control={
                    <Radio
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 25,
                          color: "#FF6F00",
                        },
                      }}
                    />
                  }
                  label={
                    <span className="radioLabel" style={{ fontSize: "1rem" }}>
                      OTP
                    </span>
                  }
                />
              </RadioGroup>
            </FormControl>
            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                id="outlined-error"
                label="Mobile Number"
                type="search"
                variant="filled"
                inputRef={searchInputRef}
                value={number}
                onChange={handleNumber}
                sx={{
                  '& .MuiFilledInput-root': {
                    backgroundColor: '#fff', // Background color of the input field
                    '&:hover': {
                      backgroundColor: 'transparent', // Background color on hover
                    },
                    '&.Mui-focused': {
                      backgroundColor: 'transparent', // Background color when focused
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#666', // Default label color
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#fd5948', // Label color when focused
                  },
                  '& .MuiInputLabel-root:hover': {
                    color: '#fd5948', // Label color on hover
                  },
                  '& .MuiFilledInput-underline:before': {
                    borderBottomColor: '#fd5948', // Default underline color
                  },
                  '& .MuiFilledInput-underline:after': {
                    borderBottomColor: '#ff5722', // Underline color when focused
                  },
                }}
                InputLabelProps={{
                  style: { color: '#ff5722' }, // Default label color
                  sx: {
                    '&.Mui-focused': { color: '#ff5722' }, // Label color when focused
                    '&:hover': { color: '#ff5722' }, // Label color on hover
                  },
                }}
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                id="outlined-error"
                label="Password"
                type="search"
                variant="filled"
                value={password}
                onChange={handlePassword}
                sx={{
                  '& .MuiFilledInput-root': {
                    backgroundColor: 'transparent', // Background color of the input field
                    '&:hover': {
                      backgroundColor: 'transparent', // Background color on hover
                    },
                    '&.Mui-focused': {
                      backgroundColor: 'transparent', // Background color when focused
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: '#000', // Default label color
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#fd5948', // Label color when focused
                  },
                  '& .MuiInputLabel-root:hover': {
                    color: '#fd5948', // Label color on hover
                  },
                  '& .MuiFilledInput-underline:before': {
                    borderBottomColor: '#fd5948', // Default underline color
                  },
                  '& .MuiFilledInput-underline:after': {
                    borderBottomColor: '#ff5722', // Underline color when focused
                  },
                }}
                InputLabelProps={{
                  style: { color: '#ff5722' }, // Default label color
                  sx: {
                    '&.Mui-focused': { color: '#ff5722' }, // Label color when focused
                    '&:hover': { color: '#ff5722' }, // Label color on hover
                  },
                }}
              />
            </Box>


            <div style={{ display: "flex", width: "100%", padding: "-10px" }}>

              <Typography variant="body2" sx={{
                color: "#ff7e5f", cursor: "pointer", textAlign: "right", width: "100%",
              }}>
                Forgot Password?
              </Typography>
            </div>


            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                mt: 2,
                background: "linear-gradient(45deg, #FF6F00, #FF8E53)",
                color: "#fff",
                borderRadius: 21,
                width: "80%",
              }}
            >
              BOOK TICKET
            </Button>
          </LoginContainer>
        </Card>
        <Typography variant="body2" sx={{ marginTop: "16px" }}>
          Don't have an account?
        </Typography>

        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{
            mt: 2,
            background: "linear-gradient(45deg, #FF6F00, #FF8E53)",
            color: "#fff",
            borderRadius: 21,
            width: "50%",
          }}
        >
          BOOK TICKET
        </Button>

        <div className="loginfooter">
          <div className="doc">
            <img src="/get_started_uts.png" alt="" width={20} height={30} />
            <p>Getting Started</p>
          </div>
          <div className="line"></div>
          <div className="helpline">
            <img src="/helpline_uts.png" alt="" width={30} height={30} />
            <p>Helpline</p>
          </div>
          <div className="line"></div>
          <div className="faq">
            <img src="/faq_uts.png" alt="" width={30} height={28} />
            <p>FAQs</p>
          </div>
        </div>
      </Box >

    </>
  );
};

export default Login;
