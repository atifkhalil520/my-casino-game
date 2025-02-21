import React, { useState } from "react";
import "./App.css";
import LoginPage from "./LoginPage"; // Login Page Import کیا!
import DepositPage from "./DepositPage"; // Deposit System Import کیا!

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="container">
      {!isLoggedIn ? (
        <LoginPage onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <>
          <h1>🎰 Welcome to Casino Game 🎰</h1>
          <SpinWheel />
          <PlinkoGame />
          <DepositPage /> {/* Deposit System یہاں Show ہوگا */}
        </>
      )}
    </div>
  );
};

const SpinWheel = () => {
  const [result, setResult] = useState(null);
  const options = ["💰 Jackpot!", "🎟 Free Spin", "🎯 Try Again", "💎 Bonus Coins"];

  const spin = () => {
    const randomIndex = Math.floor(Math.random() * options.length);
    setResult(options[randomIndex]);
  };

  return (
    <div className="game-box">
      <h2>🎡 Spin the Wheel</h2>
      <button onClick={spin}>Spin</button>
      {result && <p>Result: {result}</p>}
    </div>
  );
};

const PlinkoGame = () => {
  const [score, setScore] = useState(0);

  const dropBall = () => {
    const points = [0, 10, 20, 50, 100, 500, 1000];
    const randomScore = points[Math.floor(Math.random() * points.length)];
    setScore(randomScore);
  };

  return (
    <div className="game-box">
      <h2>🔵 Plinko Game</h2>
      <button onClick={dropBall}>Drop Ball</button>
      <p>Your Score: {score}</p>
    </div>
  );
};

export default App;





