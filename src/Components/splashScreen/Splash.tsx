import { useEffect } from "react";
import "./splash.css";
import { useNavigate } from "react-router-dom";
const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);

    // Cleanup timeout if the component is unmounted before the timeout completes
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splashContainer">
      <img src="/logo_uts.png" width={100} height={100} />
    </div>
  );
};

export default Splash;
