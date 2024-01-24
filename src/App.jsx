import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Header } from "./components/navigation/Header";
import { StartHero } from "./page/StartHero";
import { TheGame } from "./page/TheGame";
import { useEffect, useState } from "react";

function App() {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);

  function gameReset() {
    setWins(0);
    setLosses(0);
  }

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <StartHero
                gameReset={gameReset}
                wins={wins}
                setWins={setWins}
                losses={losses}
                setLosses={setLosses}
              />
            }
          />
          <Route
            path="/TheGame"
            element={
              <TheGame
                gameReset={gameReset}
                wins={wins}
                setWins={setWins}
                losses={losses}
                setLosses={setLosses}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
