import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Layout/Home/Home";
import Splash from "./Components/splashScreen/Splash";
import "../src/assets/style.css";
import StationSearch from "./Components/stationSearch/StationSearch";
import GetFare from "./Components/getFare/GetFare";
import Login from "./Components/login/Login";
import SessionTicketIssue from "./Layout/SessionTicket/SessionTicketIssue";
import TicketIssue from "./Layout/SessionTicket/TicketIssue";
import TicketSummary from "./Layout/SessionTicket/TicketSummary";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:url" element={<Home />} />
          <Route path="/stationSearch/:url" element={<StationSearch />} />
          <Route path="/getFare" element={<GetFare />} />
          <Route path="/login" element={<Login />} />
          <Route path="/getSessionTicket" element={<SessionTicketIssue />} />
          <Route path="/issueSessionTicket" element={<TicketIssue />} />
          <Route path="/sessionTicketSummary" element={<TicketSummary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
