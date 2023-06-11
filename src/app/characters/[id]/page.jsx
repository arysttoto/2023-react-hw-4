import getOneFruit from "./getOneFruit";

async function showCharacter ({ params }) {
    const id = params.id;
    const fruit = await getOneFruit(id); 

    return (
        <>
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <img
              className="w-40 h-40 mx-auto mb-4"
              src={"https://api.predic8.de"+fruit.photo_url}
              alt="Fruit"
            /> 
            <h2 className="text-2xl font-bold mb-2">{fruit.name}</h2>
            <p className="text-gray-700">
              Delicious fruit {fruit.name} costs only ${fruit.price}!
            </p>
          </div>
        </div>    
        </>
    ); 
}   
      
export default showCharacter; 