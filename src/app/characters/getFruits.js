import axios from 'axios'; 

const getAllFruits = async () => {
    try {
      const response = await axios.get('https://api.predic8.de/shop/products/?limit=50');
      return response.data.products; 
    } catch (error) {
      console.error(error);
    } 
};

export default getAllFruits; 