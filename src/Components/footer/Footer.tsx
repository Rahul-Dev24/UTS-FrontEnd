import { Card } from "@mui/material";
import "./Footer.css";
const Footer: React.FC<{ version: number }> = ({ version }) => {
  return (
    <div className="footer">
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "5px",
          flexDirection: "column",
          gap: "8px",
          lineHeight: "1rem",
        }}
      >
        {version == 0 && <div>G.16.57 (15.1.36)</div>}
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <img src="/cris_uts.png" width={20} height={20} />
          <p>Center for Railway Information Systems (CRIS)</p>
        </div>
      </Card>
    </div>
  );
};
export default Footer;
