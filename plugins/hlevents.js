import fetchHLEvents from './plugins/hlevents.js';
import fetchOdumEvents from './plugins/odumevents.js';
import fs from 'fs';

const fetchAllEvents = async () => {
  const hlevents = await fetchHLEvents();
  const odumEvents = await fetchOdumEvents();

  return { hlevents, odumEvents };
};

//writing data to JSON file
const writeEvents = async (info) => {
  const jsonString = JSON.stringify(info, null, 2);
  fs.writeFile('./newEvents.json', jsonString, (err) => {
    if (err) {
      console.log('Error writing file', err);
    } else {
      console.log('Successfully wrote file');
    }
  });
};

(async () => {
  try {
    const info = await fetchAllEvents();
    writeEvents(info);
    console.log(info);
  } catch (error) {
    console.log(error);
  }
})();
