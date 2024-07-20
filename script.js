const playerChoices = document.querySelectorAll(
  '.player-choice-container .choice'
)
console.log(playerChoices)

const playerHistoryContainer = document.querySelector(
  '.player-history-container'
)

const computerHistoryContainer = document.querySelector(
  '.computer-history-container'
)

playerChoices.forEach((choice) => {
  choice.addEventListener('click', (event) => {
    let playerPick = choice.dataset.choice
    const arrayComputerChoices = ['rock', 'paper', 'scissors']
    let computerPick = arrayComputerChoices[Math.floor(Math.random() * 3)]

    if (playerPick === computerPick) {
      console.log('It is a tie!')

      const emoji = ['✊', '✋', '✌️']

      const playerHistoryItem = document.createElement('div')

      const playerTextContent =
        playerPick === 'rock'
          ? emoji[0]
          : playerPick === 'paper'
          ? emoji[1]
          : emoji[2]

      playerHistoryItem.textContent = playerTextContent

      playerHistoryItem.classList.add('history')
      playerHistoryContainer.prepend(playerHistoryItem)
    } else if (playerPick === 'rock' && computerPick === 'scissors') {
      console.log('Player Wins')
    } else if (playerPick === 'rock' && computerPick === 'paper') {
      console.log('Computer Wins')
    } else if (playerPick === 'paper' && computerPick === 'rock') {
      console.log('Player Wins')
    } else if (playerPick === 'paper' && computerPick === 'scissors') {
      console.log('Computer Wins')
    } else if (playerPick === 'scissors' && computerPick === 'paper') {
      console.log('Player Wins')
    } else if (playerPick === 'scissors' && computerPick === 'rock') {
      console.log('Computer Wins')
    }
  })
})
