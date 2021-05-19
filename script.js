document.addEventListener('DOMContentLoaded', () => {
  const timeLeftDisplay = document.querySelector('#time-left')
  const startBtn = document.querySelector('#button')
  let timeLeft = 60
  // Function to set the count down once the button is clicked
  function countDown () {
    setInterval (function() {
      if (timeLeft <= 0) {
        clearInterval(timeLeft = 0)
      }
      timeLeftDisplay.innerHTML = timeLeft
      timeLeft -= 1
    }, 1000)
  }
  startBtn.addEventListener('click',countDown)
})

// Loop to hide images
function toggle_visibility() {
  let images = ['Knight1','Painting2','Sword3','Horse4','Pot5','Wizard6']
  for (i of images) {
    let e = document.getElementById(i)
  if(e.style.display == 'block')
    e.style.display = 'none'
  else
    e.style.display = 'block'
  }
}

function toggle_visibility(id) {
  let e = document.getElementById(id)
  if(e.style.display == 'none')
    e.style.display = 'block'
  else
    e.style.display = 'none'
}
