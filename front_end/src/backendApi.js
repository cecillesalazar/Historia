// A temp variable to mikic using our database;
// Ultimately we will need to make ajax requests to our server from this file.
import { saveFileSuccess } from './actions/actions.js';

export const saveGame = saveFile => dispatch => {
  return fetch('http://localhost:8080/5b6867ee107abe0f460f2eff', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({saveFile})
  })
  .then(res => res.json())
  .then(storyNode => dispatch(saveFileSuccess(storyNode)));
};
