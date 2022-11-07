function createGame(player1, hour, player2) {
  return `
    <li>
      <img src ="./assets/icon-${player1}.svg" alt ="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src ="./assets/icon-${player2}.svg" alt ="Bandeira da ${player2}" />
    </li>  
  `
}
let delay = -0.6;
function createCard(date, day, games) {
  delay = delay + 0.6;
  return `
    <div class ="cards" style= "animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
              ${games}
          </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "Qinta-feira",
    createGame("Portugal", "13:00", "Ghana") +
      createGame("Brazil", "16:00", "Serbia")
  ) +
  createCard(
    "28/11",
    "Segunda-feira",
    createGame("Brazil", "13:00", "Switzerland")
  ) +
  createCard("02/12", "Sexta-feira", createGame("Brazil", "16:00", "Cameroon"))
