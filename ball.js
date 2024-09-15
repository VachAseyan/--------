import { canvas, ctx, getRandomColor, getRandomNumber } from "./tools.js";
export class Ball {
    x = getRandomNumber(0, 1100)
    y = getRandomNumber(0, 550)
    r = 20
    col = getRandomColor()
    dx = getRandomNumber(-5, 5)
    dy = getRandomNumber(-5, 5)
    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.col
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
        ctx.fill()
        ctx.closePath()
    }
    move() {
        this.x += this.dx
        this.y += this.dy
        if (this.x > canvas.width || this.x < 0) {
            this.dx = -this.dx
        }
        if (this.y > canvas.height || this.y < 0) {
            this.dy = -this.dy
        }
        this.draw()
    }
}