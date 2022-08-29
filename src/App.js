import { useState, useEffect } from 'react';
import Country from './Country.js'
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { propTypes } from 'react-bootstrap/esm/Image.js';

function App() {
  let apiURL = "https://restcountries.com/v3.1";
  const [countries, setCountries] = useState([]);
  const [latlng, setLatLng] = useState([]);

  const center = {
    lat: -6, lng: -2
  }

  const containerStyle = {
    width: '1700px',
    height: '400px'
  };

  function fetchByRegion(region) {
    return fetch(apiURL + "/region/" + region).then(response => response.json())
  }

  function setCenter(latParam,lngParam) {
    center.lat = latParam;
    center.lng = lngParam;
    setLatLng(center);
  }

  useEffect(() =>
  (async () => {
    setCountries(await fetchByRegion("ame"));
   setLatLng({lat: -3, lng: -5})
  }),[]);

  console.log(countries)
  return (
    <div className="App">
            <LoadScript
        googleMapsApiKey="AIzaSyDqeenJG16PhEK0Sq0296ZBwmoJx0LyUY0"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={latlng}
          zoom={10}
        ></GoogleMap>
      </LoadScript>
      <div className="row justify-content-center">
        {countries?.map((country) =>
          <Country setCenter={setCenter} name={country.name.common} flag={country.flags.svg} capital={country.capital[0]} population={country.population} location={country.latlng}></Country>
        )}</div>
    </div>
  );
}
export default App;
