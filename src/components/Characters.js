const Characters = ({character}) => {
    return ( 
        <div>
            <h3>Here is the individual characters</h3>
            <img src={character.imageUrl} />
        </div>
     );
}
 
export default Characters;