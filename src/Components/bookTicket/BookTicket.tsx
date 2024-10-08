import "./BookTicket.css";
import {
  Button,
  Card,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Snackbar,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Encryption } from "../../utils/Encrypt";
import { Decryption } from "../../utils/Decode";
interface StationInput {
  label: string;
  key: string;
}

const BookTicket = () => {
  const [radioSelectedValue, setRadioSelectedValue] = useState("");
  const [source, setSource] = useState<any>();
  const [distination, setDistination] = useState<any>();

  const [enCodeUrl, setEncodeUrl] = useState<{
    depart: string;
    goTo: string;
  }>();
  const [message, setMessage] = useState<any>("");

  const navigator = useNavigate();
  const { url } = useParams<any>();

  const theme = createTheme({
    palette: {
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#dc004e",
      },
    },
  });
  const searchStationObj: { depart: StationInput; goTo: StationInput } = {
    depart: {
      label: "Enter Source Station",
      key: "source",
    },
    goTo: {
      label: "Enter Destination Station",
      key: "destination",
    },
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    sessionStorage.setItem("radioValue", JSON.stringify(event.target.value));
    setRadioSelectedValue(event.target.value);
    sessionStorage.setItem("source", JSON.stringify({}));
    sessionStorage.setItem("destination", JSON.stringify({}));
    setSource(null);
    setDistination(null);
  };
  const getSearchPage = (key: string) => {
    if (!radioSelectedValue) {
      if (!message) setMessage("Select booking mode to proceed further");
      else setMessage("");
      return;
    }
    if (key == "source") {
      navigator(`../stationSearch/${enCodeUrl?.depart}`);
    } else if (key == "destination") {
      navigator(`../stationSearch/${enCodeUrl?.goTo}`);
    }
  };

  const getFare = () => {
    if (!source?.name || !distination?.name || !radioSelectedValue) {
      if (!message) setMessage("Select booking mode to proceed further");
      return message && setMessage("");
    }
    navigator(`../getFare`);
  };
  const getNextTrain = () => {
    if ((!source && !distination) || !radioSelectedValue) {
      if (!message) setMessage("Select booking mode to proceed further");
      return message && setMessage("");
    }
  };
  useEffect(() => {
    const storedRadioValue = sessionStorage.getItem("radioValue");
    if (storedRadioValue) {
      setRadioSelectedValue(JSON.parse(storedRadioValue));
    }
    setEncodeUrl({
      depart: Encryption(searchStationObj?.depart),
      goTo: Encryption(searchStationObj?.goTo),
    });

    if (url) {
      const urlData = Decryption(url);
      if (urlData?.key == "source") {
        sessionStorage.setItem("source", JSON.stringify(urlData));
      }
      if (urlData?.key == "destination") {
        sessionStorage.setItem("destination", JSON.stringify(urlData));
      }
    }
    // Cleanup function to reset state or perform any necessary cleanups
    return () => {
      setRadioSelectedValue("");
      setEncodeUrl(undefined);
    };
  }, []);

  useEffect(() => {
    const sr = sessionStorage?.getItem("source");
    const ds = sessionStorage?.getItem("destination");

    if (sr) setSource(JSON.parse(sr));
    if (ds) setDistination(JSON.parse(ds));
  }, [url]);

  return (
    <div className="bookTicketContainer">
      {message && (
        <div className="toast">
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open={message !== ""}
            onClose={() =>
              setTimeout(() => {
                setMessage("");
              }, 3000)
            }
            message={message}
            autoHideDuration={3000}
            ContentProps={{
              sx: {
                backgroundColor: "white", // Change background color to white
                color: "black", // Adjust text color for contrast
                maxWidth: 300,
                marginBottom: "5rem",
                textAlign: "center", // Center the message text
                justifyContent: "center",
              },
            }}
          />
        </div>
      )}
      <Card>
        <div className="top">
          <p>NORMAL BOOKING</p>
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
                value={"paperLess"}
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 22,
                        color: "#ff5722",
                      },
                    }}
                  />
                }
                label={
                  <span className="radioLabel" style={{ fontSize: "2.7vw" }}>
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
                        fontSize: 22,
                        color: "#ff5722",
                      },
                    }}
                  />
                }
                label={
                  <span className="radioLabel" style={{ fontSize: "2.7vw" }}>
                    Book & Print (Paper)
                  </span>
                }
              />
            </RadioGroup>
          </FormControl>
        </div>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="App">
            <Card sx={{ width: "90%", m: 2 }}>
              {radioSelectedValue === "paperLess" ? (
                <ul className="disclamer">
                  <li>
                    * Use this option if you are outside station
                    premises/Railway track.
                  </li>
                  <li>
                    * Use Show ticket option on mobile is the travel authority.
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
            {/* <StationSearch /> */}
          </div>
        </ThemeProvider>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "0 1rem",
            borderRadius: 2,
            backgroundColor: "#fff",
          }}
        >
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={5} onClick={() => getSearchPage("source")}>
              <Typography
                variant="subtitle1"
                align="center"
                sx={{ fontSize: "0.9rem" }}
              >
                Depart from
              </Typography>
              <p style={{ textAlign: "center", fontSize: "1.1rem" }}>
                {source && source?.key == "source" ? source?.code : "STN"}
              </p>
              <Typography
                variant="body2"
                align="center"
                sx={{ fontSize: "0.7rem" }}
              >
                {source && source?.key == "source"
                  ? source?.name
                  : "Station Name"}
              </Typography>
              <Divider sx={{ marginY: 1, backgroundColor: "#FF7F50" }} />
            </Grid>
            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img
                src="/arrow_right_uts.png"
                height={25}
                width={28}
                style={{ marginBottom: -10 }}
              />
              <img
                src="/arrow_right_uts.png"
                height={25}
                width={28}
                style={{ rotate: "180deg" }}
              />
            </Grid>

            <Grid item xs={5} onClick={() => getSearchPage("destination")}>
              <Typography
                variant="subtitle1"
                align="center"
                sx={{ fontSize: "0.9rem" }}
              >
                Going to
              </Typography>
              <p style={{ textAlign: "center", fontSize: "1.1rem" }}>
                {distination && distination?.key == "destination"
                  ? distination?.code
                  : "STN"}
              </p>
              <Typography
                variant="body2"
                align="center"
                sx={{ fontSize: "0.7rem" }}
              >
                {distination && distination?.key == "destination"
                  ? distination?.name
                  : "Station Name"}
              </Typography>
              <Divider sx={{ marginY: 1, backgroundColor: "#FF7F50" }} />
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ p: 1, marginBottom: "0.5rem" }}>
            <Grid item xs={6} onClick={() => getNextTrain()}>
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  background: "linear-gradient(45deg, #FF7F50, #FF6347)",
                  borderRadius: 5,
                  height: 35,
                }}
              >
                NEXT TRAINS
              </Button>
            </Grid>
            <Grid item xs={6} onClick={() => getFare()}>
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  background: "linear-gradient(45deg, #FF7F50, #FF6347)",
                  borderRadius: 5,
                  height: 35,
                }}
              >
                GET FARE
              </Button>
            </Grid>
          </Grid>
        </div>
        {localStorage.getItem("user") && (
          <Typography
            variant="caption"
            sx={{
              my: 1,
              display: "block",
              textAlign: "center",
              fontSize: "0.9rem",
              fontWeight: "500"
            }}
          >
            <Link to="" style={{ color: "green" }}>BOOK SUPERFAST SURCHARGE</Link>
          </Typography>
        )}
      </Card>
    </div>
  );
};

export default BookTicket;
