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
    return result;
  } catch (err) {
    console.error(err);
    return { error: err.response.data.error };
  }
}

const getTaskById = async (id) => {
  if (!id) return false;
  const { data } = await API.get(`/${id}`);
  return data;
}

const updatetask = async (task, id) => {
  try {
    const { macaddress, type, title, description, date, hour, done } = task;
    const when = `${date}T${hour}:00.000`;
    const result = await API.put(`/${id}`, {
      macaddress,
      type,
      title,
      description,
      when,
      done,
    });
    return result;
  } catch (err) {
    return { error: err.response.data.error };
  };
};

const deleteTask = async (id) => {
  try {
    await API.delete(`${id}`);
    return { message: 'Ok' };
  } catch (err) {
    return { error: err.response.data.error };
  }
};

export { getTasks, getLateTasks, createTask, getTaskById, updatetask, deleteTask };
