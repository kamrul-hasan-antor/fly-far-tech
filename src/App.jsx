import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import FlightInfo from "./components/FlightInfo";
import { Container } from "@mui/material";

function App() {
  const [isViewDetails, setIsViewDetails] = useState(false);
  const [isReturned, setIsReturned] = useState(false);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <>
      <Container>
        <Header
          isReturned={isReturned}
          setIsReturned={setIsReturned}
          isViewDetails={isViewDetails}
          setIsViewDetails={setIsViewDetails}
        />
        <FlightInfo isViewDetails={isViewDetails} isReturned={isReturned} />
      </Container>
    </>
  );
}

export default App;
