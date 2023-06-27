import "./App.css";
import HomePage from "./screens";
import { indexPattern } from "./routes";
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={indexPattern} element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
