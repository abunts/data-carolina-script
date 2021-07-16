import fetch from "node-fetch";

fetch("./newEvents.json")
  .then(response => response.json())
  .then(json => console.log(json));