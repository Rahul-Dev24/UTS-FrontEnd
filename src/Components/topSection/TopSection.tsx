import { Card, Snackbar } from "@mui/material";
import "./TopSection.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const TopSection = () => {
  const user = localStorage.getItem("user");
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();

  const reDerict = () => {
    setMessage("Kindly Login to proceed further.");
    setTimeout(() => {
      navigate("/login");
    }, 1200);
  };
  const navigateUser = (key: string) => {
    switch (key) {
      case "cancel":
        if (!user) {
          reDerict();
        } else navigate("/showTicket");
        break;
      case "history":
        if (!user) {
          reDerict();
        } else navigate("/showTicket");
        break;
      case "show":
        if (!user) {
          reDerict();
        } else navigate("/showTicket");
        break;
      case "wellet":
        if (!user) {
          reDerict();
        } else navigate("/showTicket");
        break;
      case "profile":
        if (!user) {
          reDerict();
        } else navigate("/showTicket");
        break;
      case "transaction":
        if (!user) {
          reDerict();
        } else navigate("/showTicket");
        break;
    }
  };
  return (
    <div className="topSectionContainer">
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
      <div className="row">
        <Card
          sx={{ borderRadius: 0, paddingTop: "5px" }}
          onClick={() => navigateUser("cancel")}
        >
          <img src="/cancel_ticket_uts.png" width={20} height={20} />
          <p>CANCEL TICKET</p>
        </Card>
        <Card
          sx={{ borderRadius: 0, paddingTop: "5px" }}
          onClick={() => navigateUser("history")}
        >
          <img src="/booking_history_uts.png" width={20} height={20} />
          <p>BOOKING HISTORY</p>
        </Card>
        <Card
          sx={{ borderRadius: 0, paddingTop: "5px" }}
          onClick={() => navigateUser("show")}
        >
          <img src="/show_booked_ticket_uts.png" width={20} height={20} />
          <p>SHOW TICKET</p>
        </Card>
      </div>
      <div className="row">
        <Card
          sx={{ borderRadius: 0, paddingTop: "5px" }}
          onClick={() => navigateUser("wellet")}
        >
          <img src="/wallet_1_uts.png" width={20} height={20} />
          <p>R-WALLET</p>
        </Card>
        <Card
          sx={{ borderRadius: 0, paddingTop: "5px" }}
          onClick={() => navigateUser("profile")}
        >
          <img src="/profile_avatar_uts.png" width={20} height={20} />
          <p>PROFILE</p>
        </Card>
        <Card
          sx={{ borderRadius: 0, paddingTop: "5px" }}
          onClick={() => navigateUser("transaction")}
        >
          <img
            src="/payment_option_uts.png"
            className="payment"
            width={20}
            height={20}
          />
          <p>TRANSACTIONS</p>
        </Card>
      </div>
    </div>
  );
};

export default TopSection;
