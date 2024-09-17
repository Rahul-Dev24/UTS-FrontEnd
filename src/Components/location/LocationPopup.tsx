import axios from "axios";
import { useEffect, useState } from "react";

const LocationPopup = () => {
  const [error, setError] = useState<any>(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          axios
            .get(
              `https://nominatim.openstreetmap.org/reverse?lat=${position?.coords?.latitude}&lon=${position?.coords?.longitude}&format=json`
            )
            .then((res) => {
              sessionStorage.setItem(
                "location",
                JSON.stringify(res?.data?.address)
              );
            });
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setError("User denied the request");
              break;
            case error.POSITION_UNAVAILABLE:
              setError("Location unavailable");
              break;
            case error.TIMEOUT:
              setError("The request to get user location timed out.");
              break;
            default:
              setError("An error occurred.");
          }
        }
      );
    }
  };
  useEffect(() => {
    let locationData = sessionStorage.getItem("location");
    if (!locationData) {
      getLocation();
    }
  }, [error]);
  return <></>;
};

export default LocationPopup;
