import fetch from "node-fetch";

async function getWebEvents() {
  try {
      await fetch("newEvents.json")
        .then(response => response.json())
        .then(data => {
          console.log(data);
        });
  }
  catch (error) {
    console.log(error);
  }
}
getWebEvents()