import fetch from "node-fetch";
const api_url = 'https://odum.unc.edu/wp-json/tribe/events/v1/events';
//setting up async function
async function getAPI(api_url) {
    try {
        const response = await fetch(api_url);
        var data = await response.json();
        return data.value;
    }
    catch (error) {
        console.log(error);
    }
    return [];
}
async function transformEvents(info) {
    let info = await getAPI(api_url);
    return info.map(event => ({
        name: event.title,
        description: event.description,
        url: `https://odum.unc.edu/event/${event.slug}/${event.start_date}`,
        date: event.start_date
    }));
}
var dataScienceEvents = await info.filter((event) => {
    return event.description.includes('data science'); //case sensitive
});

export default async function () {
    const info = await getAPI(api_url),
    const transformedEvents = await transformEvents(info),
    return transformedEvents
};

