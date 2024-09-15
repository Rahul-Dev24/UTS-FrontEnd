import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import "./ticket.css";

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
                fontSize: "0.7rem",
                fontWeight: "600",
              }}
            >
              ADULT SEASON
            </h5>
            <h6>12/09/2024</h6>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: "0.4rem",
            }}
          >
            <h6>Rs 185.00/-</h6>
            <h6>9087149088</h6>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginBottom: "0.4rem",
            }}
          >
            <h6>UTS No: XAILDW000G</h6>
            <h6 style={{ color: "red" }}>MONTHLY</h6>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            <h6>ID Card Number:</h6> &nbsp;
            <h6 style={{ color: "red" }}>2435MCA0030</h6>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            <h6>Pass:</h6> &nbsp;
            <h6 style={{ color: "red" }}>Mr. RAHUL SINGH</h6>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ display: "flex" }}>
              <h6>Age: </h6> &nbsp;
              <h6 style={{ color: "red" }}>21 years</h6>
            </div>
            <h6 style={{ color: "red" }}>Between</h6>
          </div>
          <div className="ticketLine"></div>
        </div>
      </div>
    </>
  );
};

export default ViewTicket;
