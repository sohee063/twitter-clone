import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity, currentCity }) => {
  return (
    <div className="button-area">
      <Button variant="light" onClick={() => setCity(currentCity)}>
        Current Location
      </Button>
      {cities.map((city, index) => (
        <Button variant="light" key={index} onClick={() => setCity(city)}>
          {city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
