import "./App.css";
import { useLoadScript } from "@react-google-maps/api";
import { Map } from "./components/Map";

function App() {
  const { isLoaded } = useLoadScript({
    GoogleMapsApiKey: "AIzaSyBC8hynltxNi9JaSX5lUQlhBbqUbuxX0Z4",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

export default App;
