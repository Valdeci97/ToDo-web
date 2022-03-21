import axios from 'axios';

import translation from './helpers';

const URL = 'http://localhost:3000/task';

const API = axios.create({
  baseURL: URL,
});

const getTasks = async (filter) => {
  try {
    const info = translation(filter);
    console.log(info);
    console.log(API.baseURL);
    const { data } = await API.get(`/filter/${info}/11:11:11:11:11:11`);
    return data;
  } catch (err) {
    console.error(err);
  }
};

export default getTasks;
