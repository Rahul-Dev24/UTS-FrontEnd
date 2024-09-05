import { useState } from "react";
import "./GetFare.css";
import {
  Box,
  Typography,
  Grid,
  Select,
  MenuItem,
  FormControl,
  Button,
  Checkbox,
  Card,
  FormControlLabel,
  InputLabel,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Nav from "../navBar/Nav";
import * as CommonJson from "../../assets/Common.json";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF6F00",
    },
    secondary: {
      main: "#FF6F00",
    },
  },
  typography: {
    fontSize: 12,
  },
});

const GetFare = () => {
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [ticketType, setTicketType] = useState("JOURNEY");
  const [trainType, setTrainType] = useState("ORDINARY");
  const [trainClass, setTrainClass] = useState("SECOND");
  const [paymentType, setPaymentType] = useState("RWALLET");
  const [availConcession, setAvailConcession] = useState(false);
  // const [amount, setAmount] = useState(15);
  let amount = 15;
  return (
    <div className="fareContainer">
      <div className="top">
        <Nav language={false} />
      </div>

      <div className="fareBody">
        <Card>
          <div className="top">
            <img src="/payment_option_uts.png" width={30} height={20} />
            <p>NORMAL BOOKING</p>
          </div>
          <div className="cardBody">
            <div className="formSection">
              <ThemeProvider theme={theme}>
                <Box
                  sx={{
                    backgroundColor: "#FFF",
                    borderRadius: 2,
                    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
                    p: 2,
                    mt: 2,
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <FormControl fullWidth variant="standard">
                        <InputLabel
                          sx={{ fontSize: "1.1rem", fontWeight: "700" }}
                        >
                          Adult
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
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth variant="standard">
                        <InputLabel
                          sx={{ fontSize: "1.1rem", fontWeight: "700" }}
                        >
                          Child
                        </InputLabel>
                        <br></br>
                        <br></br>
                        <Select
                          id="demo-simple-select-standard"
                          value={child}
                          onChange={(e: any) => setChild(e?.target?.value)}
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
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth variant="standard">
                        <InputLabel
                          sx={{ fontSize: "1.1rem", fontWeight: "700" }}
                        >
                          Ticket Type
                        </InputLabel>
                        <br></br>
                        <br></br>
                        <Select
                          id="demo-simple-select-standard"
                          value={ticketType}
                          onChange={(e) => setTicketType(e.target.value)}
                        >
                          {CommonJson?.ticketType?.map((data, index) => (
                            <MenuItem
                              value={data?.value}
                              key={index}
                              sx={{ borderBottom: "0.7px solid #FF6F00" }}
                            >
                              {data?.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth variant="standard">
                        <InputLabel
                          sx={{ fontSize: "1.1rem", fontWeight: "700" }}
                        >
                          Train Type
                        </InputLabel>
                        <br></br>
                        <br></br>
                        <Select
                          id="demo-simple-select-standard"
                          value={trainType}
                          onChange={(e) => setTrainType(e.target.value)}
                        >
                          {CommonJson?.trainType?.map((data, index) => (
                            <MenuItem
                              value={data?.value}
                              key={index}
                              sx={{ borderBottom: "0.7px solid #FF6F00" }}
                            >
                              {data?.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth variant="standard">
                        <InputLabel
                          sx={{ fontSize: "1.1rem", fontWeight: "700" }}
                        >
                          Class
                        </InputLabel>
                        <br></br>
                        <br></br>
                        <Select
                          id="demo-simple-select-standard"
                          value={trainClass}
                          onChange={(e) => setTrainClass(e.target.value)}
                        >
                          {CommonJson?.trainClass?.map((data, index) => (
                            <MenuItem
                              value={data?.value}
                              key={index}
                              sx={{ borderBottom: "0.7px solid #FF6F00" }}
                            >
                              {data?.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl fullWidth variant="standard">
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
                          {/* Add more options as needed */}
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{ marginLeft: "17px" }}
                        checked={availConcession}
                        onChange={(e) => setAvailConcession(e.target.checked)}
                      />
                    }
                    label="Avail concession"
                    sx={{ mt: 2 }}
                  />
                  <Box
                    sx={{
                      mt: 2,
                      p: 1,
                      backgroundColor: "#dadada",
                      marginLeft: "-15px",
                      marginRight: "-15px",
                    }}
                  >
                    <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                      TICKET SUMMARY
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      padding: "10px 0",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="body2">
                        <p style={{ color: "#FF6F00" }}>Source Station:</p>
                        <h4 style={{ fontSize: "0.8rem" }}>GUMMIDIPUNDI</h4>
                      </Typography>
                      <Typography variant="body2" sx={{ textAlign: "right" }}>
                        <p style={{ color: "#FF6F00" }}>Destination Station</p>
                        <h4 style={{ fontSize: "0.8rem" }}>
                          CHENNAI CENTRAL SUBU
                        </h4>
                      </Typography>
                    </div>
                    <div className="line"></div>

                    <Typography variant="body2">
                      <span style={{ color: "#FF6F00" }}>Via:</span> TVT-BBQ
                    </Typography>
                    <div className="line"></div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="body2">
                        <span style={{ color: "#FF6F00" }}>Adult:</span>
                        <span style={{ marginRight: "8px" }}>{adult}</span>
                        <span style={{ color: "#FF6F00" }}>Child:</span>
                        <span style={{ marginRight: "8px" }}>{child}</span>
                        <span style={{ color: "#FF6F00" }}>Escort:</span>
                        <span style={{ marginRight: "8px" }}>{"0"}</span>
                      </Typography>
                      <Typography variant="body2">
                        <span style={{ color: "#FF6F00" }}>Class Type:</span>
                        {trainClass}
                      </Typography>
                    </div>
                    <div className="line"></div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="body2">
                        <span style={{ color: "#FF6F00" }}>Ticket Type:</span>
                        {ticketType}
                      </Typography>
                      <Typography variant="body2">
                        <span style={{ color: "#FF6F00" }}>Train Type:</span>
                        {trainType}
                      </Typography>
                    </div>

                    <Box
                      sx={{
                        mt: 1,
                        p: 1,
                        backgroundColor: "#dadada",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: "bold",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <h4 style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
                          Total Fare:
                        </h4>
                        <h2 style={{ color: "#FF6F00" }}>₹{amount}/-</h2>
                      </Typography>
                    </Box>

                    <a href="#" className="anchorTag">
                      Kindly check Next Upcoming trains for your selected
                      journey before Ticket Booking.
                    </a>
                    <Typography
                      variant="caption"
                      sx={{
                        color: "red",
                        fontWeight: "bold",
                        mt: 1,
                        display: "block",
                        textAlign: "center",
                        fontSize: "0.8rem",
                      }}
                    >
                      JOURNEY SHOULD COMMENCE WITHIN 1 HOUR
                    </Typography>
                  </Box>
                  <div className="btn">
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      sx={{
                        mt: 2,
                        background: "linear-gradient(45deg, #FF6F00, #FF8E53)",
                        color: "#fff",
                        borderRadius: 21,
                        width: "60%",
                      }}
                    >
                      BOOK TICKET
                    </Button>
                  </div>
                </Box>
              </ThemeProvider>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default GetFare;
