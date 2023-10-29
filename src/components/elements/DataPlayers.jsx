import React from "react"
import "./Chat.css";

function DataPlayers({players}) {
    if (players === undefined || players.length===0) {
        return;
    }
 const players_arr = Object.keys(players);
    return (

        <div>
            {players_arr.map((keyName, idx) => {
                    return <div className="players">{players[keyName].Name} - {players[keyName].Value}</div>

                }
            )}
        </div>
    )
}

export default DataPlayers