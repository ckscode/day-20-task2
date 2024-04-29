//selecting HTML element using DOM
const Output = document.querySelector(".templates");

//fetching of data is initiated
fetch("https://api.imgflip.com/get_memes")
  .then((e) => e.json())
  .then((result) => {
    const Data = result.data.memes;
    console.log(Data);
    Data.map((e, index) => {
      //JSON data is mapped and the content is set the the HTML elements
      return (Output.innerHTML += `
        <div class="meme col-3 mb-5  p-2">
        <h3 class="w-100 m-0">${index + 1}. ${e.name}</h3>
        <img class="w-100 border border-dark " src="${e.url}" alt="image"/>
        <a href="${e.url}" target="_blank" class="blink fw-bold">Get it!</a>
        </div>
        `);
    });
  })
  .catch((err) => console.log(err));
