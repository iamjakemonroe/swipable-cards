import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import SimpleBottomNavigation from "./components/SimpleBottomNavigation";
import Chats from "./components/Chats";

function App() {
  return (
    <div className="App">
      <Router>
        <SimpleBottomNavigation />
        <Routes>
          <Route path="/profile" element={<div>Profile</div>} />
          <Route
            path="/chat"
            element={
              <>
                <Header backButton="/" />
                <h1>Chat page</h1>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <TinderCards />
              </>
            }
          />
          <Route
            path="/favorite"
            element={
              <>
                <Header />
                <h1>Favorites page</h1>
              </>
            }
          />
          <Route
            path="/chats"
            element={
              <>
                <Header /> <Chats />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
