// A temp variable to mikic using our database;
// Ultimately we will need to make ajax requests to our server from this file.
export const saveGame = saveFile => {
  return fetch('/5b6867ee107abe0f460f2eff', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({saveFile})
  })
  .then(res => res.json())
};

export const loadGame = () => {
  return fetch('/5b6867ee107abe0f460f2eff', {
    method: 'GET'
  })
  .then(res => res.json())
  .then(json => json.saveFile);
}

export const getRandomStory = () => fetch('/story').then(r => r.json())
