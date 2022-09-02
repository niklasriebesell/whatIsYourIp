import "./IpFetch.css";
import { useEffect, useState } from "react";

function useIpFetch() {
  useEffect(() => {
    fetchData();
  }, []);
  const Key = process.env.REACT_APP_API_KEY;
  const [ip, setIp] = useState([]);

  const fetchData = () => {
    fetch(`https://geo.ipify.org/api/v2/country?apiKey=${Key}&ipAddress`)
      .then((res) => res.json())
      .then((data) => {
        setIp(data);
      });
  };

  return (
    <div className="IpWrapper">
      <p>{ip.ip}</p>

      <p>{ip.isp}</p>
    </div>
  );
}

export default useIpFetch;
