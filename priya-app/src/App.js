import "./App.css";
import About from './Components/About';
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("");
  const showAlert = (type, message) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      showAlert(null);
    }, 6000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(36 74 104";
      // document.title = "TextAnalyser-Dark Mode Enabled";
      showAlert("success", "Dark Mode has been enabled");
      // setTimeout(() => {
      //   document.title = "TextAnalyser";
      // }, 2000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "";
      // document.title = "TextAnalyser-Light Mode Enabled";
      showAlert("success", "Light Mode has been enabled");
      // setTimeout(() => {
      //   document.title = "TextAnalyser";
      // }, 2000);
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextAnalyser"
          about="About us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />

        <div className="container my-4">
          <Routes>
            <Route exact path="/"
              element={
                <Textform
                  heading="Try-TextAnalyser-Word counter ,character counter,remove extra spaces"
                  mode={mode}
                  showAlert={showAlert}
                />} />



            <Route exact path="/about" element={<About heading="About us" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
