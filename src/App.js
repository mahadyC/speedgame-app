import React from "react";
import "./App.css";
import Circle from "./Circle";
import GameOver from "./GameOver";
import circles from "./circles";

class App extends React.Component {
  state = {
    score: 0,
    current: 2,
    showGameOver: false,
    rounds: 0,
    gameStart: false
  };

  scoreHandler = () => {
    this.setState({
      score: this.state.score + 10,
    });
  };

  startHandler = () => {
    this.setState({
      gameStart: true
    })
  };

  endHandler = () => {
    this.setState({
      showGameOver: true,
      gameStart: false,
      current: 0
    })
  };

  closeHandler = () => {
    this.setState({
      showGameOver: false,
      score: 0
    })
  }

  getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  render() {
    return (
      <div className="app">
          {this.state.showGameOver ? <GameOver finalScore={this.state.score} close={this.closeHandler}/> : ""}
        <h1>Speed game</h1>
        <p>Your score is: {this.state.score}</p>
        <div className="circles">
          {circles.map((cir) => (
            <Circle
            click={() => this.scoreHandler()}
            key={cir.id}
            id={cir.id}
            bgColor={cir.color}
            class={this.state.current === cir.id ? "circle active" : "circle"}
            clickable={this.state.gameStart ? "auto" : "none"}
            />
            ))}
        </div>
        <div className="buttons">
          <button onClick={this.startHandler} disabled={this.state.gameStart}>START GAME</button>
          <button onClick={this.endHandler}>END GAME</button>
        </div>
      </div>
    );
  }
}

export default App;
