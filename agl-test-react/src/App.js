import React from "react";
import "./App.css";
import { get } from "./utils/api";
import Owners from "./components/Owners";
import {apiURL} from "./utils/constants";

function App() {
  const [ownerWithPets, setOwnerWithPets] = React.useState([]);

  React.useEffect(() => {
    get(apiURL).then(result => {
      console.log(result.data);
      setOwnerWithPets(result.data);
    });
  }, []);

  return (
    <div className="App">
      <div className="app-content">
        <Owners ownerWithPets={ownerWithPets} />
      </div>
    </div>
  );
}

export default App;
