import { fetchData } from "./modules/thing_api.js";

(() => {
  console.log("Connected");

  function popErrorBox(message) {
    alert("hey it's broken!");
  }

  function handleDataSet(data) {
    let thingsSection = document.querySelector(".things-section"),
      thingsTemplate = document.querySelector("#things-template").content;

    for (let things in data) {
      let currentThing = thingsTemplate.cloneNode(true),
        currentThingText = currentThing.querySelector(".things").children;

      currentThingText[1].textContent = data[things].name;
      currentThingText[2].src = `images/${data[things].image}_thumb.jpg`;
      currentThingText[3].textContent = data[things].description;

      userSection.appendChild(currentUser);
    }
  }
  function retrieveProjectInfo() {
    // test for an ID
    debugger;
    console.log(this.id);

    fetchData(`./includes/index.php?id=${this.id}`)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  function retrieveProjectInfo() {
    // test for an ID
    debugger;
    console.log(this.id);

    fetchData(`./includes/index.php?id=${this.id}`)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
})();
