import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClockHeading from "./Components/ClockHeading";
import ClockSlogan from "./Components/ClockSlogan";
import ClockCurrentTime from "./Components/ClockCurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <center>
        <ClockHeading />
        <ClockSlogan />
        <ClockCurrentTime />
      </center>
    </>
  );
}

export default App;
