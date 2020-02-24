const queryString = document.location.search; 
const params = new URLSearchParams(queryString);
const title = document.querySelector("title"); 

console.dir(params);

let characters = "id";

if(params.has("id")) {
    character = params.get("characters");
}

const replacingDivDetails = document.querySelector("main");


fetch("https://rickandmortyapi.com/api/character/17")
    .then(response => response.json())
    .then(json => characterDetails(json))
    .catch(error => window.location = "error.html");

let detailsHTML = "";

function characterDetails(json) {

    console.dir(json);

    detailsHTML = `
    <div class="detail-container">
        <img class="details-image" src="${json.image}" alt="${json.name}" />
        <div class="detail-details">
            <h1>${json.name}</h1>
            <p>Status: <span class="value" id="status">${json.status}</span></p>
            <p>Species: <span class="value" id="species">${json.species}</span></p>
            <p>Origin: <span class="value" id="origin">${json.origin.name}</span></p>
            <p>Location: <span class="value" id="location">${json.location.name}</span></p>                   
        </div>
    </div>`

    replacingDivDetails.innerHTML = detailsHTML;

    title.innerText = json.name;
}





