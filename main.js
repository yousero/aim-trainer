
/**
 * Aim Trainer <https://yousero.github.io/aim-trainer/>
 * @author yousero yousero.art@gmail.com
 * @version 0.0.1
 */

const canvas = document.getElementById('canvas')

canvas.height = 480
canvas.width = 720

const ctx = canvas.getContext('2d')

const background = {
  color: '#f1f1f1',
  draw() {
    ctx.fillStyle = this.color
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }
}

background.draw()

const circle = {
  x: 320,
  y: 180,
  radius: 40,
  color: '#d0d0d0',
  draw() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.fillStyle = this.color
    ctx.fill()
  }
}

circle.draw()

canvas.addEventListener('click', function (e) {
  const bounding = canvas.getBoundingClientRect()
  const x = e.clientX - bounding.left
  const y = e.clientY - bounding.top
  const pixel = ctx.getImageData(x, y, 1, 1)
  const data = pixel.data

  const rgbColor = `rgb(${data[0]} ${data[1]} ${data[2]} / ${data[3] / 255})`

  if (rgbColor == 'rgb(208 208 208 / 1)') {
    background.draw()
    
    circle.x = Math.min(
      Math.max(canvas.width * Math.random(), circle.radius), 
      canvas.width - circle.radius)
    circle.y = Math.min(
      Math.max(canvas.height * Math.random(), circle.radius), 
      canvas.height - circle.radius)
    circle.draw()
  }
}, false)
