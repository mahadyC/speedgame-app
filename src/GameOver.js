import './GameOver.css';
const GameOver = (props) => {
    return(
        <div className="overlay">
            <div className="card">
                <h2>Game over</h2>
                <p>Final Score: {props.finalScore}</p>
                <button onClick={props.close}>X</button>
            </div>
        </div>
    );
}

export default GameOver;