
import axios from 'axios';

export const getGamesEnv = async (id) => {
  try {
    const response = await axios.get(`http://210.114.17.157:8080/api/games/${id}`);
    return response.data;
  } catch (e) {
    return e;
  }
};