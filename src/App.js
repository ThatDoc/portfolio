import './index.css';
import './App.css';

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Header from "./components/Header"

import StartPage from "./pages/StartPage";
import ArtPage from "./pages/ArtPage";
import GamedevPage from "./pages/GamdevPage";

const App = () => {
  return (
    <Router>
      <div className='App'>
        <div className="App-main">
            <Header />
            <Routes>
              <Route path="*" element={<Navigate to="/Start" replace />} />
              <Route path="/Start" element={<StartPage />} />
              <Route path="/Art" element={<ArtPage />} />
              <Route path="/Gamedev" element={<GamedevPage />} />
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
