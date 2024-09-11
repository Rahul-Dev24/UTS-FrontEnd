import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  Radio,
  TextField,
  RadioGroup,
  Grid,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import "./Card.css";
import { useEffect, useRef, useState } from "react";
import * as CommonJson from "../../assets/Common.json";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../progressBar";

interface Prop {
  message: string;
  obj: any;
}

const CustomCard: React.FC<Prop> = ({ message, obj }) => {
  const [adult, setAdult] = useState(1);
  const [paymentType, setPaymentType] = useState("RWALLET");
  const [radioSelectedValue, setRadioSelectedValue] = useState("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const navicate = useNavigate();

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // sessionStorage.setItem("radioValue", JSON.stringify(event.target.value));
    setRadioSelectedValue(event.target.value);
  };

  const getTicket = (key: string) => {
    if (key === 'issueTicket') navicate('/getSessionTicket');
    else if (key === 'renewTicket') setLoading(false);
  }

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }


  }, []);
  return (
    <div className="cardContainer">
      <ProgressBar message={"Fetching Your current location..."} isLoad={loading} />
      <Card sx={{ width: "94%", margin: "auto" }}>
        <div className="top">
          <p>{message}</p>
        </div>
        <div className="cardBody">
          {obj?.key === "QRBooking" && (
            <>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{
                  mt: 2,
                  background: "linear-gradient(45deg, #FF6F00, #FF8E53)",
                  color: "#fff",
                  borderRadius: 21,
                  width: "75%",
                  fontSize: "0.8rem",
                }}
              >
                JOURNEY TICKET BY QR
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{
                  mt: 2,
                  background: "linear-gradient(45deg, #FF6F00, #FF8E53)",
                  color: "#fff",
                  borderRadius: 21,
                  width: "75%",
                  fontSize: "0.8rem",
                }}
              >
                PLATFORM TICKET BY QR
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{
                  mt: 2,
                  mb: 2,
                  background: "linear-gradient(45deg, #FF6F00, #FF8E53)",
                  color: "#fff",
                  borderRadius: 21,
                  width: "75%",
                  fontSize: "0.8rem",
                }}
              >
                SUPERFAST SURCHARGE BY QR
              </Button>
            </>
          )}
          {obj?.key === "QuickBooking" || obj?.key === "PlatFormTicket" ? (
            <>
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
                    value={"paperLess"}
                    control={
                      <Radio
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: 20,
                            color: "#ff6f00",
                          },
                        }}
                      />
                    }
                    label={
                      <span
                        className="radioLabel"
                        style={{ fontSize: "2.3vw" }}
                      >
                        Book & Travel (Paperless)
                      </span>
                    }
                  />

                  <FormControlLabel
                    checked={radioSelectedValue === "paper"}
                    value={"paper"}
                    control={
                      <Radio
                        sx={{
                          "& .MuiSvgIcon-root": {
                            fontSize: 20,
                            color: "#ff6f00",
                          },
                        }}
                      />
                    }
                    label={
                      <span
                        className="radioLabel"
                        style={{ fontSize: "2.3vw" }}
                      >
                        Book & Print (Paper)
                      </span>
                    }
                  />
                </RadioGroup>
              </FormControl>
              <Card sx={{ width: "100%", mt: 1 }}>
                {radioSelectedValue === "paperLess" ? (
                  <ul className="disclamer">
                    <li>
                      * Use this option if you are outside station
                      premises/Railway track.
                    </li>
                    <li>
                      * Use Show ticket option on mobile is the travel
                      authority.
                    </li>
                    <li>* Set your phone GPS to high accuracy mode.</li>
                    <li style={{ color: "red" }}>
                      <b>* No cancellation is allowed for paperless ticket.</b>
                    </li>
                  </ul>
                ) : radioSelectedValue === "paper" ? (
                  <ul className="disclamer">
                    <li>* Book anywhere.</li>
                    <li>* Print ticket at originating station.</li>
                    <li>* PRINTED TICKET is travel authority.</li>
                    <li style={{ color: "red" }}>
                      <b>* Travel without ticket printout is punishable.</b>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </Card>
              {obj?.key === "PlatFormTicket" && (
                <div className="platForm">
                  <Box sx={{ mb: 2 }}>
                    <TextField
                      fullWidth
                      id="outlined-error"
                      label="Station Name/Code"
                      placeholder="Station Name/Code"
                      type="search"
                      variant="filled"
                      inputRef={searchInputRef}
                      value={searchTerm}
                      onChange={(e: any) =>
                        setSearchTerm(e?.target?.value?.trim())
                      }
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
                      <FormControl fullWidth variant="standard">
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
                </div>
              )}
              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{
                  mt: 2,
                  mb: 2,
                  background: "linear-gradient(45deg, #FF6F00, #FF8E53)",
                  color: "#fff",
                  borderRadius: 21,
                  width: "60%",
                }}
              >
                {obj?.key === "PlatFormTicket" ? "BOOK TICKET" : "NEXT"}
              </Button>
            </>
          ) : (
            obj?.key === "SeasonTicket" && (
              <>
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
                      value={"paperLess"}
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
                        <span
                          className="radioLabel"
                          style={{ fontSize: "2.3vw" }}
                        >
                          Book & Travel (Paperless)
                        </span>
                      }
                    />

                    <FormControlLabel
                      checked={radioSelectedValue === "paper"}
                      value={"paper"}
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
                        <span
                          className="radioLabel"
                          style={{ fontSize: "2.3vw" }}
                        >
                          Book & Print (Paper)
                        </span>
                      }
                    />
                  </RadioGroup>
                </FormControl>
                <Card sx={{ width: "100%", mt: 1 }}>
                  {radioSelectedValue === "paperLess" ? (
                    <ul className="disclamer">
                      <li>
                        * Use this ticket option on mobile is the travel
                        authority.
                      </li>
                    </ul>
                  ) : radioSelectedValue === "paper" ? (
                    <ul className="disclamer">
                      <li>* Book anywhere.</li>
                      <li>* Print ticket at originating station.</li>
                      <li>* PRINTED TICKET is travel authority.</li>
                      <li style={{ color: "red" }}>
                        <b>* Travel without ticket printout is punishable.</b>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )}
                </Card>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    gap: "20px",
                  }}
                >
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => getTicket('issueTicket')}
                    sx={{
                      mt: 2,
                      mb: 2,
                      background: "linear-gradient(45deg, #FF6F00, #FF8E53)",
                      color: "#fff",
                      borderRadius: 21,
                      width: "60%",
                    }}
                  >
                    ISSUE TICKET
                  </Button>
                  <span style={{ color: "#FF6F00" }}>OR</span>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => getTicket('renewTicket')}
                    sx={{
                      mt: 2,
                      mb: 2,
                      background: "linear-gradient(45deg, #FF6F00, #FF8E53)",
                      color: "#fff",
                      borderRadius: 21,
                      width: "60%",
                    }}
                  >
                    RENEW TICKET
                  </Button>
                </div>
              </>
            )
          )}
        </div>
      </Card>
    </div>
  );
};

export default CustomCard;
