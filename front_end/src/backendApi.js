import { loadUser } from './local-storage.js';

export const saveGame = saveFile => {
  return fetch(`/api/${loadUser().id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({saveFile})
  })
  .then(res => res.json())
};

export const loadGame = () => {
  return fetch(`/api/${loadUser().id}`, {
    method: 'GET'
  })
  .then(res => res.json())
  .then(json => json.saveFile);
}

export const getRandomStory = () => fetch('/api/story').then(r => r.json())
