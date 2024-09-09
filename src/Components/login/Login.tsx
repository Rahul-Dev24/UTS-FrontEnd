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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormHelperText,
  Snackbar,
} from "@mui/material";
import { styled } from "@mui/system";
import Nav from "../navBar/Nav";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../progressBar";

const LoginContainer = styled(Container)({
  backgroundColor: "#f9f9f9",
  padding: "40px",
  borderRadius: "8px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  maxWidth: "400px",
});

const CalendarTextField = styled(TextField)(() => ({
  "& .MuiInputBase-input": {
    padding: "10px 14px", // Customize padding
  },
  "& .MuiInputLabel-root": {
    color: "#000", // Default label color
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#ff6f00", // Label color when focused
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "#ff6f00", // Default underline color
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#ff6f00", // Underline color when focused
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

const Login: React.FC = () => {
  const [genderPopupOpen, setGenderPopupOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [pNumber, setNumber] = useState<number>();
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>();
  const [cPassword, setCpassword] = useState<string>();
  const [gender, setGender] = useState<string>();
  const [dob, setDob] = useState<any>();
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [loading, setLoading] = useState<any>(true);

  const [message, setMessage] = useState<any>("");

  const navigator = useNavigate();

  const Api_EndPoint = "https://uts-dev.onrender.com/api/auth/v1";

  const loginUser = async (
    phoneNo: number | undefined,
    password: string
  ): Promise<any> => {
    try {
      const response = await axios.post(`${Api_EndPoint}/login`, {
        phoneNo,
        password,
      });

      // Return the response data
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        // Server-side error
        throw new Error(
          `Error ${error.response.status}: ${error.response.data.message}`
        );
      } else {
        // Client-side or network error
        throw new Error("An unexpected error occurred");
      }
    }
  };

  const registerUser = async (): Promise<any> => {
    try {
      const response = await axios.post(`${Api_EndPoint}/signup`, {
        phoneNo: pNumber,
        name,
        password,
        gender,
        dob,
      });
      // Return the response data
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        // Server-side error
        throw new Error(
          `Error ${error.response.status}: ${error.response.data.message}`
        );
      } else {
        // Client-side or network error
        throw new Error("An unexpected error occurred");
      }
    }
  };

  const getLogin = async () => {
    setLoading(false);
    if (isLogin) {
      // login
      loginUser(pNumber, password)
        .then((res) => {
          if (!res?.message) localStorage.setItem("user", JSON.stringify(res));
          setMessage(res?.message ? res?.message : "Login Successfull");
          setLoading(true);
          setTimeout(() => {
            navigator("/home");
          }, 1500);
        })
        .catch((err) => {
          setMessage(err?.message ? err?.message : "Login Failed");
          setLoading(true);
        });
    } else {
      // regesteration
      if (name && gender && dob && pNumber && password) {
        registerUser()
          .then((res) => {
            if (res?.message) setIsLogin(true);
            setMessage(res?.message ? res?.message : "User Already Created");
            setLoading(true);
          })
          .catch((err) => {
            setMessage(err?.message);
            setLoading(true);
          });
      }
    }
  };
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
    setIsLogin(true);
  }, []);

  return (
    <>
      <ProgressBar
        message="Fetching Your current location..."
        isLoad={loading}
      />
      {message && <div className="toast">
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={message !== ''}
          onClose={() => setTimeout(() => { setMessage('') }, 3000)}
          message={message}
          autoHideDuration={3000}
          ContentProps={{
            sx: {
              backgroundColor: 'white', // Change background color to white
              color: 'black', // Adjust text color for contrast
              maxWidth: 300,
              marginBottom: "5rem",
              textAlign: "center"
            }
          }}
        />
      </div>}
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
            <Typography
              variant="h5"
              sx={{
                color: "#ff7e5f",
                marginTop: "-1rem",
                marginBottom: "1rem",
              }}
            >
              {isLogin ? "LOGIN WITH" : "REGISTER"}
            </Typography>

            {isLogin && (
              <FormControl component="fieldset">
                <RadioGroup row defaultValue="password" name="login-method">
                  <FormControlLabel
                    // checked={true}
                    value={"password"}
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
                    value={"otp"}
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
            )}
            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                id="outlined-error"
                label="Mobile Number"
                type="number"
                variant="filled"
                inputRef={searchInputRef}
                value={pNumber}
                onChange={(e: any) => setNumber(e?.target?.value)}
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
                    color: "#000", // Default label color
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
            {!isLogin && (
              <Box sx={{ mb: 2 }}>
                <TextField
                  fullWidth
                  id="outlined-error"
                  label="Enter Your Name"
                  type="text"
                  variant="filled"
                  value={name}
                  onChange={(e: any) => setName(e?.target?.value)}
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
                      color: "#000", // Default label color
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
            )}
            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                id="outlined-error"
                label="Password"
                type="password"
                variant="filled"
                value={password}
                onChange={(e: any) => setPassword(e?.target?.value)}
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
                    color: "#000", // Default label color
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
            {!isLogin && (
              <Box sx={{ mb: 2 }}>
                <TextField
                  fullWidth
                  id="outlined-error"
                  label="Conform Password"
                  type="password"
                  variant="filled"
                  value={cPassword}
                  onChange={(e: any) => setCpassword(e?.target?.value)}
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
                      color: "#000", // Default label color
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
            )}
            <Box sx={{ mt: "-10px" }}>
              {cPassword &&
                (password == cPassword ? (
                  <FormHelperText sx={{ color: "green", marginLeft: "1rem" }}>
                    Password Matched
                  </FormHelperText>
                ) : (
                  <FormHelperText error sx={{ marginLeft: "1rem" }}>
                    Password Mismatch
                  </FormHelperText>
                ))}
            </Box>
            {!isLogin && (
              <Box sx={{ mb: 2 }}>
                <TextField
                  fullWidth
                  id="outlined-error"
                  label="Select Gender"
                  type="text"
                  variant="filled"
                  value={gender}
                  onClick={() => setGenderPopupOpen(true)}
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
                      color: "#000", // Default label color
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
                <Dialog
                  open={genderPopupOpen}
                  onClose={() => setGenderPopupOpen(false)}
                  fullWidth
                  maxWidth="xs" // Adjust the width to 'xs', 'sm', 'md', 'lg', or 'xl'
                  sx={{
                    "& .MuiDialog-paper": {
                      width: "70%", // Custom width percentage
                    },
                  }}
                >
                  <DialogTitle sx={{ color: "#ff6f00" }}>
                    Select Gender
                  </DialogTitle>
                  <DialogContent>
                    <RadioGroup
                      value={gender}
                      onChange={(e: any) => setGender(e?.target?.value)}
                    >
                      <FormControlLabel
                        value="Male"
                        control={<Radio />}
                        label="MALE"
                      />
                      <FormControlLabel
                        value="Female"
                        control={<Radio />}
                        label="FEMALE"
                      />
                      <FormControlLabel
                        value="Transgender"
                        control={<Radio />}
                        label="TRANSGENDER"
                      />
                    </RadioGroup>
                  </DialogContent>
                  <DialogActions
                    sx={{
                      dispaly: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "-1.5rem",
                    }}
                  >
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
                      onClick={() => setGenderPopupOpen(false)}
                    >
                      OK
                    </Button>
                  </DialogActions>
                </Dialog>
              </Box>
            )}

            {!isLogin && (
              <Box sx={{ mb: 2 }}>
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
              </Box>
            )}
            <div style={{ display: "flex", width: "100%", padding: "-10px" }}>
              <Typography
                variant="body2"
                sx={{
                  color: "#ff7e5f",
                  cursor: "pointer",
                  textAlign: "right",
                  width: "100%",
                }}
              >
                {isLogin ? "Forgot Password?" : <u>Terms of Use</u>}
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
              onClick={getLogin}
            >
              {isLogin ? "LOGIN" : "REGISTER"}
            </Button>
          </LoginContainer>
        </Card>
        {isLogin && (
          <>
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
              onClick={() => setIsLogin(false)}
            >
              REGISTER
            </Button>
          </>
        )}

        <div className="loginfooter">
          <div className="doc">
            <img src="/get_started_uts.png" alt="" width={20} height={20} />
            <p>Getting Started</p>
          </div>
          <div className="line"></div>
          <div className="helpline">
            <img src="/helpline_uts.png" alt="" width={20} height={20} />
            <p>Helpline</p>
          </div>
          <div className="line"></div>
          <div className="faq">
            <img src="/faq_uts.png" alt="" width={20} height={20} />
            <p>FAQs</p>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Login;
