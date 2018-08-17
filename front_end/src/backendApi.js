// A temp variable to mikic using our database;
// Ultimately we will need to make ajax requests to our server from this file.
import { loadUser } from './local-storage.js';

export const saveGame = saveFile => {
  return fetch(`/${loadUser().id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({saveFile})
  })
  .then(res => res.json())
};

export const loadGame = () => {
  return fetch(`/${loadUser().id}`, {
    method: 'GET'
  })
  .then(res => res.json())
  .then(json => json.saveFile);
}

export const getRandomStory = () => fetch('/story').then(r => r.json())
