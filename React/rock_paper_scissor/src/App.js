import React from "react";
import "./App.css";
import { PlayerCard } from "./PlayerCard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.symbols = ["rock", "paper", "scissors"];
    this.state = {};
  }
  // function to declare the winner
  decideWinner = () => {
    const { playerRed, playerBlue } = this.state;
    if (playerRed == playerBlue) {
      return "It's a draw!";
    }
    if (
      (playerRed === "rock" && playerBlue === "scissors") ||
      (playerRed === "paper" && playerBlue === "rock") ||
      (playerRed === "scissors" && playerBlue === "paper")
    ) {
      return "Red Player Wins!";
    }
    return "Blue Player Wins!";
  };

  // onClick function for rungame button
  runGame = () => {
    let counter = 0;
    let gameInterval = setInterval(() => {
      counter++;
      this.setState({
        playerRed: this.symbols[Math.floor(Math.random() * 3)],
        playerBlue: this.symbols[Math.floor(Math.random() * 3)],
        winner: ""
      });
      if (counter > 60) {
        clearInterval(gameInterval);
        this.setState({ winner: this.decideWinner() });
      }
    });
  };

  render() {
    return (
      <div className="App">
        <h2>Rock Paper Scissor</h2>
        <PlayerCard color="red" symbol={this.state.playerRed} />
        <PlayerCard color="blue" symbol={this.state.playerBlue} />
        <p>{this.state.winner}</p>
        <button onClick={this.runGame}> Run Game</button>
      </div>
    );
  }
} // App end

export default App;
