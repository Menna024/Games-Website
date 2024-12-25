

async function getRequestByCategory(CategoryName) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${CategoryName}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e954c72409mshe1bd2500203856cp18286djsnc23d60499698',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log('HHHHHHHHH');
        storeData(result);

    } catch (error) {
        console.error(error);
    }
}


function displayGames(games) {
    games.forEach(element => {

    });
}


class Games {
    games = [];
    constructor(id, title, thumbnail, short_description,
        game_url, genre, platform, publisher, developer,
        release_date, freetogame_profile_url) {
        this.id = id;
        this.title = title;
        this.thumbnail = thumbnail;
        this.short_description = short_description;
        this.game_url = game_url;
        this.genre = genre;
        this.platform = platform;
        this.publisher = publisher;
        this.developer = developer;
        this.release_date = release_date;
        this.freetogame_profile_url = freetogame_profile_url;
    }
}

function storeData(games) {
    console.log('HEYYYYYYYY');
    let gamesArray = [];
    games.forEach(element => {
        let game = new Games(element.id, element.title, element.thumbnail, element.short_description,
            element.game_url, element.genre, element.platform, element.publisher, element.developer,
            element.release_date, element.freetogame_profile_url);
        gamesArray.push(game);
    });

    displayData(gamesArray);
}

function displayData(gamesArray) {
    let htmlCode = ``;
    gamesArray.forEach(element => {
        console.log(element);
        htmlCode += `
        <div class="col-md-3 align-items-stretch d-flex ">
            <div class="card" style="width: 17rem; margin-top: 70px; background-color: #212529; color:#f1f1f1"> 
                <img src="${element.thumbnail}" alt="Avatar" class="mx-auto my-3" style="width:90%; ">
                <div class="container">
                    <div class="row">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <div class="col-md-8">
                                    <h4><b>${element.title}</b></h4> 
                                </div>
                                <div class="col-md-4">
                                    <span class="badge text-bg-secondary p-2" style="background-color:#3a497b !important;">Free</span>
                                </div>
                            </div>

                            <p>${element.short_description}</p> 
                            <hr style="border-top: 1px solid #000;">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <span class="badge text-bg-secondary p-2"> ${element.genre}</span>            
                                </div>
                                <div>
                                    <span class="badge text-bg-secondary p-2"> ${element.platform}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>`;
    });

    document.getElementById("games").innerHTML = htmlCode;

    
document.querySelectorAll('.card').forEach(card=>{
    console.log('clicked');
    card.addEventListener('mouseover',function(){
        console.log('clicked');
        setTimeout(() => { window.location.href = "details.html"; }, 500);
    });
});
}

let mmorpg = document.getElementById("mmorpg");
let shooter = document.getElementById("shooter");
let sailing = document.getElementById("sailing");
let permadeath = document.getElementById("permadeath");
let superhero = document.getElementById("superhero");
let pixel = document.getElementById("pixel");

mmorpg.addEventListener("click", function (e) {
    console.log(e);
    getRequestByCategory("mmorpg");
});

shooter.addEventListener("click", function () {
    getRequestByCategory("shooter");
});

sailing.addEventListener("click", function () {
    getRequestByCategory("sailing");
});

permadeath.addEventListener("click", function () {
    getRequestByCategory("permadeath");
});

superhero.addEventListener("click", function () {
    getRequestByCategory("superhero");
});

pixel.addEventListener("click", function () {
    getRequestByCategory("pixel");
});



document.querySelectorAll('.nav-link').forEach //loop through all the nav links
    (link => {
        link.addEventListener('click', function () { //add an event listener to each link
            document.querySelectorAll('.nav-link').forEach(
                link => { link.classList.remove('active'); });
            this.classList.add('active');
        });
    });

