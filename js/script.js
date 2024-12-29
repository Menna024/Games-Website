let CurrentCardID;
var CurrentGenre = '';


document.addEventListener('DOMContentLoaded', function () {
    let spinner = document.getElementById("spinner");
    spinner.style.display = "none";
});


let CurrentCategory = localStorage.getItem("CurrentCategory");
if (CurrentCategory == 'mmorpg') {
    document.addEventListener('DOMContentLoaded', function () {
        mmorpg.click();
    });
    getRequestByCategory("mmorpg");
}
else if (CurrentCategory == 'shooter') {
    document.addEventListener('DOMContentLoaded', function () {
        shooter.click();
    });

    getRequestByCategory("shooter");
}
else if (CurrentCategory == 'sailing') {
    document.addEventListener('DOMContentLoaded', function () {
        sailing.click();
    });
    getRequestByCategory("sailing");
}
else if (CurrentCategory == 'permadeath') {
    document.addEventListener('DOMContentLoaded', function () {
        permadeath.click();
    });
    getRequestByCategory("permadeath");
}
else if (CurrentCategory == 'superhero') {
    document.addEventListener('DOMContentLoaded', function () {
        superhero.click();
    });
    getRequestByCategory("superhero");
}
else if (CurrentCategory == 'pixel') {
    document.addEventListener('DOMContentLoaded', function () {
        pixel.click();
    });
    getRequestByCategory("pixel");
}



async function getRequestByCategory(CategoryName) {

    let spinner = document.getElementById("spinner");
    spinner.style.display = "flex";

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
        // console.log(result);
        storeData(result);

        spinner.style.display = "none";
    } catch (error) {
        console.error(error);
    }
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
        htmlCode += `
        <div class="col-md-3 align-items-stretch d-flex ">
            <div class="card" id=${element.id} style="width: 17rem; margin-top: 70px; background-color: #212529; color:#f1f1f1"> 
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
                            <div class="d-flex justify-content-around">
                                <div>
                                    <span class="badge text-bg-secondary p-2 genre"> ${element.genre}</span>            
                                </div>
                                <div>
                                    <span class="badge text-bg-secondary p-2 platform"> ${element.platform}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>`;
    });

    document.getElementById("games").innerHTML = htmlCode;

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function () {
            localStorage.setItem("CurrentCardID", card.id);
            let spinner = document.getElementById("spinner");
            spinner.style.display = "flex";
            setTimeout(() => {
                document.addEventListener('DOMContentLoaded', function () {
                    spinner.style.display = "none";
                });
                window.location.href = "details.html";
            }, 500);
        });
    });
}


document.addEventListener('DOMContentLoaded', function () {
    let mmorpg = document.getElementById("mmorpg");
    if (mmorpg) {
        mmorpg.addEventListener('click', function () {
            CurrentGenre = "mmorpg";
            localStorage.setItem("CurrentCategory", "mmorpg");
            getRequestByCategory("mmorpg");
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    let shooter = document.getElementById("shooter");
    if (shooter) {
        shooter.addEventListener("click", function () {
            CurrentGenre = "shooter";
            localStorage.setItem("CurrentCategory", "shooter");
            getRequestByCategory("shooter");
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    let sailing = document.getElementById("sailing");
    if (sailing) {
        sailing.addEventListener("click", function () {
            CurrentGenre = "sailing";
            localStorage.setItem("CurrentCategory", "sailing");
            getRequestByCategory("sailing");
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    let permadeath = document.getElementById("permadeath");
    if (permadeath) {
        permadeath.addEventListener("click", function () {
            CurrentGenre = "permadeath";
            localStorage.setItem("CurrentCategory", "permadeath");
            getRequestByCategory("permadeath");
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    let superhero = document.getElementById("superhero");
    if (superhero) {
        superhero.addEventListener("click", function () {
            CurrentGenre = "superhero";
            localStorage.setItem("CurrentCategory", "superhero");
            getRequestByCategory("superhero");
        });
    }
});



document.addEventListener('DOMContentLoaded', function () {
    let pixel = document.getElementById("pixel");
    if (pixel) {
        pixel.addEventListener("click", function () {
            CurrentGenre = "pixel";
            localStorage.setItem("CurrentCategory", "pixel");
            getRequestByCategory("pixel");
        });


    }
});

document.querySelectorAll('.nav-link').forEach //loop through all the nav links
    (link => {
        link.addEventListener('click', function () { //add an event listener to each link
            document.querySelectorAll('.nav-link').forEach(
                link => { link.classList.remove('active'); });
            this.classList.add('active');
        });
    });

