// A temp variable to mikic using our database;
// Ultimately we will need to make ajax requests to our server from this file.
import { saveFileSuccess } from './actions/actions.js';

export const saveGame = saveFile => dispatch => {
  return fetch('/5b6867ee107abe0f460f2eff', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({saveFile})
  })
  .then(res => res.json())
  .then(storyNode => dispatch(saveFileSuccess(storyNode)));
};

export const loadGame = () => {
  return fetch('/5b6867ee107abe0f460f2eff', {
    method: 'GET'
  })
  .then(res => res.json())
  .then(json => json.saveFile);
}
