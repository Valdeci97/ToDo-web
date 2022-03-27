import axios from 'axios';

import translation from './helpers';

const URL = 'http://localhost:3000/task';

const API = axios.create({
  baseURL: URL,
});

const getTasks = async (filter) => {
  try {
    const info = translation(filter);
    const { data } = await API.get(`/filter/${info}/11:11:11:11:11:11`);
    return data;
  } catch (err) {
    console.error(err);
  }
};

const getLateTasks = async () => {
  try {
    const { data }  = await API.get('/filter/late/11:11:11:11:11:11');
    return data.length;
  } catch (err) {
    console.error(err);
  }
};

const createTask = async (task) => {
  try {
    const { macaddress, type, title, description, date, hour } = task;
    const when = `${date}T${hour}:00.000`;
    const result = await API.post('/', {
      macaddress,
      type,
      title,
      description,
      when,
    });
    console.log(result, 'linha 14 index/services');
    return result;
  } catch (err) {
    console.error(err);
    return { error: err.response.data.error };
  }
}

export { getTasks, getLateTasks, createTask };
