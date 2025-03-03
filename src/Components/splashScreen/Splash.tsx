import { useEffect } from "react";
import "./splash.css";
import { useNavigate } from "react-router-dom";
// import { getStation } from "../../utils/getStationData";
const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // getStation().then((res: any) => {
    //   if (res?.length > 0) navigate("/home");
    // });
    setTimeout(() => {
      navigate("/home");
    }, 2500);
  }, [navigate]);

  return (
    <div className="splashContainer">
      <img src="/logo_uts.png" width={110} height={110} />
    </div>
  );
};

export default Splash;
