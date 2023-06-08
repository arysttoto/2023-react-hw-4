import getOneCharacter from "./getOneCharacter";

async function showCharacter ({ params }) {
    const id = params.id;
    const character = await getOneCharacter(id); 

    return (
        <>
        <p className="text-black">hi, i am {character[0].name}</p>      
        </>
    ); 
}

export default showCharacter; 