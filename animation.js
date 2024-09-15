import { Ball } from "./ball.js";
import { canvas, ctx } from "./tools.js";
export class Animation {
    gndakner = new Array(200).fill(null).map(e => new Ball())

    start() {
        this.id = requestAnimationFrame(() => this.run())
    }
    run() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.gndakner.forEach(elm => elm.move())
        this.id = requestAnimationFrame(() => this.run())
    }
}