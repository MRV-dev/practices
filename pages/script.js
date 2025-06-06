function Play(playerMove){
  const computerMove = pickComputerMove()
  let result = ''
  let memeImg = ''


  

  if(playerMove === 'rock'){
    if(computerMove === 'rock' ){
      result = 'Tie.';
      memeImg = 'assets/Epic-Handshake.jpg'
    }
    else if(computerMove === 'paper'){
      result = 'You Lose.';
      memeImg = 'assets/Time.gif'
    }
    else if(computerMove === 'scissors'){
      result = 'You Win.';
      memeImg = 'assets/win.jpg'
    }
  }
  else if(playerMove === 'paper'){
    if(computerMove === 'rock' ){
      result = 'You Win.';
      memeImg = 'assets/win.jpg'
    }
    else if(computerMove === 'paper'){
      result = 'Tie.';
      memeImg = 'assets/Epic-Handshake.jpg'
    }
    else if(computerMove === 'scissors'){
      result = 'You Lose.';
      memeImg = 'assets/Time.gif'
    }
  }
  else if(playerMove === 'scissors'){
    if(computerMove === 'rock' ){
      result = 'You Lose.';
      memeImg = 'assets/Time.gif'
    }
    else if(computerMove === 'paper'){
      result = 'You Win.';
      memeImg = 'assets/win.jpg'
    }
    else if(computerMove === 'scissors'){
      result = 'Tie.';
      memeImg = 'assets/Epic-Handshake.jpg'
    }
  }



  if(memeImg.includes('Epic-Handshake.jpg')){
    imgHandshake = 'width: 200px; display: block;'
  }



  const Result = document.querySelector('.results')
  Result.innerHTML = `<div class="result-overlay" style="text-align: center;">
  <img src="${memeImg}" style="${imgHandshake}">
  <p class="G-result">you picked ${playerMove}. computer picked ${computerMove}. ${result}</p>
  </div>`
  
  setTimeout(()=>{
    Result.innerHTML = ''
  }, 2000)
}



function pickComputerMove(){
  const randomNumber = Math.random()
  let computerMove = ''

  if(randomNumber >= 0 && randomNumber < 1 / 3 ){
    computerMove = 'rock'
  }
  else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3){
    computerMove = 'paper'
  }
  else if(randomNumber >= 2 / 3 && randomNumber < 1){
    computerMove = 'scissors'
  }

  return computerMove
}