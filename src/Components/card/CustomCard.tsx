import {
  Button,
  Card,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import "./Card.css";
import { useState } from "react";
interface Prop {
  message: string;
  obj: any;
}

const CustomCard: React.FC<Prop> = ({ message, obj }) => {
  const [radioSelectedValue, setRadioSelectedValue] = useState("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // sessionStorage.setItem("radioValue", JSON.stringify(event.target.value));
    setRadioSelectedValue(event.target.value);
  };
  return (
    <div className="cardContainer">
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
                  width: "70%",
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
                  width: "70%",
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
                  width: "70%",
                }}
              >
                SUPERFAST SURCHARGE BY QR
              </Button>
            </>
          )}
          {obj?.key === "QuickBooking" && (
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
                            fontSize: 15,
                          },
                        }}
                      />
                    }
                    label={
                      <span
                        className="radioLabel"
                        style={{ fontSize: "2.4vw" }}
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
                            fontSize: 15,
                          },
                        }}
                      />
                    }
                    label={
                      <span
                        className="radioLabel"
                        style={{ fontSize: "2.4vw" }}
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
                NEXT
              </Button>
            </>
          )}
        </div>
      </Card>
    </div>
  );
};

export default CustomCard;
