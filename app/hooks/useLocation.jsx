import * as Location from "expo-location";
import { useEffect, useState } from "react";

const useLocation = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [response, setResponse] = useState(null);

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    const subscription = await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.High,
        //timeInterval: 1000, // update every second
        distanceInterval: 5,
      },
      (location) => {
        const lat = location.coords.latitude;
        const lng = location.coords.longitude;
        setLatitude(lat);
        setLongitude(lng);
        setErrorMsg(null);

        Location.reverseGeocodeAsync({ latitude: lat, longitude: lng })
          .then((response) => setResponse(response))
          .catch((error) => console.error(error));
      }
    );
    return subscription;
  };

  useEffect(() => {
    let subscription;
    getCurrentLocation().then((sub) => (subscription = sub));
    return () => {
      if (subscription) subscription.remove();
    };
  }, []);

  return { latitude, longitude, errorMsg, response };
};

export default useLocation;
