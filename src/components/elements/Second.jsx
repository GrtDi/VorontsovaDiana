import React from "react"
import {useState} from "react";
import {useEffect} from "react"
import DataPlayers from "./DataPlayers"
import "./Chat.css";

function Second() {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        const options = {
            method: "GET"
        };

        fetch("https://www.cbr-xml-daily.ru/daily_json.js", options)
            .then(response => response.json())
            .then(response => {
                setPlayers(response.Valute);
            })

            .catch(error =>
                console.error(error));
    }, [])
    return (
        <>
            <div className="divh1"><h1 className="h1">Текущий курс валют </h1></div>
            <DataPlayers players={players}/>
        </>
    )

}


export default Second