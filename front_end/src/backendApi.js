// A temp variable to mikic using our database;
// Ultimately we will need to make ajax requests to our server from this file.
const gameSaves = [];
global.gameSaves = gameSaves;

export const saveGame = async (nodeToSave) => {
  gameSaves.push(nodeToSave);
};

export const getSaveStates = async () => gameSaves;
