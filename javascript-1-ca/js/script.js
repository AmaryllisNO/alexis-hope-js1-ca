fetch("https://rickandmortyapi.com/api/character/")
    .then(response => response.json())
    .then(json => handleData(json))
    .catch(error => window.location = "error.html");

const div = document.querySelectorAll("div");
const replacingDiv = div[1];

let newHTML = "";

function handleData(json) {
    let results = json.results; 

    console.dir(results);

    results.forEach(result => {
        let typeValue = "Unknown";

        if(results.type) {
            typeValue = result.type; 
        }

        var episodeArray = result.episode; 

        newHTML += `
        <div class="col-sm-6 col-md-4 col-lg-3">                
            <div class="card">  
                <img class="image" src="${result.image}" alt="${result.name}">
                <div class="details">
                    <h4 class="name">${result.name}</h4>
                    <p>Type: ${typeValue}</p>    
                    <p>Episode count: ${episodeArray.length}</p>                                  
                    <a class="btn btn-primary" href="details.html?id=${result.id}">Details</a>
                 </div>
            </div>
        </div>` 
    });
replacingDiv.innerHTML = newHTML;
}