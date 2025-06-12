import { useState } from "react";

const intialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({onSelect, activePlayerSymbol}){
    const [ gameBoard, setGameBoard ] = useState(intialGameBoard);

    function BtnClickHandler(rowIndex, colIndex){
        setGameBoard((prevGameBoard)=>{
            let updatedGameBoard = [...prevGameBoard.map((innerBoard)=> [...innerBoard])];
            updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedGameBoard;
        })
        onSelect();
    }

    return(
        <ol id="game-board">
            {gameBoard.map((row,rowIndex)=> <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol,colIndex)=> 
                    <li key={colIndex}> <button onClick={()=> BtnClickHandler(rowIndex,colIndex)}>{playerSymbol}</button> </li>)}
                </ol>
            </li>)}
        </ol>
    );
}