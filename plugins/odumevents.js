import fetch from 'node-fetch';

const api_url = 'https://odum.unc.edu/wp-json/tribe/events/v1/events';

async function getAPI(api_url) {
  try {
    const response = await fetch(api_url);
    var data = await response.json();
    return data.events;
  } catch (error) {
    console.log(error);
  }
  return [];
}

function transformEvents(info) {
  try {
    let infoArray = info?.map((event) => ({
      name: event.title,
      description: event.description,
      date: event.start_date,
      url: `https://odum.unc.edu/event/${event.slug}/${event.start_date.slice(
        0,
        11
      )}`,
    }));
    let dataScienceEvents = infoArray?.filter((event) => {
      return event.description.includes('Data'); //case sensitive
    });
    return dataScienceEvents;
  } catch (error) {
    console.log(error);
  }
}

export default async function () {
  const info = await getAPI(api_url);
  const transformedEvents = transformEvents(info);
  return transformedEvents;
}
