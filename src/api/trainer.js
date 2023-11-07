import axios from 'axios';
const baseURL = 'http://localhost:5000';

export const getAllTrainers = async () => {
  let trainers;
  try {
    trainers = await axios.get(`${baseURL}/trainers/getAllTrainers`);
  } catch (error) {
    console.log(error);
  }
};
