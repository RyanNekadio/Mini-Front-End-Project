import Characters from "./Characters";
const CharactersList = ( {disneyCharacters}) => {

    const mappedCharacters = disneyCharacters.map((disneyCharacter, index) => {
        return <Characters character={disneyCharacter} key={disneyCharacters._id} />
    });

    return (  
        <>
        <h2>This is the characters list</h2>
        {mappedCharacters}
        </>
     );
}
 
export default CharactersList;