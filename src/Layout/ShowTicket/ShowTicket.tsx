import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./ticket.css";
import Ticket from "./Ticket";

const ShowTicket = () => {
  return (
    <>
      <div className="ShowTicketTop">
        <Link to="/home">
          <Button sx={{ minWidth: "auto", color: "#fff" }}>
            <ArrowBackIcon />
          </Button>
        </Link>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, textAlign: "left", color: "#fff" }}
        >
          Show Ticket
        </Typography>
      </div>
      <div className="cardBody">
        <div className="top">
          <img src="/ticket_white_uts.png" width={30} height={28} />
          <p>SHOW TICKET</p>
        </div>
        <Ticket />
      </div>
    </>
  );
};

export default ShowTicket;
