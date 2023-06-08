import axios from 'axios'; 

const getOneCharacter = async (id) => {
    try {
      const response = await axios.get('https://hp-api.onrender.com/api/character/'+id);
      return response.data; 
    } catch (error) {
      console.error(error);
    } 
};

export default getOneCharacter; 