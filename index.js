let homeScore = 0;
let homeScoreElement = document.getElementById("home-score");

let awayScore = 0;
let awayScoreElement = document.getElementById("away-score");

function addPoints(team, points) {

    switch (team) {
        case "home":
            homeScore += points;
            homeScoreElement.textContent = homeScore;
            break;

        case "away":
            awayScore += points;
            awayScoreElement.textContent = awayScore;
            break;
    }
}

function resetGame() {
    homeScore = 0;
    homeScoreElement.textContent = homeScore;
    awayScore = 0;
    awayScoreElement.textContent = homeScore;
}

