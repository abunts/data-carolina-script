import fetch from "node-fetch";

async function getWebEvents() {
  try {
      await fetch("./newEvents.json")
        .then(function (resp) {
          return resp.json();
        })
        .then(function (data) {
          console.log(data);
        });
  }
  catch (error) {
    console.log(error);
  }
}
getWebEvents()