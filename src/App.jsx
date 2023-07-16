import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import FlightInfo from "./components/FlightInfo";
import { Box, Container } from "@mui/material";

function App() {
  const [isViewDetails, setIsViewDetails] = useState(false);
  const [isReturned, setIsReturned] = useState(false);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  return (
    <Container>
      <Box sx={{ padding: "60px 0" }}>
        <Header
          isReturned={isReturned}
          setIsReturned={setIsReturned}
          isViewDetails={isViewDetails}
          setIsViewDetails={setIsViewDetails}
        />
        <FlightInfo isViewDetails={isViewDetails} isReturned={isReturned} />
      </Box>
    </Container>
  );
}

const CardOne = () => {
  return <div>Card 1</div>;
};

const CardTwo = () => {
  return <div>Card antor</div>;
};

const CardThree = () => {
  return <div>Card 3</div>;
};

const CardFour = () => {
  return <div>Card 4</div>;
};

export default App;
