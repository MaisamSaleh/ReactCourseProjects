import { useActionState } from "react";
import { use } from "react";
import { useState } from "react";

export default function Player({initialName , symbol , isActive}){
    const [ isEditing, setIsEditing ] = useState(false);
    const [ newName , setNewName ] = useState(initialName);

    function editClickHandler(){
        setIsEditing((editing)=> !editing);
    }

    function inputChangeHandler(event){
        setNewName(event.target.value);
    }

    let playerName = <span className="player-name">{initialName}</span>;

    if(isEditing){
        playerName = <input type="text" required
         defaultValue={newName} 
         onChange={inputChangeHandler}
        />;
    }
    else playerName = <span className="player-name">{newName}</span>;

    return(
        <li className={isActive? "active" : undefined}>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button className="editBtn" onClick={editClickHandler}>{isEditing? "Save" : "Edit"}</button>
        </li>
    );
}