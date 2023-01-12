import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import BarcodeScanner from "./components/BarcodeScanner";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

function App() {
  return (
    <CssBaseline>
      <Container maxWidth="lg">
        <Router>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/Home" element={<Home />}></Route>
            <Route exact path="/barCode" element={<BarcodeScanner />}></Route>
          </Routes>
        </Router>
      </Container>
    </CssBaseline>
  );
}

export default App;
