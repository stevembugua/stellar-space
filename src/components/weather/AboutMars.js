import React, { useEffect, useState } from "react";
import './weather.css';

function AboutMars(props) {
  const [sol_hours, setSol_Hours] = useState([]);
  const [solRequired, setSol_Required] = useState([]);
  const [solChecked, setSol_Checked] = useState([]);


  // fetching from api
  useEffect(
    () => {
      fetch(
        "https://api.nasa.gov/insight_weather/?api_key=fzSdG2XbOJj2lUZxdX3IBaW0nzQGpjVRId40l7C1&feedtype=json&ver=1.0"
      )
        .then((r) => r.json())
        .then((data) => {
          console.log(data);
          const customData = data.validity_checks["1219"];
          const hoursData = data.validity_checks;

          setSol_Hours(customData.AT.sol_hours_with_data);
          setSol_Hours(customData.HWS.sol_hours_with_data);
          setSol_Hours(customData.PRE.sol_hours_with_data);
          setSol_Hours(customData.WD.sol_hours_with_data);

          const requiredData = data.validity_checks;

          setSol_Required(hoursData.sol_hours_required);

          const checkedData = data.validity_checks;
          setSol_Checked(hoursData.sols_checked);
        });
    },
    []
  );

  return (
  
    <div className="mars-weather">
  <center>
    <h2 className="weather-title">Mars weather</h2>
          <div className="Row">
            <h4 >ATMOSPHERIC TEMPERATURE</h4>
            {sol_hours.map(soul => (
              <p key={soul}>{soul}°C</p>
            ))}
          </div>

          <div className="Row">
          <h4>HORIZONTAL WIND SPEED</h4>
            {sol_hours.map(soul => (
              <p key={soul}>{soul}Kph</p>
            ))}
          </div>

          <div className="Row">
        <h4>ATMOSPHERIC PRESSURE</h4>
            {sol_hours.map(soul => (
              <p key={soul}>{soul}Hg</p>
            ))}
          </div>

          <div className="Row">
        <h4>WIND DIRECTION</h4>
            {sol_hours.map(soul => (
              <p key={soul}>{soul}</p>
            ))}
           </div>
    
  </center>
  </div>
  );
}

export default AboutMars;