import { Box, Button, Card, Typography } from "@mui/material";
import Nav from "../../Components/navBar/Nav";

const TicketSummary = () => {
  const dateFormat = (date: any) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <>
      <Nav language={false} />
      <Box sx={{ flexGrow: 1, padding: "1.2rem 0.7rem" }}>
        <Card sx={{ width: "100%", margin: "auto" }}>
          <div className="top" style={{ display: "flex", gap: "14px" }}>
            <img src="/payment_option_uts.png" width={25} height={18} />
            <p>SISSION TICKET SUMMARY</p>
          </div>
          <br />
          <div className="cardBody">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography variant="body2">
                <p style={{ color: "#ff5722" }}>Source Station</p>
                <h4 style={{ fontSize: "0.8rem", fontWeight: "500" }}>
                  GUMMIDIPUNDI(GPD)
                </h4>
              </Typography>
              <Typography variant="body2" sx={{ textAlign: "right" }}>
                <p style={{ color: "#ff5722" }}>Destination Station</p>
                <h4 style={{ fontSize: "0.8rem", fontWeight: "500" }}>
                  KODAMBAKKAM(MKK)
                </h4>
              </Typography>
            </div>
            <div className="line"></div>

            <Typography
              variant="body2"
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                width: "100%",
              }}
            >
              <span style={{ color: "#ff5722" }}>Via: &nbsp;</span> MSB
            </Typography>
            <div className="line"></div>

            <Typography
              variant="body2"
              sx={{
                display: "flex",
                gap: "5rem",
                width: "100%",
              }}
            >
              <div>
                <span style={{ color: "#ff5722" }}>Name: &nbsp;</span>
                <span style={{ marginRight: "8px" }}>{"RAHUL SINGH"}</span>
              </div>
              <div>
                <span style={{ color: "#ff5722" }}>Age:&nbsp;</span>
                <span style={{ marginRight: "8px" }}>{21}</span>
              </div>
            </Typography>
            <div className="line"></div>
            <div
              style={{
                display: "flex",
                gap: "3rem",
                width: "100%",
              }}
            >
              <Typography variant="body2">
                <p style={{ color: "#ff5722" }}>Class Type</p>
                <h4 style={{ fontSize: "0.8rem", fontWeight: "500" }}>
                  SECOND
                </h4>
              </Typography>
              <Typography variant="body2" sx={{ textAlign: "right" }}>
                <p style={{ color: "#ff5722" }}>Train Type</p>
                <h4 style={{ fontSize: "0.8rem", fontWeight: "500" }}>
                  ORDINARY
                </h4>
              </Typography>
              <Typography variant="body2">
                <p style={{ color: "#ff5722" }}>Duration</p>
                <h4 style={{ fontSize: "0.8rem", fontWeight: "500" }}>
                  MONTHLY
                </h4>
              </Typography>
            </div>
            <div className="line"></div>

            <Box
              sx={{
                mt: 1,
                backgroundColor: "#dadada",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "98%",
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
                  width: "50%",
                  p: 1,
                }}
              >
                <h4 style={{ fontSize: "0.8rem", fontWeight: "500" }}>
                  Total Fare
                </h4>
                <h3>₹{"185"}.00/-</h3>
              </Typography>
              {localStorage?.getItem("user") && (
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "50%",
                    backgroundColor: "#fccba6",
                    p: 1,
                  }}
                >
                  <h4 style={{ fontSize: "0.8rem", fontWeight: "500" }}>
                    Wallet Balance
                  </h4>
                  <h3>₹{"206"}.00/-</h3>
                </Typography>
              )}
            </Box>
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                m: 2,
              }}
            >
              <p
                style={{
                  color: "#ff5722",
                  fontSize: "1rem",
                  fontWeight: "700",
                }}
              >
                This ticket will be valid from:
              </p>
              <h4 style={{ fontSize: "0.8rem", fontWeight: "500" }}>
                {dateFormat(new Date())} &nbsp; to &nbsp;
                {dateFormat(new Date())}
              </h4>
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "red",
                fontWeight: "bold",
                display: "block",
                textAlign: "center",
                fontSize: "0.8rem",
              }}
            >
              DO NOT PERFORM FACTORY RESET OR CHANGE <br /> YOUR MOBILE HANDSET
              IF ANY VALID UTS TICKET <br /> IS BOOKED IN THIS MOBILE.
            </Typography>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                m: 3,
                background: "linear-gradient(45deg, #ff5722, #FF8E53)",
                color: "#fff",
                borderRadius: 21,
                width: "60%",
              }}
            >
              BOOK TICKET
            </Button>
          </div>
        </Card>
      </Box>
    </>
  );
};

export default TicketSummary;
