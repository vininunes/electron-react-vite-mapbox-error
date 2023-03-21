import "./App.scss";
import Map from "react-map-gl";

function App() {
  return (
    <div className="App">
      <Map
        mapboxAccessToken="[MAP_BOX_TOKEN]"
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
}

export default App;
