import {
  Box,
  Card,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import Nav from "../../Components/navBar/Nav";
import * as CommonJson from "../../assets/Common.json";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff5722",
    },
    secondary: {
      main: "#ff5722",
    },
  },
  typography: {
    fontSize: 12,
  },
});

const TicketIssue = () => {
  const [gender, setGender] = useState("MALE");
  const [docType, setDocType] = useState("STUDENT ICARD");
  const [duration, setDuration] = useState("MONTHLY (M)");
  const [idNumber, setIdNumber] = useState("");
  const [address, setAddress] = useState("");
  const [trainType, setTrainType] = useState("ORDINARY");
  const [trainClass, setTrainClass] = useState("SECOND");
  const [paymentType, setPaymentType] = useState("RWALLET");

  const navigate = useNavigate();

  return (
    <>
      <Nav language={false} />
      <Box sx={{ flexGrow: 1, padding: "1.2rem 0.7rem" }}>
        <Card sx={{ width: "100%", margin: "auto" }}>
          <div className="top" style={{ display: "flex", gap: "10px" }}>
            <img src="/ticket_white_uts.png" width={20} height={20} />
            <p>TICKET ISSUE</p>
          </div>
          <br />
          <div className="cardBody">
            <ThemeProvider theme={theme}>
              <FormControl fullWidth variant="standard" sx={{ mb: 2 }}>
                <InputLabel
                  sx={{
                    fontSize: "1.1rem",
                    color: "#ff5722",
                  }}
                >
                  Train Type
                </InputLabel>
                <br></br>
                <br></br>
                <Select
                  id="demo-simple-select-standard"
                  value={trainType}
                  onChange={(e) => setTrainType(e.target.value)}
                  sx={{
                    "& .MuiSelect-select": {
                      borderBottom: `1px solid #ff5722`, // Underline color
                    },
                    "&:before": {
                      borderBottom: `1px solid #ff5722`, // Underline color before focus
                    },
                    "&:after": {
                      borderBottom: `1px solid #ff5722`, // Underline color after focus
                    },
                  }}
                >
                  {CommonJson?.trainType?.map((data, index) => (
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

              <FormControl fullWidth variant="standard" sx={{ mb: 2 }}>
                <InputLabel
                  sx={{
                    fontSize: "1.1rem",

                    color: "#ff5722",
                  }}
                >
                  Class Type
                </InputLabel>
                <br></br>
                <br></br>
                <Select
                  id="demo-simple-select-standard"
                  value={trainClass}
                  onChange={(e) => setTrainClass(e.target.value)}
                  sx={{
                    "& .MuiSelect-select": {
                      borderBottom: `1px solid #ff5722`, // Underline color
                    },
                    "&:before": {
                      borderBottom: `1px solid #ff5722`, // Underline color before focus
                    },
                    "&:after": {
                      borderBottom: `1px solid #ff5722`, // Underline color after focus
                    },
                  }}
                >
                  {CommonJson?.trainClass?.map((data, index) => (
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

              <FormControl fullWidth variant="standard" sx={{ mb: 2 }}>
                <InputLabel
                  sx={{
                    fontSize: "1.1rem",

                    color: "#ff5722",
                  }}
                >
                  Duration
                </InputLabel>
                <br></br>
                <br></br>
                <Select
                  id="demo-simple-select-standard"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  sx={{
                    "& .MuiSelect-select": {
                      borderBottom: `1px solid #ff5722`, // Underline color
                    },
                    "&:before": {
                      borderBottom: `1px solid #ff5722`, // Underline color before focus
                    },
                    "&:after": {
                      borderBottom: `1px solid #ff5722`, // Underline color after focus
                    },
                  }}
                >
                  {CommonJson?.duration?.map((data, index) => (
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

              <FormControl fullWidth variant="standard" sx={{ mb: 2 }}>
                <InputLabel
                  sx={{
                    fontSize: "1.1rem",

                    color: "#ff5722",
                  }}
                >
                  Gender
                </InputLabel>
                <br></br>
                <br></br>
                <Select
                  id="demo-simple-select-standard"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  sx={{
                    "& .MuiSelect-select": {
                      borderBottom: `1px solid #ff5722`, // Underline color
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

              <FormControl fullWidth variant="standard" sx={{ mb: 2 }}>
                <InputLabel sx={{ fontSize: "1.1rem", fontWeight: "700" }}>
                  Select ID Card Type
                </InputLabel>
                <br></br>
                <br></br>
                <Select
                  id="demo-simple-select-standard"
                  value={docType}
                  onChange={(e) => setDocType(e.target.value)}
                  sx={{
                    "& .MuiSelect-select": {
                      borderBottom: `1px solid #ff5722`, // Underline color
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

              <Box sx={{ mb: 2, width: "100%" }}>
                <TextField
                  fullWidth
                  id="outlined-error"
                  label="ID Card Number"
                  type="text"
                  variant="filled"
                  value={idNumber}
                  onChange={(e: any) => setIdNumber(e?.target?.value)}
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
                    style: { color: "#ff5722", marginLeft: "-0.6rem" }, // Default label color
                    sx: {
                      "&.Mui-focused": { color: "#ff5722" }, // Label color when focused
                      "&:hover": { color: "#ff5722" }, // Label color on hover
                    },
                  }}
                />
              </Box>

              <FormControl fullWidth variant="standard" sx={{ mb: 2 }}>
                <InputLabel sx={{ fontSize: "1.1rem", color: "#ff5722" }}>
                  Payment Type
                </InputLabel>
                <br></br>
                <br></br>
                <Select
                  id="demo-simple-select-standard"
                  value={paymentType}
                  onChange={(e) => setPaymentType(e.target.value)}
                  sx={{
                    "& .MuiSelect-select": {
                      borderBottom: `1px solid #ff5722`, // Underline color
                    },
                    "&:before": {
                      borderBottom: `1px solid #ff5722`, // Underline color before focus
                    },
                    "&:after": {
                      borderBottom: `1px solid #ff5722`, // Underline color after focus
                    },
                  }}
                >
                  <MenuItem value="RWALLET">RWALLET</MenuItem>
                  {/* Add more options as needed */}
                </Select>
              </FormControl>

              <Box sx={{ mb: 2, width: "100%" }}>
                <TextField
                  fullWidth
                  id="outlined-error"
                  label="Address"
                  type="text"
                  variant="filled"
                  value={address}
                  onChange={(e: any) => setAddress(e?.target?.value)}
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
                    style: { color: "#ff5722", marginLeft: "-0.6rem" }, // Default label color
                    sx: {
                      "&.Mui-focused": { color: "#ff5722" }, // Label color when focused
                      "&:hover": { color: "#ff5722" }, // Label color on hover
                    },
                  }}
                />
              </Box>

              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => navigate("/sessionTicketSummary")}
                sx={{
                  my: 2,
                  background: "linear-gradient(45deg, #ff5722, #FF8E53)",
                  color: "#fff",
                  borderRadius: 21,
                  width: "60%",
                }}
              >
                GET FARE
              </Button>
            </ThemeProvider>
          </div>
        </Card>
      </Box>
    </>
  );
};

export default TicketIssue;
