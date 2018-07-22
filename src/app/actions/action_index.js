import axios from 'axios';

const path = "./static/projects.json";

export const PROJECT_LIST = "PROJECT_LIST";

export const projectListActionCreator = () => {

  const response = axios.get(path);
  
  return {
    type: PROJECT_LIST,
    payload: response
  }
}
