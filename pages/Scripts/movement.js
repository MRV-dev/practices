

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext("2d")

// let vxl = 0;
// let vxr = 0;
let x = 0
let y = 0
let vxr = 0;
let vxl = 0;
let vyu = 0;
let vyd = 0;

const bullets = []

function update(){
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  x += vxr + vxl
  y += vyu + vyd

  
  ctx.fillStyle = 'red'
  ctx.fillRect(x, y, 50, 50)

  for(let i = 0; i < bullets.length; i++){
    bullets[i].y -= 10 
    ctx.fillRect(bullets[i].x, bullets[i].y, 5, 10)


    if(bullets[i].y < 0){
      bullets.splice(i, 1)
      i--
    }
  }

  requestAnimationFrame(update)
}

update()



addEventListener("keydown", function(e){
  if (e.code == 'KeyD' || e.code == 'ArrowRight') vxr = 6;
  if (e.code == 'KeyA' || e.code == 'ArrowLeft') vxl = -6;
  if (e.code == 'KeyW' || e.code == 'ArrowUp') vyu = -6;
  if (e.code == 'KeyS' || e.code == 'ArrowDown') vyd = 6;
  // console.log(e.code)

  if(e.code == 'Space'){
    bullets.push({
      x: x + 22.5,
      y: y,
    })
  }
})

addEventListener("keyup", function(e){
  if (e.code == 'KeyD' || e.code == 'ArrowRight') vxr = 0;
  if (e.code == 'KeyA' || e.code == 'ArrowLeft') vxl = 0;
  if (e.code == 'KeyW' || e.code == 'ArrowUp') vyu = 0;
  if (e.code == 'KeyS' || e.code == 'ArrowDown') vyd = 0;
})