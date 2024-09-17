import { Box, Typography, Card, Button } from "@mui/material";
import styled from "@emotion/styled";
import "./ticket.css";
import { DateFormat } from "../../utils/DateFormat";
import { useNavigate } from "react-router-dom";
// import Footer from "../../Components/footer/Footer";
// Styled component for the marquee effect
const MarqueeContainer = styled(Box)`
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
`;

const MarqueeContent = styled(Typography)`
  display: inline-block;
  padding-left: 40%;
  font-size: 1.2rem;
  font-weight: 500;
  animation: marquee 5s linear infinite;

  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const ViewTicket = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="ticketNav">
        <img src="/cris_uts.png" alt="" width={35} height={35} />
        <MarqueeContainer>
          <MarqueeContent variant="body1">
            <span> IR Unreserved Ticketing</span>
          </MarqueeContent>
        </MarqueeContainer>
        <img src="/ir_uts.png" width={35} height={35} />
      </div>
      <div className="ticketBody">
        <div className="first">
          <h5 style={{ fontSize: "0.9rem", fontWeight: "600" }}>
            HAPPY JOURNEY
          </h5>
          <h4>MONTHLY</h4>
        </div>
        <div className="ticketLine"></div>
        <div className="second">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: "0.4rem",
            }}
          >
            <h5
              style={{
                marginLeft: "34%",
                fontSize: "0.8rem",
                fontWeight: "600",
              }}
            >
              ADULT SEASON
            </h5>
            <h5>12/09/2024</h5>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: "0.4rem",
            }}
          >
            <h5>₹ 355.00/-</h5>
            <h5>9087149088</h5>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: "0.4rem",
            }}
          >
            <h5>UTS No: XAILDW000G</h5>
            <h5 style={{ color: "red" }}>MONTHLY</h5>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            <h5>ID Card Number:</h5> &nbsp;
            <h5 style={{ color: "red" }}>2435MCA0030</h5>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            <h5>Pass:</h5> &nbsp;
            <h5 style={{ color: "red" }}>Mr. RAHUL SINGH</h5>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ display: "flex" }}>
              <h5>Age: </h5> &nbsp;
              <h5 style={{ color: "red" }}>21 years</h5>
            </div>
            <h5 style={{ color: "red" }}>Between</h5>
          </div>
          <div className="ticketLine"></div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <h5 style={{ marginLeft: "1.5rem" }}>गुम्मिडिपुंडी</h5>
            <div
              style={{
                width: "50%",
                display: "flex",
                gap: "0.3rem",
                alignItems: "center",
              }}
            >
              <h5 className="S-D_tag" >S</h5>
              <h5>GUMMIDIPUNDI</h5>
            </div>
            <h5 style={{ marginLeft: "1.5rem" }}>கும்மிடிப்பூண்டி</h5>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <h5 style={{ marginLeft: "1.5rem" }}>ताम्बरम</h5>
            <div
              style={{
                width: "50%",
                display: "flex",
                gap: "0.3rem",
                alignItems: "center",
              }}
            >
              <h5 className="S-D_tag">D</h5>
              <h5>TAMBARAM</h5>
            </div>
            <h5 style={{ marginLeft: "1.5rem" }}>தாம்பரம்</h5>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              color: "red"
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5 style={{ marginLeft: "3rem" }} >द्वितीय</h5>
              <h5>साधारण</h5>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex" }}>
                <h5 style={{ fontWeight: "200", color: "#000" }} >CLASS:</h5>
                <h5>SECOND</h5>
              </div>
              <div style={{ display: "flex" }}>
                <h5 style={{ fontWeight: "200", color: "#000" }} >TRAIN TYPE:</h5> &nbsp;
                <h5>ORINARY</h5>
              </div>
            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h5 style={{ marginLeft: "3rem" }}>இரண்டாம்</h5>
              <h5>சாதாரண</h5>
            </div>
          </div>
        </div>
        <div className="ticketLine"></div>
        <div
          style={{
            width: "50%",
            display: "flex",
            gap: "0.3rem",
            alignItems: "center",
          }}
        >
          <h5 className="S-D_tag" style={{ width: "22px" }} >via</h5>
          <h5>MSB</h5>
        </div>
        <div className="ticketLine"></div>
        <div
          style={{
            width: "100%",
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex" }}>
            <h5 style={{ fontWeight: "200", color: "#000" }} >SAC:</h5>
            <h5>996411</h5>
          </div>
          <div style={{ display: "flex" }}>
            <h5 style={{ fontWeight: "200", color: "#000" }} >IR:</h5> &nbsp;
            <h5>33AAAGM029C1ZQ</h5>
          </div>
        </div>
        <div className="ticketLine"></div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h5 style={{ fontWeight: "200", color: "#000" }} >Validity: FROM</h5> &nbsp;
          <h5 style={{ color: "red" }}>{DateFormat(new Date())}</h5>
          &nbsp; <h5>TO</h5> &nbsp;
          <h5 style={{ color: "red" }}>{DateFormat(new Date())}</h5>
        </div>
        <div
          style={{
            width: "95%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0.5rem"
          }}
        >
          <h5>R21493</h5>
          <div style={{ display: "flex" }}>
            <h5 style={{ fontWeight: "100", color: "#000", fontSize: "0.7rem" }} >Distance:</h5> &nbsp;
            <h5 style={{ fontWeight: "100", color: "#000", fontSize: "0.7rem" }} >76 km</h5>
          </div>
        </div>
        <h5>Booking Time: {DateFormat(new Date())}&nbsp;{new Date().getHours()}:{new Date().getMinutes()}</h5>
      </div>
      <Card sx={{ p: 1, width: "93%", margin: "auto" }}>
        <h6 style={{ color: "rgb(90, 141, 235)" }}>it is recommended not to perform factory reset or change you handset whenever you are having valid ticket in the mobile.</h6>
        <a href="#" style={{ color: "#ff7f50", fontSize: "0.7rem" }} >Click for Changing Handset with Valid Ticket</a>
        <h6 style={{ textAlign: "center", color: "red", marginTop: "8px" }}>FOR MEDICAL EMERGENCY | FIRST AID. CONTACT TICKET <br /> CHECKING STAFFIGUARD OR DIAL 139 </h6>
        <div className="ticketButton">
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              mt: 1,
              background: "linear-gradient(45deg, #ff5722, #FF8E53)",
              color: "#fff",
              borderRadius: 21,
              width: "90%",
            }}
          >
            OPEN QR CODE
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              mt: 1,
              background: "linear-gradient(45deg, #ff5722, #FF8E53)",
              color: "#fff",
              borderRadius: 21,
              width: "90%",
            }}
          >
            NEXT TRAINS TO TAMBARAM
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => navigate("/showTicket")}
            sx={{
              mt: 1,
              background: "linear-gradient(45deg, #ff5722, #FF8E53)",
              color: "#fff",
              borderRadius: 21,
              width: "90%",
            }}
          >
            OK
          </Button>
        </div>
      </Card >
{/*       <Footer version={1} /> */}
    </>
  );
};

export default ViewTicket;
