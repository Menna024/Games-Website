var GameURL;

// Fetch game details once the page is loaded
document.addEventListener('DOMContentLoaded', function () {
    getGameDetails();
    addCloseButtonListener();
});

async function getGameDetails() {
    let CurrentCardID = localStorage.getItem("CurrentCardID");
    console.log("Currebt id passed is " + CurrentCardID);
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${CurrentCardID}`;
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
        GameURL = result.game_url;
        console.log(result);
        console.log(result.thumbnail);
        DisplayGameDetaills(result);

        // Add event listener to the dynamically created button
        addShowGameButtonListener();

    } catch (error) {
        console.error(error);
    }
}

function DisplayGameDetaills(Game) {
    console.log("Game " + Game.thumbnail);
    let content = `<img src="${Game.thumbnail}" alt="game-image" class="w-100" />`;

    let ImgDetails = document.querySelector(".image-section");
    ImgDetails.innerHTML = content;

    let gameDetails = `
        <h3 class="text-white">Title: ${Game.title}</h3>
        <p class="text-white">Category:  <span class="badge text-bg-info p-2"> ${Game.genre}</span></p>
        <p class="text-white">Platform:  <span class="badge text-bg-info p-2">  ${Game.platform}</span></p>
        <p class="text-white">Status:  <span class="badge text-bg-info p-2"> Live</span></p>
        <p class="text-white">${Game.description}</p>
        <button class="btn btn-outline-warning text-white show-game" >Show Game</button>`;

    let GameDetails = document.querySelector(".details-section");
    GameDetails.innerHTML = gameDetails;
}

function addShowGameButtonListener() {
    let ShowGameBtn = document.querySelector(".show-game");
    if (ShowGameBtn) {
        ShowGameBtn.addEventListener('click', function () {
            ShowGame();
        });
    }
}

function ShowGame() {
    console.log("Show Game");
    console.log("Show Game" + GameURL);
    window.open(GameURL, '_blank');
}

function addCloseButtonListener() {
    let CloseBtn = document.querySelector(".btn-close");
    if (CloseBtn) {
        CloseBtn.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }
}
