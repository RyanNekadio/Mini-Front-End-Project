import CharactersList from "../components/CharactersList";
import { useState, useEffect } from "react";
const DisneyCharacters = () => {

    // Create estates
    const [disneyCharacters, setDisneyCharacters] = useState([]);

    // Fetch the API 
        const fetchDisneyApi = async () => {
            const response = await fetch("https://api.disneyapi.dev/character")
            const data = await response.json();
            setDisneyCharacters(data.data);
            console.log(disneyCharacters);
        }

    // 
        useEffect(() => {
            fetchDisneyApi();
        },[])



    return ( 
        <>
        <h1>This is the container</h1>
        <CharactersList disneyCharacters={disneyCharacters} />
        </>

    );
}
 
export default DisneyCharacters;