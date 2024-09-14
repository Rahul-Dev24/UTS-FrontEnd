import React, { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Card,
  Autocomplete,
} from "@mui/material";
import Nav from "../../Components/navBar/Nav";
import { useNavigate } from "react-router-dom";

interface FilmOptionType {
  title: string;
  year: number;
}

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];

const SessionTicketIssue: React.FC = () => {
  // const [selectedDate, setSelectedDate] = useState('nextDate');
  const [radioSelectedValue, setRadioSelectedValue] = useState("");
  const navigate = useNavigate();

  // const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setSelectedDate(event.target.value);
  // };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // sessionStorage.setItem("radioValue", JSON.stringify(event.target.value));
    setRadioSelectedValue(event.target.value);
    // sessionStorage.setItem("source", JSON.stringify({}));
    // sessionStorage.setItem("destination", JSON.stringify({}));
  };

  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option: FilmOptionType) => option.title,
  };
  // const flatProps = {
  //     options: top100Films.map((option) => option.title),
  // };
  // const [value, setValue] = React.useState<FilmOptionType | null>(null);

  return (
    <>
      <Nav language={false} />
      <Box sx={{ flexGrow: 1, padding: "0.7rem" }}>
        <Card sx={{ width: "100%", margin: "auto" }}>
          <div className="top" style={{ display: "flex", gap: "10px" }}>
            <img src="/ticket_white_uts.png" width={20} height={20} />
            <p>TICKET ISSUE</p>
          </div>
          <div className="cardBody">
            <FormControl
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                width: "100%",
              }}
            >
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                className="radioGroup"
                onChange={handleRadioChange}
              >
                <FormControlLabel
                  checked={radioSelectedValue === "next_date"}
                  value={"next_date"}
                  sx={{ marginRight: "4rem" }}
                  control={
                    <Radio
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 20,
                          color: "#ff5722",
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
                  checked={radioSelectedValue === "current_date"}
                  value={"current_date"}
                  control={
                    <Radio
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 20,
                          color: "#ff5722",
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

            <Box sx={{ mb: 2, width: "100%" }}>
              <Box
                sx={{
                  mt: 2,
                  p: 1,
                  backgroundColor: "#dadada",
                }}
              >
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                  From Station
                </Typography>
              </Box>
              <Autocomplete
                sx={{ mt: 1 }}
                {...defaultProps}
                id="auto-complete"
                autoComplete
                includeInputInList
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Source Station Name/Code"
                    variant="standard"
                    InputLabelProps={{
                      style: { color: "#666363" }, // Label color
                    }}
                    InputProps={{
                      ...params.InputProps,
                      // You can also customize the underline color:
                      disableUnderline: false, // optional
                      endAdornment: null, // Remove the dropdown icon
                    }}
                    sx={{
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "#ff5722", // Underline color before focus
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "#ff5722", // Underline color after focus
                      },
                    }}
                  />
                )}
              />
              <Box
                sx={{
                  mt: 2,
                  p: 1,
                  backgroundColor: "#dadada",
                }}
              >
                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                  To Station
                </Typography>
              </Box>
              <Autocomplete
                sx={{ mt: 1 }}
                {...defaultProps}
                id="auto-complete"
                autoComplete
                includeInputInList
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Destination Station Name/Code"
                    variant="standard"
                    InputLabelProps={{
                      style: { color: "#666363" }, // Label color
                    }}
                    InputProps={{
                      ...params.InputProps,
                      // You can also customize the underline color:
                      disableUnderline: false, // optional
                      endAdornment: null, // Remove the dropdown icon
                    }}
                    sx={{
                      "& .MuiInput-underline:before": {
                        borderBottomColor: "#ff5722", // Underline color before focus
                      },
                      "& .MuiInput-underline:after": {
                        borderBottomColor: "#ff5722", // Underline color after focus
                      },
                    }}
                  />
                )}
              />
            </Box>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => navigate("/issueSessionTicket")}
              sx={{
                my: 2,
                background: "linear-gradient(45deg, #ff5722, #FF8E53)",
                color: "#fff",
                borderRadius: 21,
                width: "60%",
              }}
            >
              SUBMIT
            </Button>
          </div>
        </Card>
      </Box>
    </>
  );
};

export default SessionTicketIssue;
