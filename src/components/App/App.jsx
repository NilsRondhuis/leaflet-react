import LeafletMap from "components/LeafletMap/LeafletMap";
import dataMarkers from "../../data/markers.json";

const App = (props) => {
  return (
    <>
      <LeafletMap markers={dataMarkers} />
    </>
  );
};

App.propTypes = {};

export default App;
