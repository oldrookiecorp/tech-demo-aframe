
import axios from 'axios';

export const getGamesEnv = async (id) => {
  try {
    const response = await axios.get(`https://syu-clubs.com/api/games/${id}`);
    return response.data;
  } catch (e) {
    return e;
  }
};