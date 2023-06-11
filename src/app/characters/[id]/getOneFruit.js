import axios from 'axios'; 

const getOneFruit = async (id) => {
    try {
      const response = await axios.get('https://api.predic8.de/shop/products/'+id);
      return response.data; 
    } catch (error) {
      console.error(error);
    } 
};

export default getOneFruit; 