import "./Maps.css";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { useState, useEffect } from "react";

function Maps() {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [go, setGo] = useState(false);

  const position = [latitude, longitude];
  console.log(position);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, [go]);
  return (
    <div>
      <div className="ButtonWrapper">
        <button className="Button" onClick={() => setGo(!go)}>
          Klick mich für deinen Standort
        </button>
        {go ? (
          <div>
            <p className="PositionWrapper">Latitude: {latitude}</p>
            <p className="PositionWrapper">Longitude: {longitude}</p>
          </div>
        ) : (
          "."
        )}
      </div>

      {latitude && longitude ? (
        <div className="MapWrapper">
          <MapContainer
            id="map"
            center={
              latitude && longitude
                ? [latitude, longitude]
                : [52.37392, 9.735603]
            }
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={
                latitude && longitude
                  ? [latitude, longitude]
                  : [52.37392, 9.735603]
              }
            >
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
}

export default Maps;
