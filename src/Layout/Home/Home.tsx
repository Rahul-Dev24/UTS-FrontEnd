import { Card, styled, Tab, Tabs, Typography } from "@mui/material";
import Nav from "../../Components/navBar/Nav";
import { SyntheticEvent, useState } from "react";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import "./Home.css";
import Footer from "../../Components/footer/Footer";
import BookTicket from "../../Components/bookTicket/BookTicket";
import TopSection from "../../Components/topSection/TopSection";
import CustomCard from "../../Components/card/CustomCard";
import { keyframes } from "@mui/system";
import LocationPopup from "../../Components/location/LocationPopup";

// Define keyframes for the blinking effect
const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`;

const Home = () => {
  const [value, setValue] = useState(0);
  let QR_Object = { key: "QRBooking" };
  let Quick_obj = { key: "QuickBooking" };
  let PlatForm_obj = { key: "PlatFormTicket" };
  let Season_obj = { key: "SeasonTicket" };

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    let val: any = event;
    setValue(val);
    setValue(newValue);
  };
  //style

  const CustomTabs = styled(Tabs)({
    overflowX: "hidden", // Hide overflow content
    flexWrap: "nowrap", // Prevent wrapping of tabs
    "& .MuiTabs-flexContainer": {
      display: "flex",
      flex: "1 1 auto",
    },
    "& .MuiTabs-indicator": {
      backgroundColor: "orange",
    },
  });

  const CustomTab = styled(Tab)({
    flex: "1 1 auto", // Allow tabs to grow and shrink
    minWidth: 0, // Allow flexibility in width
    textAlign: "center",
    whiteSpace: "normal", // Allow text wrapping
    overflow: "hidden", // Hide overflow text
    textOverflow: "ellipsis", // Show ellipsis if needed
    fontSize: "0.7rem", // Adjust font size if needed
    "& .MuiTab-wrapper": {
      display: "flex",
      flexDirection: "column", // Allow label to stack vertically
      alignItems: "center", // Center align text
    },
    "&.Mui-selected": {
      color: "#000",
    },
  });

  return (
    <div className="homeContainer">
      <Nav language={true} />
      <Card sx={{ mt: 1, borderRadius: 0, position: "sticky", top: "58px" }}>
        <Typography
          variant="caption"
          sx={{
            color: "rgb(3, 3, 196)",
            mb: 1,
            display: "block",
            textAlign: "center",
            fontSize: "0.8rem",
            fontWeight: "600",
            animation: `${blink} 1.5s infinite`, // Apply the blinking animation
          }}
        >
          INDIAN RAILWAYS OFFERS 3% BONUS ON <br /> RECHARGE OF R-WELLET
        </Typography>
        <div className="line" style={{ margin: "-1px 0" }}></div>
        <CustomTabs
          value={value}
          onChange={handleChange}
          aria-label="icon label tabs example"
          variant="scrollable"
          scrollButtons="auto"
        >
          <CustomTab
            icon={
              <img
                src="/book_ticket_uts.png"
                alt="Icon"
                style={{ width: 30, height: 30 }}
              />
            }
            label="Journey Ticket"
          />
          <CustomTab
            icon={
              <img
                src="/qr_booking1_uts.png"
                alt="Icon"
                style={{ width: 30, height: 30 }}
              />
            }
            label="QR Booking"
          />
          <CustomTab
            icon={
              <img
                src="/quick_booking_uts.png"
                alt="Icon"
                style={{ width: 30, height: 30 }}
              />
            }
            label="Quick Booking"
          />
          <CustomTab
            icon={
              <img
                src="/platform_ticket_uts.png"
                alt="Icon"
                style={{ width: 30, height: 30 }}
              />
            }
            label="Platform Ticket"
          />
          <CustomTab
            icon={
              <img
                src="/season_ticket_uts.png"
                alt="Icon"
                style={{ width: 30, height: 30 }}
              />
            }
            label="Season Ticket"
          />
        </CustomTabs>
      </Card>
      <TopSection />
      <div className="homeBody">
        {value == 0 ? (
          <BookTicket />
        ) : value == 1 ? (
          <CustomCard message={"QR BOOKING"} obj={QR_Object} />
        ) : value == 2 ? (
          <CustomCard message={"QUICK BOOKING"} obj={Quick_obj} />
        ) : value == 3 ? (
          <CustomCard message={"Platform BOOKING"} obj={PlatForm_obj} />
        ) : (
          <CustomCard message={"SEASON BOOKING"} obj={Season_obj} />
        )}
      </div>
      <div className="helpContainer">
        <p>Help</p>
        <div className="help">
          <ContactSupportIcon />
        </div>
      </div>
      <Footer version={value} />
      <LocationPopup />
    </div>
  );
};

export default Home;
