import "./LocationBtn.css";
import React from "react";
import { useState, useEffect } from "react";

function LocationBTN() {
  const [latitude, setLatitude] = useState([]);
  const [longitude, setLongitude] = useState([]);
  const [go, setGo] = useState(false);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      console.log(latitude);
      console.log(longitude);
    });
  }, [go]);
  return (
    <div className="ButtonWrapper">
      <button className="Button" onClick={() => setGo(!go)}>
        Klick mich für deinen Standort
      </button>
    </div>
  );
}

export default LocationBTN;
