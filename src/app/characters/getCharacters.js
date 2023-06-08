import axios from 'axios'; 

const getAllCharacters = async () => {
    try {
      const response = await axios.get('https://hp-api.onrender.com/api/characters/students');
      return response.data; 
    } catch (error) {
      console.error(error);
    }
};

export default getAllCharacters; 