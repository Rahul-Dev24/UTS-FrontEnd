import { Typography, Card } from "@mui/material";
import "./ticket.css";
import { Link } from "react-router-dom";

const Ticket = () => {
  return (
    <Card sx={{ p: 1, boxShadow: 4, width: "105%" }}>
      <div className="ticket">
        <div className="ticketTop">
          <div style={{ width: "50%", fontSize: "0.8rem" }}>
            SESSION (M-TICKET){" "}
          </div>
          <div className="horLine"></div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "50%",
              justifyContent: "end",
              fontSize: "0.8rem",
            }}
          >
            FARE: &nbsp; <img src="/rs_uts.png" width={15} height={15} /> 185.00
          </div>
        </div>
        <div className="ticketBottom">
          <div
            style={{
              width: "50%",
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
            }}
          >
            <img src="/source_uts.png" width={18} height={18} />
            <h5 style={{ fontWeight: "500" }}>PONNERI</h5>
          </div>
          <div className="horLine"></div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "50%",
              justifyContent: "start",
            }}
          >
            <div
              style={{
                marginLeft: "1rem",
                width: "50%",
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
              }}
            >
              <img src="/destination_uts.png" width={18} height={18} />
              <h5 style={{ fontWeight: "500" }}>KODAMBAKKAM</h5>
            </div>
          </div>
        </div>
        <div className="line" style={{ margin: "-1px 0" }}></div>
        <Typography variant="body2" sx={{ p: 1, fontSize: "0.8rem" }}>
          <span>Via:</span> &nbsp;
          <span style={{ color: "#ff5722" }}>MSB</span>
        </Typography>
        <div className="line" style={{ margin: "-1px 0" }}></div>
        <div className="ticketBottom">
          <div
            style={{
              width: "34%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <h5 style={{ fontWeight: "500", fontSize: "0.7rem" }}>ADULT: </h5>
            <span
              style={{
                color: "#ff5722",
                fontWeight: "500",
                fontSize: "0.7rem",
              }}
            >
              1
            </span>{" "}
            &nbsp;
            <h5 style={{ fontWeight: "500", fontSize: "0.7rem" }}>CHILD: </h5>
            <span
              style={{
                color: "#ff5722",
                fontWeight: "500",
                fontSize: "0.7rem",
              }}
            >
              0
            </span>
          </div>
          <div className="horLine"></div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "33%",
              justifyContent: "start",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h5
                style={{
                  fontWeight: "400",
                  fontSize: "0.7rem",
                }}
              >
                SECOND (||)
              </h5>
            </div>
          </div>
          <div className="horLine"></div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "33%",
              justifyContent: "start",
            }}
          >
            <div
              style={{
                marginLeft: "1rem",
                width: "100%",
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h5 style={{ fontWeight: "500", fontSize: "0.7rem" }}>
                ORDINARY (0)
              </h5>
            </div>
          </div>
        </div>
        <div className="line" style={{ margin: "-1px 0" }}></div>
        <div className="ticketBottom">
          <div
            style={{
              width: "60%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <h5 style={{ fontWeight: "500", fontSize: "0.7rem" }}>
              BOOKING DATE:&nbsp;
            </h5>
            <span
              style={{
                color: "#ff5722",
                fontWeight: "500",
                fontSize: "0.7rem",
              }}
            >
              12/09/2024 &nbsp; 15:45
            </span>
          </div>
          <div className="horLine"></div>
          <div
            style={{
              width: "40%",
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <h5 style={{ fontWeight: "500", fontSize: "0.7rem" }}>
              UTS NO: &nbsp;{" "}
            </h5>
            <span
              style={{
                color: "#ff5722",
                fontWeight: "500",
                fontSize: "0.7rem",
              }}
            >
              XAILDW000G
            </span>
          </div>
        </div>
        <div className="line" style={{ margin: "-1px 0" }}></div>
        <div
          style={{
            display: "flex",
            padding: "0.3rem",
            alignItems: "center",
          }}
        >
          <Link
            to={"/viewTicket"}
            style={{
              width: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: "0.5rem",
              textDecoration: "none",
            }}
          >
            <img src="/arrow_right_uts.png" width={18} height={18} />
            <span
              style={{
                color: "#ff5722",
                fontWeight: "600",
                fontSize: "0.7rem",
              }}
            >
              VIEW TICKET
            </span>
          </Link>

          <div className="horLine"></div>
          <div
            style={{
              width: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              gap: "0.5rem",
            }}
          >
            <img src="/search_uts.png" width={18} height={18} />
            <span
              style={{
                color: "#ff5722",
                fontWeight: "600",
                fontSize: "0.7rem",
              }}
            >
              NEXT TRAINS
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Ticket;
