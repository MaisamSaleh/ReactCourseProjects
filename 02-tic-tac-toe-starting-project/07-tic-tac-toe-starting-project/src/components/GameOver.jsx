export default function GameOver({ winner, rematch }){
    return(
        <div id="game-over">
            <h2>Game Over!</h2>
            { winner && <p>{winner} won!</p> }
            { !winner && <p> it's draw</p> }
            <p><button onClick={rematch}>Rematch!</button></p>
        </div>
    );
}