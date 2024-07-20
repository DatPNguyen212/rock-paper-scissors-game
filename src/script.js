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

const playerWinCount = document.querySelector('.player-win-count')
const computerWinCount = document.querySelector('.computer-win-count')

playerChoices.forEach((choice) => {
  choice.addEventListener('click', (event) => {
    const playerPick = choice.dataset.choice
    const arrayComputerChoices = ['rock', 'paper', 'scissors']
    const computerPick = arrayComputerChoices[Math.floor(Math.random() * 3)]
    let isPlayerWin = false

    playerWinCount.classList.remove('new-win-count')
    computerWinCount.classList.remove('new-win-count')

    if (playerPick === computerPick) {
      console.log('It is a tie!')
      generateTieHistory(playerPick, computerPick)
    } else if (playerPick === 'rock' && computerPick === 'scissors') {
      console.log('Player Wins')
      isPlayerWin = true
      generateWinHistory(playerPick, computerPick, isPlayerWin)
    } else if (playerPick === 'rock' && computerPick === 'paper') {
      console.log('Computer Wins')
      generateWinHistory(playerPick, computerPick, isPlayerWin)
    } else if (playerPick === 'paper' && computerPick === 'rock') {
      console.log('Player Wins')
      isPlayerWin = true
      generateWinHistory(playerPick, computerPick, isPlayerWin)
    } else if (playerPick === 'paper' && computerPick === 'scissors') {
      console.log('Computer Wins')
      generateWinHistory(playerPick, computerPick, isPlayerWin)
    } else if (playerPick === 'scissors' && computerPick === 'paper') {
      console.log('Player Wins')
      isPlayerWin = true
      generateWinHistory(playerPick, computerPick, isPlayerWin)
    } else if (playerPick === 'scissors' && computerPick === 'rock') {
      console.log('Computer Wins')
      generateWinHistory(playerPick, computerPick, isPlayerWin)
    }

    deleteExtraHistoryItem()
  })
})

function generateTieHistory(playerPick, computerPick) {
  const emoji = ['✊', '✋', '✌️']

  const playerHistoryItem = document.createElement('div')
  const computerHistoryItem = document.createElement('div')

  const playerTextContent =
    playerPick === 'rock'
      ? emoji[0]
      : playerPick === 'paper'
      ? emoji[1]
      : emoji[2]

  playerHistoryItem.textContent = playerTextContent

  playerHistoryItem.classList.add('player-history')
  playerHistoryContainer.prepend(playerHistoryItem)

  const computerTextContent =
    computerPick === 'rock'
      ? emoji[0]
      : computerPick === 'paper'
      ? emoji[1]
      : emoji[2]

  computerHistoryItem.textContent = computerTextContent
  computerHistoryItem.classList.add('computer-history')
  computerHistoryContainer.prepend(computerHistoryItem)
}

function generateWinHistory(playerPick, computerPick, isPlayerWin) {
  const emoji = ['✊', '✋', '✌️']

  const playerHistoryItem = document.createElement('div')
  const computerHistoryItem = document.createElement('div')

  const playerTextContent =
    playerPick === 'rock'
      ? emoji[0]
      : playerPick === 'paper'
      ? emoji[1]
      : emoji[2]

  playerHistoryItem.textContent = playerTextContent

  playerHistoryItem.classList.add('player-history')
  playerHistoryContainer.prepend(playerHistoryItem)

  const computerTextContent =
    computerPick === 'rock'
      ? emoji[0]
      : computerPick === 'paper'
      ? emoji[1]
      : emoji[2]

  computerHistoryItem.textContent = computerTextContent
  computerHistoryItem.classList.add('computer-history')
  computerHistoryContainer.prepend(computerHistoryItem)

  if (isPlayerWin) {
    playerHistoryItem.classList.add('win-history')
    playerWinCount.textContent = parseInt(playerWinCount.textContent) + 1
    playerWinCount.classList.add('new-win-count')
  } else {
    computerHistoryItem.classList.add('win-history')
    computerWinCount.textContent = parseInt(computerWinCount.textContent) + 1
    computerWinCount.classList.add('new-win-count')
  }
}

function deleteExtraHistoryItem() {
  const playerHistoryItems = document.getElementsByClassName('player-history')
  const computerHistoryItems =
    document.getElementsByClassName('computer-history')

  if (playerHistoryItems.length > 5) {
    playerHistoryContainer.removeChild(
      playerHistoryItems[playerHistoryItems.length - 1]
    )
  }
  if (computerHistoryItems.length > 5) {
    computerHistoryContainer.removeChild(
      computerHistoryItems[computerHistoryItems.length - 1]
    )
  }
}
